import React from "react";
import Navbar from "../components/Navbar";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const ContactPage = () => {
  return (
    <div>
      <Box p={5}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontFamily: "Source Sans Pro" }}
        >
          Contact Us
        </Typography>
        <Box
          sx={{ height: "5px", width: "100px", backgroundColor: "#ED7626" }}
        ></Box>

        <Box
          sx={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Source Sans Pro",
              fontWeight: "bold",
              fontSize: { xs: "30px", sm: "45px" },
              color: "#FF9800",
              fontFamily: "Kalam",
            }}
          >
            For booking your tour contact us on :{" "}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <LocalPhoneIcon />
              <Typography variant="h6" sx={{ fontFamily: "Source Sans Pro" }}>
                7896550347 / 8486500819
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <EmailIcon />
              <Typography variant="h6" sx={{ fontFamily: "Source Sans Pro" }}>
                netoursandtravels7@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </div>
  );
};

export default ContactPage;
