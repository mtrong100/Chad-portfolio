import React from "react";
import Heading from "./Heading";
import { contacts } from "../Data.js";
import Button from "./Button";

const Contact = () => {
  return (
    <section id="contact">
      <div className="wrapper mt-10 md:mt-20 mb-20">
        <Heading>Contact me</Heading>
        <div className="mt-10 grid md:grid-cols-2 gap-3 md:gap-10 h-[500px] bg-slate-200 p-5 md:p-9 rounded-md dark:bg-darksecondary">
          <div className="flex flex-col gap-7">
            {contacts.map((item, id) => (
              <div className="flex md:flex-row gap-3 items-center" key={id}>
                <span className="text-xl md:text-2xl text-blue font-semibold">
                  {item.icon}
                </span>
                <p className="text-sm lg:text-lg font-medium">{item.text}</p>
              </div>
            ))}
            <input
              className="border-box p-3 dark:placeholder-white placeholder-blue"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="border-box p-3 dark:placeholder-white placeholder-blue"
              type="text"
              placeholder="Enter your email"
            />
            <div className="hidden md:block">
              <Button>Send message</Button>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center w-full">
            <textarea
              className="resize-none border-[2px] bg-slate-200 dark:text-white dark:placeholder-white dark:bg-darksecondary text-black placeholder-blue outline-blue outline-solid outline-2 rounded-md border-blue p-3 w-full h-full"
              placeholder="Write something..."
            ></textarea>
          </div>
          <div className="md:hidden">
            <Button>Send message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
