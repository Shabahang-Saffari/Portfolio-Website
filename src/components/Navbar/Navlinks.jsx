import { inner_links, social_links } from "../data";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../Context";
import "./navbar.scss";

const Navlinks = () => {
  const { hover_btns, hover_btns_exit } = useGlobalContext();

  const links_cursor_hover_handler = () => {
    hover_btns();
  };

  const links_cursor_exit_hover_handler = () => {
    hover_btns_exit();
  };

  return (
    <motion.ul
      className="nav_links"
      exit={{ opacity: 0.4, y: 8, transition: { duration: 0.1 } }}
      key={"nav_links"}
    >
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
            }}
          >
            <a
              href={link.href}
              onMouseOver={links_cursor_hover_handler}
              onMouseLeave={links_cursor_exit_hover_handler}
            >
              {link.text}
            </a>
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
            }}
          >
            <a
              href={link.url}
              onMouseOver={links_cursor_hover_handler}
              onMouseLeave={links_cursor_exit_hover_handler}
            >
              {link.name}
            </a>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
export default Navlinks;
