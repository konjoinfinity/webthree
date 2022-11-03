import * as React from 'react';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import NFT from "./NFT"

const backgroundImage =
  'https://reautydao.io/wp-content/uploads/baebee.png';

export default function ProductHero() {
  return (
    <div>
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority" />

      <Typography color="inherit" align="center" variant="h2" marked="center">
        Beauty Baebee NFTs
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Mint your Baebee today!
      </Typography>
      <NFT />
      <Typography variant="body2" color="inherit"  marked="center" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
      
    </div>
  );
}
