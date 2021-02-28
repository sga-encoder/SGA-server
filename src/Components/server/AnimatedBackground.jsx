import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const AnimatedBackground = () => {
    const files = ['01', '02'];
    return (
        <Fragment>
            <ul>
                {
                    files.map((file) => (
                        <li><Link to={'/animated-background/' + file}>{'animateBackground' + file}</Link></li>
                    ))
                }
            </ul>
        </Fragment>
    );
};

export default AnimatedBackground;