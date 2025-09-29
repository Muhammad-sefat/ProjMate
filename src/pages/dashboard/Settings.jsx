import { useState } from "react";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import CommonInput from "../../components/common/CommonInput";

const Settings = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log("Profile form submitted:", data);
  };
  const [image, setImage] = useState("");

  const handleUploadImage = () => {
    document.getElementById("image_input").click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  return (
    <div className="p-5">
      <div className="mb-6 flex items-center justify-between border-b pb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-[#1f1f1f] lg:mb-6">
          Edit Profile
        </h2>
        <button
          //   onClick={() => setIsModalOpen(true)}
          type="button"
          className="bg-theme-secondary hover:bg-theme-primary text-white px-6 py-2 rounded-xl"
        >
          Delete Account
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Profile image */}
        <div className="flex items-center flex-col gap-5 justify-center">
          <div className="text-center">
            <input
              type="file"
              name="image"
              id="image_input"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="w-[150px] h-[150px] rounded-full dark:border-slate-700 border border-[#e5eaf2] flex items-center justify-center">
              {image === "" ? (
                <CgProfile className="text-[10rem] text-[#e5eaf2] dark:text-slate-500" />
              ) : (
                <img
                  src={image}
                  alt="image"
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>

            <button
              className="px-4 py-2 bg-theme-primary text-white rounded-md mt-5 cursor-pointer"
              onClick={handleUploadImage}
            >
              Upload profile
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              {...register("firstName")}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              {...register("lastName")}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* User Name */}
          <div>
            <label className="block mb-1 font-medium">User Name</label>
            <input
              type="text"
              placeholder="Enter your user name"
              {...register("userName")}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              {...register("phone")}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Gender */}
          <CommonInput
            options={["Male", "Female"]}
            defaultLabel="Select Gender"
            onChange={(value) => setValue("gender", value)}
          />

          {/* Registration Date */}
          <div>
            <label className="block mb-1 font-medium">Registration Date</label>
            <input
              type="date"
              {...register("registrationDate")}
              className="w-full border rounded-md px-3 py-2 text-gray"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Age */}
          <div>
            <label className="block mb-1 font-medium">Your Age</label>
            <input
              type="number"
              placeholder="Enter your Age"
              {...register("age")}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 font-medium">Location</label>
            <input
              type="text"
              placeholder="Enter your location"
              {...register("location")}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block mb-1 font-medium">Bio</label>
          <textarea
            rows={4}
            placeholder="Write something about yourself"
            {...register("bio")}
            className="w-full border rounded-md px-3 py-2 resize-none"
          ></textarea>
        </div>

        {/* Buttons */}
        <button
          type="submit"
          className="bg-theme-secondary hover:bg-theme-primary text-white px-8 py-2 rounded-xl cursor-pointer w-full text-center"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Settings;
