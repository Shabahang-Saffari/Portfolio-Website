import { nanoid } from "nanoid";

const hero_title = "WEB DEVELOPER";
const hero_title_array = hero_title.split("");

const Hero = () => {
  return (
    <div className="hero_wrapper">
      <div className="hero_title">
        {hero_title_array.map((char) => {
          return <span key={nanoid()}>{char}</span>;
        })}
      </div>
    </div>
  );
};
export default Hero;
