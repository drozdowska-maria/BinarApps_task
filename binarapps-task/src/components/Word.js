import styles from "../views/GameView.module.css";

export const Word = ({word, selectedWords, handleWordClick, checkResult, wordIsClicked}) => {
    
    return (
        //rendering for 'check-view' and selected words
        checkResult && wordIsClicked ? <div className={styles.wordItemWrapper}>
            <p className={`${styles.icon} 
            ${selectedWords.find(obj => obj.word === word).result === true ? styles.wordItemSuccessIcon : styles.wordItemErrorIcon}`}>
                {selectedWords.find(obj => obj.word === word).result === true ? "" : "+"}</p>
            <button 
            disabled={checkResult}
            className={`${styles.wordItem} 
            ${selectedWords.find(obj => obj.word === word).result === true ? styles.wordItemSuccess : styles.wordItemError}`}>{word}
            </button>
        </div>
        :
        //rendering for other views
        <button
            className={`${styles.wordItem} ${wordIsClicked && !checkResult ? styles.wordItemClicked : ""}`} 
            onClick={() => handleWordClick(word)}
            disabled={checkResult}
            >{word}
        </button> 
    )}
    
