import React from "react";
import { motion } from "framer-motion";
const Square: React.FC<any> = ({ clickSquare, square, i }) => {
  return (
    <motion.div
      onClick={() => clickSquare(i)}
      style={{
        borderRight:
          i === 8 || i === 5 || i === 2
            ? "none"
            : "7px solid rgb(218, 208, 208)",
        borderBottom:
          i === 6 || i === 7 || i === 8
            ? "none"
            : "7px solid rgb(218, 208, 208)",
      }}
      className="square"
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      exit={{ x: -500 }}
    >
      {square}
    </motion.div>
  );
};

export default Square;
