import { skills } from "../data";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div className="skills_wrapper">
      {skills.map((skill) => {
        const { category, items } = skill;
        return (
          <div className="skill_wrapper" key={nanoid()}>
            <div className="category">{category}</div>
            <div className="items_wrapper">
              {items.map((item) => {
                const { id, name, icon } = item;
                return (
                  <motion.div
                    className="item"
                    key={id}
                    whileHover={{ scale: 1.5 }}
                  >
                    <div className="icon">{icon && icon}</div>
                    <div className="item_name">{name}</div>{" "}
                  </motion.div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Skill;
