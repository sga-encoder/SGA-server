import React, { Fragment, } from 'react';
import { Link, } from 'react-router-dom';



const App = () => {

    const folders = ['animated_background', 'calculators', 'cards', 'client_testmonial', 'clocks', 'glass_morphism', 'just_for_fun', 'navbars', 'parallax_effect', 'practices'];

    return (
        <Fragment>
            <section>

                <ul>
                    {
                        folders.map((folder) => (
                            <li><Link to={"/" + folder}>{folder}</Link></li>
                        ))
                    }
                </ul>

            </section>
        </Fragment>
    );
};

export default App;