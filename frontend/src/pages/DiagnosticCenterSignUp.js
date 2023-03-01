import {
  Box,
  Button,
  // Checkbox,
  Container,
  // FormControlLabel,
  // FormGroup,
  // Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { ContractContext } from "../context/contractContext";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";


function DiagnosticCenterSignUp() {
  const contractContext = useContext(ContractContext);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    lab_name: "",
    lab_id: contractContext.account,
    _reco_hospitalname: "",
    _reco_docname: "",
  });
  const { lab_name, _reco_hospitalname, _reco_docname } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmitDiagnosticCenter = async (e) => {
    e.preventDefault();
    const contract = contractContext.medEx;
    await authContext.diagnosticCenterRegistration(contract, formData);
    navigate("/dashboard/getProfiles");
  };

  return (
    <Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            padding: "8rem",
            margin: "1rem",
          }}
          maxWidth="md"
          sx={{ border: 1, borderRadius: "16px" }}
        >
          <Container>
            <Box>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                Welcome to
                <Typography
                  component="div"
                  variant="h4"
                  color="#277BC0"
                  style={{
                    display: "inline",
                    fontWeight: "600",
                  }}
                >
                  {" "}
                  MedEx
                </Typography>
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                Create an Account for a Diagnostic Center
              </Typography>
              <Box
                component="form"
                action="/"
                method="GET"
                onSubmit={(e) => onSubmitDiagnosticCenter(e)}
              >
                <TextField
                  label="Lab's Name"
                  variant="outlined"
                  color="secondary"
                  id="lab_name"
                  value={lab_name}
                  fullWidth
                  onChange={onChange}
                  required
                  sx={{ m: 1 }}
                />
                <TextField
                  label="Record Hospital Name"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  onChange={onChange}
                  id="_reco_hospitalname"
                  value={_reco_hospitalname}
                  required
                  sx={{ m: 1 }}
                />
                <TextField
                  label="Record Doctor Name"
                  variant="outlined"
                  color="secondary"
                  onChange={onChange}
                  id="_reco_docname"
                  value={_reco_docname}
                  fullWidth
                  required
                  sx={{ m: 1 }}
                />
                <Button
                  type="submit"
                  style={{ backgroundColor: "#277BC0" }}
                  size="lg"
                  variant="contained"
                  fullWidth
                  disableElevation
                  // disabled
                  endIcon={<LockOpenIcon />}
                  sx={{ m: 1 }}
                >
                  REGISTER
                </Button>
                {/* <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="secondary" />}
                    label="Show Password"
                    sx={{ m: 1 }}
                  />
                </FormGroup>
                <Grid container>
                  <Grid item xs={4}></Grid>
                  <Grid item xs={8}>
                    <a href="/SignIn">Already have an account? Sign In</a>
                  </Grid>
                </Grid> */}
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default DiagnosticCenterSignUp;
