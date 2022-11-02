import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Card from "@mui/material/Card";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

function ProductHeroLayout(props) {
  const { sxBackground, children } = props;

  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Card
            sx={{
              maxWidth: "50%",
              maxHeight: "50%",
              padding: "2%",
              backgroundColor: "#FEF7E9",
              opacity: 0.95
            }}>
              <div flex={1} style={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
              }}>
        <img
          src="https://reautydao.io/wp-content/uploads/2022/10/Group-1444.png"
          alt="Baebee"
          width="25%"
          height="25%"
        />
        <br /><br />
        {children}
        <br />
        <Box
          component="img"
          src="https://img.icons8.com/ios-filled/344/down-squared--v1.png"
          alt="arrow down"
          sx={{ height: "8%", width: "8%" }}
        />
        </div>
        </Card>
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'black',
            opacity: 0.4,
            zIndex: -1,
          }} />
        <Background sx={sxBackground} />
      </Container>
    </ProductHeroLayoutRoot>
  );
}

ProductHeroLayout.propTypes = {
  children: PropTypes.node,
  sxBackground: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default ProductHeroLayout;
