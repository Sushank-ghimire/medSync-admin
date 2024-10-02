import { FormEvent, useState } from "react";
import { specialityData } from "../../assets/assets";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const [loading, setLoading] = useState(false);

  const [_, setDoctorImage] = useState<null | File>(null);

  const handleAddDoctor = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch("/api/v1/admin/addDoctors", {
        method: "POST",
        headers: {
          token: localStorage.getItem("token") as string,
        },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        form.reset();
        return;
      }
      toast.error(data.message);
      form.reset();
      return;
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
      console.log("Error while adding doctor.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      style={{ width: "100%", maxWidth: "calc(100% - 80px)" }}
      className="flex h-full flex-col overflow-y-auto text-left md:w-[80%] p-2 space-y-4"
    >
      <h1 className="text-xl w-[90%] mx-auto md:text-2xl font-bold mt-4">
        Add Doctors
      </h1>
      <form
        onSubmit={handleAddDoctor}
        className="mt-4 w-[90%] max-h-full md:w-[90%] mx-auto flex flex-col gap-4"
      >
        <div
          className="flex tooltip flex-col justify-start cursor-pointer items-center"
          data-tip="Upload profile picture"
        >
          <input
            type="file"
            name="image"
            id="image"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files.length > 0) {
                setDoctorImage(e.target?.files[0]); // Correct way to access the first file
              }
            }}
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
        </div>

        <div className="gap-4 mt-4 md:grid-cols-2 grid grid-cols-1">
          <div className="flex md:w-1/2 flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              required
              name="name"
              placeholder="Enter name"
              id="name"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="flex md:w-1/2 flex-col gap-2">
            <label htmlFor="speciality">Speciality</label>
            <select
              required
              name="speciality"
              id="speciality"
              className="select select-bordered w-full max-w-xs"
            >
              {specialityData.map((data) => (
                <option key={data.speciality}>{data.speciality}</option>
              ))}
            </select>
          </div>

          <div className="flex md:w-1/2 flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter email"
              type="email"
              required
              name="email"
              id="email"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="flex md:w-1/2 flex-col gap-2">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              required
              placeholder="Enter degree"
              name="degree"
              id="degree"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="flex md:w-1/2 flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              required
              name="password"
              id="password"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="flex md:w-1/2 flex-col gap-2">
            <label htmlFor="address1">Address</label>
            <input
              type="text"
              required
              placeholder="Address 1"
              name="address1"
              id="address1"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <input
              type="text"
              required
              placeholder="Address 2"
              name="address2"
              id="address2"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              placeholder="1 Year"
              required
              name="experience"
              id="experience"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label htmlFor="fee">Doctor Fee</label>
            <input
              type="number"
              placeholder="Doctor Fee"
              required
              name="fees"
              min={20}
              max={500}
              id="fee"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="flex flex-col md:w-full gap-2">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="about">About Doctor</label>
              <textarea
                className="textarea textarea-success"
                placeholder="About Doctor"
                required
                name="about"
                id="about"
              ></textarea>
            </div>
          </div>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="w-1/2 mx-auto btn btn-outline"
        >
          {loading ? (
            <div className="w-full max-h-fit">
              <span className="loading loading-ring loading-xs"></span>
              <span className="loading loading-ring loading-sm"></span>
              <span className="loading loading-ring loading-md"></span>
              <span className="loading loading-ring loading-lg"></span>
            </div>
          ) : (
            "Add Doctor"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
