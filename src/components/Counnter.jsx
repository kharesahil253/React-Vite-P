import { useState } from 'react'
import './App.css'

const Counter = () => {
  // let count = 0;
  // count++ Is giving error string is immutable sometimes work or not 
  // Using the usestate because we have to show the changes on the DOM
  const [count, setcount] = useState(0);

  const increase = () => {
    // setcount(count + 1);
    // setcount(count + 1);
    //Last wala used because it takes the usestate variable 
    // setcount(count + 4);
    //Using callback toh prevoius record 
    setcount((prev) => prev >= 10 ? prev = 10 : prev + 1);
    // setcount((prev)=>prev+2);
    // setcount((prev)=>prev+3);
    console.log("CLicked", count)
  }
  const decrease = () => {
    setcount((prev) => prev <= -10 ? prev = -10 : prev - 1);
  }
  const reset = () => {
    setcount(0)
  }
  return (
    <>
      <h1>Counter {count}</h1>
      <div className="buttons">
        <button onClick={increase}>Increament</button>
        <button onClick={decrease}>Decreament</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default Counter