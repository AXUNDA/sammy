import React from 'react'
import "./styles.css"
import qwid from "../assets/qwid.png"

export default function BigCard() {


      return (
            <div id='bigCard' className='bigCard'>
                  <div className="cardContent">
                        <div className="header">
                              <h1 className="title">
                                    qwid
                              </h1>
                              <div className='arrow'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                          <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                                    </svg>
                                    <hr className='rule' />

                              </div>

                        </div>
                        <p className='desc'>
                              qwid is a remittance platform,where users can perform cross-border payments
                              easily and at an affordable rate ,it also provide remittance services

                        </p>
                        <div className="niches">
                              <h1 className="niche">
                                    web app
                              </h1>
                              <h1 className="niche">
                                    Fin-tech
                              </h1> <h1 className="niche">
                                    Product
                              </h1>
                        </div>
                        <img src={qwid} alt="" className='cardImg' />

                  </div>
            </div>
      )
}
