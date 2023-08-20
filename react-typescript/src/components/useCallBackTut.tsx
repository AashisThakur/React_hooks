import { useCallback, useState } from "react";
import Child from "./child";

//the purpose of this hook to prevent calling child returncomment unless data is changes  
const UseCallBackTut = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Data to display");

    const returnComment = useCallback((name) => {
        return data + name;
    }, [data])
    return (
        <div className="App">
            <Child returnComment={returnComment} />
            <button onClick={() => {
                setToggle(!toggle);
            }}>Toggle</button>
            {toggle && <h1>Toggled Value</h1>}
        </div>
    );
}

export default UseCallBackTut;