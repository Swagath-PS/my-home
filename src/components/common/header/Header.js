import React from 'react'
import { Navbar, Image } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import './Header.scss'
import { HEADER_PROP_TEXT, PROPERTY_IMG_SRC_URL } from '../../../Utilities/AppConstants'

const Header = (props) => {
    
    const paths = props.location.pathname.split("/");
    const heading = paths[1].length > 2 ? paths[1] : HEADER_PROP_TEXT;

    return (<Navbar bg="light" fixed className="ml-5">
        <Navbar.Brand className="pl-4">

            <span className="navbar-header-text">Property {heading}</span>
        </Navbar.Brand>
        <div className="ml-auto pr-3">
            <Image width={50}
                height={50}
                src={`${PROPERTY_IMG_SRC_URL}man-wearing-black-zip-up-hooded-jacket-facing-camera-1080213.jpg`} roundedCircle />

        </div>
       
    </Navbar>)
}

export default withRouter(Header);