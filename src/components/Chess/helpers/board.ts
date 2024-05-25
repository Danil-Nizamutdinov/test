import { figures, arrFigures } from "./helpers";

export const arrName: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

const isPosition = (nameFigure: string, coord: number[]): boolean => {
  let z, x, c, v;
  switch (nameFigure) {
    case "bishop":
      z = coord[0] === 0 && coord[1] === 1 ? true : false;
      x = coord[0] === 7 && coord[1] === 1 ? true : false;
      c = coord[0] === 0 && coord[1] === 6 ? true : false;
      v = coord[0] === 7 && coord[1] === 6 ? true : false;
      return z || x || c || v ? true : false;
    case "knight":
      z = coord[0] === 0 && coord[1] === 2 ? true : false;
      x = coord[0] === 7 && coord[1] === 2 ? true : false;
      c = coord[0] === 0 && coord[1] === 5 ? true : false;
      v = coord[0] === 7 && coord[1] === 5 ? true : false;
      return z || x || c || v ? true : false;
    case "king":
      z = coord[0] === 7 && coord[1] === 4;
      x = coord[0] === 0 && coord[1] === 4;
      return z || x ? true : false;
    case "pawn":
      return coord[0] === 1 || coord[0] === 6 ? true : false;
    case "queen":
      z = coord[0] === 7 && coord[1] === 3;
      x = coord[0] === 0 && coord[1] === 3;
      return z || x ? true : false;
    case "rook":
      z = coord[0] === 0 && coord[1] === 0 ? true : false;
      x = coord[0] === 7 && coord[1] === 0 ? true : false;
      c = coord[0] === 0 && coord[1] === 7 ? true : false;
      v = coord[0] === 7 && coord[1] === 7 ? true : false;

      return z || x || c || v ? true : false;

    default:
      return false;
  }
};

export const initialBoard = (): any[] => {
  const arr: any[] = [];

  for (let i: number = 0; i < 8; i++) {
    let curArr: any = [];
    for (let n: number = 0; n < 8; n++) {
      let x = n + 1;
      let isSquareBlack = false;
      let isSquareLine = (i + 1) % 2 === 0 ? true : false;
      let curFigure: any = null;

      arrFigures.forEach((f) => {
        if (isPosition(f, [i, n])) {
          curFigure = figures[`${f}${i < 5 ? "Black" : ""}`].img;
        }
      });

      if (isSquareLine) {
        isSquareBlack = x % 2 === 0 ? false : true;
      } else {
        isSquareBlack = x % 2 !== 0 ? false : true;
      }

      let obj: {
        name: string;
        color: string;
        figure: any;
        colorFigure: string;
      } = {
        name: arrName[i] + x,
        color: isSquareBlack ? "black" : "white",
        figure: curFigure,
        colorFigure: i < 5 ? "Black" : "",
      };
      curArr.push(obj);
    }
    arr.push(curArr);
  }

  return arr;
};
