import "./footer.scss";
import { my_website } from "../data";

const Footer = () => {
  return (
    <footer className="footer_wrapper">
      <div className="footer_content">
        <div className="email_wrapper">shabahang.saffari@gmail.com</div>
        <div className="tech_used_wrapper">
          Technology used{" "}
          {my_website.techs.map((tech) => {
            return <li key={tech.id}>{tech.icon}</li>;
          })}
        </div>
        <div className="designed_by_wrapper">© Shabahang Saffari 2024</div>
      </div>
    </footer>
  );
};
export default Footer;
