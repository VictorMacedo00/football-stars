import React from "react";
import "./Header.css";

interface HeaderProps {
  firstLetter: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <nav className="container nav animeOpacity">
      <span>{props.firstLetter}</span>
      <button>{">"}</button>
    </nav>
  );
};

export default Header;
