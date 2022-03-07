import React, { useContext, useMemo } from "react";
import "./Player.css";
import { ReactComponent as SvgBackground } from "./../../Assets/background-svg.svg";
import { PlayerInfo } from "./PlayerInfo/PlayerInfo";
import { PlayerContext } from "../../Contexts/PlayerContext";
interface PlayerProps {
  playerInfos: {
    firstLetter: string;
    firstName: string;
    lastName: string;
    club: string;
    position: string;
    backgroundColor: string;
    playerBackground: string;
  };
}

const Player: React.FC<PlayerProps> = ({ playerInfos }) => {
  const playerContext = useContext(PlayerContext);
  const urlBackground = playerInfos.playerBackground;

  const classAnimation = useMemo(() => {
    return playerContext.animation ? "" : "animeteTop";
  }, [playerContext.animation]);

  return classAnimation ? (
    <div className="player">
      {classAnimation && (
        <div className={`svgBackground animeTop`}>
          <SvgBackground
            className={
              playerContext.player.lastName === "Mbappe"
                ? "svgColorMbappe svg"
                : "svgColorHaaland svg"
            }
          />
        </div>
      )}

      <div className="playerBackground animeTop">
        <img
          className="player"
          src={require("./../../Assets/soccer-players/" + urlBackground)}
          alt="Player Background"
        />
      </div>
      <div className="playerName">
        <h3 className="animeLeft1-7s" style={{ fontSize: "1.31rem", fontFamily: "Inter" }}>{playerInfos.firstName}</h3>
        <h1 className="animeLeft1-5s" style={{ fontSize: "10rem",  fontFamily: "Inter", letterSpacing: playerContext.player.letterSpacing }}>{playerInfos.lastName}</h1>
      </div>
      <div className="details animeLeft0-5s">
        <div className="infos">
          <PlayerInfo title="CLUB" content={playerInfos.club} />
          <PlayerInfo title="POSITION" content={playerInfos.position} />
        </div>
        <div className="carrousel"></div>
      </div>
    </div>
  ) : <></>;
};

export default Player;
