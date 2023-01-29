import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";
// import { useLocalStorage } from "../Hooks/useLocalStorage";
import medExAbi from "../contracts/medEx.json";
import config from "../config.json";
import { ethers } from "ethers";

const ContractContext = createContext();

function ContractProvider({ children }) {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState([]);
  const [medEx, setMedEx] = useState([]);

  const loadBlockchainData = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);

      const network = await provider.getNetwork();
      const medEx = new ethers.Contract(
        config[network.chainId].MedEx.address,
        medExAbi,
        provider
      );
      setMedEx(medEx);

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);

      window.ethereum.on("accountsChanged", async () => {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = ethers.utils.getAddress(accounts[0]);
        setAccount(account);
      });
    };

  useEffect(() => {
    loadBlockchainData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  ///----------------------------------
  
  return (
    <ContractContext.Provider
      value={{
        medEx: medEx,
        account: account,
        provider: provider
      }}
    >
      {children}
    </ContractContext.Provider>
  );
}

export default ContractProvider;
export { ContractContext };
