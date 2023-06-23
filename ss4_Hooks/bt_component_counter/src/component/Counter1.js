import React from "react";
import useIncrement from "../hook/useIncrement";
import "bootstrap/dist/css/bootstrap.css"

export function Counter1() {
    const [count, setCount] = useIncrement(0)
    return (
        <>
            <div>
                <h1>
                    Count: {count}
                </h1>
                <button onClick={() => setCount(1)}>ADD 1</button>
            </div>
        </>
    )
}