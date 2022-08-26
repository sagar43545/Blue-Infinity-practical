import React from "react";

function BookingNow() {
    return(
        <>
            <section className="booking">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="booking-content">
                                <span>Booking Now</span>
                                <div className="service-img overflow-hidden">
                                    <h2 className="animate__animated animate__fadeInLeft animate__delay-1s animation-time">Book your <b>appointment</b> online And call <b>our salon</b></h2>
                                </div>
                                <button className="btn">Call Now &nbsp;&nbsp;<img src={require('./../../../assets/image/right-arrow.svg').default} alt="Right Arrow" /></button>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-none d-md-none d-lg-block"></div>                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookingNow;