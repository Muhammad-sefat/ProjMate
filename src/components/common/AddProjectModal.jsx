import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const AddProjectModal = ({ isModalOpen, setIsModalOpen }) => {
  const [members, setMembers] = useState([""]);

  const addMember = () => setMembers([...members, ""]);

  const updateMember = (index, value) => {
    const newMembers = [...members];
    newMembers[index] = value;
    setMembers(newMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div className="h-[80vh] overflow-y-auto">
      <div
        className={`${
          isModalOpen ? "visible" : "invisible"
        } fixed inset-0 z-[2000] flex items-center justify-center bg-black/40 transition-all`}
      >
        <div
          className={`${
            isModalOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%] bg-white rounded-lg p-6 transition-all duration-300`}
        >
          <div className="flex items-center justify-between mb-6    ">
            <h2 className="text-2xl font-semibold text-primary w-full">
              Add Project
            </h2>
            <div className="w-full flex justify-end">
              <RxCross1
                className="p-2 text-3xl rounded-full cursor-pointer bg-blue-100 hover:bg-blue-200 transition-all ease-in-out"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Project Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter project name"
                  className="w-full px-3 text-sm py-2 border rounded-md bg-blue-50 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Client Name
                </label>
                <input
                  type="text"
                  name="client"
                  placeholder="Enter client name"
                  className="w-full text-sm px-3 py-2 border rounded-md bg-blue-50 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Project Lead
                </label>
                <input
                  type="text"
                  name="lead"
                  placeholder="Enter project lead"
                  className="w-full text-sm px-3 py-2 border rounded-md bg-blue-50 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Members
                </label>
                {members.map((member, index) => (
                  <input
                    key={index}
                    type="text"
                    value={member}
                    onChange={(e) => updateMember(index, e.target.value)}
                    className="w-full mb-2 text-sm px-3 py-2 border rounded-md bg-blue-50 focus:outline-none"
                    placeholder={`Member ${index + 1}`}
                  />
                ))}
                <button
                  type="button"
                  onClick={addMember}
                  className="text-primary text-sm mt-1"
                >
                  + Add another member
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                className="w-full text-sm px-3 py-2 border rounded-md bg-blue-50 focus:outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full text-sm cursor-pointer py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-all"
            >
              Save Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProjectModal;
