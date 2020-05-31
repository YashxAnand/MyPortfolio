import React from "react";
import { Image } from "react-bootstrap";

export default function Certificates() {
  return (
    <>
      <div className='section mt-5 pb-5' id='certificates-section'>
        <div className='container'>
          <div className='row justify-content-center'>
            <h1 className='display-3 mt-5'>Certificates</h1>
          </div>
          <div className='row mt-5 justify-content-center'>
            <div className='col-12 col-md-6 p-3 '>
              <Image
                src={require("../images/certificate1.jpg")}
                width='100%'
                rounded
              />
            </div>
            <div className='col-12 col-md-6 p-3'>
              <Image
                src={require("../images/certificate2.jpg")}
                width='100%'
                rounded
              />
            </div>
            <div className='col-12 col-md-6 p-3'>
              <Image
                src={require("../images/certificate3.jpg")}
                width='100%'
                rounded
              />
            </div>
            <div className='col-12 col-md-6 p-3'>
              <Image
                src={require("../images/certificate4.png")}
                width='100%'
                rounded
              />
            </div>
            <div className='col-12 col-md-6 p-3'>
              <Image
                src={require("../images/certificate5.png")}
                width='100%'
                rounded
              />
            </div>
            <div className='col-12 col-md-6 p-3'>
              <Image
                src={require("../images/certificate6.png")}
                width='100%'
                rounded
              />
            </div>
            <div className='col-12 col-md-6 p-3'>
              <Image
                src={require("../images/certificate7.png")}
                width='100%'
                rounded
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
