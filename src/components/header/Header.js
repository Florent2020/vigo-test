import React from "react";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Nav from "../layout/Nav";

function Header() {
  return (
    <div className="header">
      <Container>
        <AppBar position="static">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <CardMedia
                image={
                  "https://www.vigoiks.no/extension/site/design/site/images/logo_light.svg"
                }
              />
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <CardMedia
                image={
                  "https://www.vigoiks.no/extension/site/design/site/images/logo_light.svg"
                }
              />
            </Typography>

            <Nav />
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}

export default Header;
