import React, { useState } from 'react'

const Swapvalue = () => {
    const [swap1, setswap1] = useState ('value1')
    const [swap2, setswap2] = useState ('value2')

    const swapbtn = () => {
        const temp = swap1
        setswap1(swap2)
        setswap2(temp)
    }
  return (
    <div>
      <h1>Swap{swap1}</h1>
      <h1>Swap{swap2}</h1>
      <button onClick={swapbtn}>swap</button>
    </div>
  )
}

export default Swapvalue
