import { Link } from "react-router-dom";
import { Doctor } from "../../Types/Assets.types";

const DoctorsCard = ({ doctor }: { doctor: Doctor }) => {
  return (
    <Link
      to={``}
      className="border cursor-auto border-[#C9D8FF] rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all max-w-[250px] duration-500 w-fit sm:mx-auto"
    >
      <img className="bg-[#EAEFFF]" src={doctor.image} alt={doctor.name} />
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-center text-green-500">
          <p className="flex justify-between items-center w-full cursor-pointer">
            <input
              className="cursor-pointer"
              defaultChecked
              type="checkbox"
              name="aviability"
              id="aviability"
            />
            <label htmlFor="aviability">Avialable</label>
          </p>
        </div>
        <p className="text-[#262626] text-lg font-medium">{doctor.name}</p>
        <p className="text-[#5C5C5C] text-sm">{doctor.speciality}</p>
      </div>
    </Link>
  );
};

export default DoctorsCard;
