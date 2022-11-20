import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
    height: '95vh',
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: "100vh",
          width: "100%"
        }}>
          <div
            style={{
              maxWidth: "60vh",
              maxHeight: "82vh",
              padding: "2%",
              backgroundColor: "#FEF7E9",
              opacity: 0.95,
              marginTop: "8vh",
              borderRadius: 5
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
          src={require("./bee.webp")}
          alt="Baebee"
          width="25%"
          height="25%"
        />
        <br /><br />
        {children}
        <br />
        <Box
          component="img"
          src={require("./downarrow.webp")}
          alt="arrow down"
          sx={{ height: "8%", width: "8%" }}
        />
        </div>
        </div>
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
