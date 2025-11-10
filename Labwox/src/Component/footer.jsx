import { Link } from "react-router-dom";
import Wrapper from "./wrapper";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import logo from '../assets/image/labwox..png';

const Footer = () => {
  return (
    <Wrapper >
      <footer className="bg-white text-[#153D63] w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center h-20 w-auto md:h-24 transition-transform duration-300 hover:scale-105">
              <img
                src={logo}
                alt="Labwox Logo"
                className="h-full w-auto object-contain"
              />
            </Link>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium leading-snug text-[#153D63]">
              Classic Research, Modern Tools
            </h1>
            <p className="text-[#153D63] text-sm sm:text-base leading-relaxed">
              © Labwox Limited, all rights reserved. <br />
              2B Awori Close, Akora Villas off Adeniyi Jones, Ikeja, Lagos
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a href="#privacy" className="underline text-[#153D63] hover:text-[#153D63]">
                Privacy Policy
              </a>
              <a href="#terms" className="underline text-[#153D63] hover:text-[#153D63]">
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* Company + Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-semibold mb-3">Company</h2>
              <ul className="text-[#153D63] space-y-2 text-sm">
                <li><a href="#/about" className="hover:text-[#153D63]">Products</a></li>
                <li><a href="#/resources" className="hover:text-[#153D63]">Resources</a></li>
                <li><a href="#terms" className="hover:text-[#153D63]">Terms & Conditions</a></li>
                <li><a href="#privacy" className="hover:text-[#153D63]">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
              <ul className="text-[#153D63] space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:info@labwox.com.ng"
                    className="underline hover:text-[#153D63]"
                  >
                    info@labwox.com.ng
                  </a>
                </li>
                <li>(+234) 903 495 6049</li>
              </ul>

              <div className="flex mt-6 gap-5 flex-wrap">
                <a
                  href="https://web.facebook.com/labwoxltd/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#153D63] transition"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/labwoxltd5/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#153D63] transition"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/labwox/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#153D63] transition"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/2349034956049"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#153D63] transition"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Sign up for insights
              </h3>
              <p className="text-sm text-black/60 mb-4">
                Join our newsletter for updates, tools, and behind-the-scenes.
              </p>
              <form
                action="https://yourprefix.us21.list-manage.com/subscribe/post?u=abc123&id=xyz456"
                method="POST"
                target="_blank"
                className="flex flex-col sm:flex-row items-stretch gap-3"
              >
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-3 py-2 border-b border-neutral-800 text-sm text-[#153D63] placeholder:text-neutral-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#153D63] rounded-md hover:bg-[#102B4E] transition whitespace-nowrap"
                >
                  Join <FiArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
