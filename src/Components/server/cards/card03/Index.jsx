import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './style.css';

const Index = () => {
    return (
        <Fragment>
            <div className="card03">
                <div class="container">
                    <div class="box">
                        <span></span>
                        <div class="content">
                            <h2>Card One</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatem, libero!
                                Unde aspernatur hic,harum debitis mollitia
                                dolor molestiae praesentium?
                            </p>
                            <Link to="#">Read More</Link>
                        </div>
                    </div>

                    <div class="box">
                        <span></span>
                        <div class="content">
                            <h2>Card Two</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatem, libero!
                                Unde aspernatur hic,harum debitis mollitia
                                dolor molestiae praesentium?
                            </p>
                            <Link to="#">Read More</Link>
                        </div>
                    </div>

                    <div class="box">
                        <span></span>
                        <div class="content">
                            <h2>Card Three</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptatem, libero!
                                Unde aspernatur hic,harum debitis mollitia
                                dolor molestiae praesentium?
                            </p>
                            <Link to="#">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Index;