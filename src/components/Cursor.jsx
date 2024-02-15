import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../Sass/cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
    <div>
      <div className="my_cursor" style={cursorStyle}></div>
      <motion.div
        className="my_cursor shadow"
        animate={{ x: position.x - 12.5, y: position.y - 109 }}
      ></motion.div>
    </div>
  );
};
export default Cursor;
