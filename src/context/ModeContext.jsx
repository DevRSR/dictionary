import { createContext } from "react";

export const ModeContext = createContext({
    mode: Boolean,
    setMode: ()=> {},
    setWordObj: () => {},
    wordDetail: Object,
    setNotFound: () => {},
    setWord: () => {},
    setIsLoading: () => {},
    word: String,
})


