// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Movie DB
          </Typography>
          <Button color="inherit" component={Link} to="/new">
            New Releases
          </Button>
          <Button color="inherit" component={Link} to="/hot">
            What's Hot
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
