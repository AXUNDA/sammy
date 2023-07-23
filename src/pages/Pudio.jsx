import React from 'react'
import "./styles.css"
import Nav from '../components/Nav'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


import "../fonts/Satoshi-Regular.otf"
import "../fonts/MartianGrotesk-WdxBd.otf"
import headerImg1 from "../assets/qwidHeaderImage1.png"
import headerImg2 from "../assets/qwidHeaderImage2.png"
import bioLeft from "../assets/bioLeftImg.png"
import bioRight from "../assets/bioRight.png"
import userFlow from "../assets/userFlow.png"
import pudioPaper from "../assets/pudioPaper.png"
import hifiImg1 from "../assets/hifiImg1.png"
import hifiImg2 from "../assets/hifiImg2.png"
import hifiImg3 from "../assets/hifiImg3.png"
import authenticate1 from "../assets/authenticate1.png"
import authenticate2 from "../assets/authenticate2.png"
import authenticate3 from "../assets/authenticate3.png"
import authenticate4 from "../assets/authenticate4.png"
import authenticate5 from "../assets/authenticate5.png"
import authenticate6 from "../assets/authenticate6.png"
import authenticate7 from "../assets/authenticate7.png"
import authenticate8 from "../assets/authenticate8.png"
import homeImg1 from "../assets/homeImg1.png"
import homeImg2 from "../assets/homeImg2.png"
import homeImg3 from "../assets/homeImg3.png"
import homeImg4 from "../assets/homeImg4.png"
import podcast1 from "../assets/podcast1.png"
import podcast2 from "../assets/podcast2.png"
import podcast3 from "../assets/podcast3.png"
import podcast4 from "../assets/podcast4.png"
import moreScreens1 from "../assets/moreScreens1.png"
import moreScreens2 from "../assets/moreScreens2.png"
import moreScreens3 from "../assets/moreScreens3.png"
import moreScreens4 from "../assets/moreScreens4.png"
import Footer from '../components/Footer'
import { Responsive } from '../components/Responsive'



















export default function Pudio() {
      const navigate = useNavigate()
      const [isLoading, setIsLoading] = useState(true);
      function scroll() {
            window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
            });

      }
      useEffect(() => {
            scroll()


            setTimeout(() => {
                  setIsLoading(false);
            }, 3000);
      }, []);
      return (
            <>
                  {isLoading ? (<Responsive />) : (
                        <div className='pudio'>
                              <Nav work={true} />
                              <div className="pudioHeader">
                                    <div className="pudioContainer">
                                          <div className="headerLeft">
                                                <p className="qwidTitle">
                                                      pudio
                                                </p>
                                                <p className="qwidYear">
                                                      June 2021- 4 weeks
                                                </p>
                                                <div className="qwidNiches">
                                                      <p className="qwidNiche">Mobile App</p>
                                                      <p className="qwidNiche">Edu-tech</p>
                                                      <p className="qwidNiche">Product</p>

                                                </div>
                                                <p className="qwidWorkTitle">
                                                Audio learning platform

                                                </p>
                                                <div className="qwidLast">
                                                      <p className="lastItem">Organization: Beacamp </p>
                                                      <p className="lastItem">Role: Product Designer</p>
                                                      {/* <p className="lastItem"> View Product</p> */}


                                                </div>

                                          </div>
                                          <div className="pudioImages">
                                                <img src={headerImg1} alt="" className="pudioHeaderImg1" />

                                                <img src={headerImg2} alt="" className="pudioHeaderImg2" />


                                          </div>

                                    </div>

                              </div>
                              <div className="qwidOverView_Problem">
                                    <div className="qwidOverview">
                                          <div className="overviewContainer">
                                                <p className="overviewHeader">
                                                      overview

                                                </p>
                                                <div className="overviewDesc">
                                                      For a long time eLearning has been centered on video courses and text content with little attention on audio learning. Many have premium and valuable knowledge to share but the thoughts of creating a video course is a nightmare from getting a laptop, a camera, recording, and editing software.
                                                      This is where Pudio comes in, an audio learning platform where people can easily share knowledge from their mobile phones without the trouble of video courses.
                                                      On the flip side, learners will enjoy learning new skills on the go, reducing screen time, and listening to powerful audio content while waiting, cooking, exercising, commuting, or doing housework.

                                                </div>

                                          </div>

                                    </div>
                                    <div className="qwidProblem">
                                          <div className="overviewContainer">
                                                <p className="overviewHeader">
                                                      Problem

                                                </p>
                                                <p className="pudioHeadline">
                                                      creators :

                                                </p>
                                                <ul>
                                                      <li>
                                                            Technical difficulties in creating video content
                                                      </li>
                                                      <li>
                                                            Time consumption in creating video courses
                                                      </li>
                                                      <li>
                                                            Lack of passive income stream

                                                      </li>
                                                      <li>
                                                            Increase audio course and podcast adoption
                                                      </li>
                                                </ul>
                                                <p className="pudioHeadline">
                                                      learners :

                                                </p>
                                                <ul>
                                                      <li>
                                                            Few flexible learning styles
                                                      </li>
                                                      <li>
                                                            Eye challenges due to time spent learning on-screen
                                                      </li>
                                                      <li>
                                                            Listen and Learn anywhere and anytime

                                                      </li>

                                                </ul>

                                          </div>


                                    </div>


                              </div>
                              <div className='qwidOverView_Problem'>
                                    <div className="pudioLongCard">
                                          <div className="longCardContainer">
                                                <p className="overviewHeader">
                                                      Goals

                                                </p>
                                                <p className="pudioHeadline">
                                                      Increase audio content relevance

                                                </p>
                                                <ul>
                                                      <li>
                                                            To improve efficiency in audio contents
                                                      </li>
                                                      <li>
                                                            Help consume content without having to be glued to the screen.
                                                      </li>
                                                      <li>
                                                            Bring a personal voice to the brands by humanizing it.

                                                      </li>
                                                      <li>
                                                            Improve accessibility of native content.
                                                      </li>
                                                </ul>
                                                <p className="pudioHeadline">
                                                      learners :

                                                </p>
                                                <ul>
                                                      <li>
                                                            Few flexible learning styles
                                                      </li>
                                                      <li>
                                                            Eye challenges due to time spent learning on-screen
                                                      </li>
                                                      <li>
                                                            Listen and Learn anywhere and anytime

                                                      </li>

                                                </ul>


                                          </div>

                                    </div>
                                    <div className="pudioLongCard">
                                          <div className="longCardContainer">
                                                <p className="overviewHeader">
                                                      Process

                                                </p>
                                                <p className="Desc">
                                                      My design process began with an extensive research phase aimed at gaining a deep understanding of users' needs, pain points, and behaviors. I employed a combination of both qualitative and quantitative research methods to gather data and identify the most significant design opportunities and challenges.

                                                </p>
                                                <p className="Desc">
                                                      To begin, I conducted a series of user interviews with a sample of Pudio's target audience. These interviews were carried out remotely via video calls, utilizing a semi-structured interview guide to ensure consistency and neutrality. Through these interviews, I aimed to comprehend the motivations and goals of users utilizing the app, as well as their pain points and frustrations.
                                                </p>
                                                <p className="Desc">
                                                      Additionally, I analyzed industry trends and studied existing audio content platforms to gain further insights into user behavior, as well as identify key opportunities and challenges within the industry. This research not only helped me understand the competitive landscape but also enabled me to identify potential areas for differentiation and shape the overall strategy for the Pudio app.
                                                </p>
                                          </div>

                                    </div>

                              </div>
                              <div className="talkToUsers">
                                    <div className="talkContainer">
                                          <p className="overviewHeader">
                                                Talking to Users

                                          </p>
                                          <p className="overviewDesc">
                                                In an effort to discern the expectations of prospective users, I engaged in discussions with tech newbies, content creators and techies. This undertaking was designed to achieve the following objective:

                                          </p>
                                          <ul>
                                                <li>
                                                      Understanding what are the challenges they encounter when using the audio platform
                                                </li>
                                                <li>
                                                      Identify what brands they turn to in order to use audio contents
                                                </li>
                                                <li>
                                                      Discover what they like about the current brands they  use
                                                </li>
                                                <li>
                                                      Identify what users expect to be able to do
                                                </li>
                                          </ul>

                                          <p className="overviewDesc">
                                                The goal of this discussion was to guarantee that the product would effectively address the issue at hand while also being user-friendly and intuitive
                                          </p>
                                          <p className="pudioHeadline">
                                                Discovery..

                                          </p>
                                          <p className="overviewDesc">
                                                In an effort to discern the expectations of prospective users, I engaged in discussions with tech newbies, content creators and techies. This undertaking was designed to achieve the following objective:
                                          </p>
                                          <ol>
                                                <li>
                                                      Newbies to tech are not so familiar with audio contents most rely on video contents majorly

                                                </li>
                                                <li>
                                                      Some contents creator put their contents on Audible listenable (product competitors)
                                                </li>
                                                <li>
                                                      Techies like that they can get audio courses and books from these brands
                                                </li>
                                                <li>
                                                      creators want to be able to record podcast sessions.
                                                </li>
                                          </ol>


                                    </div>


                              </div>
                              <div className="persona">
                                    <div className="userPersona">
                                          <div className="personaContainer">
                                                <p className="overviewHeader">
                                                      User Persona

                                                </p>
                                                <div className="personaBio">
                                                      <img src={bioLeft} alt="" className="bioImg" />
                                                      <div className="bioDesc">
                                                            <p className="bioTag">Bio</p>
                                                            <p className="bioExp">
                                                                  Sammy Joe services to clients around the globe. Currently he has moved out of his family house and living in a new city due to his job placements. Sammy Joe has always wanted to become a product designer since his childhood.

                                                            </p>


                                                      </div>

                                                </div>
                                                <p className="bioDetailsTag">
                                                      Details

                                                </p>
                                                <div className="profileDetails">
                                                      <div className="profileLeft">
                                                            <p className="detailsX">
                                                                  Full Name

                                                            </p>
                                                            <p className="detailsX">
                                                                  Age

                                                            </p>
                                                            <p className="detailsX">
                                                                  Gender

                                                            </p>
                                                            <p className="detailsX">
                                                                  Education

                                                            </p>
                                                            <p className="detailsX">
                                                                  Location

                                                            </p>
                                                            <p className="detailsX">
                                                                  Marital Status

                                                            </p>
                                                            <p className="detailsX">
                                                                  Profession

                                                            </p>

                                                      </div>
                                                      <div className="profileRight">
                                                            <p className="detailsX">
                                                                  Sammy Joe

                                                            </p>
                                                            <p className="detailsX">
                                                                  32y/o

                                                            </p>
                                                            <p className="detailsX">
                                                                  male

                                                            </p>
                                                            <p className="detailsX">
                                                                  Bsc in Computer Science

                                                            </p>
                                                            <p className="detailsX">
                                                                  Ikeja,Lagos State

                                                            </p>
                                                            <p className="detailsX">
                                                                  Single

                                                            </p>
                                                            <p className="detailsX">
                                                                  Product Designer

                                                            </p>

                                                      </div>

                                                </div>
                                                <p className="goals">
                                                      Goals
                                                </p>
                                                <ul>
                                                      <li className='profileList'>
                                                            share contents and knowledge
                                                      </li>
                                                      <li className='profileList'>
                                                            Help people beginners grow their careers
                                                      </li>
                                                      <li className='profileList mb-5'>
                                                            Be comfortable sharing knowledge
                                                      </li>
                                                </ul>
                                                <p className="frustrations">
                                                      Frustrations

                                                </p>

                                                <ul >
                                                      <li className='profileList'>
                                                            Difficulties in making video contents

                                                      </li>
                                                      <li className='profileList'>
                                                            High cost of gadgets

                                                      </li>
                                                      <li className='profileList'>
                                                            Time consumption

                                                      </li>
                                                      <li className='profileList'>
                                                            Too introverted for the camer

                                                      </li>
                                                      <li className='profileList'>
                                                            outrages charge fee

                                                      </li>
                                                </ul>


                                          </div>

                                    </div>
                                    <div className="userPersona">
                                          <div className="personaContainer">
                                                <p className="overviewHeader">
                                                      User Persona

                                                </p>
                                                <div className="personaBio">
                                                      <img src={bioRight} alt="" className="bioImg" />
                                                      <div className="bioDesc">
                                                            <p className="bioTag">Bio</p>
                                                            <p className="bioExp">
                                                                  Peter is a developer in a software company that is based in the UK and development services to clients around the globe. Currently he is living with his newly wedded wife and works fully remote from home. On his leisure Peter watches football and takes his new wife for casual dates.

                                                            </p>


                                                      </div>

                                                </div>
                                                <p className="bioDetailsTag">
                                                      Details

                                                </p>
                                                <div className="profileDetails">
                                                      <div className="profileLeft">
                                                            <p className="detailsX">
                                                                  Full Name

                                                            </p>
                                                            <p className="detailsX">
                                                                  Age

                                                            </p>
                                                            <p className="detailsX">
                                                                  Gender

                                                            </p>
                                                            <p className="detailsX">
                                                                  Education

                                                            </p>
                                                            <p className="detailsX">
                                                                  Location

                                                            </p>
                                                            <p className="detailsX">
                                                                  Marital Status

                                                            </p>
                                                            <p className="detailsX">
                                                                  Profession

                                                            </p>

                                                      </div>
                                                      <div className="profileRight">
                                                            <p className="detailsX">
                                                                  Brad Peter

                                                            </p>
                                                            <p className="detailsX">
                                                                  28y/o

                                                            </p>
                                                            <p className="detailsX">
                                                                  male

                                                            </p>
                                                            <p className="detailsX">
                                                                  Masters Degree in Electronics

                                                            </p>
                                                            <p className="detailsX">
                                                                  Port-Harcourt

                                                            </p>
                                                            <p className="detailsX">
                                                                  Married

                                                            </p>
                                                            <p className="detailsX">
                                                                  Software Engineering

                                                            </p>

                                                      </div>

                                                </div>
                                                <p className="goals">
                                                      Goals
                                                </p>
                                                <ul>
                                                      <li className='profileList'>
                                                            Be able to give back to the tech community
                                                      </li>
                                                      <li className='profileList'>
                                                            Form a big community or forum for developers to mentor and gather senior developers to also help fresh techies
                                                      </li>
                                                      <li className='profileList mb-5'>
                                                            Make it easy for folks to land their desired job.
                                                      </li>
                                                </ul>
                                                <p className="frustrations">
                                                      Frustrations

                                                </p>

                                                <ul >
                                                      <li className='profileList'>
                                                            Not enough time to make contents

                                                      </li>
                                                      <li className='profileList'>
                                                            Busy schedule

                                                      </li>
                                                      <li className='profileList'>
                                                            Difficulties in getting resources
                                                      </li>
                                                </ul>




                                          </div>

                                    </div>
                              </div>
                              <div className="userFlow">
                                    <div className="userFlowContainer">
                                          <p className="overviewHeader">
                                                User Flow

                                          </p>
                                          <img src={userFlow} alt="" className="userFlowImg" />

                                    </div>
                              </div>
                              <div className="userFlow">
                                    <div className="userFlowContainer">
                                          <p className="overviewHeader">
                                                Paper wireFrames

                                          </p>
                                          <div className="pudioPaperFrames">
                                                <img src={pudioPaper} alt="" className="pudioPaper" />



                                          </div>

                                    </div>
                              </div>
                              <div className="hifiMockups">
                                    <p className="hifiHeader">
                                          Hi-fi Mockups

                                    </p>
                                    <div className="hifiImages">
                                          <img src={hifiImg1} alt="" className="hifi2" />
                                          <img src={hifiImg2} alt="" className="hifi2" />
                                          <img src={hifiImg3} alt="" className="hifi2" />

                                    </div>
                              </div>
                              <div className="hifiMockups">
                                    <p className="hifiHeader">
                                          Authentication

                                    </p>
                                    <div className="authenticationImages">
                                          <img src={authenticate1} alt="" className="hifiImg" />
                                          <img src={authenticate2} alt="" className="hifiImg" />
                                          <img src={authenticate3} alt="" className="hifiImg" />
                                          <img src={authenticate4} alt="" className="hifiImg" />
                                          <img src={authenticate5} alt="" className="hifiImg" />
                                          <img src={authenticate6} alt="" className="hifiImg" />
                                          <img src={authenticate7} alt="" className="hifiImg" />
                                          <img src={authenticate8} alt="" className="hifiImg" />


                                    </div>
                              </div>
                              <div className="hifiMockups">
                                    <p className="hifiHeader">
                                          Home

                                    </p>
                                    <div className="pudioHomeImages">
                                          <div className="pudioHomeContent">
                                                <img src={homeImg1} alt="" className="hifiImg" />
                                                <p className="pudioTextHelp">
                                                      Home courses, podcast, & Categories

                                                </p>
                                          </div>

                                          <div className="pudioHomeContent">
                                                <img src={homeImg2} alt="" className="hifiImg" />
                                                <p className="pudioTextHelp">
                                                      Courses from a category

                                                </p>
                                          </div>
                                          <div className="pudioHomeContent">
                                                <img src={homeImg3} alt="" className="hifiImg" />
                                                <p className="pudioTextHelp">
                                                      Course selected showing outline and details
                                                </p>
                                          </div>
                                          <div className="pudioHomeContent">
                                                <img src={homeImg4} alt="" className="hifiImg" />
                                                <p className="pudioTextHelp">
                                                      Audio player with summary and transcript feature

                                                </p>
                                          </div>




                                    </div>
                              </div>
                              <div className="hifiMockups">
                                    <p className="hifiHeader">
                                          Podcasts

                                    </p>
                                    <div className="pudioHomeImages">
                                          <div className="pudioHomeContent">
                                                <img src={podcast1} alt="" className="hifiImg" />
                                                <p className="pudioTextHelp">
                                                      Record podcast

                                                </p>
                                          </div>

                                          <div className="pudioHomeContent">
                                                <img src={podcast2} alt="" className="hifiImg" />
                                                <p className="pudioTextHelp">
                                                      Recording in Progress

                                                </p>
                                          </div>
                                          <div className="pudioHomeContent">
                                                <img src={podcast3} alt="" className="hifiImg" />
                                                <p className="pudioTextHelp">
                                                      Adding background sound to record
                                                </p>
                                          </div>
                                          <div className="pudioHomeContent">
                                                <img src={podcast4} alt="" className="hifiImg" />
                                                <p className="pudioTextHelp">
                                                      Pre-roll
                                                </p>
                                          </div>




                                    </div>
                              </div>
                              <div className="hifiMockups">
                                    <p className="hifiHeader">
                                          More screens

                                    </p>
                                    <div className="pudioHomeImages">
                                          <div className="pudioHomeContent">
                                                <img src={moreScreens1} alt="" className="hifiImg" />
                                                <p className="pudioTextHelp">
                                                      Creator Profile

                                                </p>
                                          </div>

                                          <div className="pudioHomeContent">
                                                <img src={moreScreens2} alt="" className="hifiImg" />
                                                <p className="pudioTextHelp">
                                                      User Profile

                                                </p>
                                          </div>
                                          <div className="pudioHomeContent">
                                                <img src={moreScreens3} alt="" className="hifiImg" />
                                                <p className="pudioTextHelp">
                                                      Learning Progress
                                                </p>
                                          </div>
                                          <div className="pudioHomeContent">
                                                <img src={moreScreens4} alt="" className="hifiImg" />
                                                <p className="pudioTextHelp">
                                                      Settings
                                                </p>
                                          </div>




                                    </div>
                              </div>
                              <div className="pagination">
                                    <p className="paginate" onClick={() => navigate("/qwid")}>Previous project</p>
                                    <p className="paginate" onClick={() => navigate("/helene")}>Next project</p>


                              </div>
                              <Footer />




                        </div>



                  )}

            </>

      )
}
