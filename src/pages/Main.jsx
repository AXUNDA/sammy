import BigCard from "../components/BigCard"
import { useEffect } from "react"
import Engagements from "../components/Engagements"
import Home from "../components/Home"
import Nav from "../components/Nav"
import SmallCard from "../components/SmallCard"
import "./styles.css"

import "../fonts/MartianGrotesk-sWdRg.otf"
import Connect from "../components/Connect"
import Footer from "../components/Footer"
import qwid from "../assets/qwid.png"
import pudio from "../assets/pudio.png"
import helene from "../assets/helene.png"
import beacamp from "../assets/beacamp.png"
import { useState } from "react"
import movingImage1 from "../assets/movingImage1.png"
import movingImage2 from "../assets/movingImage2.png"
import movingImage3 from "../assets/movingImage3.png"
import movingImage4 from "../assets/movingImage4.png"
import movingImage5 from "../assets/movingImage5.png"
import movingImage6 from "../assets/movingImage6.png"
import movingImage7 from "../assets/movingImage7.png"
import movingImage8 from "../assets/movingImage8.png"
import movingImage9 from "../assets/movingImage9.jpg"
import movingImage10 from "../assets/movingImage10.png"
import Fire from "../components/Fire"











function Main() {
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
            }, 2000);
            scroll()




      }, []);

      return (
            <>
                  {isLoading ? (<Fire />) : (
                        <div className="App" onMouseMove={handleMouseMove}
                        // onScroll={handleMouseMove}
                        >
                              <Nav home={true} />
                              <Home />
                              <div
                                    className="cursor"
                                    style={{ left: cursorPosition.x, top: cursorPosition.y }}
                              />
                              <div className="work" id="work">

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
                              {/* <p className="show">
                        show more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                  </p> */}
                              <a href="/work" className='resumeShow'>
                                    <p className='cv'>Show more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right right-arrow" viewBox="0 0 16 16">
                                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                                          </svg>
                                    </p>
                              </a>
                              <hr />
                              <p className="featured" style={{ marginTop: "110px", marginBottom: "70px" }}>Recent Work</p>

                              <div className="imageSlider">
                                    <div className="slider">

                                          <img src={movingImage10} alt="" className="bigSlide" />
                                          <img src={movingImage9} alt="" className="bigSlide" />
                                          <img src={movingImage8} alt="" className="smallSlide" />
                                          <img src={movingImage7} alt="" className="bigSlide" />
                                          <img src={movingImage6} alt="" className="bigSlide" />
                                          <img src={movingImage5} alt="" className="smallSlide" />
                                          <img src={movingImage4} alt="" className="bigSlide" />
                                          <img src={movingImage3} alt="" className="bigSlide" />
                                          <img src={movingImage2} alt="" className="smallSlide" />


                                    </div>
                                    <div className="sliderLeft">
                                          <img src={movingImage1} alt="" className="bigSlide middleBig" />
                                          <img src={movingImage2} alt="" className="bigSlide middleBig" />
                                          <img src={movingImage3} alt="" className="smallSlide middleSmall" />
                                          <img src={movingImage4} alt="" className="bigSlide middleBig" />
                                          <img src={movingImage5} alt="" className="bigSlide middleBig" />
                                          <img src={movingImage6} alt="" className="smallSlide middleSmall" />
                                          <img src={movingImage7} alt="" className="bigSlide middleBig" />
                                          <img src={movingImage8} alt="" className="bigSlide middleBig" />
                                          <img src={movingImage9} alt="" className="smallSlide middleSmall" />

                                    </div>
                                    <div className="slider">
                                          <img src={movingImage10} alt="" className="bigSlide middleBig" />
                                          <img src={movingImage9} alt="" className="bigSlide middleBig" />
                                          <img src={movingImage9} alt="" className="smallSlide middleSmall" />
                                          <img src={movingImage8} alt="" className="smallSlide middleSmall" />
                                          <img src={movingImage7} alt="" className="bigSlide middleBig" />
                                          <img src={movingImage6} alt="" className="bigSlide middleBig" />
                                          <img src={movingImage5} alt="" className="smallSlide middleSmall" />
                                          <img src={movingImage4} alt="" className="bigSlide middleBig" />
                                          <img src={movingImage3} alt="" className="bigSlide middleBig" />
                                          <img src={movingImage2} alt="" className="smallSlide middleSmall" />


                                          {/* <img src={movingImage10} alt="" className="bigSlide middleBig" />
                              <img src={movingImage9} alt="" className="bigSlide middleBig" />
                              <img src={movingImage8} alt="" className="smallSlide middleSmall" />
                              <img src={movingImage7} alt="" className="bigSlide middleBig" />
                              <img src={movingImage6} alt="" className="bigSlide middleBig" />
                              <img src={movingImage5} alt="" className="smallSlide middleSmall" />
                              <img src={movingImage2} alt="" className="bigSlide middleBig" />
                              <img src={movingImage2} alt="" className="bigSlide middleBig" />
                              <img src={movingImage3} alt="" className="smallSlide middleSmall" /> */}


                                    </div>

                              </div>
                              <Connect />
                              <Footer />

                        </div>


                  )}
            </>

      )
}

export default Main
