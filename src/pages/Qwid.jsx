import React, { useState, useEffect } from 'react'
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
import analysis from "../assets/competitve Analysis 1.png"
import outside from "../assets/outside_qwid_user.png"
import to from "../assets/to_qwid_user.png"
import ngn from "../assets/ngn.png"
import gbp from "../assets/gbp.png"
import beforeDashboard from "../assets/beforeDashboard.png"
import afterDashboard from "../assets/afterDashboard.png"
import convertb4 from "../assets/convertBefore.png"
import convertAfter from "../assets/convertAfter.png"
import allT from "../assets/allTransactions.png"
import Td from "../assets/transaction details.png"
import card1 from "../assets/Virtual cards 1.png"
import card2 from "../assets/Virtual cards2.png"
import card3 from "../assets/Virtual cards3.png"
import settings1 from "../assets/settings1.png"
import settings2 from "../assets/settings2.png"
import settings3 from "../assets/settings3.png"
import Footer from "../components/Footer"
import Wood from '../components/Wood'
import { useNavigate } from 'react-router-dom'






export default function Qwid() {
      const navigate = useNavigate()
      const [showScroll, setShowScroll] = useState(false);
      const [isLoading, setIsLoading] = useState(true);

      function scroll() {
            window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
            });

      }

      const handleScroll = () => {
            if (window.pageYOffset > 200) {
                  setShowScroll(true);
            } else {
                  setShowScroll(false);
            }
      };
      // handleScroll()

      const scrollToTop = () => {
            window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
            });
      };


      useEffect(() => {

            setTimeout(() => {
                  setIsLoading(false);
            }, 2000);

            window.addEventListener('scroll', handleScroll);
            scroll()

            return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      return (
            <>
                  {isLoading ? (<Wood />) : (
                        <div className='qwid'>
                              <Nav work={true} />

                              <div className="qwidHeader qwidSpace">
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
                                                      <p className="qwidNiche">Live Product</p>


                                                </div>
                                                <p className="qwidWorkTitle">
                                                      Dashboard Revamp

                                                </p>
                                                <div className="qwidLast">
                                                      <p className="lastItem">Organization: Blinqpay </p>
                                                      <p className="lastItem">Role: Product Designer</p>
                                                      <p className="lastItem" style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => window.location.href = "https://qwid.io/auth/signup"}> View Product</p>


                                                </div>

                                          </div>
                                          <div className="qwidImgContainer">
                                                <img src={qwid} alt="" className="qwidImg" />


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
                              <div className="wire">
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
                                          <img src={analysis} alt="" className="analysis" />



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
                              <div className="send">
                                    <div className="sendContainer">
                                          <p className="sendTitle">Send Money</p>
                                          <div className="Frames">
                                                <div className="proof">
                                                      <img src={outside} alt="" className="sending" />

                                                      <p className="proof">
                                                            Sending outside a qwid user
                                                      </p>
                                                </div>
                                                <div className="proof">
                                                      <img src={to} alt="" className="sending" />

                                                      <p className="proof">
                                                            sending to a qwid user
                                                      </p>
                                                </div>










                                          </div>


                                    </div>
                              </div>
                              <div className="balance">
                                    <div className="balanceContainer">
                                          <p className="balanceTitle">
                                                wallet Balance
                                          </p>
                                          <p className="discoveryDesc">
                                                The revamp of qwid introduced the Balances feature. In the old interface, users didn't have a designated page or flow to view their wallet balance rather it was displayed on the side navigation. Some noticeable actions user can perform with this new balance feature includes:

                                          </p>
                                          <ul>
                                                <li>
                                                      Users can easily see all their wallet balances,they can navigate between different wallet balances,with a simple click and a drop down that shows their different wallets
                                                </li>
                                                <li>
                                                      Users csn navigate between different wallet balances with a simple click and a dropdown that shows their different wallets
                                                </li>
                                                <li>
                                                      Users can also see the various transactions for each of their wallets
                                                </li>
                                                <li>
                                                      They can also perform transactions like send,Transfer,top-up,conversion and withdrawal
                                                </li>
                                          </ul>

                                    </div>
                              </div>
                              <div className="send">
                                    <div className="sendContainer">
                                          {/* <p className="sendTitle">Send Money</p> */}
                                          <div className="Frames">
                                                <div className="proof">
                                                      <img src={gbp} alt="" className="sending" />

                                                      <p className="proof">
                                                            GBP wallet balance
                                                      </p>
                                                </div>
                                                <div className="proof">
                                                      <img src={ngn} alt="" className="sending" />

                                                      <p className="proof">
                                                            NGN wallet balance
                                                      </p>
                                                </div>










                                          </div>


                                    </div>
                              </div>
                              <div className="balance">
                                    <div className="balanceContainer">
                                          <p className="balanceTitle">
                                                Virtual accounts
                                          </p>
                                          <p className="discoveryDesc">
                                                On the old interface, users do not have a clear view of their accounts; also the account information was not clearly stated and they could only access two accounts at a time. The new interface provides users access to all their virtual accounts. Also, they can interact and add multiple accounts to their already existing account. This feature was one of the major improvements made on the qwid revamp virtual card section.

                                          </p>


                                    </div>
                              </div>
                              <div className="wire">


                                    <div className="Frames">
                                          <div className="proof">
                                                <img src={beforeDashboard} alt="" className="before" />

                                                <p className="proof">
                                                      before
                                                </p>
                                          </div>
                                          <div className="proof">
                                                <img src={afterDashboard} alt="" className="after" />

                                                <p className="proof">
                                                      after
                                                </p>
                                          </div>










                                    </div>


                              </div>
                              <div className="wire">
                                    <p className="balanceTitle convert">
                                          convert funds
                                    </p>


                                    <div className="Frames">
                                          <div className="proof">
                                                <img src={convertb4} alt="" className="before" />

                                                <p className="proof">
                                                      before
                                                </p>
                                          </div>
                                          <div className="proof">
                                                <img src={convertAfter} alt="" className="after" />

                                                <p className="proof">
                                                      after
                                                </p>
                                          </div>










                                    </div>


                              </div>
                              <div className="send">
                                    <div className="sendContainer">
                                          <p className="sendTitle">Transactions</p>
                                          <p className="discoveryDesc">
                                                User can see all their transactions on the this page, which was unavailable on the old design. There’s also a search feature for find a particular transaction easily and quickly

                                          </p>

                                          <div className="Frames">
                                                <div className="proof">
                                                      <img src={allT} alt="" className="sending" />

                                                      <p className="proof">
                                                            All transactions made
                                                      </p>
                                                </div>
                                                <div className="proof">
                                                      <img src={Td} alt="" className="sending" />

                                                      <p className="proof">
                                                            Transaction details
                                                      </p>
                                                </div>










                                          </div>


                                    </div>
                              </div>

                              <div className="send virtual">
                                    <div className="sendContainer">
                                          <p className="sendTitle">Virtual cards</p>
                                          <p className="discoveryDesc">
                                                Users can create virtual cards, fund their cards and make transactions anywhere in the globe. This is another key feature that stood out the most in the revamp of the qwid interface.

                                          </p>

                                          <div className="Frames">
                                                <div className="proof card_1">
                                                      <img src={card1} alt="" className="sending left_card" />


                                                </div>
                                                <div className="proof card_2">
                                                      <img src={card2} alt="" className="sending" />


                                                </div>











                                          </div>
                                          <div className="lastImg">
                                                <img src={card3} alt="" className="finalImg" />

                                          </div>


                                    </div>
                              </div>
                              <div className="send virtual">
                                    <div className="sendContainer">
                                          <p className="sendTitle">Settings</p>
                                          <p className="discoveryDesc">
                                                On the settings page users can update, edit their profile as well as set up notifications and 2FA for an extra layer of security.

                                          </p>

                                          <div className="Frames">
                                                <div className="proof card_1">
                                                      <img src={settings1} alt="" className="sending left_card" />


                                                </div>
                                                <div className="proof card_2">
                                                      <img src={settings2} alt="" className="sending " />


                                                </div>











                                          </div>
                                          <div className="lastImg">
                                                <img src={settings3} alt="" className="finalImg settingsImg" />

                                          </div>


                                    </div>
                              </div>
                              <div className="pagination">
                                    <p className="paginate" onClick={() => navigate("/pudio")}>Previous project</p>
                                    <p className="paginate" onClick={() => navigate("/rhenda")}>Next project</p>


                              </div>
                              {showScroll && (
                                    <button className='scrollButton' onClick={scrollToTop}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                                          </svg>
                                    </button>
                              )}
                              <Footer />










                        </div>



                  )}

            </>


      )
}
