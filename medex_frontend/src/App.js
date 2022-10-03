import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { Box } from "@mui/system";
import Footer from "./components/Footer";

const theme = createTheme({
  // backgroundColor:"#FFB200",
  palette: {
    secondary: {
      main: "#8338ec",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Box sx={{ backgroundColor: "#FFF4CF" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            {/* <Route path="/forgotPassword" element={<ForgotPassword />} /> */}
          </Routes>
        </Box>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
