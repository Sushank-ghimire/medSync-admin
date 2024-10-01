import { Outlet, useNavigate } from "react-router-dom";
import { Navbar, SideBar } from "../Export";
import { useEffect } from "react";

const Layout = () => {
  const naviagte = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      naviagte("/login");
    } else {
      naviagte("/");
    }
  }, []);
  return (
    <main className="min-h-screen w-full">
      <Navbar />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
