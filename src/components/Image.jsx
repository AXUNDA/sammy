import React from 'react'

import image from "../assets/animated/animat-image-color.gif"
import "./styles.css"


function Image() {
      return (
            <div className='responsive'>
                  <img className='anime' src={image} alt="" />
            </div>
      )
}

export default Image