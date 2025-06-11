import React, { useState } from 'react';

const ContactInfoForm = () => {
  const [formData, setFormData] = useState({
    primaryName: 'Alex Morgan',
    primaryEmail: 'alex.morgan@techcorpsolutions.example',
    primaryPhone: '555-123-4567',
    secondaryName: 'Jordan Taylor',
    secondaryEmail: 'jordan.taylor@techcorpsolutions.example',
    secondaryPhone: '555-987-6543',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log('Saved Contact Info:', formData);
    alert('Contact information saved successfully!');
  };

  return (
    <div className="min-h-screen p-2 ml-0">
      <div className="grid grid-cols-1 gap-6 bg-transparent rounded-lg shadow-md pt-7 md:grid-cols-2">
        
        {/* Primary Contact */}
        <div className="col-span-2">
          <h2 className="mb-2 text-lg font-semibold text-white">Primary Contact</h2>
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Contact Name</label>
          <input
            type="text"
            name="primaryName"
            
            onChange={handleChange}
            placeholder="e.g. Alex Morgan"
            className="block w-full px-3 py-2 mt-1 text-white bg-transparent border border-white rounded-md shadow-sm focus:ring-white focus:border-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            name="primaryEmail"
           
            onChange={handleChange}
            placeholder="e.g. alex@company.com"
            className="block w-full px-3 py-2 mt-1 text-white bg-transparent border border-white rounded-md shadow-sm focus:ring-white focus:border-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Phone Number</label>
          <input
            type="tel"
            name="primaryPhone"
            
            onChange={handleChange}
            placeholder="e.g. 555-123-4567"
            className="block w-full px-3 py-2 mt-1 text-white bg-transparent border border-white rounded-md shadow-sm focus:ring-white focus:border-white"
          />
        </div>

        <div></div>

        {/* Secondary Contact */}
        <div className="col-span-2">
          <h2 className="mt-6 mb-2 text-lg font-semibold text-white">Secondary Contact (Optional)</h2>
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Contact Name</label>
          <input
            type="text"
            name="secondaryName"
            
            onChange={handleChange}
            placeholder="e.g. Jordan Taylor"
            className="block w-full px-3 py-2 mt-1 text-white bg-transparent border border-white rounded-md shadow-sm focus:ring-white focus:border-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            type="email"
            name="secondaryEmail"
            
            onChange={handleChange}
            placeholder="e.g. jordan@company.com"
            className="block w-full px-3 py-2 mt-1 text-white bg-transparent border border-white rounded-md shadow-sm focus:ring-white focus:border-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white">Phone Number</label>
          <input
            type="tel"
            name="secondaryPhone"
            
            onChange={handleChange}
            placeholder="e.g. 555-987-6543"
            className="block w-full px-3 py-2 mt-1 text-white bg-transparent border border-white rounded-md shadow-sm focus:ring-white focus:border-white"
          />
        </div>

        <div></div>

        {/* Save Button */}
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

export default ContactInfoForm;
