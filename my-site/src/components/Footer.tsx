import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="text-2xl font-bold mb-4">
          Y<span className="text-primary">Dhruv</span>
        </div>

        <div className="flex justify-center space-x-8 my-6">
          {['Home', 'Skills', 'Education', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex justify-center space-x-4 my-6">
          <a
            href="https://github.com/dhruv56711"
            className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/dhruv-yadav-15yd"
            className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-gray text-sm">
          © {new Date().getFullYear()} Dhruv Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;