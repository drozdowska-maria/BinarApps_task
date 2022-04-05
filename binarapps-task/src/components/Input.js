export const Input = ({nickname, setNickname, setIsLogged}) => {
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLogged(true)
    }
    return (

    <form>
        <input type="text" placeholder="Enter yoour nickname..." value={nickname} onChange={(e) => setNickname(e.target.value)}></input>
        <button type="submit" onClick={handleSubmit}>Let's play!</button>
    </form>)
}