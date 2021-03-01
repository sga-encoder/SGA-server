import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Index = () => {
    return (
        <Fragment>
            <div className='navbar01'>
                <ul>
                    <li>
                        <Link to="/navbars/01">
                            <div class="icon">
                                <i class="fas fa-home"></i>
                                <i class="fas fa-home"></i>
                            </div>
                            <div class="name">
                                <span data-text="Home">Home</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/navbars/01">
                            <div class="icon">
                                <i class="fas fa-file"></i>
                                <i class="fas fa-file"></i>
                            </div>
                            <div class="name"><span data-text="About">About</span></div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/navbars/01">
                            <div class="icon">
                                <i class="fas fa-cogs"></i>
                                <i class="fas fa-cogs"></i>
                            </div>
                            <div class="name"><span data-text="Services">Services</span></div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/navbars/01">
                            <div class="icon">
                                <i class="fas fa-image"></i>
                                <i class="fas fa-image"></i>
                            </div>
                            <div class="name"><span data-text="Portafolio">Portafolio</span></div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/navbars/01">
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="name"><span data-text="Team">Team</span></div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/navbars/01">
                            <div class="icon">
                                <i class="fas fa-envelope"></i>
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="name"><span data-text="Contact">Contact</span></div>
                        </Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

export default Index;