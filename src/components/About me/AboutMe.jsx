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
              My name is Shabahang. I am a passionate individual with a keen
              interest in coding and the art of crafting clean and efficient
              code. I believe in the power of technology to create elegant
              solutions, and I am always eager to explore new challenges in the
              world of coding.
              {/* I am a
              highly skilled and dedicated developer, holding a bachelor's
              degree in the field. I am enthusiastic about programming and find
              joy in problem-solving. */}
            </p>
          </div>
          <div className="education_section">
            <h4>Education</h4>
            <ul>
              <li>Bachelor of Computer Software Engineering</li>
              <p>May 2012, Islamic Azad University, Tehran, Iran</p>
              <li>Python Programming (Grade A)</li>
              <p>Fall 2022, BCIT, BC, Canada </p>
              <li>NodeJS</li>
              <p>Udemy Certificate, 2023</p>
              <li>React</li>
              <p>Udemy Certificate, 2024</p>
              <li>Master of Music</li>
              <p>January 2019, University of Victoria, Victoria, BC, Canada</p>
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
