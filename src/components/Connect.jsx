import React from 'react'
import "./styles.css"
import "../fonts/MartianGrotesk-WdxBd.otf"
import "../fonts/Satoshi-Regular.otf"

export default function Connect() {
      return (
            <div className='connect'>
                  <p className="connectHeader">
                        Let’s connect!

                  </p>
                  <p className="message">
                        <a href="" className='connectLink'>
                              Send a message
                        </a>

                        <span className='connectSpan'>
                              or
                        </span>

                        <a href="" className='connectLink'>
                              Connect on LinkedIn

                        </a>
                        <span>
                              and let's discuss how i can help you
                        </span>
                  </p>

            </div>
      )
}
