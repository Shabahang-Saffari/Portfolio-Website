import "./project.scss";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="project_wrapper" id="project">
      <div className="project_content">
        <h4>Project</h4>
        <div className="prj_items_wrapper">
          <motion.div
            className="desktop_pic"
            whileHover={{ scale: 1.1 }}
          ></motion.div>
          <div className="tablet_pic"></div>
          <div className="cellphone_pic"></div>
        </div>
      </div>
    </div>
  );
};
export default Project;
