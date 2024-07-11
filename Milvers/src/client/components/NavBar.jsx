import React, { useState } from "react";
import NavButtons from "./buttons/navButtons";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <header role="header">
            <nav role="navigation-bar" className="nav-bar bg-blackhsl">
                <Link to="/" smooth='true' className="">
                    <img
                        role="company logo"
                        src="/images/milvers_logo_1.png"
                        alt="company logo"
                        className="img-main-logo"
                    />
                </Link>

                <h2 className={`nav-h2-menu ${visible ? " white" : ""}`} onClick={() => setVisible(!visible)}>{visible ? "Close" : "Menu"}</h2>

                <div className={`nav-dropdown ${visible ? "display" : ""} `}>
                    <ul role="navigation-buttons" className="nav-buttons flex-column sm-gap sm-padding">
                        <NavButtons visibility={setVisible} number="01" name="Services" link="/services"/>
                        <NavButtons visibility={setVisible} number="02" name="About Us" link="/about" />
                        <NavButtons visibility={setVisible} number="03" name="Contact" link="/contact"/>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;

