import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const ClientTestimonial = () => {
    const files = ['01'];
    return (
        <Fragment>
            <ul>
                {
                    files.map((file) => (
                        <li><Link to={'/client-testimonial/' + file}>{'clientTestimonial' + file}</Link></li>
                    ))
                }
            </ul>
        </Fragment>
    );
};

export default ClientTestimonial;