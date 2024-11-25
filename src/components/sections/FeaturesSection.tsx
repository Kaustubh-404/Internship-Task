import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; // assuming you're using this for the tilt effect

const features = [
  {
    title: "Cheapest TXs",
    description: "Exchange popular digital currencies at the cheapest possible transaction price",
    icon: "$"
  },
  {
    title: "CerTIK",
    description: "We are Audited by CerTik. CerTik is the leading security focused ranking platform",
    icon: "🛡️"
  },
  {
    title: "No Contract SetIs",
    description: "No contract sells to fund the marketing wallets",
    icon: "✂️"
  },
  {
    title: "CrossDex Support",
    description: "Exchange popular digital currencies at the cheapest possible transaction price",
    icon: "↔️"
  }
];

// Custom motion animation function for fading in
const fadeIn = (direction = "up", type = "tween", delay = 0, duration = 0.75) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 60 : -60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: type,
      delay: delay,
      duration: duration,
    },
  },
});

const FeaturesComponent = () => {
  return (
    <div className="w-full">
      <h1 className="text-[3rem] max-md:text-[1.8rem] text-center font-bold text-white mt-16">
        Our <span className="text-[#F9D423]">Features</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 px-4 lg:px-0 mt-8">
        {features.map((feature, index) => (
          <Tilt key={index} className="xs:w-[250px] w-full">
            <motion.div
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              initial="hidden"
              animate="show"
              className="w-full p-[1px] rounded-[20px] shadow-card"
            >
              <div className="bg-[#101E29] border border-[#212F39] rounded-[20px] py-7 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-white text-[1.3rem]">{feature.title}</h3>
                <p className="text-gray-400 font-normal leading-tight text-[1.1rem]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default FeaturesComponent;
