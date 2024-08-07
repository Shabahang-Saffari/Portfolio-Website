import "./contact.scss";
import { useGlobalContext } from "../../Context";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { useInView } from "react-intersection-observer";

import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

import { social_links } from "../data";

const Contact = () => {
  const my_form_ref = useRef();
  const user_name_ref = useRef();
  const user_email_ref = useRef();
  const user_msg_ref = useRef();

  const {
    hover_on_available,
    exit_available_hover,
    dark_mode,
    activate_page,
    hover_on_scroll_bar,
    exit_scroll_bar_hover,
  } = useGlobalContext();

  // **************   Send btn Effect  ***************

  const cursor_hover_handler = () => {
    hover_on_available();
  };

  const cursor_exit_hover_handler = () => {
    exit_available_hover();
  };

  // **************   Acitvate Page   ****************
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      activate_page(3);
    }
  }, [inView]);

  // **************   Send Email   *******************

  const send_email = (e) => {
    e.preventDefault();

    if (
      user_name_ref.current.value &&
      user_email_ref.current.value &&
      user_msg_ref.current.value
    ) {
      emailjs
        .sendForm("service_14s2676", "template_oz2h2mv", my_form_ref.current, {
          publicKey: "thQNDAzkpkqTIxI_F",
        })
        .then(
          () => {
            if (dark_mode) {
              toast.success("Message sent!");
            }

            if (!dark_mode) {
              toast.success("Message sent!", {
                theme: "dark",
              });
            }
            my_form_ref.current.reset();
            user_name_ref.current.style.borderBottom = "1px solid #989898";
            user_email_ref.current.style.borderBottom = "1px solid #989898";
            user_msg_ref.current.style.borderBottom = "1px solid #989898";
          },
          (error) => {
            if (dark_mode) {
              toast.error("Message not sent. Please try again.");
            }

            if (!dark_mode) {
              toast.error("Message not sent. Please try again.", {
                theme: "dark",
              });
            }
          }
        );
    } else {
      if (dark_mode) {
        toast.error("Please complete all required fields.");
      }

      if (!dark_mode) {
        toast.error("Please complete all required fields.", {
          theme: "dark",
        });
      }
      user_name_ref.current.style.borderBottom = "1px solid #fac09c";
      user_email_ref.current.style.borderBottom = "1px solid #fac09c";
      user_msg_ref.current.style.borderBottom = "1px solid #fac09c";
    }
  };

  return (
    <div ref={ref} className="contact_page_wrapper" id="contact">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        draggable
        closeOnClick
      />
      <div className="contact_page_content">
        <h4>Contact Me</h4>
        <form ref={my_form_ref} onSubmit={send_email}>
          <label htmlFor="users_name_input">Your Name</label>
          <input
            ref={user_name_ref}
            type="text"
            name="from_name"
            id="users_name_input"
            className="message_input"
            placeholder="Enter your name"
          />
          <label htmlFor="email_input">Your Email</label>
          <input
            ref={user_email_ref}
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
            ref={user_msg_ref}
            name="message"
            id="users_message"
            placeholder="Type your message here."
          ></textarea>
          <div className="btn_container">
            <motion.button
              type="submit"
              onMouseOver={cursor_hover_handler}
              onMouseLeave={cursor_exit_hover_handler}
              // variants={button_variants}
              // whileHover="hover"
              whileHover={{
                y: -6,
              }}
            >
              Send
            </motion.button>
          </div>
        </form>
        <div className="social_links_container">
          {social_links.map((link) => {
            const { id, name, url, icon } = link;
            return (
              <motion.a
                className="social_links"
                onMouseOver={hover_on_scroll_bar}
                onMouseLeave={exit_scroll_bar_hover}
                key={id}
                href={url}
                transition={{ type: "spring", stiffness: 300 }}
                whileHover={{
                  scale: 1.2,
                  x: 8,
                  y: -8,
                }}
              >
                {icon}
              </motion.a>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
