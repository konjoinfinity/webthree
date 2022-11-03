import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import Typography from "../components/Typography";
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

let txreceipt = "";

function NFT() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNFT, setClaimingNFT] = useState(false);
  const [feedback, setFeedback] = useState(
    `Click to mint your Beauty Baebee NFT`
  );
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let contractAddress = CONFIG.CONTRACT_ADDRESS;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log(CONFIG.CONTRACT_ADDRESS);
    console.log(contractAddress);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNFT(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: contractAddress,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNFT(false);
      })
      .then((receipt) => {
        console.log(receipt);
        txreceipt = receipt;
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it ==> `
        );
        setClaimingNFT(false);
        dispatch(fetchData(blockchain.account));
        console.log(blockchain);
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockchain.account]);

  return (
    <div>
      {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
        <>
          <Typography
            style={{
              textAlign: "center",
              color: "var(--accent-text)",
            }}
          >
            The sale has ended.
          </Typography>
          <Typography
            style={{
              textAlign: "center",
              color: "var(--accent-text)",
            }}
          >
            You can still find {CONFIG.NFT_NAME} on
          </Typography>
          <br />
          <a rel={"nofollow"} href={CONFIG.MARKETPLACE_LINK}>
            {CONFIG.MARKETPLACE}
          </a>
        </>
      ) : (
        <>
          <br />
          <br />
          {blockchain.account === "" || blockchain.smartContract === null ? (
            <div ai={"center"} jc={"center"}>
              <br />
              <Button variant="contained"
              color="secondary"
              size="large"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(connect());
                  getData();
                }}
              >
                Connect Your Wallet
              </Button>
              {blockchain.errorMsg !== "" ? (
                <>
                  <br />
                  <Typography
                    style={{
                      textAlign: "center",
                      color: "var(--accent-text)",
                    }}
                  >
                    {blockchain.errorMsg}
                  </Typography>
                </>
              ) : null}
            </div>
          ) : (
            <>
              <Typography>
                {feedback}
                {txreceipt !== "" ? (
                  <a
                    href={`https://opensea.io/assets/matic/0x68e5167252b534ad3a50d559ab61ef6b84e1ee09/${txreceipt.events.Transfer.returnValues.tokenId}`}
                    rel="nofollow"
                  >
                    Opensea
                  </a>
                ) : (
                  ""
                )}
              </Typography>
              <br />
               {/* eslint-disable-next-line */}
              <div style={{alignItems: "center", justifyContent: "center", flexDirection: "row", display: "flex", justifyContent: "space-evenly"}}>
                <button
                  style={{ padding: "1.5em"  }}
                  disabled={claimingNFT ? true : false}
                  onClick={(e) => {
                    e.preventDefault();
                    decrementMintAmount();
                  }}>
                  <RemoveIcon />
                  </button>
                <Typography
                  style={{
                    textAlign: "center",
                    color: "var(--primary-text)",
                    fontSize: "25px",
                  }}
                >
                  {mintAmount}
                </Typography>
                <button
                style={{ padding: "1.5em" }}
                  disabled={claimingNFT ? true : false}
                  onClick={(e) => {
                    e.preventDefault();
                    incrementMintAmount();
                  }}
                >
                  <AddIcon />
                </button>
              </div>
              <br />
              <div style={{alignItems: "center", justifyContent: "center", flexDirection: "row", display: "flex"}}>
                <Button variant="contained"
              color="secondary"
              size="large"
                  disabled={claimingNFT ? true : false}
                  onClick={(e) => {
                    e.preventDefault();
                    claimNFTs(false);
                    getData();
                  }}
                >
                  {claimingNFT ? "MINTING..." : `MINT - ${25*mintAmount} MATIC`}
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default NFT;
