import {
  CircleCheckBig,
  Clock,
  FolderKanban,
  MoveUp,
  Users,
} from "lucide-react";

const DashboardOverview = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-1">Overview</h2>
      <p className="text-gray-600">
        Overview your projects and team activities
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-3">
        <div className="bg-[#f2f3f6] p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-primary">Active Projects</h2>
            <p className="text-primary bg-blue-100 p-2 rounded-full">
              <FolderKanban size={18} />
            </p>
          </div>
          <p className="text-2xl font-bold text-primary my-1">08</p>
          <div className="flex items-center gap-1 text-sm font-medium">
            <p className="flex items-center gap-0.5 text-primary font-bold">
              <MoveUp size={12} />
              <span>12%</span>
            </p>
            <p className="text-gray-600">Since last month</p>
          </div>
        </div>
        <div className="bg-[#f2f3f6] p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-primary">
              Complete Projects
            </h2>
            <p className="text-primary bg-emerald-100 p-2 rounded-full">
              <CircleCheckBig size={18} />
            </p>
          </div>
          <p className="text-2xl font-bold text-primary my-1">16</p>
          <div className="flex items-center gap-1 text-sm">
            <p className="flex items-center gap-0.5 text-primary font-bold">
              <MoveUp size={12} />
              <span>06%</span>
            </p>
            <p className="text-gray-600">Since last week</p>
          </div>
        </div>
        <div className="bg-[#f2f3f6] p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-primary">Team Members</h2>
            <p className="text-primary bg-violet-200 p-2 rounded-full">
              <Users size={18} />
            </p>
          </div>
          <p className="text-2xl font-bold text-primary my-1">125</p>
          <div className="flex items-center gap-1 text-sm">
            <p className="flex items-center gap-0.5 text-primary font-bold">
              <MoveUp size={12} />
              <span>17%</span>
            </p>
            <p className="text-gray-600">Since last month</p>
          </div>
        </div>
        <div className="bg-[#f2f3f6] p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-primary">Pending Projects</h2>
            <p className="text-primary bg-orange-100 p-2 rounded-full">
              <Clock size={18} />
            </p>
          </div>
          <p className="text-2xl font-bold text-primary my-1">24</p>
          <p className="text-gray-600 text-sm">Require attention</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
