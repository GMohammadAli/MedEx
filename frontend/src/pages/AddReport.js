import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext';
import { ContractContext } from '../context/contractContext';
// import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import AddIcon from "@mui/icons-material/Add";

function AddReport() {
   const contractContext = useContext(ContractContext);
   const authContext = useContext(AuthContext);

   const [formData, setFormData] = useState({
     patient_id: "",
     _patientname: "",
     Blood_group: "",
     dateOfBirth: "",
     gender: "",
     Hospital_name: "",
     report_type: "",
     age: "",
     symptoms: "",
     allergies: "",
     diabetes: "",
   });
   const {
     _patientname,
     patient_id,
     Blood_group,
     dateOfBirth,
     gender,
     Hospital_name,
     report_type,
     symptoms,
     allergies,
     diabetes,
   } = formData;

   const onChange = (e) => {
     setFormData((prevState) => ({
       ...prevState,
       [e.target.id]: e.target.value,
     }));
   };

   const onSubmitReport = async (e) => {
     e.preventDefault();
     console.log("On Submit Clicked")
     const contract = contractContext.medEx;
     await authContext.addReport(contract, formData);
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
                 variant="h5"
                 component="h2"
                 gutterBottom
                 style={{ textAlign: "center" }}
               >
                 Generate Report
               </Typography>
               <Box
                 component="form"
                 action="/"
                 method="GET"
                 onSubmit={(e) => onSubmitReport(e)}
               >
                 <TextField
                   label="Patient's Name"
                   variant="outlined"
                   color="secondary"
                   id="_patientname"
                   value={_patientname}
                   fullWidth
                   onChange={onChange}
                   required
                   sx={{ m: 1 }}
                 />
                 <TextField
                   label="Patient's Id"
                   variant="outlined"
                   inputMode="number"
                   color="secondary"
                   id="patient_id"
                   value={patient_id}
                   fullWidth
                   onChange={onChange}
                   required
                   sx={{ m: 1 }}
                 />
                 <TextField
                   label="Blood Group"
                   variant="outlined"
                   color="secondary"
                   id="Blood_group"
                   fullWidth
                   value={Blood_group}
                   required
                   onChange={onChange}
                   sx={{ m: 1 }}
                 />
                 <TextField
                   label="Date Of Birth"
                   variant="outlined"
                   color="secondary"
                   inputMode="date"
                   fullWidth
                   onChange={onChange}
                   id="dateOfBirth"
                   value={dateOfBirth}
                   required
                   sx={{ m: 1 }}
                 />
                 <TextField
                   label="Gender"
                   variant="outlined"
                   color="secondary"
                   onChange={onChange}
                   id="gender"
                   value={gender}
                   fullWidth
                   required
                   sx={{ m: 1 }}
                 />
                 <TextField
                   label="Hospital's Name"
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
                   label="Report Type"
                   variant="outlined"
                   color="secondary"
                   onChange={onChange}
                   id="report_type"
                   value={report_type}
                   fullWidth
                   required
                   sx={{ m: 1 }}
                 />
                 <TextField
                   label="Does the Patient has Diabetes?"
                   variant="outlined"
                   color="secondary"
                   onChange={onChange}
                   id="diabetes"
                   value={diabetes}
                   fullWidth
                   required
                   sx={{ m: 1 }}
                 />
                 <TextField
                   label="Does the Patient has Symptoms?"
                   variant="outlined"
                   color="secondary"
                   onChange={onChange}
                   id="symptoms"
                   value={symptoms}
                   fullWidth
                   required
                   sx={{ m: 1 }}
                 />
                 <TextField
                   label="Does the Patient has Allergies?"
                   variant="outlined"
                   color="secondary"
                   onChange={onChange}
                   id="allergies"
                   value={allergies}
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
                   endIcon={<AddIcon />}
                   sx={{ m: 1 }}
                 >
                   Generate Report
                 </Button>
               </Box>
             </Box>
           </Container>
         </Box>
       </Box>
     </Box>
   );
}

export default AddReport