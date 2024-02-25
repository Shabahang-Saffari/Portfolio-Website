import { nanoid } from "nanoid";
import { motion } from "framer-motion";
import "./hero.scss";

const hero_title = "WEB DEVELOPER";
const hero_title_array = hero_title.split("");

const Hero = () => {
  return (
    <div id="home" className="hero_wrapper">
      <div className="hero_title_wrapper">
        <motion.div
          className="hero_title"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 150 }}
          whileHover={{ scale: 1.1 }}
        >
          {hero_title_array.map((char) => {
            return <span key={nanoid()}>{char}</span>;
          })}
          <p className="my_sentence">
            Transforming lines of code into innovative solutions.
            <br />
            <small>
              Detail-oriented developer with an insatiable thirst for knowledge,
              constantly seeking new challenges and opportunities to grow,
              innovate, and make a lasting impact in the digital landscape.
            </small>
          </p>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
