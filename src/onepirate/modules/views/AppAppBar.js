import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/data/dataActions";
import { connect } from "./redux/blockchain/blockchainActions";
import Typography from '../components/Typography';


function AppAppBar() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
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
    console.log(CONFIG.CONTRACT_ADDRESS)
  };

  useEffect(() => {
    getConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockchain.account]);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: "#FFAB9C" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            sx={{ fontSize: "3vh", paddingRight: "2vh" }}
          >
            {'Beauty Baebee NFTs'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          {blockchain.account === "" || blockchain.smartContract === null ? (
          <Button
        color="secondary"
        variant="contained"
        size="medium"
        onClick={(e) => {
          e.preventDefault();
          dispatch(connect());
          getData();
        }}>
           <Typography style={{fontSize: "1.3vh"}}>
        Connect Wallet
        </Typography>
      </Button>
          ) : (
      <Button
        color="secondary"
        variant="contained"
        size="medium">
          <Typography style={{fontSize: "1.3vh"}}>
        Connected to {blockchain.account ? blockchain.account.substring(0, 4) : ""}...{blockchain.account ? blockchain.account.substring(blockchain.account.length - 4) : ""}
        </Typography>
      </Button>
          )}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
