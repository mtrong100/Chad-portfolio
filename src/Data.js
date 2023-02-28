import { ImPencil } from "react-icons/im";
import { BsShop, BsHeart, BsWatch, BsStar } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import { TiDeviceDesktop } from "react-icons/ti";
import { TbSpeakerphone } from "react-icons/tb";

import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";
import project4 from "./assets/project4.jpg";
import project5 from "./assets/project5.jpg";
import project6 from "./assets/project6.jpg";
import project7 from "./assets/project7.png";

import blog1 from "./assets/blog1.png";
import blog2 from "./assets/blog2.png";
import blog3 from "./assets/blog3.png";
import blog4 from "./assets/blog4.png";

import testimonial1 from "./assets/testimonial1.png";
import testimonial2 from "./assets/testimonial2.png";
import testimonial3 from "./assets/testimonial3.png";
import testimonial4 from "./assets/testimonial4.png";
import testimonial5 from "./assets/testimonial5.png";
import testimonial6 from "./assets/testimonial6.png";

import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoMailRead } from "react-icons/go";

export const navLinks = [
  {
    id: 1,
    text: "Home",
    href: "home",
  },
  {
    id: 2,
    text: "Projects",
    href: "projects",
  },
  {
    id: 3,
    text: "Services",
    href: "services",
  },
  {
    id: 4,
    text: "Blog",
    href: "blog",
  },
  {
    id: 5,
    text: "Testimonials",
    href: "testimonials",
  },
  {
    id: 6,
    text: "Contact",
    href: "contact",
  },
];

export const services = [
  {
    id: 1,
    icon: <ImPencil />,
    title: "Copywrite",
  },
  {
    id: 2,
    icon: <BsShop />,
    title: "Ecommerce",
  },
  {
    id: 3,
    icon: <TiDeviceDesktop />,
    title: "Web Design",
  },
  {
    id: 4,
    icon: <TbSpeakerphone />,
    title: "Marketing",
  },
];
export const serviceFinishes = [
  {
    id: 1,
    icon: <BsHeart />,
    text: "Happy Clients",
    amount: 566,
  },
  {
    id: 2,
    icon: <BsWatch />,
    text: "Working Hours",
    amount: 5335,
  },
  {
    id: 3,
    icon: <BsStar />,
    text: "Awards Won",
    amount: 13,
  },
  {
    id: 4,
    icon: <BiCoffeeTogo />,
    text: "Coffee Consumed",
    amount: 1189,
  },
];
export const btns = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "UI/UX", value: "ui/ux" },
  { id: 3, name: "Web Design", value: "web design" },
  { id: 4, name: "Marketing", value: "marketing" },
];

export const projects = [
  {
    id: 1,
    image: project1,
    value: "web design",
  },
  {
    id: 2,
    image: project2,
    value: "ui/ux",
  },
  {
    id: 3,
    image: project3,
    value: "ui/ux",
  },
  {
    id: 4,
    image: project4,
    value: "web design",
  },
  {
    id: 5,
    image: project5,
    value: "ui/ux",
  },
  {
    id: 6,
    image: project6,
    value: "marketing",
  },
  {
    id: 7,
    image: project7,
    value: "marketing",
  },
];

export const blogs = [
  {
    id: 1,
    image: blog1,
    title: "Hades 2 Official Reveal Trailer | The Game Awards 2022",
  },
  {
    id: 2,
    image: blog2,
    title:
      "Insane Dark Arts - Hogwarts Legacy Open world Gameplay (Clearing Outposts)",
  },
  {
    id: 3,
    image: blog3,
    title: "ATOMIC HEART All Robot Girls Scenes 4K",
  },
  {
    id: 4,
    image: blog4,
    title: "Sons Of The Forest Gameplay - What Terrors Will We Find?",
  },
];

export const testimonials = [
  {
    id: 1,
    image: testimonial1,
    name: "Chad Pepe",
    business: "Pepe the frog",
    desc: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
  },
  {
    id: 2,
    image: testimonial2,
    name: "Chad CJ",
    business: "Here we go again",
    desc: "ALL WE HAD TO DO WAS FOLLOW THE DAMN TRAIN CJ!",
  },
  {
    id: 3,
    image: testimonial3,
    name: "Chad Negga",
    business: "Black Lives Matter",
    desc: "Whether you think you can or you think you can’t, you’re right.",
  },
  {
    id: 4,
    image: testimonial4,
    name: "Chad Miyazaki",
    business: "Bonfire lit",
    desc: "Death is equitable, accepting. We will all, one day, be welcomed by her embrace.",
  },
  {
    id: 5,
    image: testimonial5,
    name: "Chad Cat",
    business: "Meow Grrr",
    desc: "Meow MeowMeowMeow ... MeowMeowMeowMeow owww MeowMeowMeowMeow... Meow",
  },
  {
    id: 6,
    image: testimonial6,
    name: "Chad Women",
    business: "Lick my armpits",
    desc: "I have learned over the years that when one’s mind is made up, this diminishes fear.",
  },
];

export const contacts = [
  {
    id: 1,
    icon: <TfiHeadphoneAlt />,
    text: "+959-883-271-929",
  },
  {
    id: 2,
    icon: <HiOutlineLocationMarker />,
    text: "69/96 XXX, Q15, Ligma street TPHCM",
  },
  {
    id: 3,
    icon: <GoMailRead />,
    text: "jhonsmitch2002@gmail.com",
  },
];
