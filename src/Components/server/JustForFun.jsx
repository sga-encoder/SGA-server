import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const JustForFun = () => {
    const files = ['01'];
    return (
        <Fragment>
            <section className='server' >
                <ul >
                    {
                        files.map((file) => (
                            <li><Link to={'/just_for_fun/' + file}>{'JustForFun' + file}</Link></li>
                        ))
                    }
                    <li className='back'><Link to='/'>Back</Link></li>

                </ul>
            </section>
        </Fragment>
    );
};

export default JustForFun;