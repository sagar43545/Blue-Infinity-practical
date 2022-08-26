import React from "react";
import Location from './../../../assets/image/location.svg';
import Call from './../../../assets/image/call.svg';
import Gmail from './../../../assets/image/gmail.svg';
import Snapchat from './../../../assets/image/snapchat.svg';
import Youtube from './../../../assets/image/youtube.svg';
import instagram from './../../../assets/image/instagram.svg';
import Behance from './../../../assets/image/behance.svg';
import Facebook from './../../../assets/image/facebook.svg';
import Linkedin from './../../../assets/image/linkedin.svg';

function Footer() {
    return(
        <>
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="footer-info">
                                <h4>Contact Info</h4> 
                                <ul className="list-unstyled ps-lg-0 overflow-hidden">
                                    <li className="d-flex align-items-center mt-lg-3 animate__animated animate__fadeInLeft animate__delay-1s animation-time">
                                        <img src={Location} alt="Location" /> 
                                        <span>Barber Trading Style and Proven Strategy to Make a Living</span>
                                    </li>
                                    <li className="d-flex align-items-center animate__animated animate__fadeInLeft animate__delay-1s animation-time">
                                        <img src={Call} alt="call" />
                                        <span>+91 123465789 +91 232356231</span>
                                    </li>
                                    <li className="d-flex align-items-center animate__animated animate__fadeInLeft animate__delay-1s animation-time">
                                        <img src={Gmail} alt="Gmail" />
                                        <span>info@baber.com</span>
                                    </li>                                    
                                </ul>                                
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="footer-info ps-0 ms-0 ps-md-5 ms-md-5 ps-lg-5 ms-lg-5">
                                <h4>Follow <b>us <br></br>On</b> Social <b>Media</b></h4> 
                                <ul className="d-block ps-0 ps-lg-0">
                                    <li className="ps-lg-0">
                                        <img src={Snapchat} alt="Snapchat" />
                                    </li>
                                    <li>
                                        <img src={Youtube} alt="Youtube" />
                                    </li>
                                    <li>
                                        <img src={instagram} alt="instagram" />
                                    </li>
                                </ul>
                                <ul className="d-block ps-0 ps-lg-0">
                                    <li className="ps-lg-0">
                                        <img src={Behance} alt="Behance" />
                                    </li>
                                    <li>
                                        <img src={Facebook} alt="Facebook" />
                                    </li>
                                    <li>
                                        <img src={Linkedin} alt="Linkedin" />
                                    </li>
                                </ul>                               
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="footer-info">
                                <h4>News Letter</h4>  
                                <p>Barber Trading Style and Proven Strategy to Make a Living</p>                              
                                <input type="text" className="form-control" placeholder="Enter Your Email"/>
                                <button type="button" className="btn">Subscribe</button>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="footer-menu">
                                <ul className="d-inline-block ps-0 mb-auto overflow-hidden">
                                    <li className="animate__animated animate__fadeInLeft animate__delay-1s animation-time d-inline-block ps-lg-0">HOME</li>
                                    <li className="animate__animated animate__fadeInLeft animate__delay-1s animation-time d-inline-block">ABOUT US</li>
                                    <li className="animate__animated animate__fadeInLeft animate__delay-1s animation-time d-inline-block">SERVICES</li>
                                    <li className="animate__animated animate__fadeInLeft animate__delay-1s animation-time d-inline-block">OUR WORK</li>
                                    <li className="animate__animated animate__fadeInLeft animate__delay-1s animation-time d-inline-block">BLOG</li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;