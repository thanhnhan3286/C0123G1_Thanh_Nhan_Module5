import React from "react";
import useIncrement from "../hook/useIncrement";
import "bootstrap/dist/css/bootstrap.css"

export function Counter2() {
    const [count, setCount] = useIncrement(0)
    return (
        <>
            <div>
                <h1>
                    Count: {count}
                </h1>
                <button onClick={() => setCount(2)}>ADD 2</button>
            </div>

        </>
    )
}