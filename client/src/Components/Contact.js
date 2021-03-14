import React from 'react'

const Contact = () => {
  return (
      <div className="backgroundcontainer">
        <div className="row">
            <div className="col-md-12">

                <div className="container">
                    <div className="p-3 mb-2 bg-warning text-dark">    
                
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Name</span>
                            </div>
                            <input type="text" className="form-control" placeholder="Your Full Name" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <span className="input-group-text" id="basic-addon2">abc@example.com</span>
                                </div>
                        </div>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Your message here...</span>
                            </div>
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div>

                        <a className="btn btn-primary" href="./submit.html" role="button">Submit</a>
                    </div>
                </div>
            </div>   
        </div>     
    </div>
  )
}

export default Contact
