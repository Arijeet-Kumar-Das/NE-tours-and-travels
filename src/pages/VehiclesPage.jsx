import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import SwiftDezire from "../assets/Swift Dezire.jpg";
import Entiga from "../assets/Entiga.jpg";
import Innova from "../assets/Innova.jpg";
import Traveller from "../assets/traveller.jpg";
import React from "react";
import Footer from "../components/Footer";

const VehiclesPage = () => {
  return (
    <div>
      <Box p={5}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontFamily: "Source Sans Pro" }}
        >
          Book Your Vehicle
        </Typography>
        <Box
          sx={{ height: "5px", width: "130px", backgroundColor: "#ED7626" }}
        ></Box>

        <Grid container spacing={2} sx={{ marginTop: "50px" }}>
          <Grid item md={4} sm={6} xs={12}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  p: 2,
                  gap: 2,
                  border: "2px solid black",
                }}
              >
                <Box
                  sx={{
                    width: "280px",
                    height: "200px",

                    p: 2,
                  }}
                >
                  <img src={SwiftDezire} width="100%" height="100%" alt="" />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold  " }}>
                  Maruti Swift Dzire
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Typography variant="p">
                    Seating capacity : upto 4 passengers
                  </Typography>
                  <Typography variant="p">
                    Charge per day : Rs 4500/-
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#3AB7D9",
                    border: "2px solid #3AB7D9",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#3AB7D9",
                      border: "2px solid #3AB7D9",
                    },
                  }}
                >
                  Book Now
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  p: 2,
                  gap: 2,
                  border: "2px solid black",
                }}
              >
                <Box
                  sx={{
                    width: "280px",
                    height: "200px",

                    p: 2,
                  }}
                >
                  <img src={Entiga} width="100%" height="100%" alt="" />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold  " }}>
                  Maruti Entiga
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Typography variant="p">
                    Seating capacity : upto 6 passengers
                  </Typography>
                  <Typography variant="p">
                    Charge per day : Rs 5500/-
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#3AB7D9",
                    border: "2px solid #3AB7D9",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#3AB7D9",
                      border: "2px solid #3AB7D9",
                    },
                  }}
                >
                  Book Now
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  p: 2,
                  gap: 2,
                  border: "2px solid black",
                }}
              >
                <Box
                  sx={{
                    width: "280px",
                    height: "200px",

                    p: 2,
                  }}
                >
                  <img src={Innova} width="100%" height="100%" alt="" />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold  " }}>
                  Toyota Innova Crysta
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Typography variant="p">
                    Seating capacity : upto 6 passengers
                  </Typography>
                  <Typography variant="p">
                    Charge per day : Rs 6500/-
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#3AB7D9",
                    border: "2px solid #3AB7D9",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#3AB7D9",
                      border: "2px solid #3AB7D9",
                    },
                  }}
                >
                  Book Now
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  p: 2,
                  gap: 2,
                  border: "2px solid black",
                }}
              >
                <Box
                  sx={{
                    width: "280px",
                    height: "200px",

                    p: 2,
                  }}
                >
                  <img src={Traveller} width="100%" height="100%" alt="" />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold  " }}>
                  Traveller
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Typography variant="p">
                    Seating capacity : 14 passengers
                  </Typography>
                  <Typography variant="p">
                    Charge per day : Rs 7500/-
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Typography variant="p">
                    Seating capacity : 26 passengers
                  </Typography>
                  <Typography variant="p">
                    Charge per day : Rs 9000/-
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#3AB7D9",
                    border: "2px solid #3AB7D9",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#3AB7D9",
                      border: "2px solid #3AB7D9",
                    },
                  }}
                >
                  Book Now
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </div>
  );
};

export default VehiclesPage;
