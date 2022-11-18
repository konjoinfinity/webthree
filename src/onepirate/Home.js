import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import ProductHowItWorks from './modules/views/ProductHowItWorks';
import ProductCTA from './modules/views/ProductCTA';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import Animation from './modules/views/Animation.tsx';
import Typography from './modules/components/Typography';
import Specs from "./modules/views/Specs"
import Footer from './modules/views/Footer';


function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <div style={{backgroundColor: "#FEF7E9", padding: "5%"}}>
      <Typography variant="h4" marked="center" align="center" component="h2">
    Meet The Beauty Baebees
  </Typography>
  </div>
  <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"center", alignItems:"center", marginBottom: "10vh"}}>
  <Animation />
  </div>
  <Specs />
      <ProductHowItWorks />
      <ProductCategories />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Index);
