import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<header className="bg-gradient-to-br font-light text-white px-4 sm:px-30 py-4 relative z-50">

      <div className="max-w-8xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-20 sm:w-24 md:w-40" />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex opacity-90 font-[400] items-center gap-6 text-[clamp(25px,1.2vw,18px)]  text-white/90">
          <Link to="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link to="/about" className="hover:text-cyan-400 transition">About</Link>
          <Link to="/features" className="hover:text-cyan-400 transition">Features</Link>
          <Link to="/solution" className="hover:text-cyan-400 transition">Solution</Link>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 w-full bg-[#0f0f1c] shadow-md py-6 flex flex-col items-center gap-4 transition-all duration-300 ease-in-out">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg hover:text-cyan-400 transition">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg hover:text-cyan-400 transition">About</Link>
          <Link to="/features" onClick={() => setIsOpen(false)} className="text-lg hover:text-cyan-400 transition">Features</Link>
          <Link to="/solution" onClick={() => setIsOpen(false)} className="text-lg hover:text-cyan-400 transition">Solution</Link>
        </div>
      )}
    </header>
  );
}
