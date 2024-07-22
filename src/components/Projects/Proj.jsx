// ************ Icons *************
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";

// ********************************

import { useEffect, useState } from "react";
import { useGlobalContext } from "../../Context";
import { my_projects } from "../data";
import { motion } from "framer-motion";
import { DiVim } from "react-icons/di";

export const Proj = () => {
  const {
    hover_btns,
    hover_btns_exit,
    hover_on_scroll_bar,
    exit_scroll_bar_hover,
  } = useGlobalContext();

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

  // ************ Slider *************
  const [ProjData, setProjData] = useState();
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    let interval_id = setInterval(() => {
      next_slide();
    }, 20000);
    return () => {
      clearInterval(interval_id);
    };
  }, [currentProject]);

  //  ********************************
  const prev_slide = () => {
    if (currentProject > 0) {
      setCurrentProject(currentProject - 1);
    } else {
      setCurrentProject(my_projects.length - 1);
    }
  };
  const next_slide = () => {
    if (currentProject === my_projects.length - 1) {
      setCurrentProject(0);
    } else {
      setCurrentProject(currentProject + 1);
    }
  };

  return (
    <>
      <div className="project_wrapper">
        {my_projects.map((project, project_index) => {
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
            <div
              className="slider_wrapper"
              style={{
                transform: `translateX(${
                  (project_index - currentProject) * 120
                }%)`,
                opacity: project_index === currentProject ? 1 : 0,
                visibility:
                  project_index === currentProject ? "visible" : "hidden",
              }}
              key={id}
            >
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
      </div>
      <div className="slider_btns_wrapper">
        <motion.button
          type="button"
          className="slider_btns prev_slide_btn"
          onClick={() => {
            prev_slide();
          }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 250 }}
          whileHover={{
            scale: 2.25,
          }}
        >
          <HiOutlineChevronLeft />
        </motion.button>
        <motion.button
          type="button"
          className="slider_btns next_slide_btn"
          onClick={() => {
            next_slide();
          }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 250 }}
          whileHover={{
            scale: 2.25,
          }}
        >
          <HiOutlineChevronRight />
        </motion.button>
        <div
          onMouseOver={hover_on_scroll_bar}
          onMouseLeave={exit_scroll_bar_hover}
          className="slider_pagination"
        >
          {my_projects.map((project, project_index) => {
            return (
              <motion.li
                key={project_index}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                whileHover={{
                  scale: 2,
                }}
              >
                <a
                  className={
                    currentProject === project_index ? "active_page" : ""
                  }
                  onClick={() => {
                    setCurrentProject(project_index);
                  }}
                ></a>
              </motion.li>
            );
          })}
        </div>
      </div>
    </>
  );
};
