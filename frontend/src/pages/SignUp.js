import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useParams } from "react-router-dom";
import { ContractContext } from "../context/contractContext";
import { AuthContext } from "../context/authContext";

function SignUp() {
  const contractContext = useContext(ContractContext);
  const authContext = useContext(AuthContext);


  const [formData, setFormData] = useState({
    Doctor_name: "",
    doctor_id: contractContext.account,
    doc_specialization: "",
    Hospital_name: "",
    Hospital_id: "",
  });
  const { Doctor_name, doc_specialization, Hospital_name, Hospital_id } =
    formData;
  const params = useParams()  

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

   const onSubmitDoctor = async (e) => {
     e.preventDefault();
     const contract = contractContext.medEx
     await authContext.doctorRegistration(contract , formData)
   }

   const onSubmitDiagnosticCenter = async (e) => {
     e.preventDefault();
     const contract = contractContext.medEx
     await authContext.diagnosticCenterRegistration(contract, formData);
   };


   const onSubmitPatient = async (e) => {
     e.preventDefault();
     const contract = contractContext.medEx
     await authContext.patientRegistration(contract, formData);
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
            padding: "5rem",
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
                Create an Account for a {params.profile}
              </Typography>
              <Box
                component="form"
                action="/"
                method="GET"
                onSubmit={(e) => onSubmitDiagnosticCenter(e)}
              >
                <TextField
                  label="Full Name"
                  variant="outlined"
                  color="secondary"
                  id="Doctor_name"
                  value={Doctor_name}
                  fullWidth
                  onChange={onChange}
                  required
                  sx={{ m: 1 }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  color="secondary"
                  id="email"
                  fullWidth
                  required
                  onChange={onChange}
                  sx={{ m: 1 }}
                />
                <TextField
                  label="Your Specialization"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  onChange={onChange}
                  id="doc_specialization"
                  value={doc_specialization}
                  required
                  sx={{ m: 1 }}
                />
                <TextField
                  label="Hospital Name"
                  variant="outlined"
                  color="secondary"
                  onChange={onChange}
                  id="Hospital_name"
                  value={Hospital_name}
                  fullWidth
                  required
                  sx={{ m: 1 }}
                />
                <TextField
                  label="Hospital Id"
                  variant="outlined"
                  color="secondary"
                  onChange={onChange}
                  fullWidth
                  id="Hospital_id"
                  value={Hospital_id}
                  required
                  sx={{ m: 1 }}
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  color="secondary"
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
                <FormGroup>
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
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
