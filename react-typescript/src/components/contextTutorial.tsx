import { createContext, useState } from "react";
import Login from "./login";
import User from "./user";


export const appContext = createContext(null);

const ContextTut = () => {
    const [username, setUsername] = useState("");
    return (
        <appContext.Provider value={{ username, setUsername }} >
            <Login /> <User />
        </appContext.Provider>)
}

export default ContextTut;