import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const GlassMorphism = () => {
    const files = ['credit-card', 'team-section-using'];
    return (
        <Fragment>
            <section className='server' >
                <ul >
                    {
                        files.map((file) => (
                            <li><Link to={'/glass_morphism/' + file}>{file}</Link></li>
                        ))
                    }
                    <li className='back'><Link to='/'>Back</Link></li>

                </ul>
            </section>
        </Fragment>
    );
};

export default GlassMorphism;