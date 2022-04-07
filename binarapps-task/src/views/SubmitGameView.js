import styles from "./SubmitGameView.module.css";

export const SubmitGameView = ({nickname, selectedWords, gameData}) => {
   
    const gameResult = selectedWords.filter(obj => obj.result === true).length * 2 - 
        (selectedWords.filter(obj => obj.result === false).length + 
            (gameData.goodWords.length - gameData.goodWords.filter(word => selectedWords.some(obj => obj.word === word)).length)
        )
   
    return (
        <>
        <h2 className={styles.header}>{gameResult <= 0 ? "Sorry, " : "Congrats, "}<strong>{nickname}!</strong></h2>
        <h2 className={styles.text}>Your score:</h2>
        <h1 className={styles.result}>{gameResult} {gameResult === -1 || gameResult === 1 ? "point" : "points"}</h1>
        </>
    )
}