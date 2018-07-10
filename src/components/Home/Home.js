import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'
// import './App.css'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { className, staticContext, ...props } = this.props
    return (
      <div className={ classnames('Home', className) } { ...props } >
        <header>
          <h1>Welcome to React</h1>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.          
        </p>
        <p>
        My name is Ritesh. Hello my friend. 
        </p>
      </div>
    )
  }
}

export default Home