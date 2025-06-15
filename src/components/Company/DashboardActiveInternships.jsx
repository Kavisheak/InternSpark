import React from 'react';
import { FiCalendar } from 'react-icons/fi';

const DashboardActiveInternships = ({ gotoMyInternships }) => {
  const internships = [
    {
      title: 'Frontend Developer Intern',
      deadline: 'May 20, 2025',
      applications: 9,
    },
    {
      title: 'UI/UX Intern',
      deadline: 'May 30, 2025',
      applications: 3,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mt-10 mb-6 ">
        <h2 className="text-2xl font-semibold text-white">Your Active Internships</h2>
        <button
          className="px-4 py-1 text-sm text-white border border-white rounded hover:bg-white/10"
          onClick={gotoMyInternships}
        >
          Manage All
        </button>
      </div>

      {internships.map((intern, index) => (
        <div
          key={index}
          className="flex flex-col px-4 py-4 mb-3 border rounded-lg shadow-sm bg-white/10 backdrop-blur-sm border-white/20 md:flex-row md:justify-between md:items-center"
        >
          <div>
            <p className="font-semibold text-white">{intern.title}</p>
            <p className="flex items-center gap-1 text-sm text-gray-200">
              <FiCalendar className="w-4 h-4 text-gray-300" />
              Deadline: {intern.deadline}
            </p>
          </div>
          <div className="flex items-center mt-3 space-x-4 md:mt-0">
            <span className="px-3 py-1 text-sm font-medium text-gray-600 rounded-full bg-green-50">
              {intern.applications} Applications
            </span>
            <button className="px-3 py-1 text-sm text-white border border-gray-300 rounded hover:bg-white/10">
              Edit
            </button>
            <button className="text-sm text-blue-300 hover:underline">View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardActiveInternships;
