import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Practices = () => {
    const files = ['01', '02', '03'];
    return (
        <Fragment>
            <ul>
                {
                    files.map((file) => (
                        <li><Link to={'/practices/' + file}>{'pracice' + file}</Link></li>
                    ))
                }
            </ul>
        </Fragment>
    );
};

export default Practices;