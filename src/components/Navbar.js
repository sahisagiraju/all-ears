import React, { useState, useEffect } from 'react';
import Logo from '../assets/hank.jsx';
import { FaBars, FaTimes } from 'react-icons/fa';
import { client } from '../sanityClient';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [navData, setNavData] = useState(null);

  const handleClose = () => setNavOpen(false);

  useEffect(() => {
    const fetchNav = async () => {
      try {
        // UPDATED: fetching "footer" instead of "siteSettings"
        const data = await client.fetch(`*[_type == "footer"][0]`);
        setNavData(data);
      } catch (error) {
        console.error("Failed to fetch navbar data:", error);
      }
    };
    fetchNav();
  }, []);

  // ... (Rest of the file stays exactly the same)
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center h-[90px] px-6 bg-white shadow-md font-inter">
      <a href="#root" onClick={handleClose} className="flex items-center h-full">
        <Logo className="h-[80%] w-auto" />
        <span className="font-bold text-lg ml-2 whitespace-nowrap">All Ears Autism Services</span>
      </a>
      <button className="lg:hidden focus:outline-none" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
        {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <div className={`absolute top-full left-0 w-full bg-white shadow-md transition-transform transform origin-top duration-300 lg:static lg:shadow-none lg:bg-transparent lg:transform-none lg:flex lg:justify-end lg:items-center ${navOpen ? 'scale-y-100' : 'scale-y-0'} lg:scale-y-100`}>
        <ul className="list-none flex flex-col gap-4 p-6 m-0 lg:flex-row lg:gap-6 lg:p-0">
          {navData?.navItems?.map((item, index) => (
            <li key={index}>
              <a href={item.link} onClick={handleClose} className="no-underline text-gray-800 font-medium hover:text-[#8D54FC] transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {navData?.navButton && (
          <div className="flex justify-center lg:justify-start p-6 lg:p-0 lg:ml-6">
            <a href={navData.navButton.url} target="_blank" rel="noopener noreferrer" onClick={handleClose} className="bg-[#8D54FC] text-white py-2 px-4 rounded-md font-semibold cursor-pointer font-inter inline-block hover:bg-[#7340d3] transition">
              {navData.navButton.text}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;