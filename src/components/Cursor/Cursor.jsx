import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../Context";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { btns_hover, available_hover } = useGlobalContext();

  useEffect(() => {
    const my_mouse_move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", my_mouse_move);
    return () => {
      window.removeEventListener("mousemove", my_mouse_move);
    };
  }, []);

  const cursorStyle = {
    top: `${position.y}px`,
    left: `${position.x}px`,
  };

  return (
    <div className="cursor_wrapper">
      <div className="my_cursor" style={cursorStyle}></div>
      <motion.div
        className={
          btns_hover
            ? "my_cursor shadow over"
            : available_hover
            ? "my_cursor shadow rectangle"
            : "my_cursor shadow"
        }
        animate={
          btns_hover
            ? { x: position.x - 12.5, y: position.y - 12, scale: 2.5 }
            : available_hover
            ? { x: position.x - 45, y: position.y - 8, scale: 2.5 }
            : { x: position.x - 12, y: position.y - 12 }
        }
      ></motion.div>
    </div>
  );
};
export default Cursor;
