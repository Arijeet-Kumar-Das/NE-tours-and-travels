import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <Box sx={{ marginTop: "100px" }}>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "50px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box sx={{ height: "100px", width: "130px" }}>
                <img src={logo} alt="" width="100%" height="100%" />
              </Box>
            </Link>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              <Typography variant="p">© 2023 NE Tours and Travels</Typography>
              <Typography variant="p" sx={{ fontSize: "13px" }}>
                All Rights Reserved
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { xs: "column", sm: "row" },
              marginTop: { xs: "50px", sm: "10px" },
              gap: { xs: 2, sm: 5 },
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="p"
                sx={{
                  "&:hover": { color: "#3AB7D9" },
                  cursor: "pointer",
                  color: "black",
                }}
                onClick={scrollToTop}
              >
                Home
              </Typography>
            </Link>

            <Link to="/vehicles" style={{ textDecoration: "none" }}>
              <Typography
                variant="p"
                sx={{
                  "&:hover": { color: "#3AB7D9" },
                  cursor: "pointer",
                  color: "black",
                }}
                onClick={scrollToTop}
              >
                Vehicles
              </Typography>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Typography
                variant="p"
                sx={{
                  "&:hover": { color: "#3AB7D9" },
                  cursor: "pointer",
                  color: "black",
                }}
                onClick={scrollToTop}
              >
                Contact Us
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
