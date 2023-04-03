import React from 'react'
import "./styles.css"
import Nav from '../components/Nav'
import qwid from "../assets/qwid.png"
import "../fonts/Satoshi-Regular.otf"
import "../fonts/MartianGrotesk-WdxBd.otf"



export default function Qwid() {
      return (
            <div className='qwid'>
                  <Nav work={true} />
                  <div className="qwidHeader">
                        <div className="qwidContainer">
                              <div className="headerLeft">
                                    <p className="qwidTitle">
                                          qwid
                                    </p>
                                    <p className="qwidYear">
                                          August 2022- 2 months
                                    </p>
                                    <div className="qwidNiches">
                                          <p className="qwidNiche">web App</p>
                                          <p className="qwidNiche">Fin-tech</p>
                                          <p className="qwidNiche">Product</p>

                                    </div>
                                    <p className="qwidWorkTitle">
                                          Dashboard Revamp

                                    </p>
                                    <div className="qwidLast">
                                          <p className="lastItem">Organization: Blinqpay </p>
                                          <p className="lastItem">Role: Product Designer</p>
                                          <p className="lastItem"> View Product</p>


                                    </div>

                              </div>
                              <img src={qwid} alt="" className="qwidImg" />

                        </div>

                  </div>
                  <div className="qwidOverView_Problem">
                        <div className="qwidOverview">
                              <div className="overviewContainer">
                                    <p className="overviewHeader">
                                          overview

                                    </p>
                                    <div className="overviewDesc">
                                          qwid is a remittance platform that enables users to effortlessly perform cross-border payments at an affordable rate, and offers remittance services as well. With over 130 countries supported, it provides a global payout solution for online bank to bank payments, making it easy for users to transfer funds seamlessly across borders.

                                    </div>

                              </div>

                        </div>
                        <div className="qwidProblem">
                              <div className="overviewContainer">
                                    <p className="overviewHeader">
                                          Problem

                                    </p>
                                    <p className="overviewDesc">
                                          The existing dashboard couldn’t effectively reflect how dynamic, seamless, and easy, making payments, receiving funds and conversion of funds could be achieved with qwid. Aesthetically (user interface), it was a visual dumping ground which didn’t do justice to the brand's purpose. There was no structure to the content, it amplified confusion rather than coherency; poor user experience like confusing navigation, lack of proper information and no consideration of accessibility.
                                    </p>

                              </div>


                        </div>


                  </div>
                  <div className="discovery">
                        <div className="discoveryContainer">
                              <p className="discoveryTitle">
                                    Discovery
                              </p>
                              <p className="discoveryDesc">
                                    In order to tackle the problem, it was important to get an in-depth understanding of the users, their demographic, their persona, and their motivation. I conducted contextual interviews with users and conducted a competitive analysis.

                              </p>
                              <p className="listTitle">
                                    The goal of the research was aimed at:

                              </p>
                              <ul>
                                    <li>
                                          Finding out how the problem directly affects the users as well as uncovering their needs and frustrations in order to better appeal to them.
                                    </li>
                                    <li>Interview users from competitors to better understand the challenges faced with the current dashboard. This helped to outline the limitations and constraints faced currently. </li>
                                    <li>Understanding the major challenges that surround remittance payment in Africa due to the strict bank regulations, policies, and legal requirements surrounding the product. </li>
                                    <li>Looking at the current interface and having conducted some interviews with users, there are a couple of new features that were introduced to the revamp e.g. A new feature Balances, Transactions, virtual cards and a new interface and flow for virtual cards.</li>
                                    <li>A very friendly user experience and less tacky user interface for users to interact and make transactions.</li>

                              </ul>


                        </div>


                  </div>

            </div>
      )
}
