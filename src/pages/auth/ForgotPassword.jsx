import { useForm } from "react-hook-form";
import logo from "../../../public/project.png";
const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };
  return (
    <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-6 w-full max-w-lg z-10 my-4 border border-primary">
      <div className="text-center mb-6">
        <div className="flex justify-center items-center gap-2">
          <img className="w-6 h-6" src={logo} alt="logo" />
          <h1 className="text-2xl font-bold text-white">ProjMate</h1>
        </div>

        <p className="text-gray-300 text-sm mt-1">
          Manage your projects with ease 🚀
        </p>
      </div>

      {/* Heading */}
      <h2 className="text-center text-xl xmd:text-3xl font-semibold text-white  mb-6 font-merriweather">
        Forget Password
      </h2>
      <p className="text-center text-sm text-gray-300 xmd:text-lg">
        Enter the email for verification code.
      </p>

      {/* Form */}
      <form
        className="space-y-4 xmd:w-8/12 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="text-sm xmd:text-lg text-white mb-1 block">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter your email"
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-400 focus:outline-none focus:ring-2 ${errors.email}`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-button text-white py-2 rounded-full cursor-pointer"
        >
          Continue
        </button>
      </form>

      {/* Already have account */}
      <p className="text-center text-gray-300 text-sm mt-4">
        Don't have an account'?{" "}
        <a href="/" className="text-button hover:underline font-medium">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default ForgotPassword;
