import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    // Prevent body scrolling when mobile menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const handleLinkClick = (target) => {
    setIsMobileMenuOpen(false); // Close the menu
    document.body.style.overflow = 'auto'; // Restore scrolling

    // Navigate to the section
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-20 md:flex max-md:hidden bg-transparent">
        <div className="flex items-center gap-16">
          {/* Logo */}
          <img src={logo} alt="MoonEx" className="pt-2 h-20 w-auto" />

          {/* Navigation Links */}
          <div className="flex gap-16">
            <a href="#home" className="text-lg font-bold text-yellow-400 hover:text-yellow-50 transition-colors">
              Home
            </a>
            <a href="#about" className="text-lg font-bold text-gray-200 hover:text-yellow-400 transition-colors">
              About Us
            </a>
            <a href="#roadmap" className="text-lg font-bold text-gray-200 hover:text-yellow-400 transition-colors">
              Roadmap
            </a>
            <a href="#faqs" className="text-lg font-bold text-gray-200 hover:text-yellow-400 transition-colors">
              FAQs
            </a>
            <a href="#contact" className="text-lg font-bold text-gray-200 hover:text-yellow-400 transition-colors">
              Contact Us
            </a>
          </div>
        </div>

        {/* Connect Wallet Button */}
        <button className="bg-yellow-400 text-black rounded-full hover:bg-yellow-50 px-8 py-3 text-lg font-bold">
          Connect Wallet
        </button>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 w-full z-20 bg-transparent shadow-none overflow-x-hidden">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <img src={logo} alt="MoonEx" className="h-12 w-auto" />

          {/* Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-yellow-400 focus:outline-none z-30 hover:text-yellow-500 transition"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/80 flex flex-col justify-center items-center space-y-8 z-20 transition-all"
            style={{ width: '100vw', height: '100vh' }}
          >
            <a
              href="#home"
              className="text-2xl font-bold text-yellow-400 hover:text-yellow-500 transition-colors"
              onClick={() => handleLinkClick('#home')}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-2xl font-bold text-gray-200 hover:text-yellow-400 transition-colors"
              onClick={() => handleLinkClick('#home')} // Navigates back to Home
            >
              About Us
            </a>
            <a
              href="#roadmap"
              className="text-2xl font-bold text-gray-200 hover:text-yellow-400 transition-colors"
              onClick={() => handleLinkClick('#home')} // Navigates back to Home
            >
              Roadmap
            </a>
            <a
              href="#faqs"
              className="text-2xl font-bold text-gray-200 hover:text-yellow-400 transition-colors"
              onClick={() => handleLinkClick('#faqs')}
            >
              FAQs
            </a>
            <a
              href="#contact"
              className="text-2xl font-bold text-gray-200 hover:text-yellow-400 transition-colors"
              onClick={() => handleLinkClick('#home')} // Navigates back to Home
            >
              Contact Us
            </a>
            <button
              className="bg-yellow-400 text-black rounded-full hover:bg-yellow-50 px-10 py-3 text-lg font-bold mt-4"
              onClick={() => handleLinkClick('#home')} // Navigates back to Home
            >
              Connect Wallet
            </button>
          </div>
        )}
      </nav>
    </>
  );
};
