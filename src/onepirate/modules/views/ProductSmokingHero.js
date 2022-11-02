import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}>
      <a style={{textDecoration: "none"}} href="https://reautydao.io/about/">
      <br /> <br />
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}>
        <Typography variant="h4" component="span">
          Questions? Check out our FAQ.
        </Typography>
      </Button>
      </a>
      <br /><br /><br /> <br />
      <Box
        component="img"
        src="https://reautydao.io/wp-content/uploads/2022/10/Group-1444.png"
        alt="buoy"
        sx={{ width: "20%" }}
      />
      <br /> <br />
    </Container>
  );
}

export default ProductSmokingHero;
