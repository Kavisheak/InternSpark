import React, { useState } from 'react';
import CompanyProfileForm from './CompanyProfileForm';
import ContactInfoForm from './ContactInfoForm';

const OutlineButton = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex-1 px-2 py-1 border border-white
        transition duration-300
        ${active
          ? 'text-white'
          : 'text-white/70 hover:bg-white hover:text-black cursor-pointer'}
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
      <div className='max-w-md'>
      <div className="flex">
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
