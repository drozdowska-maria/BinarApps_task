import { useEffect, useState } from "react";
import { getGameData } from "./utils/db";
import { GameView } from "./views/GameView";
import { InputView } from "./views/InputView";
import { SubmitGameView } from "./views/SubmitGameView";
import "./App.css";

function App() {
  //STATES
  const [gameData, setGameData] = useState([]);
  const [nickname, setNickname] = useState("");
  const [view, setView] = useState("input-view");
  const [selectedWords, setSelectedWords] = useState([]);

  //FETCHING DATA
  useEffect(() => {
   getGameData(setGameData)
  }, [])

  return (
    <div className="main-wrapper">
    {view === "input-view" && <InputView 
        nickname={nickname} 
        setNickname={setNickname} 
        setView={setView}/>}
    {view === "game-view" && <GameView 
        nickname={nickname} 
        gameData={gameData} 
        selectedWords={selectedWords} 
        setSelectedWords={setSelectedWords} 
        setView={setView}/>}
    {view === "submit-game-view" && <SubmitGameView 
        nickname={nickname} 
        gameData={gameData} 
        selectedWords={selectedWords}/>}
    </div>
   
  ); 
}

export default App;
