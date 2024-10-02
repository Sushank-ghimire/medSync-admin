import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, SideBar } from "../Export";
import { useEffect } from "react";
import ContextProvider from "../../context/UserContext";

const Layout = () => {
  const naviagte = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      naviagte("/login");
    } else {
      naviagte("/admin-dashboard");
    }
  }, []);
  return (
    <ContextProvider>
      <main className="min-h-screen w-full">
        <Navbar />
        <div className="flex">
          <SideBar />
          <Outlet />
        </div>
      </main>
    </ContextProvider>
  );
};

export default Layout;
