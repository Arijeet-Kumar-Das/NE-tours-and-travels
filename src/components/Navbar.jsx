import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import travelPotrait from "../assets/travel-potrait.png";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/newlogo.png";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation();

  const currentPath = location.pathname;

  const homePagePath = "/";

  const renderScrollLink = currentPath === homePagePath;

  return (
    <div>
      {/* Navigation Bar */}
      <Box
        sx={{
          padding: "20px 30px 0px 20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                height: { xs: "70px", md: "100px" },
                width: { xs: "70px", md: "100px" },
              }}
            >
              <img src={logo} alt="" width="100%" height="100%" />
            </Box>
          </Link>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              display: { xs: "none", sm: "flex" },
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
              >
                Home
              </Typography>
            </Link>

            {renderScrollLink && (
              <ScrollLink
                to="destinations"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Typography
                  variant="p"
                  sx={{
                    "&:hover": { color: "#3AB7D9" },
                    cursor: "pointer",
                    color: "black",
                  }}
                >
                  Destinations
                </Typography>
              </ScrollLink>
            )}
            <Link to="/vehicles" style={{ textDecoration: "none" }}>
              <Typography
                variant="p"
                sx={{
                  "&:hover": { color: "#3AB7D9" },
                  cursor: "pointer",
                  color: "black",
                }}
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
              >
                Contact Us
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Link to="/contact">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3AB7D9",
                  "&:hover": { backgroundColor: "#1492b5" },
                }}
                endIcon={<FlightTakeoffIcon />}
              >
                Book Now
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleClose} sx={{ color: "black" }}>
                Home
              </MenuItem>
            </Link>

            {renderScrollLink && (
              <ScrollLink
                to="destinations"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <MenuItem onClick={handleClose} sx={{ color: "black" }}>
                  Destinations
                </MenuItem>
              </ScrollLink>
            )}
            <Link to="/vehicles" style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleClose} sx={{ color: "black" }}>
                Vehicles
              </MenuItem>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <MenuItem onClick={handleClose} sx={{ color: "black" }}>
                Contact Us
              </MenuItem>
            </Link>
          </Menu>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
