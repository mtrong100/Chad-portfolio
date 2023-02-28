import React from "react";
import Heading from "./Heading";
import { blogs } from "../Data.js";
import { motion } from "framer-motion";
const Blog = () => {
  return (
    <section id="blog">
      <div className="wrapper mt-10 md:mt-20 mb-20">
        <Heading>Latest Blogs</Heading>
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-8 mt-10"
        >
          {blogs.map((item, id) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-5 shadow-lg rounded-md dark:bg-darkthird"
              key={id}
            >
              <div className="overflow-hidden group rounded-md">
                <img
                  className="rounded-md group-hover:scale-110 transition-all duration-500"
                  src={item.image}
                  alt="blog-img"
                />
              </div>
              <h1 className="mt-5 font-semibold text-lg lg:text-2xl md:text-xl dark:text-lightText text-blue">
                {item.title}
              </h1>
              <p className="mt-3 md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                remnumquam veritatis porro ex nesciunt, quaerat nulla harum,
                necessitatibus quam laudantium voluptate tempora aspernatur
                facere modi ad! Nesciunt, incidunt quod.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
