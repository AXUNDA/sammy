import React from 'react'
import "./styles.css"
import Nav from '../components/Nav'
import qwid from "../assets/qwid.png"
import "../fonts/Satoshi-Regular.otf"
import "../fonts/MartianGrotesk-WdxBd.otf"
import wire1 from "../assets/wire_1.jpg"
import wire2 from "../assets/wire2.jpg"
import wire3 from "../assets/wire_3.jpg"
import wire4 from "../assets/wire_4.jpg"
import wire5 from "../assets/wire_5.jpg"
import before from "../assets/before.png"



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
                  <div className="discovery">
                        <div className="discoveryContainer">
                              <p className="discoveryTitle">
                                    Swot Competitive Analysis
                              </p>
                              <p className="discoveryDesc">
                                    Thoroughly analyzing competitors within a given market niche or sector is a crucial step towards developing successful products or services. By examining what competitors are doing well, identifying their weaknesses, and determining how to enhance a product for both business and customers, one can gain a competitive advantage.
                              </p>
                              <p className="discoveryDesc">
                                    In accordance with this philosophy, I have compared different platforms that share similarities with the product I am designing, in an effort to determine whether this research can help improve the qwid experience for users while also benefitting our business. By analyzing the business features and requirements of qwid in conjunction with studying existing platforms,
                              </p>



                        </div>


                  </div>
                  <div className="wire">
                        <div className="discoveryContainer">
                              <p className="discoveryTitle">
                                    Paper wireFrames
                              </p>
                              <div className="wireFrames">
                                    <img src={wire1} alt="" className="wireImg" />
                                    <img src={wire2} alt="" className="wireImg" />
                                    <img src={wire3} alt="" className="wireImg" />
                                    <img src={wire4} alt="" className="wireImg" />
                                    <img src={wire5} alt="" className="wireImg" />





                              </div>


                        </div>


                  </div>
                  <div className="discovery">
                        <div className="discoveryContainer">
                              <p className="discoveryTitle">
                                    Home Page
                              </p>
                              <p className="discoveryDesc">
                                    Some design decisions and  features on the new  homepage improves the user experience,and the user journey during transaction includes

                              </p>

                              <ul>
                                    <li>
                                          Users can easily see the current conversion rate of the major currencies on the platform ,instead of going outside the platform to check exchange rates before making transactions ,this help users who want to make transactions or swap currencies be updated on the current exchange rate
                                    </li>
                                    <li>The dashboard displays all of your accounts ,allowing users to check account numbers when sending money from external sources to their qwid account . </li>
                                    <li>The home screen displays current balances .In the new deign user can view their wallet balances across multiple accounts and perform quick transactions such as sending money(global transfer ) ,withdrawing funds,converting currencies and also topping up their wallets quickly  </li>
                                    <li>There are some new features in the sidebar that simplify the experience and give user more confidence ,Poorly designed or tacky interfaces can undermine a brands reputation</li>
                                    <li>The new design has CTA buttons,that prompt the user to either create a virtual  account or wallet</li>

                              </ul>


                        </div>


                  </div>
                  <div className="wire">


                        <div className="Frames">
                              <div className="proof">
                                    <img src={before} alt="" className="before" />

                                    <p className="proof">
                                          before
                                    </p>
                              </div>
                              <div className="proof">
                                    <img src={qwid} alt="" className="after" />

                                    <p className="proof">
                                          after
                                    </p>
                              </div>










                        </div>


                  </div>





            </div>
      )
}
