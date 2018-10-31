import React from 'react'
import logo from '../logo.svg';
const Header = props => {
    return(
        <header className="header">
        <img src={logo} className="App-logo" alt="logo" />        
          <p>
              <h1 className=  "App-Tittle">
              Do Zero ao ChatBot
              </h1>
          </p>
      </header>
    )
}

export default Header