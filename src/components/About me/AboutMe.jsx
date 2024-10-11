import { useEffect } from "react";
import { useGlobalContext } from "../../Context";
import { useInView } from "react-intersection-observer";

import Skill from "./Skill";
import "./about_me.scss";
import { motion } from "framer-motion";

const AboutMe = () => {
  const { activate_page } = useGlobalContext();

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      activate_page(1);
    }
  }, [inView]);

  return (
    <div ref={ref} id="about_me" className="about_me_wrapper">
      <div className="about_me_content">
        <div className="about_education_wrapper">
          <div className="about_me_section">
            <h4 className="page_title">About Me</h4>
            <p>
              I am a hard working and passionate individual with a keen interest
              in coding and the art of crafting clean and efficient code. I
              believe in the power of technology to create elegant solutions,
              and I am always eager to explore new challenges in the world of
              coding.
            </p>
          </div>
          <div className="work_experience">
            <h4>Work Experience</h4>
            <ul>
              <li>Lead Full Stack Developer, KeelWorks</li>
              <p>Washington, United States, March 2024 - Current</p>
            </ul>
          </div>
          <div className="education_section">
            <h4>Education</h4>
            <ul>
              <li>Bachelor of Science in Computer Software Engineering</li>
              <p>May 2012, Islamic Azad University, Tehran, Iran</p>
              <li>Master of Music</li>
              <p>January 2019, University of Victoria, Victoria, BC, Canada</p>
              <li>Python Programming (Grade A)</li>
              <p>Fall 2022, BCIT, BC, Canada </p>
              <li>Node.js (comperehensive back-end course)</li>
              <p>Udemy Certificate, 2023</p>
              <li>React (comprehensive front-end course)</li>
              <p>Udemy Certificate, 2024</p>
            </ul>
          </div>
        </div>
        <div className="skill_section_wrapper">
          <div className="skill_section_content">
            <h4>Skills</h4>
            <Skill />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
