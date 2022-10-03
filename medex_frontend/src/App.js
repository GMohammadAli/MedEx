import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { createTheme, ThemeProvider } from "@mui/material";
import Main from "./pages/dashboard";
import AddUser from "./pages/addUser";
import Dashboard from "./components/Dashboard";

const theme = createTheme({
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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="" element={<Main />} />
            <Route path="adduser" element={<AddUser />} />
          </Route>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
