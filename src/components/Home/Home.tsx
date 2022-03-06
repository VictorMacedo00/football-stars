import React from 'react';
import Header from '../Header/Header';
import { Player } from '../Player/Player';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
        <Header firstLetter="H" />
        <div className="home container">
            <Player />
        </div>
    </main>
  )
}

export default Home