import React, { Fragment } from 'react';
import chip from './chip.png'
import './style.css';

const Index = () => {
    return (
        <Fragment>
            <section className='credit-cart'>
                <section>
                    <div class="card">
                        <div class="face front">
                            <h3 class="debit">Debit Cart</h3>
                            <h3 class="bank">Bank Name</h3>
                            <img src={chip} alt="chip de targeta de credito" class="chip" />
                            <h3 class="number">0123 4567 8901 2345</h3>
                            <h5 class="valid"><span>Valid <br /> thru</span><span>10/27</span></h5>
                            <h5 class="cardHolder">Muhsmmsd Irshad</h5>
                        </div>
                        <div class="face back">
                            <div class="blackbar"></div>
                            <div class="ccvtext">
                                <h5>Autorized Signature-not valid unless signed</h5>
                                <div class="whiteBar"></div>
                                <div class="ccv">123</div>
                            </div>
                            <p class="text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed de eiusmod
                                tempor incididunt ut labore et dolore magna alique. ut enim ad minim veniam
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </Fragment>
    );
};

export default Index;