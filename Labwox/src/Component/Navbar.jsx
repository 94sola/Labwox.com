import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../Component/wrapper';
import { LuChevronDown } from 'react-icons/lu';
import logo from '../assets/image/labwox..png';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 10);

      if (current > 10 && current > lastScroll) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = {
    Company: [
      { label: 'Aim & Vision', link: '/aim' },
      { label: 'FAQ', link: '/faq' },
    ],
  };

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 
        bg-[#efebe7] backdrop-blur-xl
        transition-all duration-500
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        ${scrolled ? "shadow-[0_8px_24px_rgba(0,0,0,0.08)]" : "shadow-none"}
      `}
    >
      <Wrapper>
        <nav className="flex justify-between items-center h-16 md:h-20  px-4 lg:px-8 py-4 relative">

          <Link to="/" className="flex items-center h-12 md:h-14">
            <img src={logo} alt="Labwox Logo" className="h-full w-auto object-contain" />
          </Link>

          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-xl text-black"
            >
              {isMobileMenuOpen ? <IoMdClose /> : '☰'}
            </button>
          </div>

          <div
            className={`
              ${isMobileMenuOpen
                ? 'top-[60px] opacity-100 pointer-events-auto'
                : 'top-[-100vh] opacity-0 pointer-events-none'}
              lg:opacity-100 lg:pointer-events-auto lg:top-0
              transition-all duration-500 ease-in-out
              absolute lg:static left-0 w-full lg:w-auto
              bg-[#efebe7]
              flex flex-col lg:flex-row items-start lg:items-center
              gap-6 lg:gap-10 p-4 lg:p-0 pt-10 lg:pt-0
            `}
          >
            <ul className="flex flex-col lg:flex-row gap-6 text-base lg:text-lg font-light">

              <li>
                <Link to="/" onClick={closeMobileMenu} className="hover:text-gray-600">
                  Home
                </Link>
              </li>

              {Object.entries(menuItems).map(([menu, items]) => (
                <li key={menu} className="relative group w-full lg:w-auto">
                  <button
                    onClick={() =>
                      setActiveDropdown(prev => prev === menu ? null : menu)
                    }
                    className="flex items-center hover:text-gray-600"
                  >
                    {menu}
                    <LuChevronDown
                      className={`ml-2 transition-transform ${
                        activeDropdown === menu ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeDropdown === menu && (
                    <ul className="bg-[#efebe7] mt-1 py-2 shadow-lg rounded-lg lg:absolute lg:w-60">
                      {items.map(item => (
                        <li key={item.label}>
                          <Link
                            to={item.link}
                            onClick={closeMobileMenu}
                            className="block py-2 px-4 hover:bg-gray-700 hover:text-white rounded-lg"
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
                <Link to="/gallery" onClick={closeMobileMenu} className="hover:text-gray-600">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact" onClick={closeMobileMenu} className="hover:text-gray-600">
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
