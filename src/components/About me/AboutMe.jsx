import Skill from "./Skill";
import "./about_me.scss";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div id="about_me" className="about_me_wrapper">
      <div className="about_me_content">
        <div className="about_education_wrapper">
          <div className="about_me_section">
            <h4 className="page_title">About Me</h4>
            <p>
              I am a passionate individual with a keen interest in coding and
              the art of crafting clean and efficient code. I believe in the
              power of technology to create elegant solutions, and I am always
              eager to explore new challenges in the world of coding.
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
              <li>Python Programing (Grade A)</li>
              <p>Fall 2022, BCIT, BC, Canada </p>
              <li>NodeJS</li>
              <p>Udemy Certificate</p>
              <li>React</li>
              <p>Udemy Certificate</p>
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
