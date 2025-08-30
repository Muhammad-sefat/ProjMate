import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";
import {
  FolderKanban,
  LayoutDashboard,
  MessageCircle,
  Users,
} from "lucide-react";
const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "Projects",
    path: "/dashboard/projects",
    icon: <FolderKanban size={20} />,
  },
  { name: "Team", path: "/dashboard/team", icon: <Users size={20} /> },
  {
    name: "Community",
    path: "/dashboard/community",
    icon: <MessageCircle size={20} />,
  },
];

const Layout = () => {
  return (
    <div className="flex">
      <div className="w-[18%]">
        <Sidebar links={links} />
      </div>
      <div className="w-[82%]">
        <Navbar links={links} />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
