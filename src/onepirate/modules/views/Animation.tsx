import React from "react";
import "./AnimationStyles.css";
import { motion, Variants } from "framer-motion";
import Typography from "../components/Typography";

interface Props {
  baebee: string;
  title: string;
  desc: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const secCardVariants: Variants = {
    offscreen: {
      y: 100
    },
    onscreen: {
      y: 0,
      rotate: 10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };


function Card({ baebee, title, desc }: Props) {
  return (
    <motion.div key={baebee}
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.9 }}>
      <motion.div className="card" variants={cardVariants}>
        <img style={{maxHeight: "90%", maxWidth: "90%"}} src={baebee} alt="baebee"/>
      </motion.div>
      <motion.div className="card" variants={secCardVariants}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center"}}>
      <Typography style={{maxWidth: "100%", fontSize: "2.5vh", paddingBottom: "8%"}}>{title}</Typography>
        <Typography style={{maxWidth: "75%", fontSize: "1.3vh"}}>{desc}</Typography>
        </div>
      </motion.div>
    </motion.div>
  );
}

const baebees: [string, string, string][] = [
  [require('./Kid-transformed.webp'), "Pure Baebee","Baebee wishes the world full of love, purity, and sincerity, calling the beauty stakeholders should build a trustworthy beauty community in web3, share authentic information, read reviews, and trustful marketing; let's become a kid live in a pure beauty world."],
  [require('./Leaf-transformed.webp'),"Vegan Baebee","We are supporting vegan beauty,  the absence of animal ingredients, while cruelty-free refers to a product that doesn't test on animals; Vegan Baebee is on behalf of our Reauty Community to promote the Cruelty-Free concept!"],
  [require('./Flower-transformed.webp'),"Natural Baebee", "We are calling nature beauty to become the trend again, The natural beauty does not need to be achieved by doing or wearing something (performing plastic surgery, wearing makeup, getting a particular style). It can be simply applied to whatever in nature, including women; even when we offend it naturally, we celebrate the natural beauty with all!"],
  [require('./Rainbow-transformed.webp'),"LGBTQ+ Baebee", "Baebee believes the beauty community is an open, inclusive, and diverse place where everyone is welcome.  Live true to yourself and be yourself in our transparent and inclusive beauty community."],
  [require('./Fish-transformed.webp'), "Ocean Baebee", "Blue presents the ocean; we need clean water to produce the safety beauty product and create a clean, free, and no-contaminated water environment with Baebee!"],
  [require('./Cat-transformed.webp'),"Happy Baebee", "Baebee wishes to bring joy into the world, and music is the way to deliver happy energy for everyone! Join Beabee's happy world and enjoy the music, joy, and blessings together!"]
];


export default function Animation() {
  return baebees.map(([baebee, title, desc]) => (
    <div className="card-display" style={{backgroundColor: "#FEF7E9"}} key={title}>
    <Card baebee={baebee} title={title} desc={desc} key={title} />
    </div>
  ));
}
