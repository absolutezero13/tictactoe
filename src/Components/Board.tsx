import React, { useEffect, useState } from "react";
import { isGameOver } from "../Helper/helper";
import Square from "./Square";

const Board: React.FC = () => {
  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [activePlayer, setActivePlayer] = useState("Player 1");
  const [winner, setWinner] = useState<any>("");
  const [roundNumber, setRoundNumber] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [gameWinner, setGameWinner] = useState("");
  useEffect(() => {
    if (roundNumber > 5 || player2Score >= 3 || player1Score >= 3) {
      player1Score > player2Score
        ? setGameWinner("Player 1")
        : setGameWinner("Player 2");
    } else {
      if (isGameOver(squares) && !winner) {
        setRoundNumber((prevNum) => prevNum + 1);
        if (isGameOver(squares) === "X") {
          setPlayer1Score((prevScore) => prevScore + 1);
        }
        if (isGameOver(squares) === "O") {
          setPlayer2Score((prevScore) => prevScore + 1);
        }
        setWinner(isGameOver(squares));
        setTimeout(() => {
          reset();
        }, 2500);
      }
    }
  }, [squares]);

  const clickSquare = (id: number): void => {
    if (!squares[id] && !winner) {
      if (activePlayer === "Player 1") {
        setActivePlayer("Player 2");
      } else {
        setActivePlayer("Player 1");
      }
    }

    setSquares((prevSquares) => {
      return prevSquares.map((square, i) => {
        if (i === id && !square && !winner) {
          square = activePlayer === "Player 1" ? "X" : "O";
        }

        return square;
      });
    });
  };

  const reset = () => {
    setWinner("");
    setSquares(new Array(9).fill(""));
    setActivePlayer("Player 1");
  };

  return (
    <div className="board">
      <h2>Round {roundNumber}</h2>
      <div style={{ display: "flex" }}>
        <h1>Player 1 </h1>{" "}
        <h2 style={{ color: "red" }}>
          {player1Score} : {player2Score}
        </h2>
        <h1>Player 2</h1>
      </div>
      <div className="game-field">
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
        {!winner && activePlayer + "'s turn"}
      </p>
      <p>
        {winner &&
          (winner === "X"
            ? "Player 1 Wins the Round"
            : winner === "O"
            ? "Player 2 Wins the Round"
            : null)}
      </p>
      {gameWinner && <p> {gameWinner} won the Game </p>}
    </div>
  );
};

export default Board;
