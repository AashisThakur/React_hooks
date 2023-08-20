import { useEffect } from "react";

const Child = ({ returnComment }) => {

    useEffect(() => {
        console.log("Child Function called")
    }, [returnComment]);

    return <div>{returnComment()}</div>
}

export default Child;