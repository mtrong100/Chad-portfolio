import React, { useEffect, useState } from "react";
import { BiChevronUp } from "react-icons/bi";
const ScrolltoTop = () => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setDisplay(window.scrollY > 400);
    });
  }, []);

  return (
    <>
      {display && (
        <div className="w-[50px] h-[50px] flex z-[2] items-center shadow-lg bg-blue rounded-full justify-center fixed right-[5%] bottom-3">
          <a href="#home">
            <BiChevronUp className="text-3xl text-white"></BiChevronUp>
          </a>
        </div>
      )}
    </>
  );
};

export default ScrolltoTop;
