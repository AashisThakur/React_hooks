import { useContext } from "react";
import { appContext } from "./contextTutorial";



const Login = () => {
    const { setUsername } = useContext(appContext);
    return <>
        <input onChange={(event) => {
            setUsername(event.target.value);
        }} />
    </>
}

export default Login;