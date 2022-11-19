import * as React from 'react';
import { Suspense } from 'react';
import ProductHero from './modules/views/ProductHero';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import Typography from './modules/components/Typography';

const ProductValues = React.lazy(() => import('./modules/views/ProductValues'));
const Animation = React.lazy(() => import('./modules/views/Animation.tsx'));
const Specs = React.lazy(() => import('./modules/views/Specs'));
const ProductHowItWorks = React.lazy(() => import('./modules/views/ProductHowItWorks'));
const ProductCategories = React.lazy(() => import('./modules/views/ProductCategories'));
const ProductCTA = React.lazy(() => import('./modules/views/ProductCTA'));
const ProductSmokingHero = React.lazy(() => import('./modules/views/ProductSmokingHero'));
const AppFooter = React.lazy(() => import('./modules/views/AppFooter'));
const Footer = React.lazy(() => import('./modules/views/Footer'));


function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <Suspense fallback={<div>Loading...</div>}>
      <ProductValues />
      </Suspense>
      <div style={{backgroundColor: "#FEF7E9", padding: "5%"}}>
      <Typography variant="h4" marked="center" align="center" component="h2">
    Meet The Beauty Baebees
  </Typography>
  </div>
  <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"center", alignItems:"center", marginBottom: "10vh"}}>
  <Suspense fallback={<div>Loading...</div>}>
  <Animation />
  </Suspense>
  </div>
  <Suspense fallback={<div>Loading...</div>}>
  <Specs />
  </Suspense>
  <Suspense fallback={<div>Loading...</div>}>
      <ProductHowItWorks />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      <ProductCategories />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      <ProductCTA />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      <ProductSmokingHero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      <AppFooter />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      <Footer />
      </Suspense>
    </React.Fragment>
  );
}

export default withRoot(Index);
