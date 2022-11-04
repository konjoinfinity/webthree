import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '../components/Typography';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link style={{fontSize: "2vh"}} color="inherit" href="https://reautydao.io">
        ReautyDAO
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light', height: "15vh" }}>
      <div flex={1} style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                  padding: "2vh"
              }}>
              
                <Box component="a" href="https://mui.com/"  style={{paddingLeft: "3vw"}}>
                  <img
                    src="https://img.icons8.com/ios-filled/344/facebook-new.png"
                    alt="Facebook"
                    style={{height: "5vh"}}
                  />
                </Box>
                <Box component="a" href="https://twitter.com/MUI_hq">
                  <img
                    src="https://img.icons8.com/ios-filled/344/twitter.png"
                    alt="Twitter"
                    style={{height: "5vh"}}
                  />
                </Box>
                <Box component="a" href="https://twitter.com/MUI_hq">
                  <img
                    src="https://img.icons8.com/ios-filled/344/instagram-new--v1.png"
                    alt="Instagram"
                    style={{height: "5vh"}}
                  />
                </Box>
                <Box component="a" href="https://twitter.com/MUI_hq" style={{paddingRight: "27vw"}}>
                  <img
                    src="https://img.icons8.com/ios-filled/344/discord-logo.png"
                    alt="Discord"
                    style={{height: "5vh"}}
                  />
                </Box>
                <Box style={{paddingRight: "20vw"}}>
                <Copyright />
                </Box>
            <Box style={{paddingRight: "1vw"}}>
            <Typography variant="h6" marked="left" gutterBottom style={{fontSize: "2vh"}}>
              Legal
            </Typography>
            </Box>
            <Box style={{paddingRight: "1vw"}}>
                <Link style={{fontSize: "2vh"}} href="/premium-themes/onepirate/terms/">Terms</Link>
        </Box>
              <Box>
                <Link style={{fontSize: "2vh"}} href="/premium-themes/onepirate/privacy/">Privacy</Link>
              </Box>
              </div>
              </Typography>
  );
}
