import React from "react";

const Heading = ({ children }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">{children}</h1>
      <div className="w-24 h-1 bg-blue"></div>
    </div>
  );
};

export default Heading;
