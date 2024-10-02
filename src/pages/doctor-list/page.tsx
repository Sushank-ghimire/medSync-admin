import { useEffect, useState } from "react";
import { Doctor } from "../../Types/Assets.types";
import { DoctorsCard } from "../../components/Export";
import { toast } from "react-toastify";

const DoctorList = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  async function fetchDoctors() {
    const res = await fetch("/api/v1/admin/getDoctors", {
      method: "POST",
      headers: {
        token: localStorage.getItem("token") as string,
      },
    });
    const resData = await res.json();
    setDoctors(resData.doctors);
  }
  useEffect(() => {
    fetchDoctors();
  }, []);

  const changeDoctorAvialability = async (email: string) => {
    try {
      const res = await fetch("/api/v1/admin/change-avilable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email }),
      });
      const resData = await res.json();
      if (resData.success) {
        toast.success(resData.message);
        fetchDoctors();
      } else {
        toast.error(resData.message);
      }
      return true;
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
      console.log("Error occured : ", error);
    }
  };

  return (
    <div
      style={{ width: "100%", maxWidth: "calc(100% - 80px)" }}
      className="flex md:flex-row flex-wrap sm:flex-col h-full text-left gap-3 md:w-[80%] md:p-6 p-2"
    >
      {doctors &&
        doctors.length > 0 &&
        doctors.map((doctor) => (
          <DoctorsCard
            toggleCheck={changeDoctorAvialability}
            doctor={doctor}
            key={doctor._id}
          />
        ))}

      {doctors.length === 0 && (
        <div className="h-full w-full flex justify-center items-center">
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default DoctorList;
