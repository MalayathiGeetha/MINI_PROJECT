import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { LiaTimesSolid } from 'react-icons/lia';
import { FaUserCircle } from 'react-icons/fa';
import { FaBars, FaPhone } from 'react-icons/fa6';
import Theme from '../theme/Theme';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/book", label: "Book" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ];

  const handleClick = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setShowProfileMenu(false);
    navigate('/login');
  };
  

  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div className="w-full h-[8ch] bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between px-4 md:px-16 lg:px-28 fixed top-0 z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={Logo} alt="logo" className="w-20 h-auto object-contain rounded-full" />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 text-base font-medium">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.href} onClick={handleClose} className="hover:text-violet-600 transition duration-300">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Actions Section */}
      <div className="flex items-center gap-5">
        {/* Show Profile Icon and Dropdown */}
        {user ? (
          <div className="relative">
            <FaUserCircle
              className="text-2xl cursor-pointer hover:text-violet-600 transition duration-300"
              onClick={handleProfileClick}
            />
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-3 w-48 z-50">
                <p className="font-medium text-center">{user.name || `${user.firstName} ${user.lastName}`}</p>
                <p className="text-sm text-neutral-500 text-center mb-2">{user.email}</p>
                <Link
                  to="/profile"
                  onClick={() => setShowProfileMenu(false)}
                  className="block text-center py-1 hover:text-violet-600 transition duration-300"
                >
                  View Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-red-500 hover:text-red-600 transition duration-300 mt-2"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="text-violet-600 hover:text-violet-500 transition duration-300">
            Login
          </Link>
        )}

        {/* Theme Toggle */}
        <Theme />

        {/* Contact Button */}
        <div className="relative bg-violet-600 rounded-md px-4 py-2 hidden md:flex items-center gap-2 cursor-pointer">
          <FaPhone className="text-neutral-50 text-sm" />
          <div className="text-xs font-normal text-neutral-50 tracking-wide">+91 1234567890</div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={handleClick} className="md:hidden text-neutral-600 dark:text-neutral-300 transition duration-300">
          {open ? <LiaTimesSolid className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-14 left-0 w-full bg-neutral-100 dark:bg-neutral-900 shadow-md flex flex-col gap-4 p-4 z-50">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.href} onClick={handleClose} className="hover:text-violet-600 transition duration-300">
              {link.label}
            </Link>
          ))}
          {user ? (
            <>
              <Link to="/profile" onClick={handleClose} className="hover:text-violet-600 transition duration-300">
                <FaUserCircle className="inline-block mr-1" /> Profile
              </Link>
              <button onClick={handleLogout} className="text-red-500 hover:text-red-600 transition duration-300">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" onClick={handleClose} className="text-violet-600 hover:text-violet-500 transition duration-300">
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
