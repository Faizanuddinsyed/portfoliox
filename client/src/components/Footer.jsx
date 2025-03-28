import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white py-20 mt-1">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left Side - Copyright */}
        <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Syed Faizanuddin.  ||  All rights reserved.</p>

        {/* Middle - Navigation Links */}
        <ul className="flex space-x-6 mt-4 md:mt-0">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-yellow-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>

        {/* Right Side - Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaTwitter size={24} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
