import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    const files = ['01', '02', '03'];
    return (
        <Fragment>
            <ul>
                {
                    files.map((file) => (
                        <li><Link to={'/cards/' + file}>{'card' + file}</Link></li>
                    ))
                }
            </ul>
        </Fragment>
    );
};

export default Card;