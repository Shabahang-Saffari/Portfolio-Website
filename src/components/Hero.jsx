import { nanoid } from "nanoid";
import { motion } from "framer-motion";

const hero_title = "WEB DEVELOPER";
const hero_title_array = hero_title.split("");

const Hero = () => {
  return (
    <div className="hero_wrapper">
      <motion.div
        className="hero_title"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 0.25, opacity: 1 }}
        transition={{ type: "spring" }}
        whileHover={{ scale: 1 }}
      >
        {hero_title_array.map((char) => {
          return <span key={nanoid()}>{char}</span>;
        })}
      </motion.div>
    </div>
  );
};
export default Hero;
