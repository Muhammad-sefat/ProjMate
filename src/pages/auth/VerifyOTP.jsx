import { useForm } from "react-hook-form";
import logo from "../../../public/project.png";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { otp: Array(6).fill("") },
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const otp = data.otp.join("");
    console.log("OTP entered:", otp);
    navigate("/signin");
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      setValue(`otp.${index}`, value);
      if (value && e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-6 w-full max-w-md z-10 my-4 border border-primary">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex justify-center items-center gap-2">
          <img className="w-6 h-6" src={logo} alt="logo" />
          <h1 className="text-2xl font-bold text-white">ProjMate</h1>
        </div>
        <p className="text-gray-300 text-sm mt-1">
          Manage your projects with ease 🚀
        </p>
      </div>

      {/* OTP Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex justify-center gap-2">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              {...register(`otp.${index}`)}
              onChange={(e) => handleChange(e, index)}
              className="w-10 h-12 text-center text-lg font-bold rounded-lg border border-gray-400 focus:border-secondary focus:ring-2 focus:ring-secondary outline-none bg-white/20 text-white"
            />
          ))}
        </div>
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
        <button
          type="submit"
          className="w-full bg-button text-white py-2 rounded-lg font-semibold transition hover:opacity-90 cursor-pointer"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOTP;
