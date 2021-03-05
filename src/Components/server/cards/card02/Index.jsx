import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-vanilla-tilt'
import './style.css';

const Index = () => {
    const param = {
        max: 60,
        speed: 400,
        glare: false,
        "max-glare": 1,

    };
    return (
        <Fragment>
            <div className="card02">
                <div className="container">
                    <Tilt options={param} className="card">
                        <div className="content">
                            <h2>01</h2>
                            <h3>Card One</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                            <Link to="#">Read More</Link>
                        </div>
                    </Tilt>
                    <Tilt className="card" options={param}>
                        <div className="content">
                            <h2>02</h2>
                            <h3>Card Two</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                            <Link to="#">Read More</Link>
                        </div>
                    </Tilt>
                    <Tilt className="card" options={param} >
                        <div className="content">
                            <h2>03</h2>
                            <h3>Card Three</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua.
                            </p>
                            <Link to="#">Read More</Link>
                        </div>
                    </Tilt>
                </div>
            </div>
        </Fragment>
    );
};

export default Index;