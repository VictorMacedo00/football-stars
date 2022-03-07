import React, { ReactNode, useState, createContext } from "react";

interface PlayerContextProps {
  children: ReactNode;
}

interface Player {
  firstLetter: string;
  firstName: string;
  lastName: string;
  club: string;
  position: string;
  backgroundColor: string;
  playerBackground: string;
  letterSpacing: string
}

interface PlayerContextType {
  player: Player;
  animation: boolean;
  nextPlayer: () => void;
  previousPlayer: () => void;
}

const initialValue = {
  player: 
    {
      firstLetter: "H",
      firstName: "Earling",
      lastName: "Haaland",
      club: "Borussia Dortmund",
      position: "Striker",
      backgroundColor: "#F7EE08",
      playerBackground: "haaland/haaland-background.png",
      letterSpacing: "80px"
    },
  animation: false,
  nextPlayer: () => {},
  previousPlayer: () => {}
};

export const PlayerContext = createContext<PlayerContextType>(initialValue);

export const PlayerProvider = ({ children }: PlayerContextProps) => {
  const [player, setPlayer] = useState(initialValue.player);
  const [animation, setAnimation] = useState(false);

  const animate = () => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 300);
  };

  function nextPlayer() {
    setPlayer({
      firstLetter: "M",
      firstName: "Kylian",
      lastName: "Mbappe",
      club: "Paris Saint German",
      position: "Striker",
      backgroundColor: "#0E2164",
      playerBackground: "mbappe/mbappe-background.png",
      letterSpacing: "120px"
    });
    animate();
  }

  function previousPlayer() {
    setPlayer(initialValue.player);
    animate();
  }

  console.log(animation);

  return (
    <PlayerContext.Provider value={{ player, animation, nextPlayer, previousPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};
