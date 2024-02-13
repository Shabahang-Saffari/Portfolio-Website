import { useEffect, useState } from "react";

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

  return <div className="my_cursor"></div>;
};
export default Cursor;
