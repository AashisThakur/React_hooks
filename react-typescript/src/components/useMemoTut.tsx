import axios from "axios";
import { useEffect, useMemo, useState } from "react";

interface Comment {
    name: string;
}

const UseMemoTut = () => {
    const [data, setData] = useState<Comment[] | null>(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios.get<Comment[]>("https://jsonplaceholder.typicode.com/comments").then((response) => {
            setData(response.data);
            console.log(response.data[0]);
        });
    }, []);

    const findLongestName = (comments: Comment[] | null) => {
        if (!comments || comments.length === 0) return null;

        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log("Computed");
        return longestName;
    };

    const getLongestName = useMemo(() => findLongestName(data), [data]);

    return (
        <div className="App">
            <div>{getLongestName}</div>

            <button onClick={() => {
                setToggle(!toggle);
            }}>Toggle</button>
            {toggle && <h1>Toggled Value</h1>}
        </div>
    );
};

export default UseMemoTut;
