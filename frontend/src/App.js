import React, { useContext} from "react";
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
import ContractProvider, { ContractContext } from "./context/contractContext";
import AuthProvider from "./context/authContext";
import AddReport from "./pages/AddReport";
import UploadReport from "./components/UploadReport";
import ViewReport from "./components/ViewReport";
import ViewRegisteredProfiles from "./components/ViewRegisteredProfiles";
import AccessPage from "./pages/AccessPage";

const theme = createTheme({
  // backgroundColor:"#FFB200",
  palette: {
    secondary: {
      main: "#8338ec",
    },
  },
});

function App() {
  // eslint-disable-next-line 
  const contractContext = useContext(ContractContext);

  // useEffect(() => {
  //   contractContext.loadBlockchainData();
  // }, [contractContext])
  
  return (
    <ThemeProvider theme={theme}>
      <ContractProvider>
        <AuthProvider>
          <Router>
            <Navbar />
            <Box sx={{ backgroundColor: "#FFF4CF" }}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signUp/doctor" element={<DoctorSignUp />} />
                <Route path="/signUp/patient" element={<PatientSignUp />} />
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
                  <Route path="access" element={<AccessPage/>} />
                  <Route path="upload" element={<UploadReport />} />
                  <Route path="view" element={<ViewReport />} />
                  <Route path="getProfiles" element={<ViewRegisteredProfiles />} />
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