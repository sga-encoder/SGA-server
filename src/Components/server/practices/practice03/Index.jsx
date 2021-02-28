import React, { Fragment, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './css/index.css';

const Index = () => {

	const [status, setStatus] = useState(false)

	useEffect(() => {
		document.body.style.background = '#29150b';
		document.title = 'SGA|EL Feo'
	}, []);

	return (
		<Fragment>
			<div className='practice03'>

				<section className={status ? 'background active' : 'background'}>
					<div className="container">
						<div className="menu">
							<div className="toggle" onClick={() => { status ? setStatus(false) : setStatus(true) }}></div>
							<div className="blur">
								<svg className='wave' viewBox="0 0 300 150" preserveAspectRatio="none">
									<path id='wavePath' d={status ? 'M0,0 C0,0 0,150 0,150 L300,150 L300,0 Z' : 'M160,0 C90,70.5 240,50 180,150 L300,150 L300,0 Z'} />
								</svg>
							</div>
							<ul className="content">
								<li style={{ '--d': 1 }}>
									<Link to="/practices/03">Hogar</Link>
								</li>
								<li style={{ '--d': 2 }}>
									<Link to="/practices/03/chapters">Capitulos</Link>
								</li>
								<li style={{ '--d': 3 }}>
									<Link to="/practices/03/dictionary">Diccionario</Link>
								</li>
							</ul>
						</div>
						<div className="content">
							<h1>Sebastian Garzon Arias</h1>
							<h2>El Feo trabajo de español</h2>
							<Link to="/practices/03/chapters">ver capitulos</Link>
						</div>
					</div>
				</section>
			</div>
		</Fragment>
	);
};

export default Index;