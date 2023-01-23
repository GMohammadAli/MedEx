import React, { useEffect, useState } from "react";
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
import medExAbi from './contracts/medEx.json'
import config from "./config.json"
import { ethers } from "ethers"

const theme = createTheme({
  // backgroundColor:"#FFB200",
  palette: {
    secondary: {
      main: "#8338ec",
    },
  },
});

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [medEx, setMedEx] = useState(null)

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);

    // const network = await provider.getNetwork();
    const medEx = new ethers.Contract(
      config[31337].MedEx.address,
      medExAbi,
      provider
    );
    console.log(medEx);
    setMedEx(medEx)

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    setAccount(account);

    window.ethereum.on("accountsChanged", async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);
    });
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Box sx={{ backgroundColor: "#FFF4CF" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/signUp/:profile"
              element={
                <SignUp address={config[31337].MedEx.address} state={medEx} />
              }
            />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/profile" element={<Profile account={account} />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="" element={<Main />} />
              <Route path="verify" element={<AddUser />} />
            </Route>
          </Routes>
        </Box>
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
