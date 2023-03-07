import React, { createContext, useContext, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
// import { useLocalStorage } from "../Hooks/useLocalStorage";
import {toast} from "react-toastify"
import { ContractContext } from "./contractContext";

const AuthContext = createContext();

function AuthProvider({ children }) {
  // const [user, setUser] = useLocalStorage("user", {});
  const contractContext = useContext(ContractContext);
  const [reportUrl, setReportUrl] = useState();
  const [patient, setPatient] = useState();
  // const [user, setUser] = useState({
  //   username: "",
  //   emailAddress: "",
  //   profileStatus: "",
  //   url: "",
  // });
  // eslint-disable-next-line
  const [users, setUsers] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [reports, setReports] = useState([]);
  const [diagnosticCenters, setDiagnosticCenters] = useState([]);
  // const [token, setToken] = useLocalStorage("token", "");
  // eslint-disable-next-line
  // const headers = {
  //   Authorization: token,
  //   "Content-Type": "application/json",
  // };

  // const [isAuth, setIsAuth] = useState(() => {
  //   if (user != null && token !== "") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  const getPatients = async () => {
    try {
      const signer = await contractContext.medEx.provider.getSigner();
      const patients = await contractContext.medEx.connect(signer).getPatient();
      setPatients(patients);
      console.log("Patients fetched Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const getDoctors = async () => {
    try {
      const signer = await contractContext.medEx.provider.getSigner();
      const doctors = await contractContext.medEx.connect(signer).getDoctor();
      console.log(doctors);
      setDoctors(doctors);
      console.log("Doctors fetched Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const getReports = async () => {
    try {
      const signer = await contractContext.medEx.provider.getSigner();
      const reports = await contractContext.medEx.connect(signer).getReport();
      console.log(reports);
      setReports(reports);
      console.log("Reports fetched Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const getDiagnosticCenters = async () => {
    try {
      const signer = await contractContext.medEx.provider.getSigner();
      const diagnosticCenters = await contractContext.medEx.connect(signer).getDC();
      console.log(diagnosticCenters);
      setDiagnosticCenters(diagnosticCenters);
      console.log("Diagnostic Centers fetched Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const doctorRegistration = async (formData) => {
    try {
      const signer = await contractContext.medEx.provider.getSigner();
      const transaction = await contractContext.medEx
        .connect(signer)
        .doctorRegistration(
          formData.Doctor_name,
          formData.doctor_id,
          formData.doc_specialization,
          formData.Hospital_name,
          formData.Hospital_id
        );
      await transaction.wait();
      toast.success("Registration for Doctor is Done");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const diagnosticCenterRegistration = async (formData) => {
    try {
      console.log(contractContext.medEx);
      const signer = await contractContext.medEx.provider.getSigner();
      const transaction = await contractContext.medEx
        .connect(signer)
        .diagnosticCenterRegistration(
          formData.lab_name,
          formData.lab_id,
          formData._reco_hospitalname,
          formData._reco_docname
        );
      await transaction.wait();
      toast.success("Registration for Diagnostic Center is Done");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const patientRegistration = async (formData) => {
    try {
      console.log("authContext");
      const signer = await contractContext.medEx.provider.getSigner();
      const transaction = await contractContext.medEx
        .connect(signer)
        .patientRegistration(
          formData._patientname,
          formData._pid,
          formData._age,
          formData._gender,
          formData._bmi,
          formData._children,
          formData._smoker
        );
      await transaction.wait();

      toast.success("Registration for Patient is Done");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const addReport = async (formData) => {
    try {
      const signer = await contractContext.medEx.provider.getSigner();
      const transaction = await contractContext.medEx.connect(signer).addReport(
        formData.Patient_id,
        formData.Patient_Name,
        formData.Blood_Group,
        formData.DateOfBirth,
        formData.gender,
        formData.Hos_name,
        formData.Doc_name,
        formData.age,
        // formData.Symptoms,
        // formData.Allergies,
        formData.diabetes
      );
      await transaction.wait();
      toast.success("The Report has been generated and sent to the Patient");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const checkIfDC = async (accountAddress) => {
    await getDiagnosticCenters();
    // console.log(diagnosticCenters)
    for (var j = 0; j < diagnosticCenters.length; j++) {
      if (diagnosticCenters[j].lab_id === accountAddress) return true;
    }
  };

  const checkIfPatient = async (accountAddress) => {
    await getPatients();
    console.log(patients)
    for (var j = 0; j < patients.length; j++) {
      if (patients[j].patientid === accountAddress) return true;
    }
  };

  const checkIfDoctor = async (accountAddress) => {
    await getDoctors();
    console.log(doctors)
    for (var j = 0; j < doctors.length; j++) {
      if (doctors[j].DocId === accountAddress) return true;
    }
  };

  const giveAccess = async(doctorAddress) => {
    try {
      const amount = { value: ethers.utils.parseEther("2.0") };
      const signer = await contractContext.medEx.provider.getSigner();
      const transaction = await contractContext.medEx
        .connect(signer)
        .give_access(doctorAddress, amount);
      await transaction.wait();
      toast.success("Report Access has been provided!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  }

  const getDoctorAccessListForPatient = async (patientAddress) => {
    try {
      const signer = await contractContext.medEx.provider.getSigner();
      const transaction = await contractContext.medEx
        .connect(signer)
        .get_accessed_doctorlist_for_patient(patientAddress);
      console.log("Patient's access list provided!");
      return transaction;
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const getPatientAccessListForDoctor = async (doctorAddress) => {
    try {
      const signer = await contractContext.medEx.provider.getSigner();
      const transaction = await contractContext.medEx
        .connect(signer)
        .get_accessed_patientlist_for_doctor(doctorAddress);
      console.log("Doctor's access list has been provided!");
      console.log(transaction);
      return transaction;
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const revokeAccess = async(doctorAddress) => {
    try {
      const signer = await contractContext.medEx.provider.getSigner();
      const transaction = await contractContext.medEx
        .connect(signer)
        .revoke_access(doctorAddress);
      await transaction.wait();
      toast.success("Report Access has been Revoked!");
    }catch(err){
      console.log(err);
      toast.error(err.message)
    }
  }

  const getPrediction = async(patientAddress) => {
    await getPatient(patientAddress)  
    const sex = patient.gender === "M" ? 1 : 0;
    const smoker = patient.smoker === true ? 1 : 0;
    const predictionData = {
      age: Number(patient.age),
      sex: sex,
      bmi: Number(patient.bmi),
      children: Number(patient.children),
      smoker: smoker,
    };
    const prediction = await axios
     .post(`${process.env.REACT_APP_PREDICTION_URL}/predict`, predictionData)
     .then((response) => {
       return response.data
      })
      .catch((err) => {
        console.log(err);
      });

    return prediction
  }

  const getPatient = async (patientAddress) => {
    await getPatients();
    for (var j = 0; j < patients.length; j++) {
      if (patients[j].patientid === patientAddress) {
        setPatient(patients[j]);
      }
    }
  }

  // const registerUser = async (user) => {
  //   await axios
  //     .post(`${process.env.REACT_APP_BACKEND_URL}/users`, user)
  //     .then((response) => {
  //       setUser(response.data.user);
  //       setToken(response.data.token);
  //       setIsAuth(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const loginUser = async (user) => {
  //   await axios
  //     .post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, user)
  //     .then((response) => {
  //       setUser(response.data.user);
  //       setToken(response.data.token);
  //       setIsAuth(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsAuth(false);
  //     });
  // };

  // const getUsers = async () => {
  //   await axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/users/`, { headers })
  //     .then((response) => {
  //       setUsers(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const logout = () => {
  //   setIsAuth(false);
  //   setUser({});
  //   setToken("");
  // };

  return (
    <AuthContext.Provider
      value={{
        patients: patients,
        doctors: doctors,
        reports: reports,
        diagnosticCenters: diagnosticCenters,
        getDiagnosticCenters: getDiagnosticCenters,
        getDoctors: getDoctors,
        getPatients: getPatients,
        doctorRegistration: doctorRegistration,
        diagnosticCenterRegistration: diagnosticCenterRegistration,
        patientRegistration: patientRegistration,
        addReport: addReport,
        getReports: getReports,
        checkIfDC: checkIfDC,
        checkIfPatient: checkIfPatient,
        checkIfDoctor: checkIfDoctor,
        getPrediction: getPrediction,
        reportUrl: reportUrl,
        setReportUrl: setReportUrl,
        giveAccess: giveAccess,
        getDoctorAccessListForPatient: getDoctorAccessListForPatient,
        getPatientAccessListForDoctor: getPatientAccessListForDoctor,
        revokeAccess: revokeAccess,
        // getUsers: getUsers,
        // registerUser: registerUser,
        // loginUser: loginUser,
        // logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
export { AuthContext };
