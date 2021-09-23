import {useState} from "react";

const ComponentState = () => {
    const [a, setA] = useState(0)

    //setA(1)
    return (
        <>{a}</>
    )
}

export default ComponentState;
