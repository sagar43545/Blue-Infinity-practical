import React from "react";
import AboutImg from "./../../../assets/image/woman-hair.png"

function About() {
    return(
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="about-img text-start overflow-hidden">
                                <img className="animate__animated animate__fadeInUp animate__delay-1s animation-time" src={AboutImg} alt="AboutImg" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-4 mt-md-0 mt-lg-0">
                            <div className="about-content">
                                <span>ABOUT US</span>
                                <div className="overflow-hidden">
                                    <h1 className="animate__animated animate__fadeInLeft animate__delay-1s animation-time">Best  Salons For <b>Men Women</b></h1>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="animate__animated animate__fadeInLeft animate__delay-1s animation-time">Haircut" is a term used to describe when a person removes the hair on their head. This is done to allow for better access to the part of the body that needs cutting.</p>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="animate__animated animate__fadeInLeft animate__delay-1s animation-time">Phasellus vitae purus ac urna consequat facilisis a vel leo. Maecenas hendrerit lacinia mollis. Fusce in leo lectus. Phasellus leo mi, pellentesque nec risus malesuada, volutpat porta ligula.</p>
                                </div>
                                <button>Read More</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;