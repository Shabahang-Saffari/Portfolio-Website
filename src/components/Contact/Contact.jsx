import "./contact.scss";
import { useGlobalContext } from "../../Context";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
  const my_form_ref = useRef();
  const { hover_on_available, exit_available_hover } = useGlobalContext();

  // **************   Available btn   *******************

  const cursor_hover_handler = () => {
    hover_on_available();
  };

  const cursor_exit_hover_handler = () => {
    exit_available_hover();
  };

  // **************   Send Email   *******************

  const send_email = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_14s2676", "template_oz2h2mv", my_form_ref.current, {
        publicKey: "thQNDAzkpkqTIxI_F",
      })
      .then(
        () => {
          my_form_ref.current.reset();
          toast.success("Message sent!", { autoClose: 2000 });
          // console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact_page_wrapper" id="contact">
      <ToastContainer position="top-center" />
      <div className="contact_page_content">
        <h4>Contact Me</h4>
        <form ref={my_form_ref} onSubmit={send_email}>
          <label htmlFor="users_name_input">Your Name</label>
          <input
            type="text"
            name="from_name"
            id="users_name_input"
            className="message_input"
            placeholder="Enter your name"
          />
          <label htmlFor="email_input">Your Email</label>
          <input
            type="text"
            name="from_email"
            id="email_input"
            className="message_input"
            placeholder="Enter your Email"
          />
          <label htmlFor="users_message" className="users_name_label">
            Your Message
          </label>
          <textarea
            name="message"
            id="users_message"
            placeholder="Type your message here."
          ></textarea>
          <div className="btn_container">
            <motion.button
              type="submit"
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
