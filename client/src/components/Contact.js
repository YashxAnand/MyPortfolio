import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className='section pb-5' id='contact-section'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-8 col-md-5'>
                <h1 className='display-3 mt-5'>Get In Touch</h1>
              </div>
            </div>
            <div className='row mt-5'>
              <div className='col-12 col-md-4 offset-md-2 '>
                <h2>Social</h2>
                <a
                  href='https://www.facebook.com/yash.anand.501'
                  className='btn btn-facebook m-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='fa fa-facebook fa-lg'></span>
                </a>
                <a
                  href='https://www.instagram.com/yash.anand0604/'
                  className='btn btn-instagram m-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='fa fa-instagram fa-lg'></span>
                </a>
                <a
                  href='https://www.linkedin.com/in/yash-anand-128581137/'
                  className='btn btn-linkedin m-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='fa fa-linkedin fa-lg'></span>
                </a>
                <a
                  href='https://github.com/YashxAnand'
                  className='btn btn-github m-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='fa fa-github fa-lg'></span>
                </a>
                <a
                  href='https://twitter.com/anandyash396'
                  className='btn btn-twitter m-1'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='fa fa-twitter fa-lg'></span>
                </a>
              </div>
              <div className='col-12 col-md-6 text-cener'>
                <h2>Contact</h2>

                <div className='col-12 contact-details'>
                  <span className='fa fa-phone fa-lg mr-3'></span>
                  <a href='tel:+919781971408' className='btn btn-warning ml-1'>
                    +919781971408
                  </a>
                </div>
                <div className='col-12 contact-details'>
                  <span className='fa fa-phone fa-lg mr-3'></span>
                  <a href='tel:+918872857140' className='btn btn-warning ml-1'>
                    +918872857140
                  </a>
                </div>
                <div className='col-12 contact-details '>
                  <span className='fa fa-envelope fa-lg mr-2'></span>
                  <a
                    href='mailto:anandyash396@gmail.com'
                    className='btn btn-warning m-1'
                  >
                    anandyash396@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
