import { useEffect, useState } from "react";
import { Doctor } from "../../Types/Assets.types";
import { DoctorsCard } from "../../components/Export";

const DoctorList = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  useEffect(() => {
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
    fetchDoctors();
  }, []);
  return (
    <div
      style={{ width: "100%", maxWidth: "calc(100% - 80px)" }}
      className="flex md:flex-row flex-wrap sm:flex-col h-full text-left gap-3 md:w-[80%] md:p-6 p-2"
    >
      {doctors &&
        doctors.length > 0 &&
        doctors.map((doctor) => (
          <DoctorsCard doctor={doctor} key={doctor._id} />
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
