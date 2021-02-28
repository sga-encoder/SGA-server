import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import AnimateBackground from './Components/server/AnimatedBackground';
import Calculators from './Components/server/Calculators';
import Cards from "./Components/server/Cards";
import ClientTestmonial from "./Components/server/ClientTestimonial";
import Clocks from './Components/server/Clocks';
import GlassMorphism from './Components/server/GlassMorphism';
import JustForFun from './Components/server/JustForFun';
import Navbars from './Components/server/Navbars';
import ParallaxEffect from './Components/server/ParallaxEffect';
import Practices from './Components/server/Practices'
import Practice01 from './Components/server/practices/practice01/Index'
import Practice02 from './Components/server/practices/Practice02/Index'
import Practice03 from './Components/server/practices/practice03/Index'
import PracticeChapters from './Components/server/practices/practice03/Pages/Chapters';
import PracticeDictionary from './Components/server/practices/practice03/Pages/Dictionary';
import Practice03Navbar02 from "./Components/server/practices/practice03/Pages/Navbar";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route exact path='/home'>
					<App />
				</Route>
				<Route exact path='/animated_background'>
					<AnimateBackground />
				</Route>
				<Route exact path='/calculators'>
					<Calculators />
				</Route>
				<Route exact path='/cards'>
					<Cards />
				</Route>
				<Route exact path='/client_testmonial'>
					<ClientTestmonial />
				</Route>
				<Route exact path='/clocks'>
					<Clocks />
				</Route>
				<Route exact path='/glass_morphism'>
					<GlassMorphism />
				</Route>
				<Route exact path='/just_for_fun'>
					<JustForFun />
				</Route>
				<Route exact path='/navbars'>
					<Navbars />
				</Route>
				<Route exact path='/parallax_effect'>
					<ParallaxEffect />
				</Route>
				<Route exact path='/practices/01'>
					<Practice01 />
				</Route>
				<Route exact path='/practices/02'>
					<Practice02 />
				</Route>
				<Route exact path='/practices/03/dictionary'>
					<Practice03Navbar02 />
					<PracticeDictionary />
				</Route>
				<Route exact path='/practices/03/chapters'>
					<Practice03Navbar02 />
					<PracticeChapters />
				</Route>
				<Route exact path='/practices/03'>
					<Practice03 />
				</Route>
				<Route exact path='/practices'>
					<Practices />
				</Route>
				<Redirect exact from='/' to='/home' />
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);