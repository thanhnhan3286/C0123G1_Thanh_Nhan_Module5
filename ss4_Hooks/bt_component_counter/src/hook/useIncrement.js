import {useState} from "react";

export default function useIncrement(addAmount) {
    const [count, setCount] = useState(0)
    function increase(addAmount) {
        setCount(count + addAmount)
    }
    return [count, increase]
}