import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import travelPotrait from "../assets/travel-potrait.png";
import cardImage1 from "../assets/card-image-1.jpg";
import cardImage2 from "../assets/card-image-2.jpg";
import cardImage3 from "../assets/card-image-3.jpg";
import cardImage4 from "../assets/card-image-4.jpg";
import cardImage5 from "../assets/card-image-5.jpg";

import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import dest1 from "../assets/TD-Shillong.jpeg";
import dest2 from "../assets/TD-Cherrapunji.jpeg";
import dest3 from "../assets/TD-Dawki.jpeg";
import dest4 from "../assets/TD-Mawlynnong.jpeg";
import dest5 from "../assets/TD-Tawang.jpeg";
import dest6 from "../assets/TD-Bomdilla.jpeg";
import dest7 from "../assets/TD-Dirang.jpeg";
import dest8 from "../assets/TD-Kaziranga.jpeg";
import { Link as ScrollLink } from "react-scroll";

const HomePage = () => {
  const [value, setValue] = useState(true);

  const handleChange = () => {
    setValue(!value);
  };

  return (
    <div>
      <Box sx={{ p: { xs: "10px 30px", sm: "10px 50px" } }}>
        {/* Hero Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: { xs: "0px", md: "0px 70px" },
            alignItems: "center",
            marginTop: { xs: "100px", sm: "0px" },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", sm: "start" },
              gap: 3,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontSize: { sm: "30px", md: "50px" },
                textAlign: { xs: "center", sm: "start" },
                fontFamily: "fasthand",
              }}
            >
              Discover the Enchanting North East
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "15px", sm: "20px" },
                textAlign: { xs: "center", sm: "start" },
                fontFamily: "Source Sans Pro",
              }}
            >
              Embark on a Journey of Untamed Beauty and Cultural Wonders, Where
              Majestic Himalayan Peaks, Lush Tea Gardens, and Vibrant Indigenous
              Heritage Await Your Adventurous Spirit
            </Typography>

            <ScrollLink
              to="section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ED7626",
                  border: "2px solid #ED7626",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#ED7626",
                    border: "2px solid #ED7626",
                  },
                }}
              >
                DISCOVER NOW
              </Button>
            </ScrollLink>
          </Box>

          <Box>
            <Box
              sx={{
                width: { xs: "250px", sm: "250px", md: "320px" },
                height: { xs: "350px", sm: "400px", md: "480px" },
              }}
            >
              <img src={travelPotrait} alt="" width="100%" height="100%" />
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginTop: "100px" }} id="section">
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", fontFamily: "Source Sans Pro" }}
          >
            Top Tours
          </Typography>
          <Box
            sx={{ height: "4px", width: "80px", backgroundColor: "#ED7626" }}
          ></Box>

          {value ? (
            <Grid container spacing={3} sx={{ marginTop: "50px" }}>
              <Grid item md={4} sm={6} xs={12}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={cardImage1}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Mountainous terrains
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily: "Source Sans Pro" }}
                    >
                      "Conquer the rugged landscapes and misty peaks of
                      Northeast India, where every step unveils a breathtaking
                      vista of natural beauty."
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
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
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={cardImage2}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Waterfalls
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily: "Source Sans Pro" }}
                    >
                      "Immerse yourself in the symphony of cascading waters as
                      you discover the hidden gems of Northeast India's majestic
                      waterfalls."
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
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
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={cardImage3}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Wildlife tours
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily: "Source Sans Pro" }}
                    >
                      "Embark on a thrilling wildlife safari in Northeast India,
                      where encounters with exotic animals and vibrant birdlife
                      will leave you in awe."
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
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
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={3} sx={{ marginTop: "50px" }}>
              <Grid item md={4} sm={6} xs={12}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={cardImage4}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Boating
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily: "Source Sans Pro" }}
                    >
                      "Set sail on pristine waters, as you indulge in the
                      serenity and tranquility of boating amidst the picturesque
                      rivers and lakes of Northeast India."
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
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
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={cardImage5}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Camping
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily: "Source Sans Pro" }}
                    >
                      "Unwind amidst nature's embrace as you camp under the
                      starlit skies of Northeast India, creating memories of
                      peaceful solitude and adventure."
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
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
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          {value ? (
            <ScrollLink
              to="section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ED7626",
                  border: "2px solid #ED7626",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#ED7626",
                    border: "2px solid #ED7626",
                  },
                }}
                onClick={handleChange}
              >
                VIEW MORE
              </Button>
            </ScrollLink>
          ) : (
            <ScrollLink
              to="section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ED7626",
                  border: "2px solid #ED7626",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#ED7626",
                    border: "2px solid #ED7626",
                  },
                }}
                onClick={handleChange}
              >
                VIEW LESS
              </Button>
            </ScrollLink>
          )}
        </Box>

        <Box sx={{ marginTop: "100px" }} id="destinations">
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", fontFamily: "Source Sans Pro" }}
          >
            Top Destinations
          </Typography>
          <Box
            sx={{ height: "4px", width: "120px", backgroundColor: "#ED7626" }}
          ></Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              flexDirection: { xs: "column", sm: "row" },
              marginTop: "100px",
            }}
          >
            <Box
              sx={{
                width: { sm: "350px", md: "500px" },
                height: { sm: "200px", md: "300px" },
              }}
            >
              <img src={dest1} alt="" width="100%" height="100%" />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: { sm: "50%" },
                gap: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "30px", md: "40px" },

                  backgroundImage:
                    "linear-gradient(to right, #FFC107, #FF9800)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Kalam",
                }}
              >
                Shillong: "Nature's Paradise in the Clouds"
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Source Sans Pro",
                  fontSize: { xs: "15px", md: "20px" },
                }}
              >
                Nestled in the clouds, Shillong offers breathtaking landscapes,
                cascading waterfalls, and lush greenery that make it a haven for
                nature lovers and adventure enthusiasts alike.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginTop: "100px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              flexDirection: { xs: "column", sm: "row" },
              marginTop: "100px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: { sm: "50%" },
                gap: 2,
                order: { xs: 1, sm: -1 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "30px", md: "40px" },
                  backgroundImage:
                    "linear-gradient(to right, #FFC107, #FF9800)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Kalam",
                }}
              >
                Cherrapunji: "Abode of Eternal Rain and Lush Greenery"
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Source Sans Pro",
                  fontSize: { xs: "15px", md: "20px" },
                }}
              >
                Cherrapunji holds the record for being one of the wettest places
                on Earth, with stunning living root bridges that entwine nature
                and human engineering, creating an awe-inspiring sight for
                visitors.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { sm: "350px", md: "500px" },
                height: { sm: "350px", md: "500px" },
              }}
            >
              <img src={dest2} alt="" width="100%" height="100%" />
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginTop: "100px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              flexDirection: { xs: "column", sm: "row" },
              marginTop: "100px",
            }}
          >
            <Box
              sx={{
                width: { sm: "350px", md: "500px" },
                height: { sm: "200px", md: "300px" },
              }}
            >
              <img src={dest3} alt="" width="100%" height="100%" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: { sm: "50%" },
                gap: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "30px", md: "40px" },
                  backgroundImage:
                    "linear-gradient(to right, #FFC107, #FF9800)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Kalam",
                }}
              >
                Dawki: "Crystal Clear Waters and Underwater Wonderland"
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Source Sans Pro",
                  fontSize: { xs: "15px", md: "20px" },
                }}
              >
                Dawki entices travelers with its crystal-clear waters of the
                Umngot River, allowing them to witness the beauty of the
                underwater world while indulging in boating or simply soaking in
                the tranquil atmosphere.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginTop: "100px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              flexDirection: { xs: "column", sm: "row" },
              marginTop: "100px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: { sm: "50%" },
                gap: 2,
                order: { xs: 1, sm: -1 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "30px", md: "40px" },
                  backgroundImage:
                    "linear-gradient(to right, #FFC107, #FF9800)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Kalam",
                }}
              >
                Mawlynnong: "Asia's Cleanest Village"
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Source Sans Pro",
                  fontSize: { xs: "15px", md: "20px" },
                }}
              >
                Mawlynnong, renowned as Asia's cleanest village, showcases the
                harmonious blend of natural beauty and cleanliness with its
                manicured gardens, living root bridges, and a strong emphasis on
                environmental sustainability.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { sm: "350px", md: "500px" },
                height: { sm: "200px", md: "300px" },
              }}
            >
              <img src={dest4} alt="" width="100%" height="100%" />
            </Box>
          </Box>

          <Box sx={{ marginTop: "100px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                flexDirection: { xs: "column", sm: "row" },
                marginTop: "100px",
              }}
            >
              <Box
                sx={{
                  width: { sm: "350px", md: "500px" },
                  height: { sm: "200px", md: "300px" },
                }}
              >
                <img src={dest5} alt="" width="100%" height="100%" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  width: { sm: "50%" },
                  gap: 2,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "30px", md: "40px" },
                    backgroundImage:
                      "linear-gradient(to right, #FFC107, #FF9800)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontFamily: "Kalam",
                  }}
                >
                  Tawang: "The Spiritual Abode in the Himalayas"
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Source Sans Pro",
                    fontSize: { xs: "15px", md: "20px" },
                  }}
                >
                  Tawang, nestled amidst the mighty Himalayas, captivates
                  visitors with its ancient monasteries, serene lakes, and
                  panoramic views, offering a spiritual retreat and a gateway to
                  Tibetan Buddhist culture.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginTop: "100px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              flexDirection: { xs: "column", sm: "row" },
              marginTop: "100px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: { sm: "50%" },
                gap: 2,
                order: { xs: 1, sm: -1 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "30px", md: "40px" },
                  backgroundImage:
                    "linear-gradient(to right, #FFC107, #FF9800)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Kalam",
                }}
              >
                Bomdilla: "Serenity Amidst Rolling Hills"
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Source Sans Pro",
                  fontSize: { xs: "15px", md: "20px" },
                }}
              >
                Bomdilla enchants travelers with its serene ambiance, rolling
                hills, and picturesque landscapes. It is an ideal destination
                for rejuvenation, nature walks, and exploring the unique
                traditions of the Monpa tribe.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { sm: "350px", md: "500px" },
                height: { sm: "200px", md: "300px" },
              }}
            >
              <img src={dest6} alt="" width="100%" height="100%" />
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginTop: "100px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              flexDirection: { xs: "column", sm: "row" },
              marginTop: "100px",
            }}
          >
            <Box
              sx={{
                width: { sm: "350px", md: "500px" },
                height: { sm: "200px", md: "300px" },
              }}
            >
              <img src={dest7} alt="" width="100%" height="100%" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: { sm: "50%" },
                gap: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "30px", md: "40px" },
                  backgroundImage:
                    "linear-gradient(to right, #FFC107, #FF9800)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Kalam",
                }}
              >
                Dirang: "Valley of Hot Springs and Untouched Beauty"
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Source Sans Pro",
                  fontSize: { xs: "15px", md: "20px" },
                }}
              >
                Dirang allures visitors with its untouched natural beauty,
                snow-capped peaks, and rejuvenating hot springs, providing a
                tranquil escape amidst nature's bounty.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginTop: "100px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              flexDirection: { xs: "column", sm: "row" },
              marginTop: "100px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                width: { sm: "50%" },
                gap: 2,
                order: { xs: 1, sm: -1 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "30px", md: "40px" },
                  backgroundImage:
                    "linear-gradient(to right, #FFC107, #FF9800)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Kalam",
                }}
              >
                Kaziranga: "A Wildlife Wonderland"
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Source Sans Pro",
                  fontSize: { xs: "15px", md: "20px" },
                }}
              >
                Kaziranga National Park, a UNESCO World Heritage Site, is home
                to two-thirds of the world's one-horned rhinoceros population.
                It boasts diverse flora and fauna, including tigers, elephants,
                and vibrant birdlife, making it a paradise for wildlife
                enthusiasts.
              </Typography>
            </Box>
            <Box
              sx={{
                width: { sm: "350px", md: "500px" },
                height: { sm: "200px", md: "300px" },
              }}
            >
              <img src={dest8} alt="" width="100%" height="100%" />
            </Box>
          </Box>
        </Box>

        <Footer />
      </Box>
    </div>
  );
};

export default HomePage;
