import { inner_links, social_links } from "./data";
import { motion } from "framer-motion";

const Navlinks = () => {
  return (
    <ul className="nav_links">
      {inner_links.map((link) => {
        return (
          <motion.li
            key={link.id}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover={{
              scale: 1.1,
              y: -6,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              fontWeight: "bold",
            }}
          >
            <a href={link.url}>{link.text}</a>
          </motion.li>
        );
      })}
      {social_links.map((link) => {
        return (
          <motion.li
            key={link.id}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover={{
              scale: 1.1,
              y: -6,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              fontWeight: "bold",
            }}
          >
            <a href={link.url}>{link.name}</a>
          </motion.li>
        );
      })}
    </ul>
  );
};
export default Navlinks;
