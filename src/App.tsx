import React from "react";
import "./styles/main.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Leetcode from "./components/Leetcode/Leetcode";
import Main from "./components/Main";
import Chess from "./components/Chess/Chess";
import Krest from "./components/Krest/Krest";
import { useAppContext } from "./Context";

const App = () => {
  const { isDark } = useAppContext();
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="leetcode" element={<Leetcode />} />
          <Route path="chess" element={<Chess />} />
          <Route path="krest" element={<Krest />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
