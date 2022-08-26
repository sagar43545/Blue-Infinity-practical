import React from "react";
import Haircutting from "./../../../assets/image/haircutting.png"

function Slider() {
    return(
        <>
            <section className="slider">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="slider-content">
                                <div className="overflow-hidden">
                                    <span className="animate__animated animate__fadeInLeft animate__delay-1s animation-time">Welcome to Our Barbex</span>
                                </div>
                                <div className="overflow-hidden">
                                    <h1 className="animate__animated animate__fadeInLeft animate__delay-1s animation-time">Best <b>Hair Salon</b> for a Professional <b>Look</b></h1>
                                </div>
                                <div className="overflow-hidden">
                                    <p className="animate__animated animate__fadeInLeft animate__delay-1s animation-time">Haircut" is a term used to describe when a person removes the hair on their head. This is done to allow for better access to the part of the body that needs cutting.</p>
                                </div>
                                <button>Read More</button>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="slider-img text-end overflow-hidden">
                                <img className="animate__animated animate__fadeInUp animate__delay-1s animation-time" src={Haircutting} alt="Haircutting" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider;