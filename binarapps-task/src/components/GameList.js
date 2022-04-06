import { useState } from 'react'
import styles from './GameList.module.css'

export const GameList = ({gameList, setChoosenWords, choosenWords}) => {

    const [checkResult, setCheckResult] = useState(false)

    const handleWordClick = (clickedWord) => {
        if (choosenWords.some((obj) => obj.word === clickedWord)) {
            setChoosenWords((prevValue) => prevValue.filter((obj) => obj.word !== clickedWord))
        } else {
        const result = gameList.goodWords.some(word => word === clickedWord)
        setChoosenWords((prevValue) => [{word: clickedWord, result: result}, ...prevValue])
        }
    }

    const handleCheckClick = () => {
        setCheckResult(true)
    }

    return (
        <div>
        <h3>{gameList.question}</h3>
        <div className={styles.wordsWrapper}>
            {gameList.allWords
                .map((word, index) => !checkResult ? <div 
                key={index} 
                className={`${styles.wordItem} ${choosenWords.some(obj => obj.word === word) ? styles.clicked : ''}`} 
                onClick={() => handleWordClick(word)}>
                    {word}
            </div> : <div key={index}>
                {choosenWords.some(obj => obj.word === word) ? <p>{choosenWords.find(obj => obj.word === word).result === true ? 'good' : 'bad'}</p>: ''}
                <div 
                 
                className={`${styles.wordItem} 
                ${choosenWords.some(obj => obj.word === word) ? choosenWords.find(obj => obj.word === word).result === true ? styles.green : styles.red : ''} ` }>
                    {word}</div>
                </div>)}
        </div>
        <button onClick={handleCheckClick}>{!checkResult ? 'Check result' : 'Submit game'}</button>
        </div>
    )
}