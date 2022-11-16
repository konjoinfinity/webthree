import * as React from "react";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import NFT from "./NFT";

const backgroundImage = require("./baebee.png");

export default function ProductHero() {

  return (
    <div>
      <ProductHeroLayout
        sxBackground={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "#7fc7d9",
          backgroundPosition: "center",
        }}
      >
        <img
          style={{ display: "none" }}
          src={backgroundImage}
          alt="increase priority"
        />
        <Typography
          color="inherit"
          align="center"
          variant="h2"
          marked="center"
          style={{ fontSize: "4vh" }}
        >
          Beauty Baebee NFTs
        </Typography>
        <Typography color="inherit" align="center" variant="h5">
          <br />
          Mint your Baebee today!
        </Typography>
        {/* eslint-disable-next-line */}
        {baebee == true ? <NFT /> : ""}
        <Typography
          variant="body2"
          color="inherit"
          marked="center"
          style={{ fontSize: "2vh", paddingTop: "1vh" }}
        >
          Discover the experience
        </Typography>
      </ProductHeroLayout>
    </div>
  );
}
