import * as React from 'react';
import Typography from '../components/Typography';
import PixelLayout from './PixelLayout';
import NFT from "./NFT"
import storage from "../views/redux/storage"

var display = storage.getState();

const backgroundImage =
  require('./pix.png')

export default function Pixel() {
    console.log(display)
  return (
    <div>
    <PixelLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9',
        backgroundPosition: 'center',
      }}>
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority" />
<Typography color="inherit" align="center" variant="h2" marked="center" style={{fontSize: "4vh"}}>
        Pixelated Beauty Baebee NFTs
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5">
          <br />
        Mint your Pixelated Baebee today!
      </Typography>
      {/* eslint-disable-next-line */}
      {display.show == "both" || "pixel" ? <NFT /> : ""}
      <Typography variant="body2" color="inherit"  marked="center" style={{fontSize: "2vh", paddingTop: "1vh"}}>
        Discover the experience
      </Typography>
      </PixelLayout>
    </div>
  );
}
