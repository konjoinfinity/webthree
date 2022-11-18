import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function Specs() {
  return (
    <Box>
      <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14, textAlign: "center", paddingTop: "10vh" }}>
       NFT Specifications
        </Typography>
    <Box component="section" sx={{ display: 'flex', overflow: 'hidden', pb: "10vh" }}>
      <Container sx={{ display: 'flex', position: 'relative', mb: "10vh" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
          <Box component="img"
                  src={require('./nftw.webp')}
                  alt="graph"
                  sx={{ height: "25vh" }} />
                <Typography variant="h6" sx={{ my: 5, textAlign: "center" }}>
              How many NFTs?
              </Typography>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
              We developed 4000 2D Beauty Baebees, 1000 Pixelated Beauty Baebees, And 6 3D Limited Edition Beauty Baebees.
              </Typography>
                  </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
            <Box
                  component="img"
                  src={require('./currency.webp')}
                  alt="polygon"
                  sx={{ height: "25vh" }}
                />
                <Typography variant="h6" sx={{ my: 5 }}>
                Polygon ERC-721 NFT
              </Typography>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
              The Baebees NFT Contract that governs ownership is a standard ERC-721 compatible with any service or exchange. Purchasing a Beauty Baebee NFT costs 50 MATIC - POLYGON.
                       </Typography>
                  </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
            <Box
                  component="img"
                  src={require('./exchange.webp')}
                  alt="exchangeable"
                  sx={{ height: "25vh" }} />
                <Typography variant="h6" sx={{ my: 5 }}>
                NFT Utility
              </Typography>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
              Baebees NFTs are exchangeable for ReautyCoin (ERC-20 Token). We allow our NFT owner to convert their NFT To our ReautyCoin. Please check the <a href="https://reautydao.io" rel="dofollow">ReautyDAO page</a> to learn more.
               </Typography>
                  </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </Box>
  );
}

export default Specs;
