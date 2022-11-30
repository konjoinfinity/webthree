import * as React from 'react';
import Typography from '../components/Typography';

export default function AppFooter() {
  return (
    <Typography
      data-testid="footer"
      component="footer"
      sx={{ height: "5vh" }}
      style={{
      background: `radial-gradient(circle, rgba(238,174,202,1) 0%, #FFAB9C 100%)`}}>
      <div data-testid="footerdiv" style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "row",
                  justifyContent: "space-evenly",
                  padding: "1vh"
              }}>
              </div>
              </Typography>
  );
}
