import React, { Component } from 'react'
import { Route } from 'react-router-dom'

//import the components here
import Home from './Home'
import About from './About'
import Arg from './Arg'

class Routes extends Component {
	render() {
		return(
			<div>
				<Route exact path='/' component={ Home } />
				<Route path='/about' component={ About } />
				<Route path='/arg/:id' component={ Arg } />
			</div>
		)
	}
}

export default Routes