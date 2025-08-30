import { Link, NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";
import logo from "../../../public/project.png";

const Sidebar = ({ links }) => {
  return (
    <div className="h-screen border-r border-primary/80 flex flex-col justify-between bg-[#f2f3f6]">
      <div>
        <Link
          to="/"
          className="flex items-center gap-2 border-b border-primary/80 pb-4 p-4"
        >
          <img className="w-6 h-6" src={logo} alt="logo" />
          <h2 className="text-xl font-bold text-primary">ProjMate</h2>
        </Link>

        {/* Navigation Links */}
        <nav className="mt-4 flex flex-col gap-1">
          {links?.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 mx-4 px-6 py-2 cursor-pointer transition rounded-lg 
                ${
                  isActive
                    ? "bg-primary text-white font-semibold"
                    : "text-primary hover:bg-blue-200 font-medium"
                }`
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div className="p-2 border-t border-primary/80">
        <button className="flex items-center gap-3 text-orange-600 hover:bg-red-50 font-medium px-3 py-2 w-full rounded-lg transition cursor-pointer">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
