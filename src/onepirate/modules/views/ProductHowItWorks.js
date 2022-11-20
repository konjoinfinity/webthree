import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../components/Button';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

function ProductHowItWorks() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How to mint
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>1.</Box>
                <img src={require('./metamask.webp')}  alt={'Metamask'} style={{height: "11vh", width: "11vh", margin: "5vh"}} />
                <Typography variant="h5" align="center">
                  Connect your metamask wallet to the mint page and approve your wallet for interaction with the Baebee NFT website. If you don't have metamask installed, <a href="https://metamask.io/" rel="nofollow">click here.</a>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>2.</Box>
                <img src={require('./polygonlogo-transformed.webp')}  alt={'Polygon'} style={{height: "11vh", width: "11vh", margin: "5vh"}} />
                <Typography variant="h5" align="center">
                  Choose the number of NFTs you would like to mint, maximum 10 NFTs per transaction. Ensure you have enough <a href="https://www.coinbase.com/price/polygon"  rel="nofollow">MATIC - {'POLYGON'}</a> in your wallet and click "MINT".
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>3.</Box>
                <img src={require('./nft-100.webp')}  alt={'NFT'} style={{height: "11vh", width: "11vh", margin: "5vh"}} />
                <Typography variant="h5" align="center">
                  Wait for the minting transaction to confirm. Check your metamask wallet to view the status. Once confirmed, enjoy your newly minted Beauty Baebee!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          onClick={scrollToTop}
          sx={{ mt: 8, marginTop: "10vh" }}
        >
          Mint Your Baebee
        </Button>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
