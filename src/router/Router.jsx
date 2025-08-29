import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Signup from "../pages/auth/Signup";
import Layout from "../layout/Layout";
import Signin from "../pages/auth/Signin";
import VerifyOTP from "../pages/auth/VerifyOTP";
import HomeDashboard from "../pages/dashboard/HomeDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Signup />,
      },
      {
        path: "/verify-otp",
        element: <VerifyOTP />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeDashboard />,
      },
    ],
  },
]);

export default router;
