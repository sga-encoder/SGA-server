import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const ParallaxEffect = () => {
    const files = ['01'];
    return (
        <Fragment>
            <ul>
                {
                    files.map((file) => (
                        <li><Link to={'/parallax-effect/' + file}>{'ParallaxEffect' + file}</Link></li>
                    ))
                }
            </ul>
        </Fragment>
    );
};

export default ParallaxEffect;