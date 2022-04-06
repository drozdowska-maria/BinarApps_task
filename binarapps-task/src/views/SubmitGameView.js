export const SubmitGameView = ({nickname, choosenWords, gameList}) => {
   
    const gameResult = choosenWords.filter(obj => obj.result === true).length * 2 - 
    (choosenWords.filter(obj => obj.result === false).length + 
        (gameList.goodWords.length - gameList.goodWords.filter(word => choosenWords.some(obj => obj.word === word)).length)
    )
   
    return (
        <>
        <h1>Congrats, {nickname}</h1>
        <h2>Your score: {gameResult} points</h2>
        </>
    )
}