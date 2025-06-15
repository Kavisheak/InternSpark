import React from 'react';

const applications = [
  { name: 'Sarah Johnson', role: 'Frontend Developer Intern', status: 'New', statusColor: 'bg-purple-500 text-white' },
  { name: 'Michael Chen', role: 'UX Design Intern', status: 'Reviewing', statusColor: 'bg-gray-200 text-gray-800' },
  { name: 'Alex Washington', role: 'Data Science Intern', status: 'Interviewing', statusColor: 'border border-gray-400 text-black bg-white' },
];

const DashboardRecentApplications = ({goToApplications}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">Recent Applications</h2>
        <button className="px-4 py-1 text-sm text-white border border-white rounded hover:bg-white/10" onClick={goToApplications}>View All</button>
      </div>

      <div className="space-y-3">
        {applications.map((app, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-3 border rounded-lg shadow-sm bg-white/10 backdrop-blur-sm border-white/20"
          >
            <div>
              <p className="font-semibold text-white">{app.name}</p>
              <p className="text-sm text-gray-200">Applied for {app.role}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`text-xs px-3 py-1 rounded-full ${app.statusColor} font-medium`}>
                {app.status}
              </span>
              <button className="text-sm text-blue-200 hover:underline">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardRecentApplications;
