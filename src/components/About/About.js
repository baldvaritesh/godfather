import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'

class About extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { className, staticContext, ...props } = this.props
		return(
			<div className={ classnames('About', className) } { ...props } >
				<h1> About </h1>
			</div>
		)
	}
}

export default About