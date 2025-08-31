import DashboardOverview from "../../components/dashboard/DashboardOverview";
import RecentActivity from "../../components/dashboard/RecentActivity";
import RecentProject from "../../components/dashboard/RecentProject";

const HomeDashboard = () => {
  return (
    <>
      <DashboardOverview />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <RecentProject />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </>
  );
};

export default HomeDashboard;
