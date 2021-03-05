import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Sketch from './sources/sketch.png'
import Data from './sources/data.png'
import Startup from './sources/startup.png'
import Money from './sources/money.png'
import './style.css'

const Index = () => {
    return (
        <Fragment>
            <div className="card01">
                <div class="container">
                    <div class="card">
                        <div class="imgBx">
                            <img src={Sketch} alt="sketch" />
                        </div>
                        <div class="content">
                            <div>
                                <h3>Design</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, dolores ex. Praesentium</p>
                                <Link to="#">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="imgBx">
                            <img src={Data} alt="data" />
                        </div>
                        <div class="content">
                            <div>
                                <h3>Code</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, dolores ex. Praesentium</p>
                                <Link to="#">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="imgBx">
                            <img src={Startup} alt="startup" />
                        </div>
                        <div class="content">
                            <div>
                                <h3>Launch</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, dolores ex. Praesentium</p>
                                <Link to="#">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="imgBx">
                            <img src={Money} alt="money" />
                        </div>
                        <div class="content">
                            <div>
                                <h3>Earn</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, dolores ex. Praesentium</p>
                                <Link to="#">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Index;