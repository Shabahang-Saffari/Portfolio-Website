import { inner_links, social_links } from "./data";
const Navlinks = () => {
  return (
    <ul className="nav_links">
      {inner_links.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.url}>{link.text}</a>
          </li>
        );
      })}
      {social_links.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.url}>{link.name}</a>
          </li>
        );
      })}
    </ul>
  );
};
export default Navlinks;
