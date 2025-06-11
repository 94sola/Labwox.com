import { useState } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../Component/wrapper';
import { LuChevronDown, LuChevronRight } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
    setActiveSubDropdown(null);
  };

  const toggleSubDropdown = (submenu) => {
    setActiveSubDropdown((prev) => (prev === submenu ? null : submenu));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const menuItems = {
    Resources: [
      { label: 'Method Development and Validation', link: '/mdv' },
      { label: 'Pollutants Research', link: '/pollutant' },
      { label: 'Food Contaminants Research', link: '/contaminant' },
      { label: 'Phytochemical Research', link: '/phyto' },
    ],
    Services: [
      { label: 'ChemXpert', id: 'ChemXpert' },
      { label: 'LabSoft', id: 'LabSoft' },
      { label: 'Consulting', id: 'consulting' },
      { label: 'Application Training', id: 'training' },
    ],
    Contacts: [
      { label: 'Contact us', link: '/contact' },
      { label: 'About us', link: '/about' },
    ],
    Company: [
      { label: 'Gallery', link: '/gallery' },
      { label: 'Aim & Vision', link: '/about' },
      { label: 'FAQ', link: '/about' },
    ],
  };

  const subMenus = {
    ChemXpert: [
      { label: 'Collaboration', link: '/collaboration' },
      { label: 'Research', link: '/research' },
    ],
    LabSoft: [
      { label: 'LabSoft for Laboratories', link: '/lab' },
      { label: 'LabSoft for Academics', link: '/lab/lecturer' },
    ],
  };

  return (
    <header className="bg-[#efebe7] text-black sticky top-0 left-0 w-full z-50">
      <Wrapper>
        <nav className="flex justify-between items-center px-4 lg:px-8 py-4 relative">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-black hover:text-gray-600 z-50">
            <div className="logo text-2xl lg:text-4xl font-bold">
              <span style={{ color: '#153D63' }}>labwox</span>
              <span style={{ color: '#FFC000' }}>.</span>
            </div>
          </Link>

          {/* Mobile Hamburger & Close Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-3xl text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <IoMdClose /> : '☰'}
            </button>
          </div>

          {/* Nav Links */}
          <div
            className={`${
              isMobileMenuOpen
                ? 'top-[75px] opacity-100 pointer-events-auto'
                : 'top-[-100vh] opacity-0 pointer-events-none'
            } lg:opacity-100 lg:pointer-events-auto lg:top-0 transition-all duration-300 ease-in-out absolute lg:static left-0 w-full lg:w-auto bg-[#efebe7] flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 p-6 lg:p-0 pt-20 lg:pt-0`}
          >
            <ul className="flex flex-col lg:flex-row gap-6 text-lg lg:text-xl font-light w-full lg:w-auto">
              <li>
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="capitalize hover:text-gray-600"
                >
                  Home
                </Link>
              </li>

              {Object.entries(menuItems).map(([menu, items]) => (
                <li key={menu} className="relative group w-full lg:w-auto">
                  <button
                    onClick={() => toggleDropdown(menu)}
                    className="flex items-center justify-between w-full lg:w-auto capitalize hover:text-gray-600"
                  >
                    {menu}
                    {items.length > 0 && (
                      <LuChevronDown
                        className={`ml-2 w-4 h-4 transition-transform ${
                          activeDropdown === menu ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Main Dropdown */}
                  {activeDropdown === menu && (
                    <ul className="bg-[#efebe7] text-black mt-2 py-2 shadow-lg rounded-lg z-50 w-full lg:w-60 lg:absolute lg:top-full lg:left-0">
                      {items.map((item) => (
                        <li key={item.label} className="relative w-full group">
                          {item.link ? (
                            <Link
                              to={item.link}
                              onClick={closeMobileMenu}
                              className="block py-2 px-4 hover:bg-gray-600 rounded-lg"
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <button
                              onClick={() => toggleSubDropdown(item.id)}
                              className="w-full flex items-center justify-between py-2 px-4 hover:bg-gray-600 rounded-lg"
                            >
                              {item.label}
                              <LuChevronRight
                                className={`ml-2 w-5 h-5 transition-transform ${
                                  activeSubDropdown === item.id ? 'rotate-90' : ''
                                }`}
                              />
                            </button>
                          )}

                          {/* Sub Dropdown */}
                          {item.id && activeSubDropdown === item.id && (
                            <ul
                              className={`bg-[#efebe7] text-black py-2 shadow-lg rounded-lg z-50 w-full lg:w-56 mt-2 lg:mt-0
                                ${isMobileMenuOpen ? 'relative left-0' : 'absolute left-full top-0'}
                              `}
                            >
                              {subMenus[item.id].map((sub) => (
                                <li key={sub.label}>
                                  <Link
                                    to={sub.link}
                                    onClick={closeMobileMenu}
                                    className="block py-2 px-4 hover:bg-gray-600 rounded-lg"
                                  >
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Navbar;
