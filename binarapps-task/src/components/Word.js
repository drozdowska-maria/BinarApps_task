import styles from '../views/GameView.module.css'

export const Word = ({word, selectedWords, handleWordClick, checkResult, wordIsClicked}) => {
   
    return (
        //rendering for 'check-view' and selected words
        checkResult && wordIsClicked ? <div className={styles.buttonWrapper}>
            <p className={`${styles.adnotation} ${selectedWords.find(obj => obj.word === word).result === true ? styles.good : styles.bad}`}>{selectedWords.find(obj => obj.word === word).result === true ? '' : '+'}</p>
            <button 
            disabled={checkResult}
            className={`${styles.wordItem} 
            ${selectedWords.find(obj => obj.word === word).result === true ? styles.green : styles.red}`}>{word}
            
            </button>
        </div>
        :
        //rendering for other views
        <button
            className={`${styles.wordItem} ${wordIsClicked && !checkResult ? styles.clicked : ''}`} 
            onClick={() => handleWordClick(word)}
            disabled={checkResult}
            >{word}
        </button> 
    )}
    
