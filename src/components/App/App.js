import React, { PropTypes, Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Routes from './../Routes'
import classnames from 'classnames'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { className, staticContext, ...props } = this.props    
    return (
      <BrowserRouter>
        <div className={ classnames('App', className) } { ...props } >
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>

          <Routes />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
