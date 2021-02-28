import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Clocks = () => {
    const files = ['01', '02', '03'];
    return (
        <Fragment>
            <ul>
                {
                    files.map((file) => (
                        <li><Link to={'/clocks/' + file}>{'clock' + file}</Link></li>
                    ))
                }
            </ul>
        </Fragment>
    );
};

export default Clocks;