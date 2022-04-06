import { Input } from "../components/Input"

export const InputView = ({nickname, setNickname, setView}) => {
    return (
        <>
            <h1>
                Wordcloud game
            </h1>
            <Input nickname={nickname} setNickname={setNickname} setView={setView}/> 
        </>
    )
}