import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { PlayerProvider } from "./Contexts/PlayerContext";

function App() {
  return (
    <div className="App">
      <PlayerProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </PlayerProvider>
    </div>
  );
}

export default App;
