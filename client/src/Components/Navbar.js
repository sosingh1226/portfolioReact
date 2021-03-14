import React from 'react'
import About from './About'
import Button from './Button'
import Contact from './Contact'
import Portfolio from './Portfolio'

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="./About.js">Soumya Singh</a>
        <Button onClick={props.onClick} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </Button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link active">About<span className="sr-only">(current)</span></a>
                    <About />
                </li>
                <li className="nav-item">
                <a className="nav-link">Portfolio</a>
                <Portfolio/>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Contact</a>
                    <Contact />
                </li>
            </ul>
            <ul>
                <a href="https://github.com/sosingh1226" target="_blank" className="btn btn-primary">GitHub Profile</a>
                <a href="https://www.linkedin.com/in/soumyasinghso/" target="_blank" className="btn btn-primary">LinkedIn Profile</a>
                <button type="submit" onclick="window.open('./resumess.pdf')" className="btn btn-primary">Resume</button>
            </ul>
        
        </div>
    </nav>
    </div>
  )
}

export default Navbar
