import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
   <>
     <div className='gallery1'>
      <h1>Gallery</h1> <hr className='hrtag' />
      <div className="gallery">
        <div className="gallery-item">
            <img src='./src/foodcourt/imag/gal1.jpg' height='300px' width='300px' alt="Image 1"/>
            </div>
            <div className="gallery-item">
            <img src='./src/foodcourt/imag/gal2.jpg' height='300px' width='300px'  alt="Image 2"/>
            </div>
            <div className="gallery-item">
            <img src='./src/foodcourt/imag/gal3.jpg' height='300px' width='300px'  alt="Image 1"/>
            </div>
            <div className="gallery-item">
            <img src='./src/foodcourt/imag/gal4.jpg' height='300px' width='300px' alt="Image 1"/>
            </div>
            {/* <div className="gallery-item">
            <img src="https://picsum.photos/200/304" alt="Image 1"/>
        </div> */}
        
      </div>

      <div className="gallery">
        <div className="gallery-item">
            <img src='./src/foodcourt/imag/gal5.jpg' height='300px' width='300px'  alt="Image 1"/>
            </div>
            <div className="gallery-item">
            <img src='./src/foodcourt/imag/gal6.jpg' height='300px' width='300px'  alt="Image 2"/>
            </div>
            <div className="gallery-item">
            <img src='./src/foodcourt/imag/gal7.jpg' height='300px' width='300px' alt="Image 1"/>
            </div>
            <div className="gallery-item">
            <img src='./src/foodcourt/imag/gal8.jpg' height='300px' width='300px'  alt="Image 1"/>
            </div>
            {/* <div className="gallery-item">
            <img src="https://picsum.photos/200/309" alt="Image 1"/>
        </div> */}
        
      </div>
    </div>
   </>
  )
}

export default Gallery
