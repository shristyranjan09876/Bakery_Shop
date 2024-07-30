import React, { useState } from 'react'

const Counter = () => {
    const [count, setcount] = useState(0)
    const buttonchane = () => {
        setcount(count + 1)
    }
  return (
    <>
      <div>
        <h1>Counter {count}</h1>
        <button onClick={buttonchane}>count</button>
      </div>
    </>
  )
}

export default Counter
