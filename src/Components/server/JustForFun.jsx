import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const JustForFun = () => {
    const files = ['01', '02', '03'];
    return (
        <Fragment>
            <ul>
                {
                    files.map((file) => (
                        <li><Link to={'/just_for_fun/' + file}>{'JustForFun' + file}</Link></li>
                    ))
                }
            </ul>
        </Fragment>
    );
};

export default JustForFun;