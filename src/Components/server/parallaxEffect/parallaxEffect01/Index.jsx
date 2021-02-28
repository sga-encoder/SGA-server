import React, { Fragment } from 'react'
import './style.css'

const Index = () => {

    const position = document.documentElement;

    position.addEventListener("mousemove", e => {
        position.style.setProperty("--x", e.clientX + 'px')
    })
    return (
        <Fragment>
            <section className='parallax01'>
                <div class="text">
                    <h2 style={{ '--i': 0.5 }}>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                    </h2>

                    <h2 style={{ '--i': 1.5 }}>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                    </h2>

                    <h2 style={{ '--i': 2.5 }}>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                    </h2>

                    <h2 style={{ '--i': 2.2 }}>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                    </h2>

                    <h2 style={{ '--i': 1.2 }}>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                    </h2>

                    <h2 style={{ '--i': 0.5 }}>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                    </h2>

                    <h2 style={{ '--i': 3 }}>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                    </h2>

                    <h2 style={{ '--i': 0.3 }}>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                    </h2>

                    <h2 style={{ '--i': 2.3 }}>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                    </h2>

                    <h2 style={{ '--i': 0.7 }}>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                    </h2>

                    <h2 style={{ '--i': 4 }}>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                        <span>Just 4 Fun</span>
                    </h2>
                </div>
            </section>
        </Fragment>
    );
};

export default Index;