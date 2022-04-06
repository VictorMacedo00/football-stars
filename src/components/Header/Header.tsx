import React, { useContext, useMemo } from "react";
import "./Header.css";
import { useLocation } from 'react-router-dom'
import { PlayerContext } from "../../Contexts/PlayerContext";

interface HeaderProps {
  firstLetter: string;
  icon: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const playerContext = useContext(PlayerContext);

  const classAnimation = useMemo(() => {
    return playerContext.animation ? "" : "animeteTop";
  }, [playerContext.animation]);

  return classAnimation ? (
    <nav className="container nav animeOpacity">
      <span>{props.firstLetter}</span>
      <button onClick={() => {
        if(playerContext.player.lastName === "Haaland") {
          playerContext.nextPlayer()
        } else {
          playerContext.previousPlayer();
        }
        }}>{props.icon}</button>
    </nav>
  ) : <></>;
};

export default Header;
