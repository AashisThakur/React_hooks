import { useImperativeHandle, useState } from "react";
import { forwardRef } from "react";


const UseImperativeHandlerDemo = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        handleToggle() {
            setToggle(!toggle);
        },
        check() { }
    }));
    return <>
        <button>Button in child</button>
        {toggle && <span>Toggle is true</span>}
    </>
})

export default UseImperativeHandlerDemo;