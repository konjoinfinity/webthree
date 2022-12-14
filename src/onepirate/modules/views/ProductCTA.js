import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

function ProductCTA() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container data-testid="cta" component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container role="container">
        <Grid role="grid" item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
          data-testid="box1"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: '#FFAB9C',
              py: 8,
              px: 3,
            }}
          >
            <Box data-testid="form" component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                Keep Up With Current Trends
              </Typography>
              <Typography variant="h5">
              Join the ReautyDAO Community today, get our latest news, insights and info about our ReautyCoin, Beabee NFTs, ReautyDAO and more.
              </Typography>
              <TextField
                noBorder
                placeholder="Your email"
                variant="standard"
                type="email"
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              >
                Keep me updated
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
        data-testid="grid2"
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
          data-testid="box2"
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          />
          <Box
            component="img"
            src="https://i.seadn.io/gae/bFI6oyaPNfB7qmUAx4eWaT0fHh_oc6TMKCx3XsAxP47rNU61zH6YBG7Qhz81Oiy7mMXswMzX-82D8C3t6c1Fbz25vVPYPKmrSPCjxA?auto=format&w=1000"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
      data-testid="snack"
        open={open}
        closeFunc={handleClose}
        message="Welcome and thank you for joining the ReautyDAO community! We send our insights newsletter weekly, make sure to check your spam folder."
      />
    </Container>
  );
}

export default ProductCTA;
