import React, { createContext, useState } from "react";
// import axios from "axios";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const AuthContext = createContext();

function AuthProvider({ children }) {
  // const [user, setUser] = useLocalStorage("user", {});
  const [user, setUser] = useState({
    username:"",
    emailAddress: "",
    profileStatus: ""
  })
  const [users, setUsers] = useState([]);
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

  const doctorRegistration = async (contract, formData) => {
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
    console.log("Registration is Done for Doctor"); 
  }

  const diagnosticCenterRegistration = async (contract, formData) => {
    const signer = await contract.provider.getSigner();
    const transaction = await contract
      .connect(signer)
      .diagnosticCenterRegistration("Maa Chuda","Desh Lootene Wala","Maa Chuda"
      );
    await transaction.wait();
    console.log("Registration is Done for Diagnostic Center");
  }

  const patientRegistration = async (contract, formData) => {
     const signer = await contract.provider.getSigner();
     const transaction = await contract
       .connect(signer)
       .patientRegistration(
         "Ali",
         "0x5FbDB2315678afecb367f032d93F642f64180aa3",
         "21",
         "M",
         "12356643"
       );
    await transaction.wait();

    console.log("Registration is Done for Patient");
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
        doctorRegistration: doctorRegistration,
        diagnosticCenterRegistration: diagnosticCenterRegistration,
        patientRegistration: patientRegistration,
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
