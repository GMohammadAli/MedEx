import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext';
import { ContractContext } from '../context/contractContext';
// import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddReport() {
   const contractContext = useContext(ContractContext);
   const authContext = useContext(AuthContext);
   const navigate = useNavigate();

   const [formData, setFormData] = useState({
     Patient_id: "",
     Patient_Name: "",
     Blood_Group: "",
     DateOfBirth: "",
     gender: "",
     Hos_name: "",
     Doc_name: "",
     age: "",
     //  Symptoms: "",
     //  Allergies: "",
     diabetes: "",
   });
   const {
     Patient_Name,
     Patient_id,
     Blood_Group,
     DateOfBirth,
     gender,
     Hos_name,
     Doc_name,
     age,
    //  Symptoms,
    //  Allergies,
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

   useEffect(() => {
     const checkifDC = async () => {
      const checkIfDC = await authContext.checkIfDC(contractContext.medEx,contractContext.account);
      if(!checkIfDC){
        toast.error("Only Diagnostic Center can add a Report")
        navigate('/')
      }
    }
    checkifDC();
   }, []);

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
                   id="Patient_Name"
                   value={Patient_Name}
                   fullWidth
                   onChange={onChange}
                   required
                   sx={{ m: 1 }}
                 />
                 <TextField
                   label="Patient's Id"
                   variant="outlined"
                   color="secondary"
                   id="Patient_id"
                   value={Patient_id}
                   fullWidth
                   onChange={onChange}
                   required
                   sx={{ m: 1 }}
                 />
                 <TextField
                   label="Blood Group"
                   variant="outlined"
                   color="secondary"
                   id="Blood_Group"
                   fullWidth
                   value={Blood_Group}
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
                   id="DateOfBirth"
                   value={DateOfBirth}
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
                   id="Hos_name"
                   value={Hos_name}
                   fullWidth
                   required
                   sx={{ m: 1 }}
                 />
                 <TextField
                   label="Report Type"
                   variant="outlined"
                   color="secondary"
                   onChange={onChange}
                   id="Doc_name"
                   value={Doc_name}
                   fullWidth
                   required
                   sx={{ m: 1 }}
                 />
                 <TextField
                   label="Age"
                   type='number'
                   variant="outlined"
                   color="secondary"
                   onChange={onChange}
                   id="age"
                   value={age}
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
                 {/* <TextField
                   label="Does the Patient has Symptoms?"
                   variant="outlined"
                   color="secondary"
                   onChange={onChange}
                   id="Symptoms"
                   value={Symptoms}
                   fullWidth
                   required
                   sx={{ m: 1 }}
                 />
                 <TextField
                   label="Does the Patient has Allergies?"
                   variant="outlined"
                   color="secondary"
                   onChange={onChange}
                   id="Allergies"
                   value={Allergies}
                   fullWidth
                   required
                   sx={{ m: 1 }}
                 /> */}
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