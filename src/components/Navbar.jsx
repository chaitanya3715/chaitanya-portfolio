import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">Portfolio</span>
            </Link>
            <div className="hidden sm:flex sm:space-x-8">
              <NavLink to="/" active={isActive('/')}>Home</NavLink>
              <NavLink to="/projects" active={isActive('/projects')}>Projects</NavLink>
              <NavLink to="/about" active={isActive('/about')}>About Me</NavLink>
              <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
            </div>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center px-3 py-2 text-sm font-medium ${
        active
          ? 'text-primary border-b-2 border-primary'
          : 'text-gray-500 hover:text-primary'
      }`}
    >
      {children}
    </Link>
  );
}