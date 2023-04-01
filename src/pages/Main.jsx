import BigCard from "../components/BigCard"
import Engagements from "../components/Engagements"
import Home from "../components/Home"
import Nav from "../components/Nav"
import SmallCard from "../components/SmallCard"
import "./styles.css"
import event3 from "../assets/event3.jpg"
import event4 from "../assets/event4.jpg"
import event1 from "../assets/event1.png"
import event2 from "../assets/event2.jpg"
import "../fonts/MartianGrotesk-sWdRg.otf"
import Connect from "../components/Connect"
import Footer from "../components/Footer"
import qwid from "../assets/qwid.png"
import pudio from "../assets/pudio.png"
import helene from "../assets/helene.png"
import beacamp from "../assets/beacamp.png"
import { useState } from "react"

function Main() {

      const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

      const handleMouseMove = (event) => {
            setTimeout(() => {
                  setCursorPosition({ x: event.clientX, y: event.clientY });


            }, 100)
      };


      return (
            <div className="App" onMouseMove={handleMouseMove}
            // onScroll={handleMouseMove}
            >
                  <Nav />
                  <Home />
                  <div
                        className="cursor"
                        style={{ left: cursorPosition.x, top: cursorPosition.y }}
                  />
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
                  <p className="show">
                        show more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                  </p>
                  <hr />
                  <p className="other">
                        My Other Engagements
                  </p>
                  <div className="engagementBox">
                        <Engagements text={"Public Speaking [Panelist Google Devfest 22]"} src={event3} />
                        <Engagements text={"Mentorship [Design mentor at this tech thing]"} src={event4} />
                  </div>
                  <div className="engagementBox">
                        <Engagements text={"Open Source contributions"} src={event1} />
                        <Engagements text={"Design Community (co- founder)"} src={event2} />
                  </div>
                  <Connect />
                  <Footer />

            </div>
      )
}

export default Main
