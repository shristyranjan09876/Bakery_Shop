import React, { useState } from 'react'

const Swapinput = () => {
    const [input1, setinput1] = useState('value1')
    const [input2, setinput2] = useState('value2')

    const inputchngehandler = () =>{
        const temp = input1
        setinput1(input2)
        setinput2(temp)
     }

     const inputhandler = (event) => {
        setinput1(event.target.value)

     }

  return (
    <div>
      <h1>{input1}{input2} </h1>
      <input type='text' placeholder='name'  value={input1} onChange={inputhandler} /> <br /> <br />
      <input type='text'  placeholder='lname' value={input2} onChange={inputhandler} /> <br /> <br />
      <button onClick={inputchngehandler}>Swapinput</button>
    </div>
  )
}

export default Swapinput
