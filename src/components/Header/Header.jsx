import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navigation">
      <h2>Build Your Dream Team</h2>
      <div className="links">
        <a href="./home">Home</a>
        <a href="./players">Players</a>
        <a href="./singin">Sing-In</a>
        <a href="./login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
