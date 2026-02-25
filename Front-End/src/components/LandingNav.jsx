import { useLocation, useNavigate, Link } from "react-router-dom";

const LandingNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const activeStyle = "bg-pink-200 text-pink-800 px-4 py-1 rounded-full font-medium transition";
  const inactiveStyle = "text-gray-600 hover:text-pink-600 transition font-medium px-4 py-1";

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 shadow-md z-50 font-poppins backdrop-blur-sm">
      <div className="w-full px-10 md:px-20 py-4 flex items-center justify-between ">
        
        <Link
          to="/"
          className="text-3xl font-bold text-pink-600 cursor-pointer"
        >
          Care4All
        </Link>

        <div className="flex items-center gap-6">
          <button
            onClick={handleHomeClick}
            className={isActive("/") ? activeStyle : inactiveStyle}
          >
            Home
          </button>

          <Link 
            to="/about" 
            className={isActive("/about") ? activeStyle : inactiveStyle}
          >
            About Us
          </Link>

          <Link 
            to="/contact" 
            className={isActive("/contact") ? activeStyle : inactiveStyle}
          >
            Contact Us
          </Link>

          <a href="/login" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-semibold transition whitespace-nowrap ml-4">
            DONATE NOW
          </a>
        </div>

      </div>
    </nav>
  );
};

export default LandingNav;