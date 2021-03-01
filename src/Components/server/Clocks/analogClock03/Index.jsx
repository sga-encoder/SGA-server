import React, { Fragment, useEffect, useRef } from 'react'
import './style.css'

const Index = () => {

    const hr = useRef();
    const mn = useRef();
    const sc = useRef();

    useEffect(() => {
        setInterval(() => {
            const deg = 6;
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;

            hr.current.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
            mn.current.style.transform = `rotateZ(${mm}deg)`;
            sc.current.style.transform = `rotateZ(${ss}deg)`;
        })
    })
    return (
        <Fragment>
            <div className="clock03">
                <div class="container">
                    <div class="box">
                        <div className="clock">
                            <div className="hour" ref={hr}>
                                <div className="hr" id="hr"></div>
                            </div>
                            <div className="min" ref={mn}>
                                <div className="mn" id="mn"></div>
                            </div>
                            <div className="sec" ref={sc}>
                                <div className="sc" id="sc"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Index;