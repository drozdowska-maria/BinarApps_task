import { GameList } from "../components/GameList"

export const GameView = ({nickname, gameList, setChoosenWords, choosenWords}) => {
    return (
    <>
    <h3>hello, {nickname}</h3>
    <GameList gameList={gameList} setChoosenWords={setChoosenWords} choosenWords={choosenWords}/>
    </>
    )
}