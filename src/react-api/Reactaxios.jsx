import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Reactaxios.css'

const Reactaxios = () => {

    const [myData, setMyData] = useState([])

//using promises
    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => setMyData(response.data))

    // },[])
     
//using  Async Await
const getApiData = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setMyData(response.data)
};
useEffect(() => {
    getApiData()
    }, []);

  return (
    <div>
     <h1>Axios</h1>
     <div className='grid'>
    {myData.slice(0,15).map((post) => {
        const {id, title, body} = post;
        return (
            <div className='card' key={id}>
            <h2>{title}</h2>
            <p>{body.slice(0, 150)}</p>
            </div>
            )
    })}
    </div>
    </div>
  )
}

export default Reactaxios
