import { skills } from "../data";
import { nanoid } from "nanoid";

const Skill = () => {
  return (
    <div className="skills_wrapper">
      {skills.map((skill) => {
        const { category, items } = skill;
        return (
          <div className="skill_wrapper" key={nanoid()}>
            <div className="category">{category}</div>
            <div className="items_wrapper">
              {items.map((item) => {
                const { id, name, icon } = item;
                return (
                  <div className="item" key={id}>
                    <div className="icon">{icon && icon}</div>
                    <div className="item_name">{name}</div>{" "}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>

    // <>
    //   {skills.map((skill) => {
    //     const { category, items } = skill;
    //     return items.map((item) => {
    //       const { id, name, icon } = item;
    //       return (
    //         <div className="skill_wrapper" key={id}>
    //           <div className="category">{category}</div>
    //           <div className="items_wrapper">
    //             <div className="item">
    //               <div className="icon">{icon && icon}</div>
    //               <div className="item_name">{name}</div>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     });
    //   })}
    // </>
  );
};
export default Skill;
