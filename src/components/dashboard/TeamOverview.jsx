import {
  CircleCheckBig,
  Clock,
  FolderKanban,
  MoveUp,
  Users,
} from "lucide-react";

const TeamOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-[#f2f3f6] p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <p className="text-lg text-primary font-bold">Total Member</p>
          <p className="text-primary bg-blue-100 p-2 rounded-full">
            <Users size={18} />
          </p>
        </div>
        <p className="text-2xl font-bold text-primary my-1">28</p>
      </div>
      <div className="bg-[#f2f3f6] p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-primary">Active Member</h2>
          <p className="text-primary bg-emerald-100 p-2 rounded-full">
            <CircleCheckBig size={18} />
          </p>
        </div>
        <p className="text-2xl font-bold text-primary my-1">16</p>
      </div>
      <div className="bg-[#f2f3f6] p-4 rounded-lg shadow">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-primary">Pending Invites</h2>
          <p className="text-primary bg-[#efdada] p-2 rounded-full">
            <Clock size={18} />
          </p>
        </div>
        <p className="text-2xl font-bold text-primary my-1">24</p>
      </div>
    </div>
  );
};

export default TeamOverview;
