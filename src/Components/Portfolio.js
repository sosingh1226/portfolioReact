import React from 'react'

const Portfolio = () => {
  return (
        <div className="backgroundcontainer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="container-fluid">
                        <div className="p-3 mb-2 bg-warning text-dark">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-header">
                                        <ul></ul>
                                        <ul></ul>
                                        <h4>Recent Projects - A few examples of projects I have enjoyed working on...</h4> 
                                        <ul></ul>
                                        <ul></ul>
                                    </div>
                                </div>
                            

                            <div className="row">

                                <div className="col-md-3">
                                    <div className="portfoliocard1">
                                        <img src="./Assets/Images/mood_brew_shot.png" height="250" className="card-img-top"/>
                                        <div className="card-body">
                                        <h6 className="card-title">Mood Brew</h6>
                                        <p className="card-text">A simulation that allows you to brew a special randomly generated drink & meal recipe based on a specific mood!</p>
                                        <a href="https://sosingh1226.github.io/Mood_Brew/" target="_blank" className="btn btn-primary btn-sm" id="linkbtn">See This Live</a>
                                        <a href="https://github.com/sosingh1226/Mood_Brew" target="_blank" className="btn btn-primary btn-sm" id="linkbtn">See My Code</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-3">
                                    <div className="portfoliocard1">
                                        <img src="./Assets/Images/wine_trivia_shot.png" height="250" className="card-img-top"/>
                                        <div className="card-body">
                                        <h6 className="card-title">Wine Trivia- Code Quiz</h6>
                                        <p className="card-text" id="description">Wine Trivia to test your knowledge about wine. Watch out for the timer that reflects your score!</p>
                                        <a href= "https://sosingh1226.github.io/code_quiz_by_ss/" target="_blank" className="btn btn-primary btn-sm" id="linkbtn">See This Live</a>
                                        <a href="https://github.com/sosingh1226/code_quiz_by_ss" target="_blank" className="btn btn-primary btn-sm" id="linkbtn">See My Code</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="portfoliocard1">
                                        <img src="./Assets/Images/weather_shot.png" height="250" className="card-img-top"/>
                                        <div className="card-body">
                                        <h6 className="card-title">Howz-da-Weather</h6>
                                        <p className="card-text" id="description">Input any location to know the weather in that area along with 5-day forcast. Save the search location in the history</p>
                                        <a href="https://sosingh1226.github.io/howzdaweather/" target="_blank" className="btn btn-primary btn-sm" id="linkbtn">See This Live</a>
                                        <a href="https://github.com/sosingh1226/howzdaweather" target="_blank" className="btn btn-primary btn-sm" id="linkbtn">See My Code</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="portfoliocard1">
                                        <img src="./Assets/myteam_shot.png" height="250" className="card-img-top"/>
                                        <div className="card-body">
                                        <h6 className="card-title">Make Your Team</h6>
                                        <p className="card-text" id="description">Back-end only Project. Input details of your team members and save it!</p>
                                        <a href="https://github.com/sosingh1226/makeYourTeam" target="_blank" className="btn btn-primary btn-sm" id="linkbtn">See My Code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <ul></ul>
                            <ul></ul>

                            <div className="row">
                            
                                <div className="col-md-3">
                                    <div className="portfoliocard2">
                                        <img src="./Assets/Images/burger.png" height="250" className="card-img-top"/>
                                        <div className="card-body">
                                            <h6 className="card-title">Burger Drama</h6>
                                            <p className="card-text" id="description">List all the burgers & devour it!</p>
                                            <a href="https://burger-drama.herokuapp.com/" target="_blank" className="btn btn-primary btn-sm" id="linkbtn">See This Live</a>
                                            <a href="https://github.com/sosingh1226/burger_drama" target="_blank" className="btn btn-primary btn-sm" id="linkbtn">See My Code</a>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-md-3">
                                    <div className="portfoliocard2">
                                        <img src="./Assets/Images/house-ninja-app.png" height="400" className="card-img-top"/>
                                        <div className="card-body">
                                        <h6 className="card-title">House Ninja Android App</h6>
                                        <p className="card-text" id="description">UX Design Project- Clickable prototype for an Android App! Add your location and view home service providers in your area. Ask for a free quote remotely and bid on the received quotes.</p>
                                        <a href="https://projects.invisionapp.com/share/CUSKNQ2V3HE#/screens" target="_blank" className="btn btn-primary btn-sm" id="linkbtn">See This Live</a>
                                        <a href="https://archinect.com/soumyasingh/project/ux-design-portfolio" target="_blank" className="btn btn-primary btn-sm" id="linkbtn">User Research</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="portfoliocard2">
                                        <img src="./Assets/Images/ghostwiki.png" className="card-img-top"/>
                                        <div className="card-body">
                                        <h6 className="card-title">Ghost Wiki App</h6>
                                        <p className="card-text" id="description">This data would be viewable on the internet and provide a source of truth based on observation and analysis from others' edits and information.This group considered quite a few topics to start with, from food, music, and travel to games, statistical analysis on world health reports, and hiring numbers. Why ghosts, you ask? We're of the opinion they're quite... cool.</p>
                                        <a href="https://ghostwiki.herokuapp.com/" target="_blank" className="btn btn-primary btn-sm" id="linkbtn">See This Live</a>
                                        <a href="https://github.com/sosingh1226/ghostwiki" target="_blank" className="btn btn-primary btn-sm" id="linkbtn">See My Code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Portfolio
