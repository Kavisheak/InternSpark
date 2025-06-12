import React from 'react'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 text-center text-white md:grid-cols-3">
        
      {/* Card 1 */}
      <div className="p-4 bg-transparent border border-gray-300 shadow rounded-2xl">
        <h2 className="mb-2 text-xl font-semibold">Active Internships</h2>
        <p className="text-sm text-gray-200">4</p>
      </div>

      {/* Card 2 */}
      <div className="p-4 bg-transparent border border-gray-300 shadow rounded-2xl">
        <h2 className="mb-2 text-xl font-semibold">Total Applications</h2>
        <p className="text-sm text-gray-200">26</p>
      </div>

      {/* Card 3 */}
      <div className="p-4 bg-transparent border border-gray-300 shadow rounded-2xl">
        <h2 className="mb-2 text-xl font-semibold">New Applications</h2>
        <p className="text-sm text-gray-200">5</p>
      </div>

      
    </div>
  )
}

export default Dashboard
