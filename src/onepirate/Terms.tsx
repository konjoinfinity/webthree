import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Markdown from './onepirate/modules/components/Markdown';
import Typography from './onepirate/modules/components/Typography';
import AppAppBar from './onepirate/modules/views/AppAppBar';
import AppFooter from './onepirate/modules/views/AppFooter';
import withRoot from './onepirate/modules/withRoot';
import terms from './onepirate/modules/views/terms.md';

function Terms() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Terms
          </Typography>
          <Markdown>{terms}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Terms);
