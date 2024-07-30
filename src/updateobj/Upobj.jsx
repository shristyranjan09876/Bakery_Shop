import React, { useState } from 'react'

const Upobj = () => {
    const [updt, setupdt] = useState({
        a:'hello',
        b:'from',
        c:'react-developer'
        })
        const updtbtn =() => {
            setupdt({...updt, c:'shristy'})
        }
  return (
    <>
       <div>
      <h1>{updt.a} {updt.b } {updt.c}</h1>
      <button onClick={updtbtn}>update</button>
      </div>
    </>
  )
}

export default Upobj
