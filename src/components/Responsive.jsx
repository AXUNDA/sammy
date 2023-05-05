import React from 'react'
import "./styles.css"
import responsive from "../assets/animated/animat-responsive-color.gif"
import car from "../assets/animated/animat-road-trip-color.gif"

export const Responsive = () => {
      return (
            <div className='responsive'>
                  <img className='anime' src={car} alt="" />
            </div>
      )
}
