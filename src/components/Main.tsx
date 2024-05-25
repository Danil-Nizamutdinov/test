import React, { useEffect, useState } from "react";

const Main = () => {
  const [position, setPosition] = useState<any>({
    top: 0,
    left: 0,
  });
  const updatePosition = () => {
    const random = Math.random() * (600 - 50) + 50;
    const random2 = Math.random() * (600 - 50) + 50;
    setPosition({ top: random, left: random2 });
  };

  return (
    <div className="main">
      <h2>React</h2>
      <div className="main_content">
        <div
          className="box_circle"
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
          onClick={updatePosition}
        ></div>
        {/* <ButtonMain position={position} updatePosition={updatePosition} /> */}
      </div>
    </div>
  );
};

const ButtonMain = (position: any, updatePosition: () => void) => {
  return (
    <button
      className="button_main"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
      onClick={updatePosition}
    >
      нажми
    </button>
  );
};

const key = (setPosition: (prev: any) => void) => {
  const onKeypress = (e: any) => {
    switch (e.key) {
      case "w":
        setPosition((prev: any) => ({ top: prev.top - 10, left: prev.left }));
        break;
      case "a":
        setPosition((prev: any) => ({ top: prev.top, left: prev.left - 10 }));
        break;
      case "s":
        setPosition((prev: any) => ({ top: prev.top + 10, left: prev.left }));
        break;
      case "d":
        setPosition((prev: any) => ({ top: prev.top, left: prev.left + 10 }));
        break;
      default:
        break;
    }
  };
  document.addEventListener("keypress", onKeypress);

  return () => {
    document.removeEventListener("keypress", onKeypress);
  };
};

export default Main;
