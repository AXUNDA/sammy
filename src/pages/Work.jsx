import React, { useState, useEffect } from 'react'
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
import Screens from '../components/Screens'
import blinqPay from "../assets/blinqPayHeader.png"
import rhendaHeader from "../assets/rhendaHeader.png"


export default function Work() {

      const [isLoading, setIsLoading] = useState(true);

      const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

      const handleMouseMove = (event) => {
            setTimeout(() => {
                  setCursorPosition({ x: event.clientX, y: event.clientY });


            }, 100)
      };
      useEffect(() => {



            setTimeout(() => {
                  setIsLoading(false);
            }, 3000);
      }, []);
      return (
            <>
                  {isLoading ? (<Screens />) : (
                        <div className='works' onMouseMove={handleMouseMove}>
                              <Nav work={true} />

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

                                          title={"Rhenda"}
                                          desc={"Rhenda is a service provider platform that links users with a diverse range of artisans offering various services. The platform acts as a bridge, connecting customers seeking artisanal services with skilled artisans capable of fulfilling their needs."}
                                          niche1={"Mobile App"}
                                          niche2={"B2B/B2C"}
                                          niche3={"Product"}
                                          img={rhendaHeader}

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
                                          title={"Blinqpay"}
                                          desc={"Merchant check out system that helps businesses to process transactions and accept payments from customers, ranging from point-of-sale terminals, online payment gateway and mobile payments"}
                                          img={blinqPay}
                                          niche1={"Web"}
                                          niche2={"Fin-Tech"}
                                          niche3={"Product"}




                                    />

                              </div>
                              <div className="work">
                                    <BigCard
                                          title={"Beacamp"}
                                          desc={"Beacamp empowers professionals and newbies in Developer Relations (DevRel) and Marketing. Our comprehensive courses, expert instructors, and career-focused resources provide individuals with the knowledge and skills they need to excel in fostering developer communities, driving developer adoption, and building successful developer-centric products."}
                                          img={beacamp}
                                          niche1={"Web App"}
                                          niche2={"Edu-Tech"}
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



                  )}
            </>

      )
}
