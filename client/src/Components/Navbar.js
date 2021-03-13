import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="./index.html">Soumya Singh</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="./index.html">About<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="./portfolio.html">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./contact.html">Contact</a>
                </li>
            </ul>
            <ul>
                <a href="https://github.com/sosingh1226" target="_blank" class="btn btn-primary">GitHub Profile</a>
                <a href="https://www.linkedin.com/in/soumyasinghso/" target="_blank" class="btn btn-primary">LinkedIn Profile</a>
                <button type="submit" onclick="window.open('./resumess.pdf')" class="btn btn-primary">Resume</button>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
