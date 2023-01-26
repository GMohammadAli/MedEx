import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { Box } from "@mui/system";
// import Footer from "./components/Footer";
import Main from "./pages/dashboard";
import AddUser from "./pages/addUser";
import Dashboard from "./components/Dashboard";
import Profile from "./pages/profileSelection";
import ContractProvider from "./context/contractContext";
import AuthProvider from "./context/authContext";

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
      <ContractProvider>
        <AuthProvider>
          <Router>
            <Navbar />
            <Box sx={{ backgroundColor: "#FFF4CF" }}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signUp/:profile" element={<SignUp />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="dashboard" element={<Dashboard />}>
                  <Route path="" element={<Main />} />
                  <Route path="verify" element={<AddUser />} />
                </Route>
              </Routes>
            </Box>
            {/* <Footer /> */}
          </Router>
        </AuthProvider>{" "}
      </ContractProvider>
    </ThemeProvider>
  );
}

export default App;
