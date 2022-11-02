import * as React from 'react';
import ProductCategories from './onepirate/modules/views/ProductCategories';
import ProductSmokingHero from './onepirate/modules/views/ProductSmokingHero';
import AppFooter from './onepirate/modules/views/AppFooter';
import ProductHero from './onepirate/modules/views/ProductHero';
import ProductValues from './onepirate/modules/views/ProductValues';
import ProductHowItWorks from './onepirate/modules/views/ProductHowItWorks';
import ProductCTA from './onepirate/modules/views/ProductCTA';
import AppAppBar from './onepirate/modules/views/AppAppBar';
import withRoot from './onepirate/modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
