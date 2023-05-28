import React from 'react'
import headerImage from "../assets/rhendaHeaderImage.png"
import Nav from '../components/Nav'

const Rhenda = () => {
      return (
            <div>
                  <Nav />
                  <div className="pudioHeader" style={{ background: "#45045F" }}>
                        <div className="pudioContainer">
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
                                          An audio learning/podcast platform.

                                    </p>
                                    <div className="qwidLast">
                                          <p className="lastItem">Organization: rhenda </p>
                                          <p className="lastItem">Role: Product Designer</p>
                                          <p className="lastItem" style={{ cursor: "pointer", textDecoration: "underline" }}> Download on google and Apple</p>


                                    </div>

                              </div>
                              <div className="pudioImages">
                                    <img src={headerImage} alt="" className="pudioHeaderImg1" />

                                    <img src={headerImage} alt="" className="pudioHeaderImg2" />


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

            </div>
      )
}

export default Rhenda