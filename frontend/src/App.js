import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import DoctorSignUp from "./pages/DoctorSignUp";
import PatientSignUp from "./pages/PatientSignUp";
import DiagnosticCenterSignUp from "./pages/DiagnosticCenterSignUp";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { Box } from "@mui/system";
// import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./pages/Dashboard";
import AddUser from "./pages/AddUser";
import Dashboard from "./components/Dashboard";
import Profile from "./pages/ProfileSelection";
import ContractProvider from "./context/contractContext";
import AuthProvider from "./context/authContext";
import AddReport from "./pages/AddReport";

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
                <Route path="/signUp/Doctor" element={<DoctorSignUp />} />
                <Route path="/signUp/Patient" element={<PatientSignUp />} />
                <Route
                  path="/signUp/Diagnostic Center"
                  element={<DiagnosticCenterSignUp />}
                />
                <Route
                  path="/diagnosticCenter/:id/addReport"
                  element={<AddReport />}
                />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="dashboard" element={<Dashboard />}>
                  <Route path="" element={<Main />} />
                  <Route path="verify" element={<AddUser />} />
                </Route>
              </Routes>
            </Box>
            <ToastContainer />
            {/* <Footer /> */}
          </Router>
        </AuthProvider>{" "}
      </ContractProvider>
    </ThemeProvider>
  );
}

export default App;
