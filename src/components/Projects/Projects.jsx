import Project from "./Project";
import "./projects.scss";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="project_page_wrapper" id="project">
      <div className="project_page_content">
        <h4>Projects</h4>
        <Project />
      </div>
    </div>
  );
};
export default Projects;
