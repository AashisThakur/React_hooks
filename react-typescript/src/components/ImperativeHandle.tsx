import { useRef } from "react";
import UseImperativeHandlerDemo from "./useImperativeHandlerDemo";


const ImperativeHandle = () => {
    const buttonRef = useRef(null);
    console.log(">>>>", buttonRef.current)
    return <>
        <button onClick={() => { buttonRef!.current!.handleToggle(); }}>
            Button in parent
        </button>
        <UseImperativeHandlerDemo ref={buttonRef} />
    </>
}

export default ImperativeHandle;