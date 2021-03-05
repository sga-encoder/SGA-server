import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbars = () => {
    const files = ['01'];
    return (
        <Fragment>
            <section className='server' >
                <ul >
                    {
                        files.map((file) => (
                            <li><Link to={'/navbars/' + file}>{'Navbars' + file}</Link></li>
                        ))
                    }
                    <li className='back'><Link to='/'>Back</Link></li>

                </ul>
            </section>
        </Fragment>
    );
};

export default Navbars;