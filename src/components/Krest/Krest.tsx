import React, { useState } from "react";

const checkWinner = (newBoard: any[]) => {
  let x: string = "";
  let c: string = "";
  let v: string = "";
  const b: string = newBoard[0][0] + newBoard[1][1] + newBoard[2][2];
  const n: string = newBoard[0][2] + newBoard[1][1] + newBoard[2][0];

  if (b === "xxx" || b === "ooo" || n === "ooo" || n === "xxx") {
    return true;
  }

  for (let i = 0; i < newBoard.length; i++) {
    let z: string = "";

    x += newBoard[i][0];
    c += newBoard[i][1];
    v += newBoard[i][2];

    for (let n = 0; n < newBoard[i].length; n++) {
      z += newBoard[i][n];
    }

    if (
      z === "xxx" ||
      z === "ooo" ||
      x === "ooo" ||
      c === "ooo" ||
      v === "ooo" ||
      x === "xxx" ||
      c === "xxx" ||
      v === "xxx"
    ) {
      return true;
    }
  }
};

const BoardKrest = () => {
  const [board, setBoard] = useState<any[]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [counter, setCounter] = useState<boolean>(false);
  const [win, setWin] = useState<boolean>(false);

  const addSymbol = (index: number, index2: number): void => {
    const newBoard = [...board];

    if (newBoard[index][index2] !== "") {
      return setBoard(newBoard);
    }

    newBoard[index][index2] = counter ? "x" : "o";

    if (checkWinner(newBoard)) {
      setWin((prev) => !prev);
    } else {
      setBoard(newBoard);
    }
    setCounter((prev) => !prev);
  };

  const reset = () => {
    if (!win) {
      setBoard([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
    } else {
      setBoard([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
      setWin((prev) => !prev);
    }
  };

  return (
    <div>
      <table className="chess-board">
        <tbody>
          {board.map((i, index) => (
            <tr key={index}>
              {i.map((a: any, index2: number) => (
                <td key={index2}>
                  <button
                    onClick={() => addSymbol(index, index2)}
                    disabled={win}
                    className="button_krest"
                  >
                    {a}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={reset}>reset</button>
      {win ? "победа" : "победитель не определен"}
    </div>
  );
};

const Krest = () => {
  return (
    <div className="box" style={{ marginTop: "100px" }}>
      <div className="centered">
        <BoardKrest />
      </div>
    </div>
  );
};

export default Krest;
