import { BsMessenger } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import { PiBirdFill } from "react-icons/pi";
import logo from '../../assets/logo.png'

const Links = ["About us", "Roadmap", "FAQ", "Contact Us"];

const Footer = () => {
  return (
    <div className="pt-40 pb-5">
    <div className="bg-[#051422]  h-[45vh] 2xl:px-10 w-full flex max-lg:flex-col max-lg:gap-8 items-center justify-center">
      <div className="flex items-center max-lg:flex-col gap-4 2xl:gap-48 max-lg:w-full w-3/4">
        <img src={logo} alt="logo" className="h-20 w-auto pt-2 " />
        <div className="lg:gap-20 gap-4 grid max-sm:hidden sm:grid-cols-4">
          {Links.map((item, index) => (
            <a
              className=" text-white text-[1.2rem] whitespace-nowrap capitalize font-medium cursor-pointer hover:text-yellow-500 transition-all ease-in-out duration-200"
              key={index}
              href={item === "FAQ" ? "#faqs" : "#"} // Update the FAQ link to scroll to #faqs
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-5 max-lg:mt-5 -translate-y-10">
        <button className="py-3 px-7 font-bold text-white text-3xl">
          Contact <span className="text-yellow-500">Us</span>
        </button>
        <div className="flex gap-10 justify-center items-center text-white">
          <a href="#">
            <BsMessenger size={30} />
          </a>
          <a href="#">
            <FaReddit size={30} />
          </a>
          <a href="#">
            <PiBirdFill size={30} />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;

