import { Box, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

import VehiclesPage from "./pages/VehiclesPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <div>
      <CssBaseline />
      <Box
        className="blur"
        sx={{
          left: "60rem",
          zIndex: "-1",
          display: { xs: "none", md: "flex" },
        }}
      ></Box>
      <Box
        className="blur"
        sx={{
          top: "30%",
          left: "6rem",
          zIndex: "-1",
          display: { xs: "none", md: "flex" },
        }}
      ></Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
