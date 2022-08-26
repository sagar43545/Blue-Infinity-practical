import React from "react";
import WorkingImg from './../../../assets/image/contact-img.png'

function WorkingHours() {
    return(
        <>
            <section className="working-hours">
                <div className="container">
                    <div className="hours-wrapper">
                        <div className="row">
                            <div className="col-12">
                                <div className="hours-img">
                                    <img src={WorkingImg} alt="Hours Img" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="working-details">
                                    <div className="overflow-hidden">
                                        <h4 className="animate__animated animate__fadeInLeft animate__delay-1s animation-time">WORKING HOURS</h4>
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="animate__animated animate__fadeInLeft animate__delay-1s animation-time">They call him Flipper Flipper faster than lightning. No one you see is smarter than he so join us.</p>
                                    </div>
                                    <button type="button" className="btn">Contact Us</button>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="working-time">
                                    <h3>Monday to Thursday</h3>
                                    <ul className="list-unstyled overflow-hidden">
                                        <li className="animate__animated animate__fadeInLeft animate__delay-1s animation-time">7.00AM to 12.00PM</li>
                                        <li className="animate__animated animate__fadeInLeft animate__delay-1s animation-time">1.00PM to 4.00PM</li>
                                        <li className="animate__animated animate__fadeInLeft animate__delay-1s animation-time">5.00PM to 8.00PM</li>
                                    </ul>
                                </div>
                                <div className="working-time mt-lg-5">
                                    <h3>Friday to Sunday</h3>
                                    <ul className="list-unstyled overflow-hidden">
                                        <li className="animate__animated animate__fadeInLeft animate__delay-1s animation-time">7.00AM to 12.00PM</li>
                                        <li className="animate__animated animate__fadeInLeft animate__delay-1s animation-time">1.00PM to 4.00PM</li>
                                        <li className="animate__animated animate__fadeInLeft animate__delay-1s animation-time">5.00PM to 8.00PM</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkingHours;