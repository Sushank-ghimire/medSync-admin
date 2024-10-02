import { useState } from "react";
import { tabData } from "../../utils/Tabs";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState<string>("Dashboard");

  return (
    <div className="bg-blue-50 min-h-screen left-0 bottom-0 top-20 md:w-[20%] w-[80px] flex flex-col">
      {tabData.map((data) => (
        <Link
          onClick={() => setActiveTab(data.tab)}
          key={data.tab}
          className={`md:w-full w-fit mx-auto h-fit gap-3 py-3 flex justify-center px-3 items-center font-semibold ${
            activeTab === data.tab
              ? "bg-indigo-300 md:border-r-4 md:border-indigo-500"
              : ""
          }`}
          to={data.to}
        >
          <img className="h-4 w-4" src={data.icons} alt="Image" />
          <span className="w-2/3 hidden md:block">{data.tab}</span>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
