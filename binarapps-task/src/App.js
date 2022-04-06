import { useEffect, useState } from "react";
import { getGameData } from "./utils/db";
import { GameView } from "./views/GameView";
import { InputView } from "./views/InputView";
import { SubmitGameView } from "./views/SubmitGameView";

function App() {
  const [gameList, setGameList] = useState([]);
  const [nickname, setNickname] = useState("");
  const [view, setView] = useState('input-view');
  const [choosenWords, setChoosenWords] = useState([]);


  useEffect(() => {
   getGameData(setGameList)
  }, [])

  return (
    <>
    {view === 'input-view' && <InputView nickname={nickname} setNickname={setNickname} setView={setView}/>}
    {view === 'game-view' &&<GameView nickname={nickname} gameList={gameList} setChoosenWords={setChoosenWords} choosenWords={choosenWords} setView={setView}/>}
    {view === 'submit-game-view' && <SubmitGameView nickname={nickname} gameList={gameList} choosenWords={choosenWords}/>}
    </>
   
  ); 
}

export default App;
