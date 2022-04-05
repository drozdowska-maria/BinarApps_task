import { useEffect, useState } from "react";
import { getGameData } from "./db";

function App() {
  const [gameList, setGameList] = useState([])
  
  useEffect(() => {
   getGameData(setGameList)
  }, [])

  useEffect(() => {
    console.log(gameList)
  }, [gameList])
  return (
    <h1>
     Wordcloud game
    </h1>
  );
}

export default App;
