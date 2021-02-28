import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Calculators = () => {
    const files = ['01', '02'];
    return (
        <Fragment>
            <ul>
                {
                    files.map((file) => (
                        <li><Link to={'/calculators/' + file}>{'calculator' + file}</Link></li>
                    ))
                }
            </ul>
        </Fragment>
    );
};

export default Calculators;