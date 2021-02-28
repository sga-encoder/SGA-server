import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Index = () => {
    return (
        <Fragment>
            <div className='practice02'>
                <section className="banner" id="banner">
                    <div className="content">
                        <h2>Always Choose Good</h2>
                        <p>
                            Lorem ipsum sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud.
                    </p>
                        <Link to="/practices/02" className="btn">Our Menu</Link>
                    </div>
                </section>
            </div>
        </Fragment>
    );
};

export default Index;