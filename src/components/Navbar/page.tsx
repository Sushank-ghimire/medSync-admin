const Navbar = () => {
  const handleLogout = () => {
    localStorage.clear();
    location.reload();
  };
  return (
    <nav className="w-full h-fit px-8 md:px-12 py-4 font-bold flex justify-between items-center bg-blue-50">
      <h1 className="text-xl md:text-2xl font-bold flex items-center justify-center gap-3 cursor-pointer">
        MedSync{" "}
        <button className="px-2 rounded-full w-fit h-fit py-1 font-normal border-gray-800 text-xs border">
          admin
        </button>
      </h1>
      <button onClick={handleLogout} className="btn btn-outline">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
