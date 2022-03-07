import React, { useContext } from "react";
import Header from "../Header/Header";
import Player from "../Player/Player";
import "./Home.css";
import { useLocation } from "react-router-dom";
import { PlayerContext } from "../../Contexts/PlayerContext";

// interface HomeProps {
//   player: {
//     firstLetter: string;
//     firstName: string;
//     lastName: string;
//     club: string;
//     position: string;
//     backgroundColor: string;
//     playerBackground: string;
//   };
// }

const Home: React.FC = () => {
  const { player } = useContext(PlayerContext);
  const location = useLocation();
  console.log("Pathname: ", location.pathname);

  const style = {
    backgroundColor: player.backgroundColor,
  };

  return (
    <main style={style} className="home">
      <Header
        firstLetter={player.firstLetter}
        icon={player.lastName === "Mbappe" ? "<" : ">"}
      />
      <div className="home container">
        <Player playerInfos={player} />
      </div>
    </main>
  );
};

export default Home;
