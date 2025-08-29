import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full relative">
      <div
        className="absolute inset-0 z-0 flex justify-center items-center"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
