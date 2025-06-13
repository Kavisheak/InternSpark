import React, { useState } from 'react';
import '../Bg.css';
import { CompanynavItems } from '../../constants/AllConstants';
import Home from './Home';
import MyInternships from './MyInternships';
import CompanyProfile from './CompanyProfile';
import Dashboard from './Dashboard';

const CompanyHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home'); // default active link
  const [activePage, setActivePage] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setActivePage(link);
    setMenuOpen(false); // close mobile menu on selection
  };

  const linkClass = (link) =>
    activeLink === link
      ? 'text-white font-semibold'
      : 'text-blue-200 hover:text-white';

  const renderPage = (link) => {
    switch (link) {
      case 'Dashboard':
        return <Dashboard 
           gotoMyInternships={()=>handleLinkClick('My Internships')}
        /> ;
      case 'My Internships':
        return <MyInternships />;
      case 'Applications':
        return <div className="mt-6 text-white">Applications</div>;
      case 'Profile':
        return <CompanyProfile />;
      default:
        return (
          <Home
            goToInternships={() => handleLinkClick('My Internships')}
            goToProfile={() => handleLinkClick('Profile')}
          />
        );
    }
  };

  return (
    <div className="all-bg">
      <div className="font-sans">
        {/* Navbar fixed at top */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 border rounded-b-lg shadow-sm bg-white/10 backdrop-blur-md border-white/20">
          <span className="text-2xl font-bold text-blue-200">InternSpark</span>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
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
            <button className="px-4 py-1 text-white bg-blue-600 rounded hover:bg-blue-700">
              Logout
            </button>
          </nav>
        </header>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="fixed left-0 right-0 z-50 flex flex-col px-4 py-2 space-y-2 border rounded-b-lg shadow-sm top-16 md:hidden bg-white/10 backdrop-blur-md border-white/20">
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
            <button className="px-4 py-1 text-white bg-blue-600 rounded hover:bg-blue-700">
              Logout
            </button>
          </nav>
        )}
      </div>

      {/* Main content with padding top so navbar doesn't cover */}
      <div className="p-4 pt-20">{renderPage(activePage)}</div>
    </div>
  );
};

export default CompanyHome;
