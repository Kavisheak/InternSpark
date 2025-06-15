import React from 'react';
import './Dashboard.css';
import DashboardRecentApplications from './DashboardRecentApplications';
import DashboardActiveInternships from './DashboardActiveInternships';

const Dashboard = ({gotoMyInternships,goToApplications}) => {

const cards = [
  { title: 'Active Internships', value: '4' },
  { title: 'Total Applications', value: '26' },
  { title: 'New Applications', value: '5' },
];// card contents up

  return (
    <div className='p-4'>
      <h1 className='mb-4 ml-6 text-3xl font-bold text-center text-white'>Company Dashboard</h1>
      <p className="mb-6 text-sm font-medium text-center text-gray-300">
           Monitor and manage your internship postings, track applicant activity, and oversee your company profile <br/> all from one centralized dashboard.
      </p>
      {/* cards */}
    <div className="grid grid-cols-1 gap-4 p-4 text-center text-white md:grid-cols-3">  
    {cards.map((card, index) => (
      <div
        key={index}
        className="p-4 text-black bg-white border border-gray-300 shadow rounded-2xl"
      >
        <h2 className="mb-2 text-xl font-semibold ">{card.title}</h2>
        <p className="text-sm text-gray-800">{card.value}</p>
      </div>
    ))} 
    </div>

   

      <div className="p-6 mx-4 mt-5 space-y-8 bg-transparent rounded-xl">
        <DashboardRecentApplications goToApplications={goToApplications}/>
        <DashboardActiveInternships gotoMyInternships={gotoMyInternships} />
      </div>
    
     
    
    </div>
  )
}

export default Dashboard
