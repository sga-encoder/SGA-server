import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Index = () => {
    const [status, setStatus] = useState(false)

    return (
        <Fragment>
            <div className='practice01'>
                <section className={status ? 'background active' : 'background'}>
                    <header>
                        <Link href="#" className="logo">Water.</Link>
                        <div className="toggle" onClick={() => { status ? setStatus(false) : setStatus(true) }}></div>
                    </header>
                    <div className="glass"></div>
                    <div className="content">
                        <h2>Hapiness...<br /><span>Crystal clear ocean water</span></h2>
                    </div>
                    <div></div>
                    <ul className="sci">
                        <li style={{ '--i': 1 }}><Link to="/Practices/01">Facebook</Link></li>
                        <li style={{ '--i': 2 }}><Link to="/Practices/01">Twitter</Link></li>
                        <li style={{ '--i': 3 }}><Link to="/Practices/01">Instagram</Link></li>
                    </ul>
                    <ul className="navigation">
                        <li style={{ '--i': 1 }}><Link to="/Practices/01">Home</Link></li>
                        <li style={{ '--i': 2 }}><Link to="/Practices/01">About</Link></li>
                        <li style={{ '--i': 3 }}><Link to="/Practices/01">Tour</Link></li>
                        <li style={{ '--i': 4 }}><Link to="/Practices/01">Contact</Link></li>
                    </ul>
                </section>
            </div>
        </Fragment>
    );
};

export default Index;