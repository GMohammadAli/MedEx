import React, { useContext, useState } from 'react'
import process from "process";
import { Web3Storage } from "web3.storage";
import {  Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Typography} from '@mui/material';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/authContext';

function UploadReport() {
  const authContext = useContext(AuthContext)

  const ReportType = {
    Blood: "blood",
    Urine: "urine",
    Angiography: "angiography",
  };

  const storage = new Web3Storage({ token: process.env.REACT_APP_IPFS_TOKEN });
  const [reportType, setreportType] = useState(ReportType.Blood);

  const handleChange = (e) => {
    setreportType(e.target.value);
  };
  //add report type as well

  const onChange = async(e) => {
    const file = e.target.files;
    console.log(file);
    const cid = await storage.put(file);
    const url = `https://${cid}.ipfs.dweb.link/`;
    await authContext.setReportUrls(url)
    console.log(`Uploading ${file.length} files`);
    console.log("Content added with CID:", url);
    toast.success(`Successfully Uploaded file on IPFS: ${url}`)
  }
  
       
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" gutterBottom>
                Upload a Report
              </Typography>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Report Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={reportType}
                  onChange={(e) => handleChange(e)}
                  label="Report_Type"
                >
                  <MenuItem value={ReportType.Blood}>
                    <em>{reportType}</em>
                  </MenuItem>
                  <MenuItem value={ReportType.Blood}>
                    Blood Test Report
                  </MenuItem>
                  <MenuItem value={ReportType.Urine}>
                    Urine Test Report
                  </MenuItem>
                  <MenuItem value={ReportType.Angiography}>
                    Angiography Report
                  </MenuItem>
                </Select>
                <Box component="div" sx={{ margin: "1rem" }}>
                  <input multiple type="file" onChange={(e) => onChange(e)} />
                </Box>
                <Button
                  type="submit"
                  style={{ backgroundColor: "#277BC0" }}
                  size="lg"
                  variant="contained"
                  fullWidth
                  disableElevation
                  // disabled
                  sx={{ m: 1 }}
                >
                  Upload Report
                </Button>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default UploadReport