import React from 'react';
import { Navbar } from './Navbar';
import heroBackground from '../../assets/bg-img.png';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen text-white">
      {/* Navbar (already handled in previous component) */}
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-no-repeat min-h-screen"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: 'center 20%',
        }}
      >
        {/* Hero Content */}
        <div className="
          px-4 md:px-10 lg:pl-40 
          pt-20 
          absolute inset-0 
          flex flex-col 
          items-center md:items-start 
          justify-center 
          text-center md:text-left 
          z-10
        ">
          <h1 className="
            text-white 
            font-extrabold 
            text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl 
            max-w-xl md:max-w-2xl lg:max-w-4xl
            text-center md:text-left
          ">
            Trusted Multi-Chain 
          </h1>
          <h1 className='
            text-3xl sm:text-4xl md:text-5xl 
            font-extrabold 
            text-white 
            mb-4 md:mb-6
            text-center md:text-left
          '>
            <span className="text-yellow-500">DEX</span> Platform
          </h1>
          <p className="
            text-base sm:text-lg 
            text-gray-300 
            mb-6 md:mb-10 
            max-w-md md:max-w-xl 
            text-center md:text-left
          ">
            Trade, earn, and own crypto on the all-in-one multi-chain DEX
          </p>
          <div className="
            flex 
            flex-col sm:flex-row 
            gap-4 sm:gap-6 
            items-center
            w-full
            max-w-md
            justify-center md:justify-start
          ">
            <button className="
              w-full sm:w-auto
              px-6 sm:px-8 
              py-2 sm:py-3 
              bg-yellow-400 
              text-black 
              rounded-full 
              font-medium 
              hover:bg-yellow-50 
              transition
            ">
              Connect Wallet
            </button>
            <button className="
              w-full sm:w-auto
              px-6 sm:px-8 
              py-2 sm:py-3 
              border 
              border-yellow-400 
              text-yellow-400 
              rounded-full 
              font-medium 
              hover:bg-yellow-400 
              hover:text-black 
              transition
            ">
              Trade Crypto
            </button>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};