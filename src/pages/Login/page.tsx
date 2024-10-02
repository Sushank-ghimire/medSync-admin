import { FormEvent, useEffect, useState } from "react";
import { AdminData } from "../../Types/AdminData.types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const navigate = useNavigate();

  const [login, setLogin] = useState<"Admin" | "Doctor">("Admin");

  const handleLoginClick = () => {
    if (login === "Admin") setLogin("Doctor");
    else setLogin("Admin");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      login === "Admin" && navigate("/admin-dashboard");
    } else navigate("/login");
  }, []);

  const handleLoginData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const adminData: AdminData = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };
      const res = await fetch(
        `/api/v1/${login === "Admin" ? "admin" : "doctor"}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: adminData.email,
            password: adminData.password,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("token", data.token);
        navigate("/");
        return;
      }
      toast.error(data.message);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-full w-screen flex justify-center items-center">
      <form
        className="md:w-1/2 w-[80%] h-fit border-2 shadow-lg rounded-lg p-2 md:p-6 mt-8 flex flex-col gap-4 mx-auto text-sm"
        onSubmit={handleLoginData}
      >
        <div>
          <h1 className="font-bold text-slate-600 md:text-2xl text-center">
            {login} Login
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            className="border-2 border-slate-200/50 p-2 rounded"
            type="text"
            id="email"
            required
            name="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            className="border-2 border-slate-200/50 p-2 rounded"
            type="password"
            id="password"
            required
            name="password"
          />
        </div>
        <button
          className="w-full text-white bg-indigo-600 hover:bg-indigo-500 transition-all rounded-lg py-3"
          type="submit"
          disabled={isLoading as boolean}
        >
          {isLoading ? (
            <div className="w-full max-h-fit">
              <span className="loading loading-ring loading-xs"></span>
              <span className="loading loading-ring loading-sm"></span>
              <span className="loading loading-ring loading-md"></span>
              <span className="loading loading-ring loading-lg"></span>
            </div>
          ) : (
            "Login"
          )}
        </button>
        <p>
          {login === "Admin" ? "Doctor" : "Admin"} Login{" "}
          <span
            className="cursor-pointer text-blue-600"
            onClick={handleLoginClick}
          >
            {" "}
            Click Here
          </span>
          {" ? "}
        </p>
      </form>
    </section>
  );
};

export default Login;
