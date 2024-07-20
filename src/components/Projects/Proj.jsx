import { useState } from "react";
import { useGlobalContext } from "../../Context";
import { my_projects } from "../data";
import { motion } from "framer-motion";
import { DiVim } from "react-icons/di";

export const Proj = () => {
  const { hover_btns, hover_btns_exit } = useGlobalContext();
  const links_cursor_hover_handler = () => {
    hover_btns();
  };

  const links_cursor_exit_hover_handler = () => {
    hover_btns_exit();
  };
  // ************ handle pics click *************

  const handle_pics_click = (prj_url) => {
    window.location.href = prj_url;
  };

  // ********************************************
  const [ProjData, setProjData] = useState();

  return (
    <>
      {my_projects.map((project) => {
        const {
          id,
          name,
          description,
          live_url,
          github_url,
          techs,
          pic1,
          pic2,
          pic3,
        } = project;
        return (
          <div className="project_wrapper" key={id}>
            <div className="left_side">
              <div className="project_title">{name}</div>
              <p className="prj_description">{description}</p>
              <ul className="techs_stack">
                {techs.map((tech) => {
                  const { id, icon, name } = tech;
                  return (
                    <li key={id}>
                      <div>{icon}</div>
                      <p>{name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="right_side">
              <div className="prj_pics_wrapper">
                <div
                  className="desktop_pic"
                  style={{ background: `url(${pic1}) center/cover` }}
                  onClick={() => {
                    handle_pics_click(live_url);
                  }}
                ></div>
                <div
                  className="tablet_pic"
                  style={{ background: `url(${pic2}) center/cover` }}
                  onClick={() => {
                    handle_pics_click(live_url);
                  }}
                ></div>
                <div
                  className="cellphone_pic"
                  style={{ background: `url(${pic3}) center/cover` }}
                  onClick={() => {
                    handle_pics_click(live_url);
                  }}
                ></div>
                <ul className="my_links">
                  <li>
                    <motion.a
                      href={live_url}
                      onMouseOver={links_cursor_hover_handler}
                      onMouseLeave={links_cursor_exit_hover_handler}
                      transition={{ type: "spring", stiffness: 200 }}
                      whileHover={{
                        scale: 1.2,
                        // textShadow: "0px 0px 8px rgb(255,255,255)",
                      }}
                    >
                      Try it live
                    </motion.a>
                  </li>
                  <li>
                    <motion.a
                      href={github_url}
                      onMouseOver={links_cursor_hover_handler}
                      onMouseLeave={links_cursor_exit_hover_handler}
                      transition={{ type: "spring", stiffness: 200 }}
                      whileHover={{
                        scale: 1.2,
                        // textShadow: "0px 0px 8px rgb(255,255,255)",
                      }}
                    >
                      GitHub
                    </motion.a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
