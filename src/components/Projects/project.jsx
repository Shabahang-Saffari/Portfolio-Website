import { projects } from "../data";

const Project = () => {
  return projects.map((project) => {
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
            ></div>
            <div
              className="tablet_pic"
              style={{ background: `url(${pic2}) center/cover` }}
            ></div>
            <div
              className="cellphone_pic"
              style={{ background: `url(${pic3}) center/cover` }}
            ></div>
          </div>
          <ul className="my_links">
            <li>
              <a href={live_url}>Try it live</a>
            </li>
            <li>
              <a href={github_url}>GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    );
  });
};
export default Project;
