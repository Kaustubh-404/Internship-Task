import { BsMessenger } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import { PiBirdFill } from "react-icons/pi";
import logo from "../../assets/logo.png";

const Links = ["About us", "Roadmap", "FAQ", "Contact Us"];

const Footer = () => {
  return (
    <footer className="bg-[#051422] py-10 mt-20 mb-5">
      <div className="container h-[35vh] mx-auto flex flex-wrap justify-center items-center gap-8 lg:gap-16 px-4">
        {/* Logo and Links Section */}
        <div className="flex flex-col items-center lg:flex-row lg:justify-between w-full lg:w-3/4 gap-8">
          {/* Logo */}
          <img src={logo} alt="logo" className="h-16 lg:h-20 w-auto" />

          {/* Links */}
          <nav className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {Links.map((item, index) => (
              <a
                key={index}
                href={item === "FAQ" ? "#faqs" : "#"}
                className="text-white text-sm sm:text-base lg:text-lg font-medium capitalize hover:text-yellow-500 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact and Social Media Section */}
        <div className="flex flex-col items-center gap-6">
          {/* Contact Button */}
          <button className="py-3 px-7 font-bold text-white text-xl lg:text-2xl bg-transparent border border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition-all">
            Contact Us
          </button>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-yellow-500 transition">
              <BsMessenger size={25} />
            </a>
            <a href="#" className="text-white hover:text-yellow-500 transition">
              <FaReddit size={25} />
            </a>
            <a href="#" className="text-white hover:text-yellow-500 transition">
              <PiBirdFill size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
