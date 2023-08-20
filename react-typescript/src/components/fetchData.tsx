import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffectPrat() {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
            setData(response.data[0].email)
            console.log(response.data[0])
        })
    })

    return (<> <h1>Hello : {data}</h1></>);
}

export default UseEffectPrat;