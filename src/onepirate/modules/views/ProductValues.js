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

function ProductValues() {
  return (
    <Box sx={{ bgcolor: 'secondary.light' }}>
      <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14, textAlign: "center", paddingTop: "10vh" }}>
       Beauty Baebee NFT Series
        </Typography>
    <Box component="section" sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}>
      <Container sx={{ display: 'flex', position: 'relative', mb: "10vh" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={require('./cosmetics.webp')}
                alt="suitcase"
                sx={{ height: "25vh" }} />
              <Typography variant="h6" sx={{ my: 5, textAlign: "center" }}>
              Beauty Reimagined
              </Typography>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
              The "Toxic Baebee" NFT Series illustrated the "Toxic Side of Beauty". Reauty DAO is taking a stand against the misleading beauty culture, unhealthy practices, and harmful ingredients to reimagine the beauty industry with a decentralized Web3 community. 
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={require('./2562.webp')}
                alt="graph"
                sx={{ height: "25vh" }} />
              <Typography variant="h6" sx={{ my: 5, textAlign: "center" }}>
              Beauty Baebee NFTs
              </Typography>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
              The Beauty Baebee series illustrates the Reauty DAO mission and invites beauty lovers, LGBTQ+ groups, BIPOC owners and SME beauty content creators to build a new order in the beauty industry.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={require('./handnft.webp')}
                alt="clock"
                sx={{ height: "25vh" }} />
              <Typography variant="h6" sx={{ my: 5, textAlign: "center" }}>
                Unique NFTs
              </Typography>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
              Each unique Baebee is designed by our creative team and generated from a pool of more than 170 possible traits. These include but are not limited to expression, headwear, and clothing.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </Box>
  );
}

export default ProductValues;
