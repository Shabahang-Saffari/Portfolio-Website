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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos modi
              sunt dolorum, hic earum sequi est similique reiciendis rerum vel
              pariatur nisi explicabo expedita reprehenderit quo ea at ut
              laboriosam, doloribus quam animi excepturi? Illo, dolores hic
              repellendus quam obcaecati odit consequatur, expedita amet laborum
              quas magni. Ducimus, laboriosam reiciendis!
            </p>
          </div>
          <div className="left_side_bottom"></div>
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
