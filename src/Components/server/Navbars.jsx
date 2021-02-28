import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbars = () => {
    const files = ['01'];
    return (
        <Fragment>
            <ul>
                {
                    files.map((file) => (
                        <li><Link to={'/navbars/' + file}>{'Navbars' + file}</Link></li>
                    ))
                }
            </ul>
        </Fragment>
    );
};

export default Navbars;