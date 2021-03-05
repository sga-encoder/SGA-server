import React, { Fragment, } from 'react';
import { Link, } from 'react-router-dom';
import './App.css'


const App = () => {

    const folders = [['cards', 'Cards'], ['client_testimonial', 'Client Testimonial'], ['clocks', 'Clocks'], ['glass_morphism', 'Glass Morphism'], ['just_for_fun', 'Just For Fun'], ['navbars', 'Navbar'], ['parallax_effect', 'Parallax Effect'], ['practices', 'Practices']];

    return (
        <Fragment>
            <section className='server'>

                <ul>
                    {
                        folders.map((folder) => (
                            <li><Link to={"/" + folder[0]}>{folder[1]}</Link></li>
                        ))
                    }
                </ul>

            </section>
        </Fragment>
    );
};

export default App;