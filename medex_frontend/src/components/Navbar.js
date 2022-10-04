import React, { 
    // useContext 
} from "react";
import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Login, 
    // Logout 
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Image from "./Image";
// import { AuthContext } from "../context/AuthContext";

function Navbar() {
//   const authContext = useContext(AuthContext);
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
            onClick={() => navigate("/dashboard/verify")}
            color="inherit"
            style={{ color: "#277BC0" }}
            fontWeight={500}
          >
            Dashboard
          </Button>
          {/* <Button onClick={() => navigate("/addBlog")} color="inherit">
            Add Blog
          </Button> */}
          {/* {!authContext.isAuth ? ( */}
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
          {/* ) : (
            <Button
              onClick={() => authContext.logout()}
              color="inherit"
              endIcon={<Logout />}
            >
              {" "}
              {authContext.user.username}
            </Button>
          )} */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
