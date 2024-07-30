import React from 'react'
import './Why.css'

const Whyus = (props) => {
  return (
    <>
    
       <div>
     
      <div>
        <div className="row">
            <div className="col-md-4">
                <div className="card2" style={{ width: "18rem" }}>
                    <img src={props.img} width={'50px'}
                    className="cardimg" alt="..."/>
                    <div className="body">
                        <h5 className="title">{props.title}</h5>
                        <p className="text">Our team of expert developers have years of experience in creating high
                        quality software solutions.</p>
                     
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Whyus
