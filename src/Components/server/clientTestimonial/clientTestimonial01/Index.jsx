import React, { Fragment } from 'react'
import quote from './quote.png';
import Swiper from 'react-id-swiper';
import './style.css'

const Index = () => {

    const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2,
            slideShadows: false,
        }, pagination: {
            el: '.swiper-pagination',
        }
    }


    return (
        <Fragment>
            <div className="clientTestimonial01">
                <section>
                    <Swiper {...params}>
                        <div className="testimonialContainer  ">
                            <div className="testimonialBox">
                                <img src={quote} alt='quote' className="quote" />
                                <div className="content">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. sed do eiusmod tempor incididunt ut labore et
                                        dolore manga aliqua. Ut emim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ae commodo consequat
                            </p>
                                    <div className="details">
                                        <div className="imgBx">
                                            <img src="https://picsum.photos/2000/1000?random=1" alt='ramdom' />
                                        </div>
                                        <h3>Someone Famous<br /><span>Creative Designer</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonialContainer  ">
                            <div className="testimonialBox">
                                <img src={quote} alt='quote' className="quote" />
                                <div className="content">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. sed do eiusmod tempor incididunt ut labore et
                                        dolore manga aliqua. Ut emim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ae commodo consequat
                            </p>
                                    <div className="details">
                                        <div className="imgBx">
                                            <img src="https://picsum.photos/2000/1000?random=2" alt='ramdom' />
                                        </div>
                                        <h3>Someone Famous<br /><span>Creative Designer</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonialContainer  ">
                            <div className="testimonialBox">
                                <img src={quote} alt='quote' className="quote" />

                                <div className="content">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. sed do eiusmod tempor incididunt ut labore et
                                        dolore manga aliqua. Ut emim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ae commodo consequat
                            </p>
                                    <div className="details">
                                        <div className="imgBx">
                                            <img src="https://picsum.photos/2000/1000?random=3" alt='ramdom' />
                                        </div>
                                        <h3>Someone Famous<br /><span>Creative Designer</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Swiper>
                </section>
            </div>
        </Fragment>
    );
};

export default Index;