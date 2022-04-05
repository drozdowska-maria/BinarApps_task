import { useEffect, useState } from "react";
import { getGameData } from "./db";
import { GameView } from "./views/GameView";
import { InputView } from "./views/InputView";

function App() {
  const [gameList, setGameList] = useState([]);
  const [nickname, setNickname] = useState("");
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
   getGameData(setGameList)
  }, [])

  return (
    <>
    {!isLogged && <InputView nickname={nickname} setNickname={setNickname} setIsLogged={setIsLogged}/>}
    {isLogged &&<GameView nickname={nickname}/>}
    </>
   
  );
}

export default App;
