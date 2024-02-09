import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";

export const inner_links = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "About Me",
  },
  {
    id: 3,
    url: "#projects",
    text: "projects",
  },
  {
    id: 1,
    url: "#contact",
    text: "contact",
  },
];

export const social_links = [
  {
    id: 1,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/shabahang-saffari",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    name: "Github",
    url: "https://www.github.com/Shabahang-Saffari",
    icon: <GrGithub />,
  },
];
