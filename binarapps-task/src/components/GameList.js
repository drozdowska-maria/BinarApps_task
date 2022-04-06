import styles from './GameList.module.css'

export const GameList = ({gameList, setChoosenWords, choosenWords}) => {

    const handleClick = (clickedWord) => {
        if (choosenWords.some((obj) => obj.word === clickedWord)) {
            setChoosenWords((prevValue) => prevValue.filter((obj) => obj.word !== clickedWord))
        } else {
        const result = gameList.goodWords.some(word => word === clickedWord)
        setChoosenWords((prevValue) => [{word: clickedWord, result: result}, ...prevValue])
        }
    }

    return (
        <div>
        <h3>{gameList.question}</h3>
        <div className={styles.wordsWrapper}>
            {gameList.allWords
                .map((word, index) => <div 
                key={index} 
                className={choosenWords.some(obj => obj.word === word) ? styles.clicked : ''} 
                onClick={() => handleClick(word)}>
                    {word}
            </div>)}
        </div>
        <button>Check result</button>
        </div>
    )
}