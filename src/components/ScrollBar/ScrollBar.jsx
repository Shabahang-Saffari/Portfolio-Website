import { inner_links } from "../data";
import { useGlobalContext } from "../../Context";
import { motion } from "framer-motion";
import "./scroll_bar.scss";

const ScrollBar = () => {
  const {
    active_page,
    activate_page,
    hover_on_scroll_bar,
    exit_scroll_bar_hover,
  } = useGlobalContext();

  const click_handler = (page_id) => {
    activate_page(page_id);
  };

  return (
    <motion.ul
      className="scroll_bar"
      onMouseOver={hover_on_scroll_bar}
      onMouseLeave={exit_scroll_bar_hover}
    >
      {inner_links.map((link) => {
        return (
          <motion.li
            key={link.id}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            whileHover={{
              scale: 2,
            }}
          >
            <a
              href={link.href}
              className={active_page === link.id ? "active_page" : ""}
              onClick={() => {
                click_handler(link.id);
              }}
            ></a>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
export default ScrollBar;
