import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../Context";

const Header = () => {
  const { toggleTheme } = useAppContext();

  return (
    <div className="header">
      <Link to="/">
        <h2>Logo</h2>
      </Link>
      <Nav />
      <div>
        <button onClick={() => toggleTheme()}>Switch</button>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="leetcode" className="nav_link">
        leetcode
      </Link>
      <Link to="chess" className="nav_link">
        chess
      </Link>
      <Link to="krest" className="nav_link">
        krest
      </Link>
    </nav>
  );
};

export default Header;
