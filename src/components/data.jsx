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
    href: "#about_me",
    text: "About Me",
  },
  {
    id: 3,
    href: "#project",
    text: "projects",
  },
  {
    id: 4,
    href: "#contact",
    text: "contact",
  },
];

export const social_links = [
  {
    id: 5,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/shabahang-saffari",
    icon: <FaLinkedin />,
  },
  {
    id: 6,
    name: "GitHub",
    url: "https://www.github.com/Shabahang-Saffari",
    icon: <GrGithub />,
  },
];
