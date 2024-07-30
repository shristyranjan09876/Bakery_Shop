import React, { useState } from 'react'
import B from './B'

const A = () => {
    const [name, setname] = useState({
        name:'Teddy',
        lname:'Bear'
    })
  return (
    <div>
    <h1>my name is</h1>
      <B name={name} setname={setname} />
    </div>
  )
}

export default A
