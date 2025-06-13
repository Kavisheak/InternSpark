import React, { useState } from 'react';
import CompanyProfileForm from './CompanyProfileForm';
import ContactInfoForm from './ContactInfoForm';

const OutlineButton = ({ text, active, onClick }) => {
  return (

    <button
      onClick={onClick}
      className={`
        flex-1 px-2 py-1 border transition duration-300
        ${active
          ? 'bg-white text-black border-white'
          : 'bg-opacity-10 text-white hover:bg-black hover:text-white cursor-pointer'}
        ${text === 'Company Profile' ? 'rounded-l-md' : 'rounded-r-md'}
        focus:outline-none
      `}
      style={{ minWidth: '120px' }}
    >
      {text}
    </button>
  );
};

const CompanyProfile = () => {
  const [activeTab, setActiveTab] = useState('Company Profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'Company Profile':
       return <CompanyProfileForm/>
      case 'Contact Info':
       return <ContactInfoForm/>
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col p-4 bg-transparent">
      <h1 className='mb-6 ml-6 text-3xl font-bold text-white'>Company Profile</h1>
      <div className='max-w-md'>
      <div className="flex ml-6">
        <OutlineButton
          text="Company Profile"
          active={activeTab === 'Company Profile'}
          onClick={() => setActiveTab('Company Profile')}
        />
        <OutlineButton
          text="Contact Info"
          active={activeTab === 'Contact Info'}
          onClick={() => setActiveTab('Contact Info')}
        />
      </div>
      </div>
      <div className='ml-0' >
      {renderContent()}
      </div>
    </div>
  );
};

export default CompanyProfile;
