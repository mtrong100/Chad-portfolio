import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import { btns } from "../Data.js";
import { projects } from "../Data.js";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [filterImages, setFilterImages] = useState(null);
  const [active, setActive] = useState(false);

  // only run one-time []
  useEffect(() => {
    setFilterImages(projects);
  }, []);

  const handleCLick = (e) => {
    setActive(e.target.value);
    let btnType = e.target.value;
    const newFilterImages = projects.filter((item) => item.value === btnType);
    btnType !== "all"
      ? setFilterImages(newFilterImages)
      : setFilterImages(projects);
  };

  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="wrapper mt-10 md:mt-20 mb-20"
      >
        <div>
          <Heading>My Project</Heading>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-5 mt-6">
          {btns.map((item, id) => (
            <button
              key={id}
              onClick={handleCLick}
              className={`filter-btn ${
                active === `${item.value}` && "bg-blue"
              }`}
              value={item.value}
            >
              {item.name}
            </button>
          ))}
        </div>
        <AnimatePresence>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {filterImages &&
              filterImages.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  key={item.id}
                  className=" group overflow-hidden rounded-md hover:shadow-2xl transition-all duration-300 relative"
                >
                  <motion.img
                    className="w-full h-full object-cover rounded-md group-hover:scale-110 transition-all duration-500"
                    src={item.image}
                    alt="project-img"
                  />
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
