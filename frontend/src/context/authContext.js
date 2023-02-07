import React, { createContext, useState } from "react";
// import axios from "axios";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import {toast} from "react-toastify"

const AuthContext = createContext();

function AuthProvider({ children }) {
  // const [user, setUser] = useLocalStorage("user", {});
  const [reportUrl, setReportUrl] = useState("https://bafybeici6hjxanzyqtimbibe4zff3iiqcclzwzbgg5y7h3v4kfwq5hne4q.ipfs.dweb.link/")
  const [user, setUser] = useState({
    username:"",
    emailAddress: "",
    profileStatus: "",
    url:""
  })
  const [users, setUsers] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [diagnosticCenters, setDiagnosticCenters] = useState([]);
  const [token, setToken] = useLocalStorage("token", "");
  const headers = {
    Authorization: token,
    "Content-Type": "application/json",
  };

  const [isAuth, setIsAuth] = useState(() => {
    if (user != null && token !== "") {
      return true;
    } else {
      return false;
    }
  });

  const getPatients = async (contract) => {
      try {
        const signer = await contract.provider.getSigner();
        const patients = await contract
          .connect(signer)
          .getPatient();
        console.log(patients)
        setPatients(patients)
        console.log("Patients fetched Successfully");
      } catch (err) {
        console.log(err);
      }
  }

  const getDoctors = async (contract) => {
    try {
      const signer = await contract.provider.getSigner();
      const doctors = await contract.connect(signer).getDoctor();
      console.log(doctors);
      setDoctors(doctors);
      console.log("Doctors fetched Successfully");
    } catch (err) {
      console.log(err);
    }
  };
  const getDiagnosticCenters = async (contract) => {
    try {
      const signer = await contract.provider.getSigner();
      const diagnosticCenters = await contract.connect(signer).getDC();
      console.log(diagnosticCenters);
      setDiagnosticCenters(diagnosticCenters);
      console.log("Diagnostic Centers fetched Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const doctorRegistration = async (contract, formData) => {
    try{
    const signer = await contract.provider.getSigner();
    const transaction = await contract
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
      toast.error(err.message)
    }
  }

  const diagnosticCenterRegistration = async (contract, formData) => {
    try{
    const signer = await contract.provider.getSigner();
    const transaction = await contract
      .connect(signer)
      .diagnosticCenterRegistration(
        formData.lab_name,
        formData._reco_hospitalname,
        formData._reco_docname
      );
    await transaction.wait();
    toast.success(
      "Registration for Diagnostic Center is Done"
    );
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  }

  const patientRegistration = async (contract, formData) => {
    try{
      console.log("authContext")
     const signer = await contract.provider.getSigner();
     const transaction = await contract
       .connect(signer)
       .patientRegistration(
         formData._patientname,
         formData._pid,
         formData._age,
         formData._gender,
         formData._contact
       );
    await transaction.wait();

    toast.success("Registration for Patient is Done");
    } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
  }

    const addReport = async (contract, formData) => {
      try {
        const signer = await contract.provider.getSigner();
        const transaction = await contract.connect(signer).addReport(
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
          formData.diabetes,
        );
        await transaction.wait();
        toast.success("The Report has been generated and sent to the Patient");
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    };

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

  const logout = () => {
    setIsAuth(false);
    setUser({});
    setToken("");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: isAuth,
        user: user,
        users: users,
        token: token,
        patients: patients,
        doctors: doctors,
        diagnosticCenters:diagnosticCenters,
        getDiagnosticCenters: getDiagnosticCenters,
        getDoctors: getDoctors,
        getPatients: getPatients,
        doctorRegistration: doctorRegistration,
        diagnosticCenterRegistration: diagnosticCenterRegistration,
        patientRegistration: patientRegistration,
        addReport: addReport,
        reportUrl: reportUrl,
        setReportUrl: setReportUrl,
        // getUsers: getUsers,
        // registerUser: registerUser,
        // loginUser: loginUser,

        // user,
        // profileStatus, doctor or patient or center
        // registration specific to the user
        //
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
export { AuthContext };
