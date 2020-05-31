import React from "react";
import { Media } from "reactstrap";

function Education() {
  return (
    <div className='container mt-5 section' id='education-section'>
      <div className='row justify-content-center'>
        <h1 className='display-3'>Education</h1>
      </div>
      <div className='col-12 col-md-8 mt-5 shadow bg-white rounded'>
        <Media>
          <div className='row'>
            <div className='col-12 col-md-3 offset-2 offset-md-0'>
              <Media
                object
                src={require("../images/class10.png")}
                className='education-img'
              />
            </div>
            <div className='col-12 col-md-8 offset-md-1 text-left'>
              <Media heading>Kendriya Vidyalaya, Sector 31-D, Chandigarh</Media>
              <p>Class X</p>
              <p>2014-2015</p>
              <p>10.0 CGPA</p>
            </div>
          </div>
        </Media>
      </div>
      <div className='col-12 col-md-8 offset-md-4 mt-5 shadow bg-white rounded'>
        <Media>
          <div className='row'>
            <div className='col-12 col-md-9 order-2 order-md-1'>
              <Media heading>
                Kendriya Vidyalaya, AFS Highgrounds, Chandigarh
              </Media>
              <p>Class XII, Science(Non Medical)</p>
              <p>2015-2017</p>
              <p>92%</p>
            </div>
            <div className='col-12 col-md-3 order-1 order-md-2 offset-2 offset-md-0'>
              <Media
                object
                src={require("../images/class12.jpg")}
                className='education-img'
              />
            </div>
          </div>
        </Media>
      </div>
      <div className='col-12 col-md-8 mt-5 shadow bg-white rounded'>
        <Media>
          <div className='row'>
            <div className='col-12 col-md-3 offset-2 offset-md-0'>
              <Media
                object
                src={require("../images/college.jpg")}
                className='education-img'
              />
            </div>
            <div className='col-12 col-md-8 offset-md-1 text-left'>
              <Media heading>Vellore Institute of Technology, Vellore</Media>
              <p>B. Tech, Computer Science Engineering</p>
              <p>2018-2022</p>
              <p>9.47 CGPA</p>
            </div>
          </div>
        </Media>
      </div>
    </div>
  );
}

export default Education;
