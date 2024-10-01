import React, { useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const AdminAuth = ({ children }: { children: React.ReactNode }) => {
  const userData = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData.isAdmin) {
      navigate("/");
    }
  }, []);
  return <>{children}</>;
};

export default AdminAuth;
