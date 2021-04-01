import React, { useEffect, useState } from "react";
import { isRoundOver } from "../Helper/helper";
import Square from "./Square";
import { motion } from "framer-motion";
const Board: React.FC = () => {
  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [activePlayer, setActivePlayer] = useState("Human");
  const [roundWinner, setRoundWinner] = useState<any>("");
  const [roundNumber, setRoundNumber] = useState<number>(1);
  const [player1Score, setPlayer1Score] = useState<number>(0);
  const [player2Score, setPlayer2Score] = useState<number>(0);
  const [gameWinner, setGameWinner] = useState<string>("");
  const [isDraw, setIsDraw] = useState<boolean>(false);

  // GAME END

  useEffect(() => {
    if (player2Score >= 3 || player1Score >= 3) {
      player1Score > player2Score
        ? setGameWinner("Human")
        : setGameWinner("Ai");
    }
  }, [roundWinner]);

  // ROUND END

  useEffect(() => {
    const xOrO = isRoundOver(squares);

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

  // Recursive AI move

  useEffect(() => {
    aiMove();
  }, [activePlayer]);

  // NEXT ROUND

  useEffect(() => {
    if (roundWinner && !gameWinner && player2Score < 3 && player1Score < 3) {
      setTimeout(() => {
        setRoundNumber((prevNum) => prevNum + 1);
        reset();
      }, 2000);
    }
  }, [roundWinner]);

  // DRAW

  useEffect(() => {
    if (squares.indexOf("") === -1 && !roundWinner) {
      setIsDraw(true);
      setTimeout(() => {
        reset();
      }, 2000);
    }
  }, [squares]);

  //CLICK FUNC

  const clickSquare = (id: number): void => {
    if (
      !squares[id] &&
      !roundWinner &&
      !gameWinner &&
      activePlayer === "Human"
    ) {
      setSquares((prevSquares) => {
        return prevSquares.map((square, i) => {
          if (i === id) {
            square = "X";
          }
          return square;
        });
      });
      setActivePlayer("Ai");
    }
  };

  const aiMove = (): any => {
    if (activePlayer === "Ai" && !roundWinner && !isDraw) {
      const randomNum = Math.floor(Math.random() * 9);
      if (squares[randomNum] === "") {
        squares[randomNum] = "O";
        setActivePlayer("Human");
      } else {
        aiMove();
      }
    }
  };

  // ROUND RESET

  const reset = () => {
    setRoundWinner("");
    setSquares(new Array(9).fill(""));
    setActivePlayer("Human");
    setIsDraw(false);
  };

  // GAME RESET

  const newGame = () => {
    reset();
    setRoundNumber(1);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setGameWinner("");
  };

  return (
    <div className="board">
      <h2>Round {roundNumber}</h2>
      <div className="board__score">
        <h1>Human </h1>
        <div className="board__score__scores">
          <div className="board__score__scores__score">
            <p>{player1Score}</p>
          </div>
          -
          <div className="board__score__scores__score">
            <p>{player2Score}</p>
          </div>
        </div>
        <h1>Ai</h1>
      </div>
      <div className="board__game-field">
        {squares.map((square, i) => {
          return (
            <Square clickSquare={clickSquare} square={square} key={i} i={i} />
          );
        })}
      </div>
      <motion.p
        style={{
          marginRight: activePlayer === "Human" ? "250px" : "-250px",
        }}
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        exit={{ x: -500 }}
      >
        {!roundWinner && activePlayer + "'s turn"}
      </motion.p>
      <p>
        {roundWinner &&
          !gameWinner &&
          (roundWinner === "X"
            ? "Human Wins the Round"
            : roundWinner === "O"
            ? "Ai Wins the Round"
            : null)}
      </p>
      {isDraw && <p>Draw !</p>}
      {gameWinner && <p> {gameWinner} won the Game </p>}
      <button onClick={newGame} className="new-game">
        NEW GAME
      </button>
    </div>
  );
};

export default Board;
