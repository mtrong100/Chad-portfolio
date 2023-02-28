import React from "react";
import ScrolltoTop from "./ScrollToTop";

const Footer = () => {
  return (
    <section className="pb-10">
      <div className="wrapper">
        <h3 className="text-center md:text-xl font-medium">
          Copyright © 2023. All Right Reserved.
        </h3>
        <ScrolltoTop></ScrolltoTop>
      </div>
    </section>
  );
};

export default Footer;
