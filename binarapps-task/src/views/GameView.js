import { GameList } from "../components/GameList"

export const GameView = ({nickname, gameList}) => {
    return (
    <>
    <h3>hello, {nickname}</h3>
    <GameList gameList={gameList}/>
    </>
    )
}