import React from "react";
import HeaderLogo from "./../../../assets/image/barbex-logo.svg"

class Header extends React.Component {
    state = {
        isOpen: false
    };
    
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;

        return(
            <header className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#"><img src={HeaderLogo} alt="Header Logo" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                            <div></div>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link text-white" href="#">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">ABOUT US</a>
                                </li>
                                <li className="nav-item dropdown" onClick={this.toggleOpen}>
                                    <a className="nav-link text-white dropdown-toggle" href="#" id="dropdownMenuButton" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    SERVICES
                                    </a>
                                    <div className={menuClass} aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Trend Haircut</a>
                                        <a className="dropdown-item" href="#">Hair Washing</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">OUR WORK</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">BLOG</a>
                                </li>
                            </ul>
                            <div className="contact-button">
                                <button className="btn btn-brown my-2 my-sm-0" type="submit">Contact Us</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        ) 
    }


}

export default Header;