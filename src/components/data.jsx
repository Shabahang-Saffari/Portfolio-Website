import BugTracker_desktop from "../pictures/BugTracker_desktop.jpg";
import BugTracker_tablet from "../pictures/BugTracker_tablet.jpg";
import BugTracker_cellphone from "../pictures/BugTracker_cellphone.jpg";
// *************************
// **  Importing Icons  ****
// *************************
import { FaLinkedin, FaTwitter } from "react-icons/fa";

import {
  SiSass,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiMicrosoftazure,
  SiAzuredevops,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import { GrGithub, GrDatabase, GrHeroku } from "react-icons/gr";
import { nanoid } from "nanoid";

// *************************
// ******  NAVLINKS  *******
// *************************

export const inner_links = [
  {
    id: nanoid(),
    href: "#home",
    text: "home",
  },
  {
    id: nanoid(),
    href: "#about_me",
    text: "About Me",
  },
  {
    id: nanoid(),
    href: "#project",
    text: "projects",
  },
  {
    id: nanoid(),
    href: "#contact",
    text: "contact",
  },
];

export const social_links = [
  {
    id: nanoid(),
    name: "Linkedin",
    url: "https://www.linkedin.com/in/shabahang-saffari",
    icon: <FaLinkedin />,
  },
  {
    id: nanoid(),
    name: "GitHub",
    url: "https://www.github.com/Shabahang-Saffari",
    icon: <GrGithub />,
  },
];

// *************************
// *******  SKILLS  ********
// *************************

export const skills = [
  {
    category: "Front-End",
    items: [
      { id: nanoid(), name: "HTML", icon: <FaHtml5 /> },
      { id: nanoid(), name: "CSS", icon: <FaCss3Alt /> },
      { id: nanoid(), name: "SASS", icon: <SiSass /> },
      { id: nanoid(), name: "Javascript", icon: <RiJavascriptFill /> },
      { id: nanoid(), name: "React", icon: <FaReact /> },
      { id: nanoid(), name: "Framer Motion", icon: <TbBrandFramerMotion /> },
    ],
  },

  {
    category: "Back-End",
    items: [
      { id: nanoid(), name: "Node.js", icon: <FaNodeJs /> },
      { id: nanoid(), name: "Express.js", icon: <SiExpress /> },
      { id: nanoid(), name: "Rest API", icon: <GrDatabase /> },
      { id: nanoid(), name: "Postman", icon: <SiPostman /> },
    ],
  },

  {
    category: "Other Programming Languages",
    items: [
      { id: nanoid(), name: "Python", icon: <FaPython /> },
      { id: nanoid(), name: "ASP.NET" },
      { id: nanoid(), name: "C#" },
    ],
  },

  {
    category: "Database",
    items: [
      { id: nanoid(), name: "MS SQL", icon: <SiMicrosoftsqlserver /> },
      { id: nanoid(), name: "MongoDB", icon: <SiMongodb /> },
    ],
  },

  {
    category: "Deployment and Version Control",
    items: [
      { id: nanoid(), name: "Microsoft Azure", icon: <SiMicrosoftazure /> },
      { id: nanoid(), name: "Heroku", icon: <GrHeroku /> },
      // { id: nanoid(), name: "Azure Devops", icon: <SiAzuredevops /> },
      { id: nanoid(), name: "Git", icon: <FaGitAlt /> },
    ],
  },

  {
    category: "Multimedia Tools",
    items: [
      { id: nanoid(), name: "Photoshop", icon: <SiAdobephotoshop /> },
      { id: nanoid(), name: "Illustrator", icon: <SiAdobeillustrator /> },
      {
        id: nanoid(),
        name: "After Effects",
        icon: <SiAdobeaftereffects />,
      },
      {
        id: nanoid(),
        name: "Premiere Pro",
        icon: <SiAdobepremierepro />,
      },
    ],
  },
];

// *************************
// *******  Projects *******
// *************************

export const projects = [
  {
    id: nanoid(),
    name: "BugTracker",
    live_url: "https://www.google.com",
    github_url: "https://github.com/Shabahang-Saffari/BugTracker-Deployed",
    description:
      "This application is a comprehensive full-stack solution, incorporating robust authentication and authorization features. Users can effortlessly sign up, and the admin defines roles and access levels. The application provides a range of functionalities, including project and ticket creation/editing, commenting, and more. Users benefit from a powerful search and filter system, ensuring efficient management and tracking of bugs and issues.",
    techs: [
      { id: nanoid(), name: "NodeJS", icon: <FaNodeJs /> },
      { id: nanoid(), name: "ExpressJS", icon: <SiExpress /> },
      { id: nanoid(), name: "MS SQL", icon: <SiMicrosoftsqlserver /> },
      { id: nanoid(), name: "Javascript", icon: <RiJavascriptFill /> },
      { id: nanoid(), name: "CSS", icon: <FaCss3Alt /> },
      { id: nanoid(), name: "HTML", icon: <FaHtml5 /> },
    ],
    pic1: BugTracker_desktop,
    pic2: BugTracker_tablet,
    pic3: BugTracker_cellphone,
  },
];
