import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const GlassMorphism = () => {
    const files = ['credit-card', 'frosted-glass', 'team-section-using'];
    return (
        <Fragment>
            <ul>
                {
                    files.map((file) => (
                        <li><Link to={'/glass_morphism/' + file}>{file}</Link></li>
                    ))
                }
            </ul>
        </Fragment>
    );
};

export default GlassMorphism;