const ProjectOverview = () => {
  return (
    <div className="space-y-6">
      {/* Project Header */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Marketing Campaign 2024
            </h3>
            <p className="text-gray-600 mt-2">
              Digital marketing campaign for product launch
            </p>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            Active
          </span>
        </div>

        {/* Key Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800">Start Date</h4>
            <p className="text-blue-600">Jan 15, 2024</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-800">Deadline</h4>
            <p className="text-orange-600">Mar 30, 2024</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800">Budget</h4>
            <p className="text-green-600">$25,000</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-800">Progress</h4>
            <p className="text-purple-600">65%</p>
          </div>
        </div>
      </div>

      {/* Client Information */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">
          Client Information
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-600">Company</p>
            <p className="font-medium text-gray-800">TechStart Inc.</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Contact Person</p>
            <p className="font-medium text-gray-800">John Smith</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-medium text-gray-800">john@techstart.com</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Phone</p>
            <p className="font-medium text-gray-800">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">
          Team Members
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Sarah Johnson", role: "Project Manager", avatar: "SJ" },
            { name: "Mike Chen", role: "Designer", avatar: "MC" },
            { name: "Emma Davis", role: "Developer", avatar: "ED" },
            { name: "Alex Kumar", role: "Marketing Specialist", avatar: "AK" },
          ].map((member, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
            >
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                {member.avatar}
              </div>
              <div>
                <p className="font-medium text-gray-800">{member.name}</p>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">
          Resources & Links
        </h4>
        <div className="space-y-3">
          <a
            href="#"
            className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-sm">F</span>
            </div>
            <div>
              <p className="font-medium text-blue-800">Figma Design Files</p>
              <p className="text-sm text-blue-600">
                View wireframes and mockups
              </p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
              <span className="text-white text-sm">D</span>
            </div>
            <div>
              <p className="font-medium text-green-800">
                Project Documentation
              </p>
              <p className="text-sm text-green-600">
                Requirements and specifications
              </p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
              <span className="text-white text-sm">G</span>
            </div>
            <div>
              <p className="font-medium text-purple-800">Google Drive</p>
              <p className="text-sm text-purple-600">Shared files and assets</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
