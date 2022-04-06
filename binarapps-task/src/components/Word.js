import styles from '../views/GameView.module.css'

export const Word = ({word, selectedWords, handleWordClick, checkResult, wordIsClicked}) => {
   
    return (
        //rendering for 'check-view' and selected words
        checkResult && wordIsClicked ? <div>
            <p>{selectedWords.find(obj => obj.word === word).result === true ? 'good' : 'bad'}</p>
            <div 
            className={`${styles.wordItem} 
            ${selectedWords.find(obj => obj.word === word).result === true ? styles.green : styles.red} ` }>{word}
            </div>
        </div>
        :
        //rendering for other views
        <div 
            className={`${styles.wordItem} ${wordIsClicked && !checkResult ? styles.clicked : ''}`} 
            onClick={() => handleWordClick(word)}
            >{word}
        </div> 
    )}
    
