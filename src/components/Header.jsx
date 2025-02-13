import React, { useState } from 'react';
import Logo from '../images/header/logo.png';
import Burger from '../images/header/icons8-menu-256.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="flex flex-row items-center bg-[#0e182b] justify-between lg:justify-around md:max-h-[80px] md:pt-10">
        <div className="flex flex-row items-center w-full px-4 py-2 max-w-min mr-20 md:max-h-[70px]">
          <div className="flex flex-row items-center max-h-[130px] min-w-full max-w-min">
            <img src={Logo} alt="Logo" className="w-[60px] md:w-[100px] lg:w-[130px] h-auto mr-2" />
            <h2 className="text-white text-xl font-black leading-none md:text-3xl lg:text-4xl">
              FBI <br />
              <span className="tracking-widest text-red-700 ">MOST</span> <br />
              WANTED
            </h2>
          </div>
        </div>
        <div className={`lg:flex lg:flex-row lg:gap-x-6  text-white/80 text-2xl hidden items-center ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
          <a href="https://www.independent.co.uk/topic/fbi" target="_blank">
            <h2 className="relative cursor-pointer group">
              <span className="font-bold text-red-700 text-[29px] group-hover:after:block group-hover:after:w-full group-hover:after:h-1 group-hover:after:bg-red-700 group-hover:after:absolute group-hover:after:left-0 group-hover:after:content:'' group-hover:after:transition-all group-hover:after:duration-500"></span>
              <span className="text-3xl font-bold text-red-700">Hot</span>News
            </h2>
          </a>
          <a href="#">
            <h2 className="relative cursor-pointer group">
              <span className="group-hover:after:block group-hover:after:w-full group-hover:after:h-1 group-hover:after:bg-red-700 group-hover:after:absolute group-hover:after:left-0 group-hover:after:content:'' group-hover:after:transition-all group-hover:after:duration-500"></span>
              Divisions
            </h2>
          </a>
          <a href="#">
            <h2 className="relative cursor-pointer group">
              <span className="group-hover:after:block group-hover:after:w-full group-hover:after:h-1 group-hover:after:bg-red-700 group-hover:after:absolute group-hover:after:left-0 group-hover:after:content:'' group-hover:after:transition-all group-hover:after:duration-500"></span>
              Action
            </h2>
          </a>
        </div>
        <div className="flex flex-row items-center gap-x-6 md:gap-x-10">
          <div>
            <img
              className="lg:hidden md:max-h-[110px] max-h-[70px] cursor-pointer max-w-min"
              src={Burger}
              alt="Burger Icon"
              onClick={handleMobileMenuClick}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col md:flex-row bg-[#0e182b] text-white/80 text-2xl items-center justify-around py-2 lg:hidden md:md:pt-[40px]">
          <a href="https://www.independent.co.uk/topic/fbi" target="_blank">
            <h2 className="relative cursor-pointer group">
              <span className="text-3xl font-bold text-red-700">Hot</span>News
            </h2>
          </a>
          <a href="#">
            <h2 className="relative cursor-pointer group">
              <span className="group-hover:after:block group-hover:after:w-full group-hover:after:h-1 group-hover:after:bg-red-700 group-hover:after:absolute group-hover:after:left-0 group-hover:after:content:'' group-hover:after:transition-all group-hover:after:duration-500"></span>
              Divisions
            </h2>
          </a>
          <a href="#">
            <h2 className="relative cursor-pointer group">
              <span className="group-hover:after:block group-hover:after:w-full group-hover:after:h-1 group-hover:after:bg-red-700 group-hover:after:absolute group-hover:after:left-0 group-hover:after:content:'' group-hover:after:transition-all group-hover:after:duration-500"></span>
              Action
            </h2>
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
