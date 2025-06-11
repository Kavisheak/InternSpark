import React, { useState } from 'react';
import '../Bg.css';
import { CompanynavItems } from '../../constants/AllConstants';
import Home from './Home';

const CompanyHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home'); // "Home" is active in default for both
  const [activePage, setActivePage]= useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setActivePage(link);
  };

  const linkClass = (link) =>
    activeLink === link
      ? 'text-white font-semibold'
      : 'text-blue-200 hover:text-white';

  const renderPage=(link) =>{
    switch (link) {
   
    case 'DashBoard':
      return <div className="mt-6 text-white">DashBoard</div>;
    case 'My Internships':
      return <div className="mt-6 text-white">My internships</div>;
    case 'Applications':
      return <div className="mt-6 text-white">Applications</div>;
    case 'Profile':
      return <div className="mt-6 text-white">Profile</div>;
    default:
      return <Home/>;
  }
  }    

  return (
    <div className="all-bg">
      <div className="font-sans">
        {/* Navbar */}
        <header
          className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white/10 backdrop-blur-md border-white/20"
        >
          <span className="text-2xl font-bold text-blue-200">InternSpark</span>

          {/* Mobile Menu Button */}
          <button
            className="font-semibold text-blue-200 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✖' : '☰'}
          </button>

          {/* Desktop Nav */}
          <nav className="items-center hidden space-x-6 md:flex">
            {CompanynavItems.map((item) => (
              <a
                key={item}
                href="#"
                className={linkClass(item)}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item);
                }}
              >
                {item}
              </a>
            ))}
            <button className="px-4 py-1 text-white bg-blue-600 rounded hover:bg-blue-700">Logout</button>
          </nav>
        </header>

        {/* Mobile Nav */}
        {menuOpen && (
          <div
            className="flex flex-col px-4 py-2 space-y-2 border rounded-b-lg shadow-sm md:hidden bg-white/10 backdrop-blur-md border-white/20"
          >
            {CompanynavItems.map((item) => (
              <a
                key={item}
                href="#"
                className={linkClass(item)}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item);
                }}
              >
                {item}
              </a>
            ))}
            <button className="px-4 py-1 text-white bg-blue-600 rounded hover:bg-blue-700">Logout</button>
          </div>
        )}
      </div>
      // 2. Inside return, below mobile nav
      <div className="p-4">
        {renderPage(activePage)}
      </div>

    </div>
  );
};

export default CompanyHome;
