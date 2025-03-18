import React,{useState} from "react";

const State = () => {
    const [count, setCount] = useState(0);
     return (
        <>
        <p> Count: &nbsp; {count} &nbsp;</p>
        <button onClick={() => setCount(count+1)}>
            Increment
        </button>
        <button onClick={() => setCount(count-1)}> Decerement </button>
        
        </>
     )
}

export default State;