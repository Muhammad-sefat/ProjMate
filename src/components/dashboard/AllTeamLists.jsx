import { useMemo, useState } from "react";
import { MoveLeft, MoveRight, Pencil, Trash } from "lucide-react";
import SelectInput from "../common/SelectInput";

const AllTeamLists = () => {
  const initialData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      resignation: "No",
      team: "Frontend",
      projects: 3,
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      resignation: "Yes",
      team: "Backend",
      projects: 2,
      status: "Inactive",
    },
    {
      id: 3,
      name: "Alex Kim",
      email: "alex@example.com",
      resignation: "No",
      team: "Design",
      projects: 5,
      status: "Active",
    },
    {
      id: 4,
      name: "Sara Lee",
      email: "sara@example.com",
      resignation: "No",
      team: "Frontend",
      projects: 4,
      status: "Active",
    },
    {
      id: 5,
      name: "Michael Chan",
      email: "michael@example.com",
      resignation: "Yes",
      team: "Backend",
      projects: 1,
      status: "Inactive",
    },
    {
      id: 6,
      name: "Emily Davis",
      email: "emily@example.com",
      resignation: "No",
      team: "Design",
      projects: 6,
      status: "Active",
    },
    {
      id: 7,
      name: "Daniel Brown",
      email: "daniel@example.com",
      resignation: "No",
      team: "Frontend",
      projects: 2,
      status: "Active",
    },
    {
      id: 8,
      name: "Sophia Wilson",
      email: "sophia@example.com",
      resignation: "No",
      team: "Backend",
      projects: 3,
      status: "Active",
    },
    {
      id: 9,
      name: "Chris Evans",
      email: "chris@example.com",
      resignation: "No",
      team: "Design",
      projects: 7,
      status: "Active",
    },
    {
      id: 10,
      name: "Lisa Park",
      email: "lisa@example.com",
      resignation: "Yes",
      team: "Frontend",
      projects: 1,
      status: "Inactive",
    },
  ];

  const [data] = useState(initialData);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // search + filter
  const filteredData = useMemo(() => {
    return data.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(search.toLowerCase()) ||
        member.email.toLowerCase().includes(search.toLowerCase());
      return matchesSearch;
    });
  }, [search, data]);

  // pagination
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Status styling
  const getStatusClasses = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs";
      case "Inactive":
        return "bg-red-100 text-red-700 px-2 py-1 rounded-md text-xs";
      default:
        return "bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs";
    }
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between my-4">
        <h2 className="text-xl font-semibold text-primary">
          Team Members List
        </h2>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search by name/email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border rounded-md bg-blue-50 h-[42px] text-sm"
          />
          <SelectInput
            options={["All", "Frontend", "Backend", "Design", "QA", "PM"]}
          />
          <button className="px-4 h-[42px] bg-primary hover:bg-blue-800 text-sm text-white rounded-md cursor-pointer">
            + Add Member
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-md">
        <table className="w-full text-sm">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-3 text-left">SL</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Resignation</th>
              <th className="p-3 text-left">Team</th>
              <th className="p-3 text-left">Projects</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((member, index) => (
              <tr key={member.id} className="border-t hover:bg-blue-50">
                <td className="p-3">{startIndex + index + 1}</td>
                <td className="p-3">{member.name}</td>
                <td className="p-3">{member.email}</td>
                <td className="p-3">{member.resignation}</td>
                <td className="p-3">{member.team}</td>
                <td className="p-3">{member.projects}</td>
                <td className="p-3">
                  <span className={getStatusClasses(member.status)}>
                    {member.status}
                  </span>
                </td>
                <td className="py-3 text-end flex gap-2 justify-center">
                  <Trash
                    size={16}
                    className="hover:text-red-600 cursor-pointer"
                  />
                  <Pencil
                    size={16}
                    className="hover:text-blue-600 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
            {!filteredData.length && (
              <tr>
                <td colSpan="8" className="text-center text-gray-500 py-6">
                  No team members found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-end space-x-2 mt-4">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 border rounded-full disabled:opacity-50 cursor-pointer"
          >
            <MoveLeft size={18} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`w-8 h-8 border rounded-full cursor-pointer ${
                currentPage === i + 1
                  ? "bg-primary text-white"
                  : "hover:bg-blue-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 border rounded-full disabled:opacity-50 cursor-pointer"
          >
            <MoveRight size={18} />
          </button>
        </div>
      )}
    </>
  );
};

export default AllTeamLists;
