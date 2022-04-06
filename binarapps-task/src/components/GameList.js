export const GameList = ({gameList}) => {
   
    const i =  Math.floor(Math.random() * gameList.length)

    return (
        <>
        <h3>{gameList[i].question}</h3>
        {gameList[i].allWords.map((word, index) => <div key={index}>{word}</div>)}
        </>
    )
}