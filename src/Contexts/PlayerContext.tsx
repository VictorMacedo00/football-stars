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
  backgrounfColor: string;
}

interface PlayerContextType {
  players: Player;
  nextPlayer: () => void;
  previousPlayer: () => void;
}

const initialValue = {
  players: {
    firstLetter: "H",
    firstName: "Earling",
    lastName: "Haaland",
    club: "Borussia Dortmund",
    position: "Striker",
    backgrounfColor: "#F7EE08",
  },
  nextPlayer: () => {},
  previousPlayer: () => {},
};

export const PlayerContext = createContext<PlayerContextType>(initialValue);

export const PlayerProvider = ({ children }: PlayerContextProps) => {
  const [players, setPlayers] = useState(initialValue.players);

  const nextPlayer = () => {
    setPlayers(
      (initialValue.players = {
        firstLetter: "M",
        firstName: "Kylian",
        lastName: "Mbappe",
        club: "Paris Saint German",
        position: "Striker",
        backgrounfColor: "#0E2164",
      })
    );
  };

  const previousPlayer = () => {
    setPlayers(
      (initialValue.players = {
        firstLetter: "H",
        firstName: "Earling",
        lastName: "Haaland",
        club: "Borussia Dortmund",
        position: "Striker",
        backgrounfColor: "#F7EE08",
      })
    );
  };

  return (
    <PlayerContext.Provider value={{ players, nextPlayer, previousPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};
