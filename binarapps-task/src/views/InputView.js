import { Input } from "../components/Input";
import styles from "./InputView.module.css";

export const InputView = ({
    nickname, 
    setNickname, 
    setView}) => {
    
        return (
        <>
            <h1 className={styles.inputHeader}>
                Wordcloud <strong><br/>game</strong>
            </h1>
            <Input nickname={nickname} setNickname={setNickname} setView={setView}/> 
        </>
    )
}