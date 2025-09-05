import { useState } from "react";

const ProjectDetailsStepper = () => {
  const [isActive, setIsActive] = useState(1);

  return (
    <div>
      <h2 className="text-xl lg:text-2xl font-semibold text-primary">
        Marketing Campaign
      </h2>

      {/* Tabs */}
      <ul className="flex items-center my-2">
        <li
          className={`${
            isActive === 1 && "bg-primary text-white"
          } px-6 py-2 border text-sm font-medium text-primary transition duration-300 border-primary cursor-pointer`}
          onClick={() => setIsActive(1)}
        >
          Project Details
        </li>
        <li
          className={`${
            isActive === 2 && "bg-primary text-white"
          } px-6 py-2 border text-sm font-medium text-primary transition duration-300 border-primary cursor-pointer`}
          onClick={() => setIsActive(2)}
        >
          Progress
        </li>
        <li
          className={`${
            isActive === 3 && "bg-primary text-white"
          } px-6 py-2 border text-primary text-sm font-medium transition duration-300 border-primary cursor-pointer`}
          onClick={() => setIsActive(3)}
        >
          Discussion
        </li>
      </ul>

      {/* Dynamic Content */}
      <div className="mt-4 p-4 border rounded bg-gray-50">
        {isActive === 1 && (
          <p className="text-gray-700">
            📌 Project details: Here you can see the goals, requirements, and
            timeline of the Marketing Campaign.
          </p>
        )}
        {isActive === 2 && (
          <p className="text-gray-700">
            📊 Progress: 65% completed. Tasks are on track and milestones are
            being achieved.
          </p>
        )}
        {isActive === 3 && (
          <p className="text-gray-700">
            💬 Discussion: Team members can share updates, issues, and ideas
            related to the project here.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsStepper;
