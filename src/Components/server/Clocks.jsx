import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Clocks = () => {
    const files = ['01', '02', '03'];
    return (
        <Fragment>
            <section className='server' >
                <ul >
                    {
                        files.map((file) => (
                            <li><Link to={'/clocks/' + file}>{'clock' + file}</Link></li>
                        ))
                    }
                    <li className='back'><Link to='/'>Back</Link></li>
                </ul>
            </section>
        </Fragment>
    );
};

export default Clocks;