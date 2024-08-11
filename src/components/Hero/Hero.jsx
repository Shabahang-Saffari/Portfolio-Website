import { useGlobalContext } from "../../Context";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";
import "./hero.scss";

const hero_title_p1 = "WEB";
const hero_title_p2 = "DEVELOPER";
const hero_title_array1 = hero_title_p1.split("");
const hero_title_array2 = hero_title_p2.split("");

const Hero = () => {
  const { activate_page, active_page } = useGlobalContext();

  // **************   Acitvate Page   ****************
  useEffect(() => {
    const handle_scroll = () => {
      const page_height = window.innerHeight;
      const scroll_position = window.scrollY;
      let new_active_page = Math.ceil((scroll_position + 1) / page_height);
      if (scroll_position === 0) {
        new_active_page = 0;
        activate_page(new_active_page);
      }
      // console.log("scroll_position", scroll_position);
      // console.log("page_height", page_height);
      // console.log("new_active_page", new_active_page);

      // if (new_active_page !== active_page) {
      //   activate_page(new_active_page);
      // }
    };
    window.addEventListener("scroll", handle_scroll);
    return () => {
      window.removeEventListener("scroll", handle_scroll);
    };
  }, [active_page]);
  // *************************************************

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
          <div className="hero_title_p1">
            {hero_title_array1.map((char) => {
              return <span key={nanoid()}>{char}</span>;
            })}
          </div>
          <div className="hero_title_p2">
            {hero_title_array2.map((char) => {
              return <span key={nanoid()}>{char}</span>;
            })}
          </div>

          <div className="my_sentence">
            <div className="curlies">{"{"}</div>
            <p>
              Transforming lines of code into innovative solutions.
              <small>
                My name is Shabahang Saffari. I am a detail-oriented software
                developer dedicated to crafting seamless user experiences and
                scalable applications, actively seeking new challenges and
                opportunities to grow, innovate, and create a lasting impact.
              </small>
            </p>
            <div className="curlies">{"}"}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
