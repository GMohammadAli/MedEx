import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext';
import { ContractContext } from '../context/contractContext';

function DoctorAccessCard({doctor}) {
    const contractContext = useContext(ContractContext)
    const authContext = useContext(AuthContext);
    const [hasAccess, setHasAccess] = useState(false)

    const provideAccess = async (doctorId) => { 
      await authContext.giveAccess(doctorId);
      setHasAccess(true);
    };

    const revokeAccess = async (doctorId) => {
      await authContext.revokeAccess(doctorId);
      setHasAccess(false);
    };

    const isProvidedAccessStatus = async () => {
      const accessList = await authContext.getDoctorAccessListForPatient(
        contractContext.account
      );
      console.log(accessList);
      for (var i = 0; i < accessList.length; i++) {
        if (doctor.DocId === accessList[i]) {
          setHasAccess(true);
        }
      }
    };

    useEffect(() => {
      isProvidedAccessStatus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hasAccess]);


  return (
      <Card sx={{ maxWidth: 345, borderRadius: "20px" }}>
        <CardMedia
          component="img"
          height="240"
          image="/Images/Doctor.png"
          alt="/Images/Doctor.png"
        />
        <CardContent
        // onClick={() => {
        //   navigate(`/signUp/${profileTitle}`);
        // }}
        >
          <Typography
            variant="body1"
            color="text.primary"
            style={{ textAlign: "center" }}
          >
            Doctor {doctor.DocName}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ textAlign: "center" }}
          >
            Specialization- {doctor.Doc_spec}
          </Typography>
        </CardContent>
        {hasAccess ? (
          <Button
            type="button"
            style={{ backgroundColor: "red" }}
            size="medium"
            onClick={() => revokeAccess(doctor.DocId)}
            variant="contained"
            disableElevation
            sx={{ m: 2, ml: 5, mr: 5 }}
          >
            Revoke Access
          </Button>
        ) : (
          <Button
            type="button"
            style={{ backgroundColor: "red" }}
            size="medium"
            onClick={() => provideAccess(doctor.DocId)}
            variant="contained"
            disableElevation
            sx={{ m: 2, ml: 5, mr: 5 }}
          >
            Provide Access
          </Button>
        )}
      </Card>
  );
}


DoctorAccessCard.propTypes = {
  doctor: PropTypes.array.isRequired,
};


export default DoctorAccessCard