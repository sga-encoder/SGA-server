import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const ParallaxEffect = () => {
    const files = ['01'];
    return (
        <Fragment>
            <section className='server' >
                <ul >
                    {
                        files.map((file) => (
                            <li key={file}><Link to={'/parallax_effect/' + file}>{'ParallaxEffect' + file}</Link></li>
                        ))
                    }
                    <li className='back'><Link to='/'>Back</Link></li>

                </ul>
            </section>
        </Fragment>
    );
};

export default ParallaxEffect;