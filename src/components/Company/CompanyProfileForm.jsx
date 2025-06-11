import React, { useState } from 'react';

const CompanyProfileForm = () => {
  const [formData, setFormData] = useState({
    companyName: 'TechCorp Solutions',
    industry: 'Information Technology',
    companySize: '50-200',
    location: 'San Francisco, CA',
    website: 'https://techcorpsolutions.example',
    email: 'careers@techcorpsolutions.example',
    about: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSave = () => {
    console.log('Saved Data:', formData);
    alert('Company profile saved successfully!');
  };

  const fields = [
    { label: 'Company Name', name: 'companyName', type: 'text', placeholder: 'e.g. TechCorp Solutions' },
    { label: 'Industry', name: 'industry', type: 'text', placeholder: 'e.g. Information Technology' },
    { label: 'Company Size', name: 'companySize', type: 'text', placeholder: 'e.g. 50-200' },
    { label: 'Location', name: 'location', type: 'text', placeholder: 'e.g. San Francisco, CA' },
    { label: 'Website', name: 'website', type: 'text', placeholder: 'e.g. https://techcorpsolutions.example' },
    { label: 'Company Email', name: 'email', type: 'email', placeholder: 'e.g. careers@techcorpsolutions.example' },
  ];

  return (
    <div className="min-h-screen p-2 ml-0">
    
      <div className="grid grid-cols-1 gap-6 bg-transparent rounded-lg shadow-md pt-7 md:grid-cols-2">

        {fields.map(({ label, name, type, placeholder }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-white">{label}</label>
            <input
              type={type}
              name={name}
              onChange={handleChange}
              placeholder={placeholder}
              className="block w-full px-3 py-2 mt-1 text-white bg-transparent border border-white rounded-md shadow-sm focus:ring-white focus:border-white"
            />
          </div>
        ))}

        <div className="col-span-2">
          <label className="block text-sm font-medium text-white">About</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="Write about your company here..."
            className="block w-full px-3 py-2 mt-1 text-white bg-transparent border border-white rounded-md shadow-sm focus:ring-white focus:border-white"
            rows="4"
          />
        </div>

        <div className="flex justify-end col-span-2">
          <button
            onClick={handleSave}
            className="px-4 py-2 text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default CompanyProfileForm;
