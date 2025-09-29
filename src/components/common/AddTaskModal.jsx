import { RxCross1 } from "react-icons/rx";
import CommonInput from "./CommonInput";

const AddTaskModal = ({
  isModalOpen,
  setIsModalOpen,
  newTask,
  setNewTask,
  addTask,
}) => {
  return (
    <div className="h-[80vh] overflow-y-auto">
      <div
        className={`fixed inset-0 z-[2000] flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
          isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[40%] bg-white rounded-lg p-6 transform transition-all duration-300 ${
            isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-primary">
              Add New Task
            </h2>
            <div className="flex justify-end">
              <RxCross1
                className="p-2 text-3xl rounded-full cursor-pointer bg-blue-100 hover:bg-blue-200 transition-all ease-in-out"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <h4 className="font-semibold mb-3">Task Details</h4>
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
              <CommonInput
                options={["High", "Medium", "Low"]}
                defaultLabel={newTask.priority || "Select Priority"}
                onChange={(option) =>
                  setNewTask({ ...newTask, priority: option })
                }
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <CommonInput
                options={["pending", "progress", "review", "complete"]}
                defaultLabel={newTask.status || "Select Status"}
                onChange={(option) =>
                  setNewTask({ ...newTask, status: option })
                }
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex space-x-2">
              <button
                onClick={addTask}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-900 transition-colors cursor-pointer"
              >
                Add Task
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-orange-600 transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
