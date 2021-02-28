import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/navbar.css'

const Navbar = () => {

    const [status, setStatus] = useState(false)


    return (
        <Fragment>
            <div className="practice03">
                <section className={status ? 'navbar-container active' : 'navbar-container'}>
                    <div className="toggle" onClick={() => { status ? setStatus(false) : setStatus(true) }}></div>
                    <ul>
                        <li style={{ '--d': 1 }}>
                            <Link to="/practices/03" onClick={() => { status ? setStatus(false) : setStatus(true) }}>Hogar</Link>
                        </li>
                        <li style={{ '--d': 2 }}>
                            <Link to="/practices/03/chapters" onClick={() => { status ? setStatus(false) : setStatus(true) }}>Capitulos</Link>
                        </li>
                        <li style={{ '--d': 3 }}>
                            <Link to="/practices/03/dictionary" onClick={() => { status ? setStatus(false) : setStatus(true) }}>Diccionario</Link>
                        </li>
                    </ul>
                </section>
            </div>
        </Fragment>
    );
};

export default Navbar;