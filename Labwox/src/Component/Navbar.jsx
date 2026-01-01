import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../Component/wrapper";
import { LuChevronDown } from "react-icons/lu";
import logo from "../assets/image/labwox..png";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current <= 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = {
    Company: [
      { label: "Aim & Vision", link: "/aim" },
      { label: "FAQ", link: "/faq" },
    ],
  };

  return (
    <header
      className={`fixed left-0 w-full z-40 bg-[#efebe7] text-black transition-all duration-500 ${
        visible ? "top-14 opacity-100" : "-top-20 opacity-0"
      }`}
    >
      <Wrapper>
        <nav className="flex justify-between items-center px-4 lg:px-8 py-2 relative">

          {/* LOGO */}
          <Link to="/" className="flex items-center h-12 md:h-14">
            <img src={logo} alt="Labwox Logo" className="h-full w-auto object-contain" />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-2xl"
            >
              {isMobileMenuOpen ? <IoMdClose /> : "☰"}
            </button>
          </div>

          {/* MENU */}
          <div
            className={`absolute lg:static left-0 w-full lg:w-auto bg-[#efebe7] transition-all duration-500 
            ${isMobileMenuOpen ? "top-[60px] opacity-100" : "top-[-120vh] opacity-0"}
            lg:opacity-100 lg:top-0 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6
            p-5 lg:p-0 pt-16 lg:pt-0`}
          >
            <ul className="flex flex-col lg:flex-row gap-4 text-sm lg:text-base font-light">

              {/* HOVER UNDERLINE STYLE */}
              <style>
                {`
                  .nav-link {
                    position: relative;
                  }
                  .nav-link::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -2px;
                    width: 0%;
                    height: 1.5px;
                    background: #000;
                    transition: width .3s ease;
                  }
                  .nav-link:hover::after {
                    width: 100%;
                  }
                `}
              </style>

              <li>
                <Link to="/" onClick={closeMobileMenu} className="nav-link">
                  Home
                </Link>
              </li>

              {/* DROPDOWN */}
              {Object.entries(menuItems).map(([menu, items]) => (
                <li key={menu} className="relative">
                  <button
                    onClick={() =>
                      setActiveDropdown(prev => (prev === menu ? null : menu))
                    }
                    className="flex items-center nav-link"
                  >
                    {menu}
                    <LuChevronDown
                      className={`ml-1 w-3 h-3 transition-transform duration-300 ${
                        activeDropdown === menu ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Animated Dropdown */}
                  <ul
                    className={`bg-[#efebe7] rounded-md border border-gray-300 lg:absolute lg:w-44 z-50 mt-2
                    transition-all duration-300 origin-top
                    ${
                      activeDropdown === menu
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {items.map(item => (
                      <li key={item.label}>
                        <Link
                          to={item.link}
                          onClick={closeMobileMenu}
                          className="block py-2 px-3 text-sm hover:bg-gray-700 hover:text-white rounded-md"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              <li>
                <Link to="/gallery" onClick={closeMobileMenu} className="nav-link">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact" onClick={closeMobileMenu} className="nav-link">
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
