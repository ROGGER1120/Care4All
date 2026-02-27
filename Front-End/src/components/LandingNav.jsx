import React from 'react';
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const LandingNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;
  const [menuOpen, setMenuOpen] = React.useState(false);

  const pathSegments = location.pathname
    .split('/')
    .filter(Boolean)
    .map((seg, idx, arr) => ({
      name: seg.charAt(0).toUpperCase() + seg.slice(1),
      path: '/' + arr.slice(0, idx + 1).join('/'),
    }));

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setMenuOpen(false);
  };

  const activeStyle =
    "bg-pink-100 text-[#eb008b] px-4 py-1.5 rounded-full font-semibold transition-all text-sm whitespace-nowrap";
  const inactiveStyle =
    "text-gray-600 hover:text-[#eb008b] transition-all font-medium px-4 py-1.5 text-sm whitespace-nowrap";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-poppins">
      {/* Main navbar bar */}
      <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3.5 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-[#eb008b] cursor-pointer shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            Care4All
          </Link>

          {/* Desktop + Tablet links — shown from md breakpoint */}
          <div className="hidden md:flex items-center gap-1 flex-nowrap">
            <button
              onClick={handleHomeClick}
              className={isActive("/") ? activeStyle : inactiveStyle}
            >
              Home
            </button>

            <Link
              to="/about"
              className={isActive("/about") ? activeStyle : inactiveStyle}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={isActive("/contact") ? activeStyle : inactiveStyle}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>

            <a
              href="/login"
              className="ml-3 bg-[#eb008b] hover:bg-[#d0007c] text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-md shadow-pink-200 whitespace-nowrap shrink-0"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-500 hover:text-[#eb008b] transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Breadcrumb — always below the main bar, only on mobile, only when not on root */}
      {pathSegments.length > 0 && (
        <div className="md:hidden bg-pink-50 border-b border-pink-100 px-4 py-1.5 text-xs text-gray-500 flex items-center gap-1">
          {pathSegments.map((seg, idx) => (
            <React.Fragment key={seg.path}>
              <Link to={seg.path} className="text-[#eb008b] font-semibold hover:underline">
                {seg.name}
              </Link>
              {idx < pathSegments.length - 1 && <span className="text-gray-300">/</span>}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-1">
            <button
              onClick={handleHomeClick}
              className={`text-left rounded-xl px-4 py-3 font-semibold text-sm transition-all ${
                isActive("/")
                  ? "bg-pink-50 text-[#eb008b]"
                  : "text-gray-700 hover:bg-gray-50 hover:text-[#eb008b]"
              }`}
            >
              Home
            </button>
            <Link
              to="/about"
              className={`rounded-xl px-4 py-3 font-semibold text-sm transition-all ${
                isActive("/about")
                  ? "bg-pink-50 text-[#eb008b]"
                  : "text-gray-700 hover:bg-gray-50 hover:text-[#eb008b]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`rounded-xl px-4 py-3 font-semibold text-sm transition-all ${
                isActive("/contact")
                  ? "bg-pink-50 text-[#eb008b]"
                  : "text-gray-700 hover:bg-gray-50 hover:text-[#eb008b]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
            <a
              href="/login"
              className="mt-2 bg-[#eb008b] hover:bg-[#d0007c] text-white text-center px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNav;