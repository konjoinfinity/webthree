import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import { fetchData } from "../data/dataActions";

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const connect = (nft) => {
  return async (dispatch) => {
    dispatch(connectRequest());
    let abiResponse = {};
    let abi = {};
    let configResponse = {};
    // eslint-disable-next-line
    if (nft == false) {
      abiResponse = await fetch("/config/abi.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      abi = await abiResponse.json();
      configResponse = await fetch("/config/config.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
    } else {
      abiResponse = await fetch("/config/pixelabi.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      abi = await abiResponse.json();
      configResponse = await fetch("/config/pixelconfig.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
    }
    const CONFIG = await configResponse.json();
    console.log(CONFIG);
    console.log("json is loaded");
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      console.log("metamask is installed");
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const networkId = await ethereum.request({
          method: "net_version",
        });
        console.log(networkId);
        console.log(CONFIG.NETWORK.ID);
        // eslint-disable-next-line
        if (networkId == CONFIG.NETWORK.ID) {
          console.log("network ids match");
          const SmartContractObj = new Web3EthContract(
            abi,
            CONFIG.CONTRACT_ADDRESS
          );
          console.log(SmartContractObj);
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );
          // Add listeners start
          ethereum.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
          console.log("wallet connection success");
        } else {
          dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME} - MATIC.`));
          const chId = Web3.utils.toHex("137");
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: chId }], // chainId must be in hexadecimal numbers
          });
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          const networkId = await ethereum.request({
            method: "net_version",
          });
          // eslint-disable-next-line
          if (networkId == CONFIG.NETWORK.ID) {
            const SmartContractObj = new Web3EthContract(
              abi,
              CONFIG.CONTRACT_ADDRESS
            );
            dispatch(
              connectSuccess({
                account: accounts[0],
                smartContract: SmartContractObj,
                web3: web3,
              })
            );
            // Add listeners start
            ethereum.on("accountsChanged", (accounts) => {
              dispatch(updateAccount(accounts[0]));
            });
            // ethereum.on("chainChanged", () => {
            //   window.location.reload();
            // });
            // Add listeners end
            console.log("switched to MATIC network");
          } else {
            dispatch(connectFailed("Unable to connect to MATIC network"));
          }
        }
      } catch (err) {
        dispatch(connectFailed(err.message));
        console.log(err);
      }
    } else {
      dispatch(
        connectFailed(
          "Install the Metamask browser extension or use the Metamask app browser."
        )
      );
      setTimeout(function () {
        window.location.replace(
          "https://metamask.app.link/dapp/toxicbaebeemint.reautydao.io/"
        );
      }, 3000);
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
