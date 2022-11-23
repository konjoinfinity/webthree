import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import { fetchData } from "../data/dataActions";

let accounts = {};
let networkId = {};

const getAcctNet = async() => {
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
  networkId = await ethereum.request({ method: "net_version" });
}

const connectMatic = () => {
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
  ethereum.on("accountsChanged", (accounts) => {
    dispatch(updateAccount(accounts[0]));
  })
}

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
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);
      try {
        getAcctNet();
        // eslint-disable-next-line
        if (networkId == CONFIG.NETWORK.ID) {
          connectMatic();
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });
        } else {
          dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME} - MATIC.`));
          const chId = Web3.utils.toHex("137");
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: chId }],
          });
          getAcctNet();
          // eslint-disable-next-line
          if (networkId == CONFIG.NETWORK.ID) {
            connectMatic();
          } else {
            dispatch(connectFailed("Connecting to the MATIC network..."));
            dispatch(connect());
            dispatch(connectFailed("Connected to POLYGON MATIC network"));
          }
        }
      } catch (err) {
        console.log(err)
        // eslint-disable-next-line 
        if (err.code){
        dispatch(connectFailed("Adding the POLYGON MATIC network to Metamask..."));
        const chId = Web3.utils.toHex("137");
        web3.currentProvider.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: `${chId}`,
            chainName: 'Polygon Mainnet',
            nativeCurrency: {
              name: "MATIC",
              symbol: "MATIC",
              decimals: 18
            },
            rpcUrls: [
              "https://polygon-rpc.com/",
              "https://rpc-mainnet.matic.network",
              "https://matic-mainnet.chainstacklabs.com",
              "https://rpc-mainnet.maticvigil.com",
              "https://rpc-mainnet.matic.quiknode.pro",
              "https://matic-mainnet-full-rpc.bwarelabs.com",
              "https://polygon-bor.publicnode.com"
            ],
            blockExplorerUrls: ['https://polygonscan.com']
            
          }]
        }).then(async() => {
          getAcctNet();
          connectMatic();
        })
        .catch((error) => {
          dispatch(connectFailed(`${error}`));
        }) 
      } else {
        dispatch(connectFailed(`${err.message}`));
      }
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
