import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import SourceIcon from "@mui/icons-material/Source";
import { Link } from "react-router-dom";

export const Sidebar = (
  <React.Fragment>
    <Link
      style={{ textDecoration: "none", color: "#000", fontSize: "1rem" }}
      to="/"
    >
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </Link>
    <Link
      style={{ textDecoration: "none", color: "#000", fontSize: "1rem" }}
      to="verify"
    >
      <ListItemButton>
        <ListItemIcon>
          <GroupAddIcon />
        </ListItemIcon>
        <ListItemText primary="Verification" />
      </ListItemButton>
    </Link>
    <Link
      style={{ textDecoration: "none", color: "#000", fontSize: "1rem" }}
      to="getProfiles"
    >
      <ListItemButton>
        <ListItemIcon>
          <GroupAddIcon />
        </ListItemIcon>
        <ListItemText primary="List Of Profiles" />
      </ListItemButton>
    </Link>
    <Link
      style={{ textDecoration: "none", color: "#000", fontSize: "1rem" }}
      to="view"
    >
      <ListItemButton>
        <ListItemIcon>
          <SourceIcon />
        </ListItemIcon>
        <ListItemText primary="View Reports" />
      </ListItemButton>
    </Link>
    <Link
      style={{ textDecoration: "none", color: "#000", fontSize: "1rem" }}
      to="upload"
    >
      <ListItemButton>
        <ListItemIcon>
          <DriveFolderUploadIcon />
        </ListItemIcon>
        <ListItemText primary="Upload Reports" />
      </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);
