export const Input = ({
    nickname, 
    setNickname, 
    setView}) => {
   
    const handleSubmit = (e) => {
        //prevent window reloading
        e.preventDefault();
        //display GameView component
        setView('game-view')
    }
    
    return (
    <form>
        <input 
        type="text" 
        placeholder="Enter your nickname..." 
        value={nickname} 
        onChange={(e) => setNickname(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>Let's play!</button>
    </form>)
}