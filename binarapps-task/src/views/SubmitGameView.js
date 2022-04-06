export const SubmitGameView = ({nickname, selectedWords, gameData}) => {
   
    const gameResult = selectedWords.filter(obj => obj.result === true).length * 2 - 
        (selectedWords.filter(obj => obj.result === false).length + 
            (gameData.goodWords.length - gameData.goodWords.filter(word => selectedWords.some(obj => obj.word === word)).length)
        )
   
    return (
        <>
        <h1>Congrats, {nickname}</h1>
        <h2>Your score: {gameResult} points</h2>
        </>
    )
}