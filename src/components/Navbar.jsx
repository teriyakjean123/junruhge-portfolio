import { useEffect } from "react";
import { FiMenu } from "react-icons/fi";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <div className="fixed top-0 w-full z-40 bg-black backdrop-blur-lg border-b border-black shadow-lg">
      <div className="max-w-6xl mr-auto pl-8 pr-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Junruhge
            <span className="ml-2 bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Bellosillo
            </span>
          </a>

          <div
            className="text-2xl cursor-pointer z-40 md:hidden text-gray-300 hover:text-white transition-colors mr-7"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <FiMenu />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
