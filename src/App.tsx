import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AddDoctor,
  AdminDashboard,
  Appointments,
  DoctorList,
  Login,
} from "./pages/Export";
import { AdminAuth, Layout } from "./components/Export";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/add-doctor",
        element: (
          <AdminAuth>
            <AddDoctor />
          </AdminAuth>
        ),
      },
      {
        path: "/admin-dashboard",
        element: (
          <AdminAuth>
            <AdminDashboard />
          </AdminAuth>
        ),
      },
      {
        path: "/doctors",
        element: (
          <AdminAuth>
            <DoctorList />
          </AdminAuth>
        ),
      },
      {
        path: "/all-appointments",
        element: (
          <AdminAuth>
            <Appointments />
          </AdminAuth>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <main className="w-screen min-h-screen bg-gradient-to-r from-indigo-200 via-indigo-50 to-white">
      <RouterProvider router={router} />
      <ToastContainer />
    </main>
  );
};

export default App;
