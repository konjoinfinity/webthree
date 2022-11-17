import * as React from "react";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Contract from "web3-eth-contract";
import Web3 from "web3";
import { ethers } from "ethers";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const { ethereum } = window;
Contract.setProvider(ethereum);
let web3 = new Web3(ethereum);
let provider = {};
if (window.ethereum && window.ethereum.isMetaMask) {
  provider = new ethers.providers.Web3Provider(window.ethereum);
}

let txreceipt = "";
let gasPrice = 0;
let lastBaseFeePerGas = 0;
let maxFeePerGas = 0;
let maxPriorityFeePerGas = 0;

const backgroundImage = require("./baebee.png");
const pixelImage = require("./pix.png");

export default function ProductHero() {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNFT, setClaimingNFT] = useState(false);
  const [show2Dmint, setShow2Dmint] = useState(true);
  const [showPixelmint, setShowPixelmint] = useState(true);
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

  const claimNFTs = async (a) => {
    let cost = 0;
    let contractAddress = "";
    console.log(a)
    // eslint-disable-next-line
    if (a == true) {
      cost = 100000000000000000000;
      contractAddress = "0xd588563aff5E99F3960735D6096CDB451edBB19A";
    } else {
      cost = CONFIG.WEI_COST;
      contractAddress = CONFIG.CONTRACT_ADDRESS;
    }
    // let cost = CONFIG.WEI_COST;
    // let gasLimit = CONFIG.GAS_LIMIT;
    let gasLimit = gasPrice;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit);
    setClaimingNFT(true);
    
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    console.log(abiResponse);
    const abi = await abiResponse.json();
    console.log(abi);
    var contract = new Contract(abi, CONFIG.CONTRACT_ADDRESS);
    try {
      await web3.eth
        .sendTransaction({
          from: blockchain.account,
          to: contractAddress,
          data: contract.methods.mint(mintAmount).encodeABI(),
          gasLimit: String(totalGasLimit),
          value: totalCostWei,
        })
        .once("error", (err) => {
          setFeedback(err.message);
          console.log(err);
          setClaimingNFT(false);
        })
        .then((receipt) => {
          console.log(receipt);
          txreceipt = "data";
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it ==> `
          );
          setClaimingNFT(false);
          dispatch(fetchData(blockchain.account));
          console.log(blockchain);
        });
    } catch (err) {
      console.log(err);
    }
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

  const getData = async () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
      setFeedback("Wallet connected, click 'MINT' to mint an NFT.");
    }
    // window.open("https://metamask.app.link/send/0x12E4c6b6Be904055FF15283C82bE1d941a427f7A@137?value=5e19");
    var isSafari = window.safari !== undefined;
    if (isSafari) console.log("Safari, yeah!");
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
    async function getFee() {
      if (window.ethereum && window.ethereum.isMetaMask) {
        let feeData = await provider.getFeeData();
        console.log(feeData);
        gasPrice = Number(
          String(web3.utils.toNumber(feeData.gasPrice._hex)).slice(0, -4)
        );
        lastBaseFeePerGas = Number(
          String(web3.utils.toNumber(feeData.lastBaseFeePerGas._hex)).slice(
            0,
            -4
          )
        );
        maxFeePerGas = Number(
          String(web3.utils.toNumber(feeData.maxFeePerGas._hex)).slice(0, -4)
        );
        maxPriorityFeePerGas = Number(
          String(web3.utils.toNumber(feeData.maxPriorityFeePerGas._hex)).slice(
            0,
            -4
          )
        );
        console.log(gasPrice);
        console.log(lastBaseFeePerGas);
        console.log(maxFeePerGas);
        console.log(maxPriorityFeePerGas);
      }
    }
    getFee();
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockchain.account]);
  return (
    <div>
      <ProductHeroLayout
        sxBackground={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "#7fc7d9",
          backgroundPosition: "center",
        }}
      >
        <img
          style={{ display: "none" }}
          src={backgroundImage}
          alt="increase priority"
        />
        <Typography
          color="inherit"
          align="center"
          variant="h2"
          marked="center"
          style={{ fontSize: "4vh" }}
        >
          Beauty Baebee NFTs
        </Typography>
        <Typography color="inherit" align="center" variant="h5">
          <br />
          Mint your Baebee today!
        </Typography>

        {/* eslint-disable-next-line */}
        {show2Dmint == true ? (
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
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <div ai={"center"} jc={"center"}>
                    <br />
                    <p>
                      {blockchain.errorMsg !== "" ? (
                        <div>{blockchain.errorMsg}</div>
                      ) : null}
                    </p>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect(false));
                        setShowPixelmint(false);
                        getData();
                      }}
                    >
                      Connect Your Wallet
                    </Button>
                  </div>
                ) : (
                  <>
                   <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
        color="info"
        icon={false}
          action={
            <IconButton
              aria-label="close"
              color="primary"
              size="small"
              onClick={() => {
                setOpen(false);
              }}>
              <CloseIcon fontSize="inherit" color="primary" />
            </IconButton>
          }
          sx={{ mb: 2, }}>
          {feedback !== "" ? <div>{feedback}</div> : ""}
                    {txreceipt !== "" ? (
                      <a
                        href={"https://opensea.io/collection/beauty-baebee-nft"}
                        rel="nofollow"
                      >
                        Opensea
                      </a>
                    ) : (
                      ""
                    )}
        </Alert>
      </Collapse>
    </Box>
                    <br />
                    {/* eslint-disable-next-line */}
                    <div
                      style={{
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexDirection: "row",
                        display: "flex",
                      }}
                    >
                      <Button
                      variant="contained"
                      color="primary"
                      size="large"
                        style={{ padding: "1.5em" }}
                        disabled={claimingNFT ? true : false}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        <RemoveIcon />
                      </Button>
                      <Typography
                        style={{
                          textAlign: "center",
                          color: "var(--primary-text)",
                          fontSize: "25px",
                        }}
                      >
                        {mintAmount}
                      </Typography>
                      <Button
                      variant="contained"
                      color="primary"
                      size="large"
                        style={{ padding: "1.5em" }}
                        disabled={claimingNFT ? true : false}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        <AddIcon />
                      </Button>
                    </div>
                    <br />
                    <div
                      style={{
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexDirection: "row",
                        display: "flex",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        disabled={claimingNFT ? true : false}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs(false);
                          getData();
                          setFeedback(`Minting your Beauty Baebee...`);
                        }}
                      >
                        {claimingNFT
                          ? "MINTING..."
                          : `MINT - ${50 * mintAmount} MATIC`}
                      </Button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        ) : (
          ""
        )}

        <Typography
          variant="body2"
          color="inherit"
          marked="center"
          style={{ fontSize: "2vh", paddingTop: "1vh" }}
        >
          Discover the experience
        </Typography>
      </ProductHeroLayout>
      <div
        style={{
          backgroundImage: `url(${pixelImage})`,
          backgroundPosition: "center",
          backgroundColor: "black",
          opacity: 0.9,
        }}
      >
        <img
          style={{ display: "none" }}
          src={pixelImage}
          alt="increase priority"
        />
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}
        >
          <div
            style={{
              maxWidth: "60vh",
              maxHeight: "82vh",
              padding: "2%",
              backgroundColor: "#FEF7E9",
              opacity: 0.95,
              marginTop: "8vh",
              borderRadius: 5,
            }}
          >
            <div
              flex={1}
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={require("./bee.png")}
                alt="Baebee"
                width="25%"
                height="25%"
              />
              <br />
              <br />
              <Typography
                color="inherit"
                align="center"
                variant="h2"
                marked="center"
                style={{ fontSize: "4vh" }}
              >
                Pixelated Beauty Baebee NFTs
              </Typography>
              <Typography color="inherit" align="center" variant="h5">
                <br />
                Mint your Pixelated Baebee today!
              </Typography>
              {/* eslint-disable-next-line */}
              {showPixelmint == true ? (
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
                      {blockchain.account === "" ||
                      blockchain.smartContract === null ? (
                        <div ai={"center"} jc={"center"}>
                          <br />
                          <p>
                            {blockchain.errorMsg !== "" ? (
                              <div>{blockchain.errorMsg}</div>
                            ) : null}
                          </p>
                          <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(connect(true));
                              setShow2Dmint(false);
                              getData();
                            }}
                          >
                            Connect Your Wallet
                          </Button>
                        </div>
                      ) : (
                        <>


<Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
        color={"info"}
        icon={false}
          action={
            <IconButton
              aria-label="close"
              color="primary"
              size="small"
              onClick={() => {
                setOpen(false);
              }}>
              <CloseIcon fontSize="inherit" color="primary" />
            </IconButton>
          }
          sx={{ mb: 2, }}>
                          {feedback !== ""
                            ? <div>{feedback}</div>
                            : ""}
                          {txreceipt !== "" ? (
                            <a
                              href={
                                "https://opensea.io/collection/beauty-baebee-nft"
                              }
                              rel="nofollow"
                            >
                              Opensea
                            </a>
                          ) : (
                            ""
                          )}
                          </Alert>
      </Collapse>
    </Box>
                          <br />
                          {/* eslint-disable-next-line */}
                          <div
                            style={{
                              alignItems: "center",
                              justifyContent: "space-evenly",
                              flexDirection: "row",
                              display: "flex",
                            }}
                          >
                            <Button
                            variant="contained"
                            color="primary"
                            size="large"
                              style={{ padding: "1.5em" }}
                              disabled={claimingNFT ? true : false}
                              onClick={(e) => {
                                e.preventDefault();
                                decrementMintAmount();
                              }}
                            >
                              <RemoveIcon />
                            </Button>
                            <Typography
                              style={{
                                textAlign: "center",
                                color: "var(--primary-text)",
                                fontSize: "25px",
                              }}
                            >
                              {mintAmount}
                            </Typography>
                            <Button
                            variant="contained"
                            color="primary"
                            size="large"
                              style={{ padding: "1.5em" }}
                              disabled={claimingNFT ? true : false}
                              onClick={(e) => {
                                e.preventDefault();
                                incrementMintAmount();
                              }}
                            >
                              <AddIcon />
                            </Button>
                          </div>
                          <br />
                          <div
                            style={{
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "row",
                              display: "flex",
                            }}
                          >
                            <Button
                              variant="contained"
                              color="secondary"
                              size="large"
                              disabled={claimingNFT ? true : false}
                              onClick={(e) => {
                                e.preventDefault();
                                claimNFTs(true);
                                getData();
                                setFeedback(`Minting your Pixelated Beauty Baebee...`);
                              }}
                            >
                              {claimingNFT
                                ? "MINTING..."
                                : `MINT - ${100 * mintAmount} MATIC`}
                            </Button>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              ) : (
                ""
              )}

              <Typography
                variant="body2"
                color="inherit"
                marked="center"
                style={{ fontSize: "2vh", paddingTop: "1vh" }}
              >
                Discover the experience
              </Typography>
              <br />
              <Box
                component="img"
                src="https://img.icons8.com/ios-filled/344/down-squared--v1.png"
                alt="arrow down"
                sx={{ height: "8%", width: "8%" }}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
