import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'

class Arg extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { className, staticContext, ...props } = this.props
		return(
			<div className={ classnames('About', className) } { ...props } >
				<h1> Argument testing </h1>
				<h4> Argument is { this.props.match.params.id } </h4>
			</div>
		)
	}
}

export default Arg