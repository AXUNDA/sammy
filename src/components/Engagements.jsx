import React from 'react'
import "./styles.css"
import "../fonts/MartianGrotesk-sWdRg.otf"


export default function Engagements({ src, text }) {
      return (
            <div className='engagements'>
                  <img src={src} alt="" className="card" />
                  <p className="otherText">
                        {text}
                  </p>

            </div>
      )
}
