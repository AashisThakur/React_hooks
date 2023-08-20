import { useContext } from "react";
import { appContext } from "./contextTutorial";



const User = () => {
    const { username } = useContext(appContext);
    return <>User : {username}</>
}

export default User;