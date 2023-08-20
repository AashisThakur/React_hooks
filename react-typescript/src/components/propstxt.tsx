
interface nameProps {
    name: string;
    count: number;
    isloggedin: boolean
}

export const Value = (props: nameProps) => {
    return <>{props.isloggedin ? < h1 > Welcome {props.name} ? {props.count}</h1 > : "Login"}</>
}