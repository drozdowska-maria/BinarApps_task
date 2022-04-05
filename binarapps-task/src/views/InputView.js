import { Input } from "../components/Input"

export const InputView = ({nickname, setNickname, setIsLogged}) => {
    return (
        <>
            <h1>
                Wordcloud game
            </h1>
            <Input nickname={nickname} setNickname={setNickname} setIsLogged={setIsLogged}/> 
        </>
    )
}