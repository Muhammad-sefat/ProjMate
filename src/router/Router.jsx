import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Signup from "../pages/auth/Signup";
import Layout from "../layout/Layout";
import Signin from "../pages/auth/Signin";
import VerifyOTP from "../pages/auth/VerifyOTP";
import HomeDashboard from "../pages/dashboard/HomeDashboard";
import Projects from "../pages/dashboard/Projects";
import Team from "../pages/dashboard/Team";
import Community from "../pages/dashboard/Community";
import ProjectDetailsStepper from "../components/dashboard/ProjectDetailsStepper";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Settings from "../pages/dashboard/Settings";

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
      {
        path: "/forget-password",
        element: <ForgotPassword />,
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
      {
        path: "projects",
        children: [
          {
            index: true,
            element: <Projects />,
          },
          {
            path: "project-details-stepper",
            element: <ProjectDetailsStepper />,
          },
        ],
      },

      {
        path: "team",
        element: <Team />,
      },
      {
        path: "Community",
        element: <Community />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

export default router;
