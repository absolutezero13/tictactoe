import React, { useEffect, useState } from "react";
import { isGameOver } from "../Helper/helper";
import Square from "./Square";

const Board: React.FC = () => {
  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [activePlayer, setActivePlayer] = useState("Player 1");
  const [roundWinner, setRoundWinner] = useState<any>("");
  const [roundNumber, setRoundNumber] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [gameWinner, setGameWinner] = useState("");

  ///////////////////////////////////////////////////////
  useEffect(() => {
    if (player2Score >= 3 || player1Score >= 3) {
      player1Score > player2Score
        ? setGameWinner("Player 1")
        : setGameWinner("Player 2");
    }
  }, [roundWinner]);

  useEffect(() => {
    if (roundWinner && !gameWinner && player2Score < 3 && player1Score < 3) {
      setTimeout(() => {
        setRoundNumber((prevNum) => prevNum + 1);
        reset();
      }, 2000);
    }
  }, [roundWinner]);

  useEffect(() => {
    const xOrO = isGameOver(squares);
    if (xOrO && !roundWinner && !gameWinner) {
      if (xOrO === "X") {
        setPlayer1Score((prevScore) => prevScore + 1);
      }
      if (xOrO === "O") {
        setPlayer2Score((prevScore) => prevScore + 1);
      }
      setRoundWinner(xOrO);
    }
  }, [squares]);

  const clickSquare = (id: number): void => {
    if (!squares[id] && !roundWinner && !gameWinner) {
      if (activePlayer === "Player 1") {
        setActivePlayer("Player 2");
      } else {
        setActivePlayer("Player 1");
      }
    }
    setSquares((prevSquares) => {
      return prevSquares.map((square, i) => {
        if (i === id && !square && !roundWinner && !gameWinner) {
          square = activePlayer === "Player 1" ? "X" : "O";
        }
        return square;
      });
    });
  };

  const reset = () => {
    setRoundWinner("");
    setSquares(new Array(9).fill(""));
    setActivePlayer("Player 1");
  };

  return (
    <div className="board">
      <h2>Round {roundNumber}</h2>
      <div className="board__score">
        <h1>Player 1 </h1>{" "}
        <h2 style={{ color: "red" }}>
          {player1Score} : {player2Score}
        </h2>
        <h1>Player 2</h1>
      </div>
      <div className="board__game-field">
        {squares.map((square, i) => {
          return (
            <Square clickSquare={clickSquare} square={square} key={i} i={i} />
          );
        })}
      </div>
      <p
        style={{
          marginRight: activePlayer === "Player 1" ? "250px" : "-250px",
        }}
      >
        {!roundWinner && activePlayer + "'s turn"}
      </p>
      <p>
        {roundWinner &&
          (roundWinner === "X"
            ? "Player 1 Wins the Round"
            : roundWinner === "O"
            ? "Player 2 Wins the Round"
            : null)}
      </p>
      {gameWinner && <p> {gameWinner} won the Game </p>}
    </div>
  );
};

export default Board;
