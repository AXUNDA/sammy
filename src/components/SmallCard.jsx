import React from 'react'
import pudio from "../assets/pudio.png"
import "../fonts/Satoshi-Regular.otf"
import { useNavigate } from 'react-router-dom'



export default function SmallCard({ title, desc, img, niche1, niche2, niche3 }) {
      const navigate = useNavigate()




      return (
            <div className='smallCard'

                  onClick={() => {
                        navigate(`/${title}`)
                  }}


            >
                  <div className="cardContent">
                        <div className="header">
                              <h1 className="title">
                                    {title}

                              </h1>
                              <div className="arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                          <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                                    </svg>
                                    <hr className='rule' />
                              </div>
                        </div>
                        <p className="smallDesc">
                              {desc}
                        </p>
                        <div className="niches">
                              <h1 className="niche">
                                    {niche1}
                              </h1>
                              <h1 className="niche">
                                    {niche2}

                              </h1> <h1 className="niche">
                                    {niche3}

                              </h1>
                        </div>
                        <img src={img} alt="" className='smallCardImg' />

                  </div>

            </div>
      )
}

