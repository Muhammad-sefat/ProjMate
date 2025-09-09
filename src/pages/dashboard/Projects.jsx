import { useEffect, useMemo, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import SelectInput from "../../components/common/SelectInput";
import AddProjectModal from "../../components/common/AddProjectModal";
import { Link } from "react-router-dom";

const Projects = () => {
  const initialData = [
    {
      id: 1,
      name: "Website Revamp",
      client: "ABC Corp",
      lead: "Alice",
      members: 5,
      status: "Pending",
      startDate: "2025-08-01",
      endDate: "2025-09-30",
    },
    {
      id: 2,
      name: "Mobile App",
      client: "XYZ Ltd",
      lead: "Bob",
      members: 8,
      status: "Progress",
      startDate: "2025-09-05",
      endDate: "2025-11-15",
    },
    {
      id: 3,
      name: "Marketing Campaign",
      client: "Delta Inc",
      lead: "Charlie",
      members: 4,
      status: "Completed",
      startDate: "2025-05-01",
      endDate: "2025-07-01",
    },
    {
      id: 4,
      name: "E-commerce Platform",
      client: "Shopify",
      lead: "Diana",
      members: 7,
      status: "Progress",
      startDate: "2025-06-10",
      endDate: "2025-12-01",
    },
    {
      id: 5,
      name: "HR System",
      client: "TechSoft",
      lead: "Ethan",
      members: 6,
      status: "Late",
      startDate: "2025-07-20",
      endDate: "2025-10-20",
    },
    {
      id: 6,
      name: "Analytics Dashboard",
      client: "DataPro",
      lead: "Fiona",
      members: 3,
      status: "Pending",
      startDate: "2025-07-01",
      endDate: "2025-09-15",
    },
    {
      id: 7,
      name: "CRM Upgrade",
      client: "Global Ltd",
      lead: "George",
      members: 10,
      status: "Progress",
      startDate: "2025-08-15",
      endDate: "2025-12-30",
    },
    {
      id: 8,
      name: "Design System",
      client: "Creative Co",
      lead: "Hannah",
      members: 2,
      status: "Completed",
      startDate: "2025-03-01",
      endDate: "2025-05-01",
    },
    {
      id: 9,
      name: "Cloud Migration",
      client: "NextGen",
      lead: "Ian",
      members: 12,
      status: "Late",
      startDate: "2025-08-01",
      endDate: "2026-01-01",
    },
    {
      id: 10,
      name: "AI Chatbot",
      client: "Future AI",
      lead: "Jane",
      members: 4,
      status: "Pending",
      startDate: "2025-09-10",
      endDate: "2025-12-10",
    },
  ];

  const [data] = useState(initialData);
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredData = useMemo(() => {
    return data.filter((project) =>
      Object.values(project).some((val) =>
        val.toString().toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Status badge styling
  const getStatusClasses = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-xs";
      case "Progress":
        return "bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs";
      case "Completed":
        return "bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs";
      case "Late":
        return "bg-red-100 text-red-700 px-2 py-1 rounded-md text-xs";
      default:
        return "bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs";
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl lg:text-2xl font-semibold text-primary">
          All Projects
        </h2>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border rounded-md bg-blue-50 h-[42px] text-sm"
          />
          <SelectInput
            options={["All", "Pending", "Progress", "Late", "Completed"]}
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 h-[42px] bg-primary hover:bg-blue-800 text-sm text-white rounded-md cursor-pointer"
          >
            + Add Project
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-md dark:border-slate-700">
        <table className="w-full text-sm">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-4 text-left">SL</th>
              <th className="p-4 text-left">Project Name</th>
              <th className="p-4 text-left">Client</th>
              <th className="p-4 text-left">Lead</th>
              <th className="p-4 text-left">Members</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Start Date</th>
              <th className="p-4 text-left">End Date</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((project, index) => (
              <tr key={project.id} className="border-t hover:bg-blue-50">
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{project.name}</td>
                <td className="p-4">{project.client}</td>
                <td className="p-4">{project.lead}</td>
                <td className="py-4 px-6">{project.members}</td>
                <td className="p-4">
                  <span className={getStatusClasses(project.status)}>
                    {project.status}
                  </span>
                </td>
                <td className="p-4">{project.startDate}</td>
                <td className="p-4">{project.endDate}</td>
                <td className="p- relative" ref={menuRef}>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenu(openMenu === project.id ? null : project.id);
                    }}
                    className="cursor-pointer p-2 rounded-full hover:bg-blue-200 w-8 h-8 absolute top-1/2 right-12 transform -translate-y-1/2 flex items-center justify-center"
                  >
                    <BsThreeDotsVertical size={18} />
                  </div>

                  {openMenu === project.id && (
                    <div
                      className="absolute right-0 mt-1 w-36 shadow-lg rounded-md z-50 bg-blue-900 text-white"
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      <Link
                        to="project-details-stepper"
                        onClick={() => setOpenMenu(null)}
                        className="flex items-center gap-2 w-full px-3 py-2 hover:bg-blue-800 rounded-md"
                      >
                        <IoEyeOutline /> View
                      </Link>
                      <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-blue-800 rounded-md">
                        <MdOutlineEdit /> Edit
                      </button>
                      <button className="flex items-center gap-2 w-full px-3 py-2 hover:bg-blue-800 rounded-md">
                        <FaUserPlus /> Assign
                      </button>
                      <button className="flex items-center gap-2 w-full px-3 py-2 text-red-600 hover:bg-blue-800 rounded-md">
                        <MdDeleteOutline /> Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            {!filteredData.length && (
              <tr>
                <td
                  colSpan="9"
                  className="text-center text-gray-500 py-6 dark:text-gray-400"
                >
                  No projects found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AddProjectModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default Projects;
