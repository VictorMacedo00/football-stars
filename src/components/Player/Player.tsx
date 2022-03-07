import React, { useContext } from "react";
import "./Player.css";
import playerBackground from "./../../Assets/soccer-players/haaland/haaland-background.png";
import svgBackground from "./../../Assets/background-svg.svg";
import { PlayerInfo } from "./PlayerInfo/PlayerInfo";
import { PlayerContext } from "../../Contexts/PlayerContext";

const Player: React.FC = () => {

  return (
    <div className="player">
      <div className="svgBackground animeTop">
        <img className="svg" src={svgBackground} alt="SVG Background" />
      </div>
      <div className="playerBackground animeTop">
        <img
          className="player"
          src={playerBackground}
          alt="Player Background"
        />
      </div>
      <div className="playerName animeLeft">
        <h3>ERLING</h3>
        <h1>HAALAND</h1>
      </div>
      <div className="details animeLeft">
        <div className="infos">
          <PlayerInfo title="CLUB" content="BORUSSIA DORTMUND" />
          <PlayerInfo title="POSITION" content="STRIKER" />
        </div>
        <div className="carrousel"></div>
      </div>
    </div>
  );
};

export default Player;
