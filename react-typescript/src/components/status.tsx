type StatusProps = {
    status: "loading" | "success",
}


export const Status = (props: StatusProps) => {
    let message;
    if (props.status == 'loading') {
        message = props.status;
    } else message = "Status Failed"
    return <>
        <h1> Status {message}</h1>
    </>
}