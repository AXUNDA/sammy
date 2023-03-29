import React, { useState } from 'react'
import "./styles.css"
import "../fonts/MartianGrotesk-sWdRg.otf"
import "../fonts/Satoshi-Regular.otf"

export default function Home() {


      return (
            <div className='home'

            >
                  <h1 className='hi'>Hi, I'm Samuel</h1>

                  <p className='me'>
                        I'm a Product designer who cares about solving complex problems,by deeply understanding the people around me and the world they live in
                  </p>
                  <a href="" className='resume'>
                        <p className='cv'>See Resume <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></p>
                  </a>
                  <a href="" className='view'>
                        <p>View my work</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                        </svg>
                  </a>
                  <hr className='line
                  ' />
                  <h1 className='featured'>Featured Works</h1>
            </div>
      )
}
