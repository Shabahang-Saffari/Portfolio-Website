import { Proj } from "./Proj";
import "./projects.scss";
import { useGlobalContext } from "../../Context";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Projects = () => {
  const { activate_page } = useGlobalContext();

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      activate_page(2);
    }
  }, [inView]);

  return (
    <div ref={ref} className="project_page_wrapper" id="project">
      <div className="project_page_content">
        <h4>Projects</h4>
        <Proj />
      </div>
    </div>
  );
};
export default Projects;
