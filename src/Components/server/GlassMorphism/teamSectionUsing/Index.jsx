import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import User1 from './user01.jpg'
import User2 from './user02.jpg'
import User3 from './user03.jpg'
import './style.css'


const Index = () => {
    return (
        <Fragment>
            <div className="teamSectionUsing">
                <section>
                    <div class="container">
                        <div class="card">
                            <div class="content">
                                <div class="imgBx">
                                    <img src={User1} alt="user01" />
                                </div>
                                <div class="contentBx">
                                    <h3>Someone Famous<br /><span>Creative Designer</span></h3>
                                </div>
                            </div>
                            <ul class="sci">
                                <li style={{ '--i': 1 }}>
                                    <Link to='/glass_morphism/team-section-using'>
                                        <i class="fab fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li style={{ '--i': 2 }}>
                                    <Link to='/glass_morphism/team-section-using'>
                                        <i class="fab fa-twitter"></i>
                                    </Link>
                                </li>
                                <li style={{ '--i': 3 }}>
                                    <Link to='/glass_morphism/team-section-using'>
                                        <i class="fab fa-instagram"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="card">
                            <div class="content">
                                <div class="imgBx">
                                    <img src={User2} alt="user02" />
                                </div>
                                <div class="contentBx">
                                    <h3>Someone Famous<br /><span>Creative Designer</span></h3>
                                </div>
                            </div>
                            <ul class="sci">
                                <li style={{ '--i': 1 }}>
                                    <Link to='/glass_morphism/team-section-using'>
                                        <i class="fab fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li style={{ '--i': 2 }}>
                                    <Link to='/glass_morphism/team-section-using'>
                                        <i class="fab fa-twitter"></i>
                                    </Link>
                                </li>
                                <li style={{ '--i': 3 }}>
                                    <Link to='/glass_morphism/team-section-using'>
                                        <i class="fab fa-instagram"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="card">
                            <div class="content">
                                <div class="imgBx">
                                    <img src={User3} alt="user03" />
                                </div>
                                <div class="contentBx">
                                    <h3>Someone Famous<br /><span>Creative Designer</span></h3>
                                </div>
                            </div>
                            <ul class="sci">
                                <li style={{ '--i': 1 }}>
                                    <Link to='/glass_morphism/team-section-using'>
                                        <i class="fab fa-facebook"></i>
                                    </Link>
                                </li>
                                <li style={{ '--i': 2 }}>
                                    <Link to='/glass_morphism/team-section-using'>
                                        <i class="fab fa-twitter"></i>
                                    </Link>
                                </li>
                                <li style={{ '--i': 3 }}>
                                    <Link to='/glass_morphism/team-section-using'>
                                        <i class="fab fa-instagram"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    );
};

export default Index;