import  { useMemo, useState} from "react"

export default function MemoComp () {
    const [number, setNumber] = useState<number>(0)
    const [count, setCount] = useState<number>(0)

    const incNumber = () => setNumber((number) => number + 1 )
    const incCount = () => setCount((count) => count + 1)

    const isNumberEven = useMemo(() => {
        let i =0
        while (i < 20000000) {
            i++
    }
    return number % 2 === 0
},[number])

return (
    <div>
        <button onClick={incNumber}> number : {number}
        </button>
        <div>
            <h1>
            {isNumberEven ? "even" : "odd"}
            </h1>
            </div>
        <button onClick={incCount}>count: {count}</button>
    </div>
)
}