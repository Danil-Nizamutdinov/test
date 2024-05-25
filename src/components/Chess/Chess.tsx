import React from "react";
import { initialBoard, arrName } from "./helpers/board";

const arr = initialBoard();

const BoardChess = () => {
  return (
    <table className="chess-board">
      <tbody>
        <tr>
          <th></th>
          {arrName.map((a, index) => (
            <th key={index}>{a}</th>
          ))}
        </tr>
        {arr.map((a, index) => (
          <tr key={index}>
            <th>{a.length - index}</th>
            {a.map((x: any, index: any) => (
              <td className={x.color} key={index}>
                {x.figure && <img src={x.figure} alt="фигура" />}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Chess = () => {
  return (
    <section>
      <h2>Chess</h2>
      <div className="box">
        <div className="centered">
          <BoardChess />
        </div>
      </div>
    </section>
  );
};

// const Table = () => {
//   return (
//     <table className="chess-board">
//       <tbody>
//         <tr>
//           <th></th>
//           <th>a</th>
//           <th>b</th>
//           <th>c</th>
//           <th>d</th>
//           <th>e</th>
//           <th>f</th>
//           <th>g</th>
//           <th>h</th>
//         </tr>
//         <tr>
//           <th>8</th>
//           <td className="white">корль</td>
//           <td className="black">корль</td>
//           <td className="white">корль</td>
//           <td className="black">корль</td>
//           <td className="white">корль</td>
//           <td className="black">корль</td>
//           <td className="white">корль</td>
//           <td className="black">корль</td>
//         </tr>
//         <tr>
//           <th>7</th>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//         </tr>
//         <tr>
//           <th>6</th>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//         </tr>
//         <tr>
//           <th>5</th>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//         </tr>
//         <tr>
//           <th>4</th>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//         </tr>
//         <tr>
//           <th>3</th>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//         </tr>
//         <tr>
//           <th>2</th>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//         </tr>
//         <tr>
//           <th>1</th>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//           <td className="black"></td>
//           <td className="white"></td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

export default Chess;
