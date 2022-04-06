import { useState } from 'react'
import { Word } from '../components/Word';
import styles from './GameView.module.css'

export const GameView = ({gameData, setSelectedWords, selectedWords, setView}) => {
    //creating a state to manage conditional rendering 
    const [checkResult, setCheckResult] = useState(false);

    //declaring function that manages clicking the word
    const handleWordClick = (clickedWord) => {
        if(checkResult) {
            return; //do nothing if result is in 'check-view'
        }
        else if (selectedWords.some((obj) => obj.word === clickedWord)) {
            setSelectedWords((prevValue) => prevValue.filter((obj) => obj.word !== clickedWord)) //remove item on click from selectedWords array if item already exist
        } else {
        const result = gameData.goodWords.some(word => word === clickedWord) 
        setSelectedWords((prevValue) => [{word: clickedWord, result: result}, ...prevValue]) // if not: add an item to an array with info does clicked word is good or bad
        }
    }

    //declaring function that manages clicking submit button
    const handleButtonClick = () => {
        if(!checkResult) {
            setCheckResult(true); //run 'check-view' if it's not already running
        } else {
            setView('submit-game-view');
            setCheckResult(false); //if it is: display submit game view and end 'check-view'
        }
    }

    return (
        <div>
            <h3>{gameData.question}</h3>
            <div className={styles.wordsWrapper}>
                {gameData.allWords
                    .map((word, index) => <Word 
                    key={index}
                    word={word}
                    checkResult={checkResult}
                    selectedWords={selectedWords}
                    wordIsClicked={selectedWords.some(obj => obj.word === word)}
                    handleWordClick={handleWordClick}
                    />)}
            </div>
            <button onClick={handleButtonClick}>{!checkResult ? 'Check result' : 'Submit game'}</button>
        </div>
    )
}