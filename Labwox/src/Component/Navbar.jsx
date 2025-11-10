import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import Wrapper from '../Component/wrapper';
import { LuChevronDown, LuChevronRight } from 'react-icons/lu';
import logo from '../assets/image/labwox..png';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Added states
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // Scroll hide/show logic (exactly as requested)
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current - lastScroll > 40) {
        setHidden(true);       // hide header when scrolling down 40px
      } else if (lastScroll - current > 40) {
        setHidden(false);      // show header when scrolling up 40px
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

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
    Company: [
      { label: 'Aim & Vision', link: '/aim' },
      { label: 'FAQ', link: '/faq' },
    ],
  };

  return (
    <header
      className={`bg-[#efebe7] text-black sticky top-0 left-0 w-full z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Wrapper>
        <nav className="flex justify-between items-center px-4 lg:px-8 py-4 relative">
          <Link to="/" className="flex items-center h-20 w-auto md:h-24 transition-transform duration-300 hover:scale-105">
            <img
              src={logo}
              alt="Labwox Logo"
              className="h-full w-auto object-contain"
            />
          </Link>

          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-3xl text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <IoMdClose /> : '☰'}
            </button>
          </div>

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
                    <LuChevronDown
                      className={`ml-2 w-4 h-4 transition-transform ${
                        activeDropdown === menu ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {activeDropdown === menu && (
                    <ul className="bg-[#efebe7] text-black mt-2 py-2 shadow-lg rounded-lg z-50 w-full lg:w-60 lg:absolute lg:top-full lg:left-0">
                      {items.map((item) => (
                        <li key={item.label} className="relative w-full group">
                          <Link
                            to={item.link}
                            onClick={closeMobileMenu}
                            className="block py-2 px-4 hover:bg-gray-600 hover:text-gray-200 rounded-lg"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              <li>
                <Link
                  to="/gallery"
                  onClick={closeMobileMenu}
                  className="capitalize hover:text-gray-600"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="capitalize hover:text-gray-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};

export default Navbar;
