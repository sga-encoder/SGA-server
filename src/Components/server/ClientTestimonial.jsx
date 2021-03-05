import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const ClientTestimonial = () => {
    const files = ['01'];
    return (
        <Fragment>
            <section className='server' >
                <ul >
                    {
                        files.map((file) => (
                            <li><Link to={'/client_testimonial/' + file}>{'clientTestimonial' + file}</Link></li>
                        ))
                    }
                    <li className='back'><Link to='/'>Back</Link></li>
                </ul>
            </section>
        </Fragment>
    );
};

export default ClientTestimonial;