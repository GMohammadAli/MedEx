import React, { createContext, useState } from "react";
import axios from "axios";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const ContractContext = createContext();

function ContractProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", {});
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

  const registerUser = async (user) => {
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/users`, user)
      .then((response) => {
        setUser(response.data.user);
        setToken(response.data.token);
        setIsAuth(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginUser = async (user) => {
    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, user)
      .then((response) => {
        setUser(response.data.user);
        setToken(response.data.token);
        setIsAuth(true);
      })
      .catch((err) => {
        console.log(err);
        setIsAuth(false);
      });
  };

  const getUsers = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users/`, { headers })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    setIsAuth(false);
    setUser({});
    setToken("");
  };

  return (
    <ContractContext.Provider
      value={{
        
      }}
    >
      {children}
    </ContractContext.Provider>
  );
}

export default ContractProvider;
export { ContractContext };
