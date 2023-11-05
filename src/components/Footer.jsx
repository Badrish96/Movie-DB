// Footer.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Box bgcolor="primary.main" color="white" p={2}>
        <Container>
          <Typography variant="body2" align="center">
            upGrad Frontend Hackathon
          </Typography>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
