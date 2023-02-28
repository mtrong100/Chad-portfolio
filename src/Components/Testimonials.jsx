import React from "react";
import Heading from "./Heading";
import { testimonials } from "../Data.js";
import { motion } from "framer-motion";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonials = () => {
  const container = {
    hidden: {
      opcity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section id="testimonials">
      <div className="wrapper mt-10 md:mt-20 mb-20">
        <Heading>Testimonials</Heading>

        {/* main content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="mt-10"
        >
          <Swiper
            loop={true}
            grabCursor={true}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              600: {
                slidesPerView: 2,
              },
              400: {
                slidesPerView: 1,
              },
            }}
            style={{
              paddingBottom: "80px",
              "--swiper-pagination-bullet-inactive-color": "#A3C7D6",
            }}
            className="mySwiper"
          >
            {testimonials.map((item, id) => (
              <SwiperSlide key={id}>
                <div
                  key={id}
                  className="shadow-lg p-4 border-box min-h-[470px]"
                >
                  <div className="overflow-hidden group border-[5px]  border-solid border-[#95BDFF] rounded-full w-[250px] h-[250px] mx-auto">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 "
                      src={item.image}
                      alt="testimonials-img"
                    />
                  </div>
                  <h1 className="text-blue text-3xl md:text-xl font-semibold text-center mt-5">
                    {item.name}
                  </h1>
                  <h3 className="font-medium text-center">{item.business}</h3>
                  <p className="mt-4 text-center">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
