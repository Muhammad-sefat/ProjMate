import { FolderKanban } from "lucide-react";

const RecentProject = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      company: "TechCopr Inc.",
      status: "Active",
      due: "12/12/2023",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      company: "Financebank Inc.",
      status: "Active",
      due: "24/12/2024",
    },
    {
      id: 3,
      title: "Healthcare Management System",
      company: "MediCore Solutions",
      status: "Pending",
      due: "05/02/2025",
    },
  ];
  return (
    <div className="bg-[#f2f3f6] p-4 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-primary">Recent Projects</h2>
        <p className="text-sm font-semibold text-primary underline cursor-pointer hover:font-bold tranaltion duration-300">
          View All
        </p>
      </div>
      <div>
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between my-4 border border-gray-300 p-2 rounded-lg"
          >
            {/* Left side */}
            <div className="flex items-center gap-4">
              <FolderKanban size={24} />
              <div>
                <h2 className="font-medium text-primary">{project.title}</h2>
                <p className="text-sm text-gray-600">{project.company}</p>
              </div>
            </div>

            {/* Right side */}
            <div className="text-right">
              <p className="text-sm font-medium text-primary bg-emerald-100 px-2 py-1 rounded-full w-auto inline-block mb-1">
                {project.status}
              </p>
              <p className="text-sm text-gray-600">Due: {project.due}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
