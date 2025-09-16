import { useState } from "react";

const KanbanBoard = () => {
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
  const [showAddTask, setShowAddTask] = useState(false);

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
      setShowAddTask(false);
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

  return (
    <div className="space-y-4">
      {/* Add Task Button */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Task Board</h3>
        <button
          onClick={() => setShowAddTask(true)}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Add Task
        </button>
      </div>

      {/* Add Task Modal */}
      {showAddTask && (
        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <h4 className="font-semibold mb-3">Add New Task</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Task title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Assignee"
              value={newTask.assignee}
              onChange={(e) =>
                setNewTask({ ...newTask, assignee: e.target.value })
              }
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <select
              value={newTask.priority}
              onChange={(e) =>
                setNewTask({ ...newTask, priority: e.target.value })
              }
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>
            <select
              value={newTask.status}
              onChange={(e) =>
                setNewTask({ ...newTask, status: e.target.value })
              }
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="pending">Pending</option>
              <option value="progress">In Progress</option>
              <option value="review">In Review</option>
              <option value="complete">Complete</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={addTask}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Add Task
            </button>
            <button
              onClick={() => setShowAddTask(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((column) => (
          <div key={column.key} className={`${column.color} p-4 rounded-lg`}>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center justify-between">
              {column.title}
              <span className="text-sm bg-white px-2 py-1 rounded-full">
                {tasks[column.key].length}
              </span>
            </h4>
            <div className="space-y-3">
              {tasks[column.key].map((task) => (
                <div
                  key={task.id}
                  className="bg-white p-3 rounded-lg shadow-sm border"
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
    </div>
  );
};

export default KanbanBoard;
