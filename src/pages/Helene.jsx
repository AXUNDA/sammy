import { useState, useEffect } from 'react'
import "./styles.css"
import Nav from '../components/Nav'

import "../fonts/Satoshi-Regular.otf"
import "../fonts/MartianGrotesk-WdxBd.otf"
import header1 from "../assets/heleneHeader1.png"
import header2 from "../assets/heleneHeader2.png"
import onboarding1 from "../assets/onboarding1.png"
import onboarding2 from "../assets/onboarding2.png"
import onboarding3 from "../assets/onboarding3.png"
import onboarding4 from "../assets/onboarding4.png"
import home1 from "../assets/home1.png"
import home2 from "../assets/home2.png"
import home3 from "../assets/home3.png"
import home4 from "../assets/home4.png"

import invoice1 from "../assets/invoice1.png"
import invoice2 from "../assets/invoice2.png"
import invoice3 from "../assets/invoice3.png"
import invoice4 from "../assets/invoice4.png"
import template1 from "../assets/template1.png"
import template2 from "../assets/template2.png"
import template3 from "../assets/template3.png"
import Footer from '../components/Footer'
import Image from '../components/Image'
import { useNavigate } from 'react-router-dom'













export default function Helene() {
      const [isLoading, setIsLoading] = useState(true);
      const navigate = useNavigate()

      function scroll() {
            window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
            });

      }
      scroll()
      useEffect(() => {

            setTimeout(() => {
                  setIsLoading(false);
            }, 2000);
            scroll()




      }, []);
      return (
            <>
                  {isLoading ? (<Image />) : (
                        <div className='helene'>
                              <Nav work={true} />
                              <div className="pudioHeader">
                                    <div className="pudioContainer">
                                          <div className="headerLeft">
                                                <p className="qwidTitle">
                                                      Helene
                                                </p>
                                                <p className="qwidYear">
                                                      September 2021- 4 weeks
                                                </p>
                                                <div className="qwidNiches">
                                                      <p className="qwidNiche">Web App</p>
                                                      <p className="qwidNiche">Dashboard</p>

                                                      <p className="qwidNiche">UI & UX Design</p>

                                                </div>
                                                <p className="qwidWorkTitle heleneWorkTitle">
                                                      Dashboard Revamp

                                                </p>
                                                <div className="qwidLast">
                                                      <p className="lastItem heleneLastItem">Organization: Helene Business </p>
                                                      <p className="lastItem heleneLastItem">Role: UI & UX Designer</p>
                                                      <p className="lastItem heleneLastItem"> View Product</p>


                                                </div>

                                          </div>
                                          <div className="pudioImages">
                                                <img src={header1} alt="" className="pudioHeaderImg1" />

                                                <img src={header2} alt="" className="pudioHeaderImg2" />


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
                                                      The Helene Business Invoice app is an invoicing and billing software designed for small and medium-sized businesses. It provides an easy-to-use platform for creating and sending professional-looking invoices to clients and customers. The app also helps businesses track payments and outstanding balances, and generate financial reports for accounting and management purposes. With customizable templates, businesses can brand their invoices and make them look more professional. The Helene Business Invoice app is a cost-effective and time-saving solution for managing invoicing and financial processes.

                                                </div>

                                          </div>

                                    </div>
                                    <div className="qwidProblem">
                                          <div className="overviewContainer">
                                                <p className="overviewHeader">
                                                      My role

                                                </p>
                                                <p className="overviewDesc">
                                                      I worked on the project as a UI/UX designer with a product researcher, Product manager and the engineering team
                                                </p>

                                          </div>


                                    </div>


                              </div>
                              <div className="discovery">
                                    <div className="discoveryContainer">
                                          <p className="discoveryTitle">
                                                Problem
                                          </p>
                                          <p className="discoveryDesc">
                                                Helene Business Invoice app aims to solve the problem of inefficient and time-consuming invoicing processes for small and medium-sized businesses. The app allows users to easily create and send professional-looking invoices to their clients and customers, track payments and outstanding balances and generate report to help with accounting and financial management

                                          </p>
                                          <p className="discoveryDesc">
                                                Some specific problems that the Helene business invoice app aims to solve for small and medium businesses include :
                                          </p>

                                          <ol>
                                                <li>
                                                      Time-consuming invoicing : Creating invoices manually con be a time consuming process  that takes away time from other important business tasks the app automates much of the invoicing process saving time and streamlining operations
                                                </li>
                                                <li>Difficulty Tracking Payments : Keeping track of which invoices have been paid and which are still outstanding can be a challenge especially as the business grows the app provides real time visibility into payment  status making it easier to manage cash flow and follow up on overdue payments  </li>
                                                <li>Inconsistent Branding : Invoices that don't reflect a business's branding can make it look unprofessional the app provides customizable templates that allows businesses to create professional looking invoices that reflect their branding  </li>



                                          </ol>


                                    </div>


                              </div>
                              <div className="hifiMockups">
                                    <p className="hifiHeader">
                                          Onboarding/login

                                    </p>
                                    <div className="authenticationImages">
                                          <img src={onboarding1} alt="" className="hifi2" />
                                          <img src={onboarding2} alt="" className="hifi2" />
                                          <img src={onboarding3} alt="" className="hifi2" />
                                          <img src={onboarding4} alt="" className="hifi2" />


                                    </div>
                              </div>

                              <div className="hifiMockups">
                                    <p className="hifiHeader">
                                          Home/Records

                                    </p>
                                    <div className="authenticationImages">
                                          <img src={home1} alt="" className="hifi2" />
                                          <img src={home2} alt="" className="hifi2" />
                                          <img src={home3} alt="" className="hifi2" />
                                          <img src={home4} alt="" className="hifi2" />


                                    </div>
                              </div>
                              <div className="hifiMockups">
                                    <p className="hifiHeader">
                                          Create Invoice/Receipts

                                    </p>
                                    <div className="authenticationImages">
                                          <img src={invoice1} alt="" className="hifi2" />
                                          <img src={invoice2} alt="" className="hifi2" />
                                          <img src={invoice3} alt="" className="hifi2" />
                                          <img src={invoice4} alt="" className="hifi2" />


                                    </div>
                              </div>

                              <div className="hifiMockups">
                                    <p className="hifiHeader">
                                          Templates

                                    </p>
                                    <div className="authenticationImages">
                                          <img src={template1} alt="" className="hifi2" />
                                          <img src={template2} alt="" className="hifi2" />
                                          <img src={template3} alt="" className="hifi2" />



                                    </div>
                              </div>
                              <div className="pagination">
                                    <p className="paginate" onClick={() => navigate("/qwid")}>Previous project</p>
                                    <p className="paginate" onClick={() => navigate("/pudio")}>Next project</p>


                              </div>
                              <Footer />





                        </div>



                  )}

            </>

      )
}
