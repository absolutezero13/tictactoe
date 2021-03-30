import React from "react";

const Square: React.FC<any> = ({ clickSquare, square, i }) => {
  return (
    <div onClick={() => clickSquare(i)} className="square">
      {square}
    </div>
  );
};

export default Square;
