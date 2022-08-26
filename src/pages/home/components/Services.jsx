import React from "react";
import ServicesImg from "./../../../assets/image/service-img.png"

function Services() {
    return(
        <>
            <section className="services">
                <div className="container">
                    <h3 className="text-center">Our Services</h3>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="services-wrapper text-start">
                                <div className="overflow-hidden">
                                    <p className="animate__animated animate__fadeInUp animate__delay-1s animation-time">Haircut" is a term used to describe when a person removes the hair on their head. This is done to allow for better access to the part of the body that needs cutting.</p>
                                </div>
                                <div className="service-img overflow-hidden">
                                    <img className="animate__animated animate__bounceIn animate__delay-1s animation-time" src={ServicesImg} alt="ServicesImg" />
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="services-content">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                        <div className="overflow-hidden">
                                            <div className="service-list animate__animated animate__fadeInUp animate__delay-1s animation-time">
                                                <div className="service-type">
                                                    <img src={require('./../../../assets/image/trend-haircut.svg').default} alt="Trend Haircut" />
                                                    <h4>Trend Haircut</h4>
                                                </div>
                                                <p>Haircut" is a term used to describe when a person removes the hair on their head.</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-4 mt-md-0 mt-lg-5">
                                        <div className="overflow-hidden">
                                            <div className="service-list animate__animated animate__fadeInUp animate__delay-1s animation-time">
                                                <div className="service-type">
                                                    <img src={require('./../../../assets/image/hair-washing.svg').default} alt="Hair Washing" />
                                                    <h4>Hair Washing</h4>
                                                </div>
                                                <p>Haircut" is a term used to describe when a person removes the hair on their head.</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-4 mt-md-5">
                                        <div className="overflow-hidden">
                                            <div className="service-list animate__animated animate__fadeInUp animate__delay-1s animation-time">
                                                <div className="service-type">
                                                    <img src={require('./../../../assets/image/hair-color.svg').default} alt="Hair Color" />
                                                    <h4>Hair Color</h4>
                                                </div>
                                                <p>Haircut" is a term used to describe when a person removes the hair on their head.</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-4 mt-md-5 mt-lg-5">
                                        <div className="overflow-hidden">
                                            <div className="service-list animate__animated animate__fadeInUp animate__delay-1s animation-time">
                                                <div className="service-type">
                                                    <img src={require('./../../../assets/image/restyling.svg').default} alt="Restyling" />
                                                    <h4>Restyling</h4>
                                                </div>
                                                <p>Haircut" is a term used to describe when a person removes the hair on their head.</p>
                                                <button>Read More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="ms-lg-5">View All Service</button>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;