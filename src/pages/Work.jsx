import React, { useState } from 'react'
import Nav from '../components/Nav'
import "./styles.css"
import BigCard from '../components/BigCard'
import SmallCard from '../components/SmallCard'
import qwid from "../assets/qwid.png"
import pudio from "../assets/pudio.png"
import helene from "../assets/helene.png"
import beacamp from "../assets/beacamp.png"
import Connect from '../components/Connect'
import Footer from '../components/Footer'

export default function Work() {
      const [work, setWork] = useState(true)
      const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

      const handleMouseMove = (event) => {
            setTimeout(() => {
                  setCursorPosition({ x: event.clientX, y: event.clientY });


            }, 100)
      };
      return (
            <div className='works' onMouseMove={handleMouseMove}>
                  <Nav work={work} />

                  <div className="work work_page">
                        <BigCard
                              title={"qwid"}
                              desc={"  qwid is a remittance platform where users can perform cross-border payments easily and at an affordable rate. It also provide remittance services"}
                              img={qwid}
                              niche1={"Web App"}
                              niche2={"Fin-Tech"}
                              niche3={"Product"}


                        />
                        <SmallCard

                              title={"pudio"}
                              desc={"Pudio is a mobile app focused on bridging the gap between audio contents and video contents for knowledge seekers to acquire more knowledge anywhere and anytime."}
                              niche1={"Mobile App"}
                              niche2={"Edu-Tech"}
                              niche3={"Product"}
                              img={pudio}

                        />

                  </div>
                  <div className="work">
                        <SmallCard
                              title={"Helene"}
                              desc={"Helene helps business owners and sales individuals achieve maximum accountability and efficiency by helping them to automate processes like invoicing, and finance from their mobile phones."}
                              niche1={"Mobile App"}
                              niche2={"Accounting"}
                              niche3={"Product"}
                              img={helene}




                        />

                        <BigCard
                              title={"Beacamp"}
                              desc={"  qwid is a remittance platform where users can perform cross-border payments easily and at an affordable rate. It also provide remittance services"}
                              img={beacamp}
                              niche1={"Web App"}
                              niche2={"Edu-Tech"}
                              niche3={"Product"}




                        />

                  </div>
                  <div className="work">
                        <BigCard
                              title={"qwid"}
                              desc={"  qwid is a remittance platform where users can perform cross-border payments easily and at an affordable rate. It also provide remittance services"}
                              img={qwid}
                              niche1={"Web App"}
                              niche2={"Fin-Tech"}
                              niche3={"Product"}


                        />
                        <SmallCard

                              title={"pudio"}
                              desc={"Pudio is a mobile app focused on bridging the gap between audio contents and video contents for knowledge seekers to acquire more knowledge anywhere and anytime."}
                              niche1={"Mobile App"}
                              niche2={"Edu-Tech"}
                              niche3={"Product"}
                              img={pudio}

                        />

                  </div><div
                        className="cursor"
                        style={{ left: cursorPosition.x, top: cursorPosition.y }}
                  />

                  <Connect />
                  <Footer />

            </div>
      )
}
