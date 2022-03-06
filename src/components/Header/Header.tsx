import React from "react";
import "./Header.css";

interface HeaderProps {
  firstLetter: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <nav className="container nav animeOpacity">
      <span>H</span>
      <button>{'>'}</button>
    </nav>
  );
};

export default Header;
