import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { PlayerProvider } from './Contexts/PlayerContext';

function App() {
  return (
    <div className="App">
      <PlayerProvider>
        <Home />
      </PlayerProvider>
    </div>
  );
}

export default App;
