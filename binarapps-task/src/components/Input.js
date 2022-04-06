import styles from '../views/InputView.module.css'

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
    <form className={styles.form}>
        <input 
        type="text" 
        placeholder="Enter your nickname..." 
        className={styles.input}
        value={nickname} 
        onChange={(e) => setNickname(e.target.value)}
        minLength='3'
        required //??????????
        />
        <button type="submit" className={`submit-button ${styles.inputButton}`} onClick={handleSubmit}>Let's play!</button>
    </form>)
}