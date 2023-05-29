import React from 'react'
import logo from '../assets/images/logo.jpeg'
import { FaFacebook as Fb,FaInstagram as Insta,FaEnvelope as Msg,FaMapMarkerAlt as Place,FaPhoneAlt as Call,FaRegCopyright as Copy } from "react-icons/fa";
function Footer() {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row footer">
                    <div className="col-md-3 my-2">
                        <img className="logo" src={logo} alt="logo" />
                        <span className='footerName text-light'>FoodCourt</span>
                        <h6 className='footerinfo text-light text-left'>Food Mood is the new and advanced way of ordering and delivering foods to your doorsteps.</h6>
                        <div className='text-center ficons'>
                        <span><Fb size={30} color="white"/></span>
                        <span><Insta size={30} color="white"/></span>
                        </div>
                    </div>

                    <div className="col-md-2 my-2">
                    <h4 className='footerName text-light '>INFORMATION</h4>
                    <ul className='flist '>
                        <li className='text-left'>About us</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                    </div>

                    <div className="col-md-3 my-2">
                    <h4 className='footerName text-light'>PAYMENT MODES</h4>
                    <ul className='flist'>
                        <li>Cash on delivery</li>
                        <li>Online</li>
                    </ul>
                    </div>

                    <div className="col-md-2 my-2">
                    <h4 className='footerName text-light'>CONTACT INFO</h4>
                    <ul className='flist'>
                        <li><Call/><span>091-7300504022</span></li>
                        <li><Msg/><span>foodcourt@gmail.com</span></li>
                        <li><Place/><span>Noida,sector-16</span></li>
                    </ul>
                    </div>

                    <div className="col-md-10">
                          <hr className='text-center'/>
                    </div>

                    <div className="col-md-10 copyinfo">
                     <p><Copy color='white'/><span>2023 FOODCOURT. ALL RIGHTS RESERVED.</span></p>
                   </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer