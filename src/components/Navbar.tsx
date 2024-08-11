import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { AwesomeButton } from 'react-awesome-button';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="discord">
                    <Slide direction="down">
                        <AwesomeButton className="aws-btn" type="primary">Discord</AwesomeButton>
                    </Slide>
                </li>
                <li className="dashboard">
                    <Slide direction="down">
                        <AwesomeButton className="aws-btn" type="primary">Dashboard</AwesomeButton>
                    </Slide>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;