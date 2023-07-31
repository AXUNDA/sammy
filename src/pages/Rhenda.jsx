import React, { useEffect, useState } from 'react'
import headerImage from "../assets/rhendaHeaderImage.png"
import Nav from '../components/Nav'
import onboarding1 from "../assets/rhendaOnboarding1.png"
import onboarding2 from "../assets/rhendaOnboarding2.png"
import onboarding3 from "../assets/rhendaOnboarding3.png"
import onboarding4 from "../assets/rhendaOnboarding4.png"
import onboarding5 from "../assets/rhendaOnboarding5.png"
import onboarding6 from "../assets/rhendaOnboarding6.png"
import onboarding7 from "../assets/rhendaOnboarding7.png"
import longImage from '../assets/rhendaLongImage.png'
import rhendaMap1 from "../assets/rhendaMap1.png"
import rhendaMap2 from "../assets/rhendaMap2.png"
import rhendaMap3 from "../assets/rhendaMap3.png"
import rhendaMap4 from "../assets/rhendaMap4.png"
import rhendaMap5 from "../assets/rhendaMap5.png"
import artisan1 from "../assets/userAndArtisan1.png"
import artisan2 from "../assets/userAndArtisan2.png"
import artisan3 from "../assets/userAndArtisan3.png"
import artisan4 from "../assets/userAndArtisan4.png"
import artisan5 from "../assets/userAndArtisan5.png"
import artisan6 from "../assets/userAndArtisan6.png"
import rhendaPost1 from '../assets/rhendaPost1.png'
import rhendaPost2 from '../assets/rhendaPost2.png'
import rhendaPost3 from '../assets/rhendaPost3.png'
import rhendaPost4 from '../assets/rhendaPost4.png'
import rhendaPost5 from '../assets/rhendaPost5.png'
import rhendaPost6 from '../assets/rhendaPost6.png'
import explore1 from '../assets/explore1.png'
import explore2 from '../assets/explore2.png'
import explore3 from '../assets/explore3.png'
import explore4 from '../assets/explore4.png'
import explore5 from '../assets/explore5.png'
import explore6 from '../assets/explore6.png'
import Footer from '../components/Footer'
import Bulb from '../components/Bulb'
import homePage1 from '../assets/rhendaHomePage1.png'
import homePage2 from '../assets/rhendaHomePage2.png'
import homePage3 from '../assets/rhendaHomePage3.png'
import homePage4 from '../assets/rhendaHomePage4.png'





























const Rhenda = () => {
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
            <div>
                  <Nav />
                  <div className="pudioHeader rhenda_header" style={{ background: "#45045F" }}>
                        <div className="pudioContainer rhenda_header">
                              <div className="headerLeft">
                                    <p className="qwidTitle">
                                          rhenda
                                    </p>
                                    <p className="qwidYear">
                                          Duration- 2 months
                                    </p>
                                    <div className="qwidNiches">
                                          <p className="qwidNiche">Mobile App</p>
                                          <p className="qwidNiche">B2C/B2B</p>
                                          <p className="qwidNiche">Product</p>

                                    </div>
                                    <p className="qwidWorkTitle">
                                          A service providing platform.

                                    </p>
                                    <div className="qwidLast">
                                          <p className="lastItem">Organization: rhenda </p>
                                          <p className="lastItem">Role: Product Designer</p>
                                          <p className="lastItem" style={{ cursor: "pointer", textDecoration: "underline" }}> Download on google and Apple</p>


                                    </div>

                              </div>
                              <div className="pudioImages">
                                    <img src={headerImage} alt="" className="pudioHeaderImg1 rhenda_top1" />

                                    <img src={headerImage} alt="" className="pudioHeaderImg2 rhenda_top2" />


                              </div>

                        </div>

                  </div>
                  <div className="qwidOverView_Problem">
                        <div className="qwidOverview">
                              <div className="overviewContainer">
                                    <p className="overviewHeader">
                                          Overview

                                    </p>
                                    <div className="overviewDesc">
                                          To connect young professionals with artisans and vendors, I designed a digital solution that lets the young professionals search for and find artisans/vendors of choice and filter them according to their ratings. The flows are simple and intuitive, ensuring that users can accomplish tasks without struggle. I achieved this by conducting research and placing empathy first.

                                    </div>

                              </div>

                        </div>
                        <div className="qwidProblem">
                              <div className="overviewContainer">
                                    <p className="overviewHeader">
                                          Problem

                                    </p>
                                    <p className="overviewDesc">
                                          Artisans/vendors need help finding new clients. They generally depend on referrals from existing clients and the off chance that someone new stumbles on them. As such, hardworking and talented artisans may stay undiscovered by the right clients. Young professionals, on the other hand, need artisans/vendors but have a hard time finding the right ones…or even finding any at all. In a world that has become increasingly digital, these professionals experience frustration with being unable to easily access and assess artisans.
                                    </p>

                              </div>


                        </div>


                  </div>
                  <div className='qwidOverView_Problem'>
                        <div className="pudioLongCard" style={{
                              height: "auto"
                        }}>
                              <div className="longCardContainer">
                                    <p className="overviewHeader">
                                          Research

                                    </p>
                                    <p className="Desc">
                                          To solve these two problems, my team and I came up with a digital solution that connects artisans and young professionals. However, we began by speaking with both user groups to uncover relevant insights. Here’s what we found out:

                                    </p>
                                    <ul>
                                          <li>
                                                Artisans get clients mostly through word-of-mouth referrals and self-advertisement.
                                          </li>
                                          <li>
                                                These artisans/vendors have considered other means of getting clients but most cost a lot of money that they do not have
                                          </li>
                                          <li>
                                                Most artisans we spoke to have not used a digital solution to help find clients before

                                          </li>
                                          <li>
                                                Young professionals also depend on referrals from friends to find artisans but this is usually a struggle when they move to a new location or if no friend has a recommendation to give.
                                          </li>
                                          <li>
                                                hese young people use various digital solutions that enable them to purchase goods and services online and spend most of their time on their phones.
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
                        <div className="pudioLongCard" style={{
                              height: "auto"
                        }}>
                              <div className="longCardContainer">
                                    <p className="overviewHeader">
                                          Target Users

                                    </p>
                                    <p className="Desc">
                                          Based on the research carried out, we were able to get a better view of who we were designing for
                                    </p>
                                    <p className="pudioHeadline">
                                          ARTISANS/VENDORS

                                    </p>
                                    <p className="Desc">
                                          These include welders, plumbers, painters, etc and through research, we uncovered that they are not very tech-savvy. Most own Android phones, but their activities are limited to just a few applications. We also uncovered that sometimes, these artisans work for a larger company or business with bosses who are more exposed to tech and can be relevant to adaption. Our target artisans can be generally busy and avoid time wasters.
                                    </p>
                                    <p className="pudioHeadline">
                                          YOUNG PROFESSIONALS

                                    </p>
                                    <p className="Desc">
                                          While there are several demographics that may need the services of artisans, we decided to design for young professionals. These are generally middle-class earners, who work hard and do not have enough time to go searching for artisans on their own.
                                    </p>
                              </div>

                        </div>

                  </div>
                  <div className="discovery">
                        <div className="discoveryContainer">
                              <p className="discoveryTitle">
                                    Solution
                              </p>
                              <p className="discoveryDesc">
                                    After some ideation sessions and a few sketches, I designed the solution young professionals would use and this was tailored to effectively meet their needs. One of the first things users see after sign-up is the categories of services available to them. This ensures that users can find what they’re looking for without any hassle as we have established that these are busy people.

                              </p>


                        </div>


                  </div>
                  <div className="hifiMockups">
                        <p className="hifiHeader">
                              Onboarding/Sign up

                        </p>
                        <div className="authenticationImages" style={{ gap: "12px", marginBottom: "10px" }}>
                              <img src={onboarding1} alt="" className="hifi2 hifi3" />
                              <img src={onboarding2} alt="" className="hifi2 hifi3" />
                              <img src={onboarding3} alt="" className="hifi2 hifi3" />



                        </div>
                        <div className="authenticationImages" style={{ gap: "12px" }}>
                              <img src={onboarding4} alt="" className="hifi2 hifi3" />
                              <img src={onboarding5} alt="" className="hifi2 hifi3" />
                              <img src={onboarding6} alt="" className="hifi2 hifi3" />
                              <img src={onboarding7} alt="" className="hifi2 hifi3" />


                        </div>
                  </div>
                  <div className="hifiMockups">
                        <p className="hifiHeader">
                              Home screen

                        </p>
                        <div className="rhendaImagesContainer">
                              {/* <img src={longImage} alt="" className="rhendaLongImage" /> */}
                              <div className="rhendaColumnImage">
                              <img src={homePage1} alt="" className="hifi2 hifi3" />

                              <img src={homePage2} alt="" className="hifi2 hifi3" />

                                    <img src={homePage3} alt="" className="hifi2 hifi3" />
                                    <img src={homePage4} alt="" className="hifi2 hifi3" />




                              </div>
                             

                              {/* <div className="rhendaColumnImage">
                                    <img src={onboarding4} alt="" className="hifi2 hifi3" />
                                    <img src={onboarding4} alt="" className="hifi2 hifi3" />


                              </div> */}

                        </div>
                        <div className='w-70Container'>
                              <p className="Desc w-70" style={{ textAlign: "center" }}>
                              The home screen also has a search feature strategically placed so as not to be missed. The search feature offers an alternative to users as it may be quicker if they are looking for a specific vendor/artisan. On the home screen there’s a feeds sections where users can see post from both artisans and users, we wanted at a social feeling to the platform to keep users engaged.
                              </p>
                        </div>
                  </div>
                  <div className="hifiMockups">
                        <p className="hifiHeader">
                              Maps

                        </p>
                        <div className="authenticationImages" style={{ gap: "12px", marginBottom: "10px" }}>
                              <img src={rhendaMap1} alt="" className="hifi2 hifi3" />
                              <img src={rhendaMap2} alt="" className="hifi2 hifi3" />
                              <img src={rhendaMap3} alt="" className="hifi2 hifi3" />



                        </div>
                        <div className="authenticationImages" style={{ gap: "12px" }}>
                              <img src={rhendaMap4} alt="" className="hifi2 hifi3" />
                              <img src={rhendaMap5} alt="" className="hifi2 hifi3" />
                              <img src={rhendaMap5} alt="" className="hifi2 hifi3" />



                        </div>
                        <div className='w-70Container'>
                              <p className="Desc w-70" style={{ textAlign: "center" }}>
                                    The map feature is a valuable feature that enables users to easily locate and access various skilled professionals in their area. By utilizing the map feature, users can view a visual representation of the nearby service providers, allowing them to identify the most convenient options.Through the map feature, users can refine their search by specifying their desired location, ensuring that they find artisans who are within a certain proximity. This feature helps users save time and effort by connecting them with service providers who are geographically accessible.
                              </p>

                        </div>

                  </div>
                  <div className="hifiMockups">
                        <p className="hifiHeader">
                           message
                        </p>
                        <div className="authenticationImages" style={{ gap: "12px", marginBottom: "10px" }}>
                              <img src={artisan1} alt="" className="hifi2 hifi3" />
                              <img src={artisan2} alt="" className="hifi2 hifi3" />
                              <img src={artisan3} alt="" className="hifi2 hifi3" />
                        </div>
                        <div className="authenticationImages" style={{ gap: "12px" }}>
                              <img src={artisan4} alt="" className="hifi2 hifi3" />
                              <img src={artisan5} alt="" className="hifi2 hifi3" />
                              <img src={artisan6} alt="" className="hifi2 hifi3" />
                        </div>
                        <div className='w-70Container'>

                              <p className="Desc w-70" style={{ textAlign: "center" }}>
                                    The messaging feature in an artisan service provider app allows users to communicate directly with service providers in a convenient and efficient manner. It enables users to send and receive messages, inquiries, and requests related to the services they require. This feature fosters seamless and real-time communication between users and service providers, allowing for quick clarification of details, discussing project requirements, negotiating prices, and scheduling appointments. Users can easily engage in a dialogue with service providers, ensuring clear and effective communication throughout the service procurement process
                              </p>
                        </div>

                  </div>
                  <div className="hifiMockups">
                        <p className="hifiHeader">
                              Make a Post
                        </p>
                        <div className="authenticationImages" style={{ gap: "12px", marginBottom: "10px" }}>
                              <img src={rhendaPost1} alt="" className="hifi2 hifi3" />
                              <img src={rhendaPost2} alt="" className="hifi2 hifi3" />
                              <img src={rhendaPost3} alt="" className="hifi2 hifi3" />
                        </div>
                        <div className="authenticationImages" style={{ gap: "12px" }}>
                              <img src={rhendaPost4} alt="" className="hifi2 hifi3" />
                              <img src={rhendaPost5} alt="" className="hifi2 hifi3" />
                              <img src={rhendaPost6} alt="" className="hifi2 hifi3" />
                        </div>
                        <div className='w-70Container'>
                              {/* <p className="Desc w-70" style={{ textAlign: "center" }}>
                                    The home screen also has a search feature strategically placed so as not to be missed. The search feature offers an alternative to users as it may be quicker if they are looking for a specific vendor/artisan. On the home screen there’s a feeds sections where users can see post from both artisans and users, we wanted at a social feeling to the platform to keep users engaged.
                              </p> */}
                        </div>

                  </div>
                  <div className="hifiMockups">
                        <p className="hifiHeader">
                              Explore Page
                        </p>
                        <div className="authenticationImages" style={{ gap: "12px", marginBottom: "10px" }}>
                              <img src={explore1} alt="" className="hifi2 hifi3" />
                              <img src={explore2} alt="" className="hifi2 hifi3" />
                              <img src={explore3} alt="" className="hifi2 hifi3" />
                        </div>
                        <div className="authenticationImages" style={{ gap: "12px" }}>
                              <img src={explore4} alt="" className="hifi2 hifi3" />
                              <img src={explore5} alt="" className="hifi2 hifi3" />
                              <img src={explore6} alt="" className="hifi2 hifi3" />
                        </div>
                        <div className='w-70Container'>
                              {/* <p className="Desc w-70" style={{ textAlign: "center" }}>
                                    The home screen also has a search feature strategically placed so as not to be missed. The search feature offers an alternative to users as it may be quicker if they are looking for a specific vendor/artisan. On the home screen there’s a feeds sections where users can see post from both artisans and users, we wanted at a social feeling to the platform to keep users engaged.
                              </p> */}
                        </div>

                  </div>
                  <div className="pagination">
                        <p className="paginate" onClick={() => navigate("/qwid")}>Previous project</p>
                        <p className="paginate" onClick={() => navigate("/helene")}>Next project</p>


                  </div>
                  <Footer />


            </div>
      )
}

export default Rhenda