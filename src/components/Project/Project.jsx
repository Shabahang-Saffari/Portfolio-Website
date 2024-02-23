import "./project.scss";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="project_wrapper" id="project">
      <div className="project_content">
        <h4>Project</h4>
        <div className="prj_items_wrapper">
          <div className="prj_pics_wrapper">
            <div className="desktop_pic"></div>
            <div className="tablet_pic"></div>
            <div className="cellphone_pic"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
