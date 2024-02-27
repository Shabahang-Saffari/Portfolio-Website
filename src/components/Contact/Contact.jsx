import "./contact.scss";
import { useGlobalContext } from "../../Context";
import { motion } from "framer-motion";

const button_variants = {
  hover: {
    y: [5, 0, 5],
    textShadow: "0px 0px 10px rgb(255,255,255)",
    transition: {
      y: { repeat: Infinity, duration: 1.5 },
    },
  },
};

const Contact = () => {
  const { hover_on_available, exit_available_hover } = useGlobalContext();

  // **************   Available btn   *******************

  const cursor_hover_handler = () => {
    hover_on_available();
  };

  const cursor_exit_hover_handler = () => {
    exit_available_hover();
  };

  return (
    <div className="contact_page_wrapper" id="contact">
      <div className="contact_page_content">
        <h4>Contact Me</h4>
        <form>
          <label htmlFor="users_name_input">Your Name</label>
          <input
            type="text"
            id="users_name_input"
            className="message_input"
            placeholder="Enter your name"
          />
          <label htmlFor="email_input">Your Email</label>
          <input
            type="text"
            id="email_input"
            className="message_input"
            placeholder="Enter your Email"
          />
          <label htmlFor="users_message" className="users_name_label">
            Your Message
          </label>
          <textarea
            name=""
            id="users_message"
            placeholder="Type your message here."
          ></textarea>
          <div className="btn_container">
            <motion.button
              onMouseOver={cursor_hover_handler}
              onMouseLeave={cursor_exit_hover_handler}
              variants={button_variants}
              whileHover="hover"
            >
              Send
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
