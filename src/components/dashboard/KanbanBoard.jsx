import { useState } from "react";
import AddTaskModal from "../common/AddTaskModal";

const KanbanBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState({
    pending: [
      {
        id: 1,
        title: "Create brand guidelines",
        assignee: "Mike Chen",
        priority: "High",
      },
      {
        id: 2,
        title: "Research target audience",
        assignee: "Alex Kumar",
        priority: "Medium",
      },
    ],
    progress: [
      {
        id: 3,
        title: "Design landing page",
        assignee: "Mike Chen",
        priority: "High",
      },
      {
        id: 4,
        title: "Set up analytics",
        assignee: "Emma Davis",
        priority: "Low",
      },
    ],
    review: [
      {
        id: 5,
        title: "Content strategy",
        assignee: "Sarah Johnson",
        priority: "Medium",
      },
      {
        id: 6,
        title: "Social media templates",
        assignee: "Alex Kumar",
        priority: "High",
      },
    ],
    complete: [
      {
        id: 7,
        title: "Project kickoff meeting",
        assignee: "Sarah Johnson",
        priority: "High",
      },
      {
        id: 8,
        title: "Initial requirements gathering",
        assignee: "Sarah Johnson",
        priority: "Medium",
      },
    ],
  });

  const [newTask, setNewTask] = useState({
    title: "",
    assignee: "",
    priority: "Medium",
    status: "pending",
  });

  const addTask = () => {
    if (newTask.title.trim()) {
      const task = {
        id: Date.now(),
        title: newTask.title,
        assignee: newTask.assignee || "Unassigned",
        priority: newTask.priority,
      };

      setTasks((prev) => ({
        ...prev,
        [newTask.status]: [...prev[newTask.status], task],
      }));

      setNewTask({
        title: "",
        assignee: "",
        priority: "Medium",
        status: "pending",
      });
      setIsModalOpen(false);
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const columns = [
    { key: "pending", title: "Pending", color: "bg-gray-100" },
    { key: "progress", title: "In Progress", color: "bg-blue-100" },
    { key: "review", title: "In Review", color: "bg-orange-100" },
    { key: "complete", title: "Complete", color: "bg-green-100" },
  ];

  // Drag-and-Drop Handlers
  const onDragStart = (e, taskId, sourceColumn) => {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ taskId, sourceColumn })
    );
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, targetColumn) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    const { taskId, sourceColumn } = data;

    if (sourceColumn !== targetColumn) {
      const task = tasks[sourceColumn].find((t) => t.id === taskId);
      if (task) {
        setTasks((prev) => ({
          ...prev,
          [sourceColumn]: prev[sourceColumn].filter((t) => t.id !== taskId),
          [targetColumn]: [...prev[targetColumn], task],
        }));
      }
    }
  };

  return (
    <div className="space-y-4">
      {/* Add Task Button */}
      <div className="flex justify-end items-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/95 hover:shadow transition-colors cursor-pointer"
        >
          Add Task
        </button>
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((column) => (
          <div
            key={column.key}
            className={`${column.color} p-4 rounded-lg`}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, column.key)}
          >
            <h4 className="font-semibold text-gray-800 mb-3 lg:text-lg flex items-center justify-between border-b pb-2 border-gray-400">
              {column.title}
              <span className="text-sm bg-white px-2 py-1 rounded-full">
                {tasks[column.key].length}
              </span>
            </h4>
            <div className="space-y-3">
              {tasks[column.key].map((task) => (
                <div
                  key={task.id}
                  className="bg-white p-3 rounded-lg shadow-sm border cursor-move"
                  draggable
                  onDragStart={(e) => onDragStart(e, task.id, column.key)}
                >
                  <h5 className="font-medium text-gray-800 mb-2">
                    {task.title}
                  </h5>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{task.assignee}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                        task.priority
                      )}`}
                    >
                      {task.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <AddTaskModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />
    </div>
  );
};

export default KanbanBoard;
