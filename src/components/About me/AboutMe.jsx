import Skill from "./Skill";
import "./about_me.scss";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div id="about_me" className="about_me_wrapper">
      <div className="about_me_content">
        <div className="left_side_wrapper">
          <h4>About Me</h4>
          <div className="left_side_top">
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
          <div className="left_side_bottom">
            <h4>Education</h4>
            <ul>
              <li>Bachelor of Computer Software Engineering</li>
              <p>May 2012, Islamic Azad University, Tehran, Iran</p>
              <li>Python Programing (A)</li>
              <p>Fall 2022, BCIT, BC, Canada </p>
              <li>React</li>
              <p>Udemy Certificate</p>
              <li>NodeJS</li>
              <p>Udemy Certificate</p>
            </ul>
          </div>
        </div>
        <div className="right_side_wrapper">
          <h4>Skills</h4>
          <div className="right_side_content">
            <Skill />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
