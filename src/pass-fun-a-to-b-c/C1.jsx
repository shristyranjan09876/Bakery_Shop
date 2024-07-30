import React from 'react'

const C1 = ({name,setname}) => {
   
  return (
    <div>
     <h2>{name.name}{name.lname}</h2>                        
                                                                         {/* show name without input field  */}
   </div>
  )
}

export default C1




 // const handleFirstNameChange = (e) => {
    //     setname({...name, name:e.target.value})
    // }                                                           //show name with input field

    // const handleLastNameChange = (e) => {
    //     setname({...name, lastName:e.target.value})
    // }
  {/* <div>
      <input value={name.name} onChange={handleFirstNameChange} />  
      <input value={name.lname} onChange={handleLastNameChange} /> 
       </div> */}