export const Input = ({nickname, setNickname, setView}) => {
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setView('game-view')
    }
    return (

    <form>
        <input type="text" placeholder="Enter yoour nickname..." value={nickname} onChange={(e) => setNickname(e.target.value)}></input>
        <button type="submit" onClick={handleSubmit}>Let's play!</button>
    </form>)
}