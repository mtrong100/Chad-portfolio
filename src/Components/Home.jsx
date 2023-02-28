import React from "react";
import hero from "../assets/hero.png";
import { motion } from "framer-motion";
import Button from "./Button";

const Home = () => {
  return (
    <section id="home" className="pt-24">
      <div className="wrapper grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-heroShadow border-[4px] border-solid border-blue group"
        >
          <img
            src={hero}
            alt="hero-img"
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
          />
        </motion.div>
        {/* content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center md:text-start text-xl text-grey font-semibold mb-3">
            Yes Chad
          </h1>
          <h4 className="text-5xl text-blue mb-2 font-semibold">Chad Wojak</h4>
          <p className="lg:text-lg">
            Yes Chad, also known as Nordic Gamer, refers to a drawn image of a
            blond man with blue eyes often wearing a beard, usually captioned
            "Yes" and to the original Wojak Comics format based on the
            character. The image is a subformat of Nordic / Mediterranean 4chan
            meme and originated on Twitter in early August 2019.
          </p>
          <Button>Contact me</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
