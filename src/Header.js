import React from "react";
import logo from './images/logo.png';
import { Link } from "react-router-dom";

class Header extends React.Component {

    render() {

        return (
            <nav className='appHeaderNav' >
                <div className='appHeader'>
                    <img
                        className='appHeaderImage'
                        src={logo} height={50}
                        alt="logo"
                    />

                    <Link to="/Home">Home</Link> |{" "}
                    <Link to="/Post">Post</Link>

                </div>
            </nav>
        );

    }

}

export default Header;