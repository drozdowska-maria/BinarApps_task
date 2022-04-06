import { useEffect, useState } from "react";
import { getGameData } from "./utils/db";
import { GameView } from "./views/GameView";
import { InputView } from "./views/InputView";

function App() {
  const [gameList, setGameList] = useState([]);
  const [nickname, setNickname] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [choosenWords, setChoosenWords] = useState([]);


  useEffect(() => {
   getGameData(setGameList)
  }, [])

  return (
    <>
    {!isLogged && <InputView nickname={nickname} setNickname={setNickname} setIsLogged={setIsLogged}/>}
    {isLogged &&<GameView nickname={nickname} gameList={gameList} setChoosenWords={setChoosenWords} choosenWords={choosenWords}/>}
    </>
   
  ); 
}

export default App;
