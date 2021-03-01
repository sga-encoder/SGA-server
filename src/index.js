import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import AnimateBackground from './Components/server/AnimatedBackground';
import Calculators from './Components/server/Calculators';
import Cards from "./Components/server/Cards";
import ClientTestmonial from "./Components/server/ClientTestimonial";
import Clocks from './Components/server/Clocks';
import Clock01 from "./Components/server/Clocks/analogClock01/Index";
import Clock02 from "./Components/server/Clocks/analogClock02/Index";
import Clock03 from "./Components/server/Clocks/analogClock03/Index";
import GlassMorphism from './Components/server/GlassMorphism';
import CreditCart from './Components/server/GlassMorphism/creditCart/Index';
import TeamSectionUsing from './Components/server/GlassMorphism/teamSectionUsing/Index'
import JustForFun from './Components/server/JustForFun';
import JustForFun01 from './Components/server/justForFun/justForFun01/Index';
import Navbars from './Components/server/Navbars';
import Navbar01 from './Components/server/navbars/navbar01/Index';
import ParallaxEffect from './Components/server/ParallaxEffect';
import ParallaxEffect01 from './Components/server/parallaxEffect/parallaxEffect01/Index'
import Practices from './Components/server/Practices'
import Practice01 from './Components/server/practices/practice01/Index';
import Practice02 from './Components/server/practices/Practice02/Index';
import Practice03 from './Components/server/practices/practice03/Index';
import PracticeChapters from './Components/server/practices/practice03/Pages/Chapters';
import PracticeDictionary from './Components/server/practices/practice03/Pages/Dictionary';
import Practice03Navbar02 from "./Components/server/practices/practice03/Pages/Navbar";
import "./style.css";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route exact path='/' component={App} />

				<Route exact path='/animated_background' component={AnimateBackground} />

				<Route exact path='/calculators' component={Calculators} />

				<Route exact path='/cards' component={Cards} />

				<Route exact path='/client_testmonial' component={ClientTestmonial} />

				<Route exact path='/clocks/03' component={Clock03} />

				<Route exact path='/clocks/02' component={Clock02} />

				<Route exact path='/clocks/01' component={Clock01} />

				<Route exact path='/clocks' component={Clocks} />

				<Route exact path='/glass_morphism/team-section-using' component={TeamSectionUsing} />

				<Route exact path='/glass_morphism/credit-card' component={CreditCart} />

				<Route exact path='/glass_morphism' component={GlassMorphism} />

				<Route exact path='/just_for_fun/01' component={JustForFun01} />

				<Route exact path='/just_for_fun' component={JustForFun} />

				<Route exact path='/navbars/01' component={Navbar01} />

				<Route exact path='/navbars' component={Navbars} />

				<Route exact path='/parallax_effect/01' component={ParallaxEffect01} />

				<Route exact path='/parallax_effect' component={ParallaxEffect} />

				<Route exact path='/practices/03/dictionary'>
					<Practice03Navbar02 />
					<PracticeDictionary />
				</Route>

				<Route exact path='/practices/03/chapters'>
					<Practice03Navbar02 />
					<PracticeChapters />
				</Route>

				<Route exact path='/practices/03' component={Practice03} />

				<Route exact path='/practices/02' component={Practice02} />

				<Route exact path='/practices/01' component={Practice01} />

				<Route exact path='/practices' component={Practices} />
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);