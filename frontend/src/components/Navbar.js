import React, { 
    useContext 
} from "react";
import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Login, 
    Logout 
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Image from "./Image";
import { ContractContext } from "../context/contractContext";

function Navbar() {
  const contractContext = useContext(ContractContext);
  let navigate = useNavigate();

  return (
    <AppBar position="static" style={{ background: "#facf5a" }}>
      <Toolbar>
        <Image src="/MedEx_logo.png" width="20%" />
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ color: "#277BC0" }}
          fontWeight={500}
        >
          MedEx
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => navigate("/")}
            color="inherit"
            style={{ color: "#277BC0" }}
            fontWeight={500}
          >
            Home
          </Button>
          <Button
            onClick={() => navigate("/dashboard/upload")}
            color="inherit"
            style={{ color: "#277BC0" }}
            // disabled
            fontWeight={500}
          >
            Dashboard
          </Button>
          {!contractContext.account ? (
            <Button
              onClick={() => navigate("/SignIn")}
              color="inherit"
              endIcon={<Login />}
              style={{ color: "#277BC0" }}
              fontWeight={500}
            >
              {" "}
              Login
            </Button>
          ) : (
            <Button
              // onClick={() => authContext.logout()}
              color="inherit"
              endIcon={<Logout />}
              style={{ color: "#277BC0" }}
            >
              {" "}
              {contractContext.account.slice(0, 6) +
                "..." +
                contractContext.account.slice(38, 42)}
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
