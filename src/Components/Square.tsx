import React from "react";

const Square: React.FC<any> = ({ clickSquare, square, i }) => {
  return (
    <div
      onClick={() => clickSquare(i)}
      style={{
        borderRight: i === 8 || i === 5 || i === 2 ? "none" : "1px solid black",
        borderBottom:
          i === 6 || i === 7 || i === 8 ? "none" : "1px solid black",
      }}
      className="square"
    >
      {square}
    </div>
  );
};

export default Square;
