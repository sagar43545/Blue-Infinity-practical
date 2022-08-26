import React from "react";
import Works01 from './../../../assets/image/works-01.png';
import Works02 from './../../../assets/image/works-02.png';
import Works03 from './../../../assets/image/works-03.png';
import Works04 from './../../../assets/image/works-04.png';
import Works05 from './../../../assets/image/works-05.png';
import Works06 from './../../../assets/image/works-06.png';
import Works07 from './../../../assets/image/works-07.png';
import Works08 from './../../../assets/image/works-08.png';

function OurWorks() {
    return(
        <>
            <section className="ourworks">
                <div className="container-fluid">
                    <h3 className="text-center">OUR WORKS</h3>
                    <div className="ourwork-wrapper">
                        <div className="ourworks-img overflow-hidden">
                            <img className="animate__animated animate__fadeInLeft animate__delay-1s animation-time" src={Works01} alt="Our Works" />
                        </div>
                        <div className="ourworks-img overflow-hidden">
                            <img className="animate__animated animate__fadeInLeft animate__delay-1s animation-time" src={Works02} alt="Our Works" />
                        </div>
                        <div className="ourworks-img overflow-hidden">
                            <img className="animate__animated animate__fadeInRight animate__delay-1s animation-time" src={Works03} alt="Our Works" />
                        </div>
                        <div className="ourworks-img overflow-hidden">
                            <img className="animate__animated animate__fadeInRight animate__delay-1s animation-time" src={Works04} alt="Our Works" />
                        </div>
                        <div className="ourworks-img overflow-hidden">
                            <img className="animate__animated animate__fadeInLeft animate__delay-1s animation-time" src={Works05} alt="Our Works" />
                        </div>
                        <div className="ourworks-img overflow-hidden">
                            <img className="animate__animated animate__fadeInLeft animate__delay-1s animation-time" src={Works06} alt="Our Works" />
                        </div>
                        <div className="ourworks-img overflow-hidden">
                            <img className="animate__animated animate__fadeInRight animate__delay-1s animation-time" src={Works07} alt="Our Works" />
                        </div>
                        <div className="ourworks-img overflow-hidden">
                            <img className="animate__animated animate__fadeInRight animate__delay-1s animation-time" src={Works08} alt="Our Works" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurWorks;