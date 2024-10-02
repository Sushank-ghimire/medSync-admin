import { createContext, useContext } from "react";
import { UserDataContext } from "../Types/UserContext.types";

const userContext = createContext<null | UserDataContext>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const userData: UserDataContext = {
    isAdmin: true,
    isDoctor: false,
  };
  return (
    <userContext.Provider value={userData}>{children}</userContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("Use context must be used within contextprovider");
  }
  return context;
};

export default ContextProvider;
