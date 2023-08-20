
type headingProps = {
    children?: React.ReactNode,
}

export const Heading = (props: headingProps) => {
    return <h1>{props.children}</h1>
}