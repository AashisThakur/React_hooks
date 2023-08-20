
type personName = {
    check: {
        firstname: string,
        lastname: string,
    }[]
}

export const Person = (props: personName) => {
    console.log(props.check)
    return <>{props.check.map((value) => {
        return <><h2 key={value.firstname}>{value.firstname}</h2>
            <h2>{value.lastname}</h2>
        </>
    }
    )}</>
}