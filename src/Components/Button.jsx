import React from "react";

const Button = ({ children }) => {
  return (
    <div className="btn mt-4 relative border-[2px] text-center overflow-hidden cursor-pointer rounded-full border-blue border-solid px-6 font-medium py-3 inline-block">
      {children}
    </div>
  );
};

export default Button;
