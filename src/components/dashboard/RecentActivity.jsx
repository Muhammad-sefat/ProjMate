import { FcManager } from "react-icons/fc";

const activities = [
  {
    id: 1,
    message: 'Muhammad Sefat completed task "User Authentication"',
    time: "2 days ago",
  },
  {
    id: 2,
    message: 'Sarah Johnson updated project "E-Commerce Platform"',
    time: "3 days ago",
  },
  {
    id: 3,
    message: 'David Kim reviewed pull request "Payment Gateway"',
    time: "5 days ago",
  },
  {
    id: 4,
    message: 'Emily Carter created task "UI Dashboard Design"',
    time: "1 week ago",
  },
  {
    id: 5,
    message: 'John Doe closed issue "API Response Delay"',
    time: "1 week ago",
  },
  {
    id: 6,
    message: 'Anna Lee assigned task "Database Migration"',
    time: "2 weeks ago",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-[#f2f3f6] p-4 rounded-lg shadow">
      <h2 className="text-lg font-bold text-primary mb-3">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <FcManager
              className="p-2 bg-blue-50 rounded-full shrink-0"
              size={36}
            />
            <div>
              <h3 className="font-medium text-primary">{activity.message}</h3>
              <p className="text-sm text-gray-600">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
