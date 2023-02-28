import React from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { services, serviceFinishes } from "../Data.js";

const Services = () => {
  return (
    <section id="services">
      <div className="wrapper mt-10 md:mt-20 mb-20">
        <Heading>My Services</Heading>
        {/* service box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mt-10"
        >
          {services.map((item, id) => (
            <div
              className="animated-box overflow-hidden shadow-md rounded-md p-4"
              key={id}
            >
              <div className="flex gap-4 items-center">
                <span className="text-blue text-3xl">{item.icon}</span>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <p className="opacity-80 mt-4 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                ratione mollitia aliquid laudantium veritatis dolorem optio
                commodi, alias facilis. Doloremque dolorum repellendus,
                recusandae non illo vel cum dicta ad distinctio?
              </p>
            </div>
          ))}
        </motion.div>
        {/* service item */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
        >
          {serviceFinishes.map((item, id) => (
            <div
              className="text-center border-box p-8 rounded-md animated-box overflow-hidden"
              key={id}
            >
              <span className="flex justify-center text-blue mb-4 text-3xl">
                {item.icon}
              </span>
              <p className="mb-4 text-lg font-medium">{item.text}</p>
              <span className="text-5xl font-bold text-blue">
                {item.amount}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
