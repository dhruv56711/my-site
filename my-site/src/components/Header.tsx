import React from 'react';
import { FaBars } from 'react-icons/fa';

interface HeaderProps {
  navOpen: boolean;
  setNavOpen: (open: boolean) => void;
}

const Header = ({ navOpen, setNavOpen }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          Y<span className="text-primary">Dhruv</span>
        </a>
        <button 
          className="md:hidden text-xl"
          onClick={() => setNavOpen(!navOpen)}
        >
          <FaBars />
        </button>
        <nav className={`${navOpen ? 'right-0' : '-right-full'} 
          fixed top-0 w-3/4 max-w-xs h-screen bg-white shadow-lg 
          transition-all duration-300 md:static md:w-auto md:h-auto md:shadow-none md:right-auto`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-8 md:p-0">
            {['Home', 'Skills', 'Education', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="font-medium hover:text-primary"
                  onClick={() => setNavOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;