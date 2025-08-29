import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff, Github, Mail } from "lucide-react";
import logo from "../../../public/project.png";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 w-full max-w-lg z-10 my-4 h-[94vh] border border-primary">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center gap-2">
          <img className="w-6 h-6" src={logo} alt="logo" />
          <h1 className="text-2xl font-bold text-white">ProjMate</h1>
        </div>

        <p className="text-gray-300 text-sm mt-1">
          Manage your projects with ease 🚀
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-200">
              First Name
            </label>
            <input
              type="text"
              {...register("firstname")}
              className="mt-1 text-sm w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Last Name
            </label>
            <input
              type="text"
              {...register("lastname")}
              className="mt-1 text-sm w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600"
              placeholder="Enter your name"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-200">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className="mt-1 text-sm w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className="mt-1 text-sm w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 pr-10"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword")}
                className="mt-1 text-sm w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 pr-10"
                placeholder="Confirm password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <input
            type="checkbox"
            {...register("terms")}
            className="accent-blue-600"
          />
          <span>I agree to the Terms & Conditions</span>
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="w-full bg-button text-white py-2 rounded-lg font-semibold transition"
        >
          Sign Up
        </button>

        {/* Social Auth */}
        <div className="flex gap-4">
          <button
            type="button"
            className="w-full text-sm flex items-center justify-center gap-2 border border-gray-600 py-2 rounded-lg text-white hover:bg-gray-800 transition cursor-pointer"
          >
            <Mail size={16} /> Sign up with Google
          </button>
          <button
            type="button"
            className="w-full text-sm flex items-center justify-center gap-2 border border-gray-600 py-2 rounded-lg text-white hover:bg-gray-800 transition cursor-pointer"
          >
            <Github size={16} /> Sign up with GitHub
          </button>
        </div>
      </form>

      {/* Already have account */}
      <p className="text-center text-gray-300 text-sm mt-4">
        Already signed up?{" "}
        <a href="/login" className="text-button hover:underline font-medium">
          Sign in
        </a>
      </p>
    </div>
  );
};

export default Signup;
