import React, { useEffect, useState } from "react";
import { navLinks } from "../Data.js";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { GiLuchador } from "react-icons/gi";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import useDarkMode from "../useDarkMode.js";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsTop(window.scrollY > 20);
    });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        isTop ? "shadow-lg dark:bg-darksecondary bg-ghostWhite" : ""
      }`}
    >
      <div className="wrapper flex item-center justify-between py-5">
        <div className="flex items-center gap-3">
          <GiLuchador className="text-4xl text-blue"></GiLuchador>
          <p className="text-xl font-semibold">
            Chad <span className="opacity-80">Wojak</span>
          </p>
          {isDarkMode ? (
            <MdLightMode
              onClick={() => toggleDarkMode(!isDarkMode)}
              className="ml-2 text-3xl cursor-pointer"
            ></MdLightMode>
          ) : (
            <MdDarkMode
              onClick={() => toggleDarkMode(!isDarkMode)}
              className="ml-2 text-3xl cursor-pointer"
            ></MdDarkMode>
          )}
        </div>
        {/* menu on desktop */}
        <div className="lg:flex hidden items-center md:gap-6 lg:gap-10">
          {navLinks.map((item, id) => (
            <div key={id}>
              <a
                className="styleNavLinkHover lg:text-lg font-medium hover:text-blue hover:before:w-full transition-all duration-300 relative "
                href={`#${item.href}`}
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>
        <HiMenuAlt3
          onClick={() => setToggle(!toggle)}
          className="text-3xl lg:hidden font-bold cursor-pointer transition-all"
        ></HiMenuAlt3>
      </div>

      {/* menu toggle */}
      <div
        className={`fixed top-0 right-0 bottom-0 dark:bg-darksecondary shadow-2xl bg-blue md:w-[300px] w-[250px] transition-all duration-300 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-5 px-5 flex flex-col items-stretch gap-6">
          <div className="flex justify-between items-center pb-5   border-b-2 border-white">
            <div className="flex items-center gap-2">
              <GiLuchador className="text-4xl text-white"></GiLuchador>
              <p className="text-base text-white">
                Chad <span className="opacity-80">Wojak</span>
              </p>
            </div>
            <HiX
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl font-bold"
            ></HiX>
          </div>
          <div className="flex flex-col gap-8 pt-6 ml-4">
            {navLinks.map((item, id) => (
              <div key={id}>
                <a
                  className="text-white md:text-xl text-lg font-normal"
                  href={`#${item.href}`}
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
