import { FcBusinessman } from "react-icons/fc";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Navbar = ({ links }) => {
  const location = useLocation();

  const matchingLinks = links?.filter((item) =>
    location.pathname.startsWith(item.path)
  );
  const currentLink = matchingLinks?.pop();
  const currentTitle = currentLink ? currentLink.name : "Dashboard";

  return (
    <div className="border-b border-primary bg-[#f2f3f6]">
      <div className="flex items-center justify-between py-2.5 px-6">
        <h2 className="text-xl font-bold text-primary">{currentTitle}</h2>
        <div className="flex items-center gap-2">
          <div className="cursor-pointer bg-blue-100 hover:bg-blue-200 p-2 rounded-full transition-all ease-in-out">
            <MdOutlineNotificationsActive size={24} />
          </div>
          <div className="cursor-pointer bg-blue-100 hover:bg-blue-200 p-2 rounded-full transition-all ease-in-out">
            <FcBusinessman size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
