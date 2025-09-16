import { useState } from "react";
import ProjectOverview from "./ProjectOverView";
import KanbanBoard from "./KanbanBoard";
import Discussion from "./Discussion";

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
          Project Overview
        </li>
        <li
          className={`${
            isActive === 2 && "bg-primary text-white"
          } px-6 py-2 border text-sm font-medium text-primary transition duration-300 border-primary cursor-pointer`}
          onClick={() => setIsActive(2)}
        >
          Kanban Board
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
        {isActive === 1 && <ProjectOverview />}
        {isActive === 2 && <KanbanBoard />}
        {isActive === 3 && <Discussion />}
      </div>
    </div>
  );
};

export default ProjectDetailsStepper;
