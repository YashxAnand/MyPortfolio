import React from "react";
import { Badge } from "react-bootstrap";

export default function Skills() {
  return (
    <>
      <div className='container section mt-5' id='skills-section'>
        <div className='row justify-content-center'>
          <h1 className='display-3'>Skills</h1>
        </div>
        <div className='row justify-content-center '>
          <div className='col-12 col-md-10 text-center'>
            <ul>
              <li>
                <Badge pill variant='primary' className='skill '>
                  Java
                </Badge>
              </li>
              <li>
                <Badge pill variant='success' className='skill '>
                  React JS
                </Badge>
              </li>
              <li>
                <Badge pill variant='warning' className='skill '>
                  Node JS
                </Badge>
              </li>
              <li>
                <Badge pill variant='danger' className='skill '>
                  C / C++
                </Badge>
              </li>
              <li>
                <Badge pill variant='warning' className='skill '>
                  Javascript
                </Badge>
              </li>
              <li>
                <Badge pill variant='secondary' className='skill '>
                  Python
                </Badge>
              </li>
              <li>
                <Badge pill variant='primary' className='skill '>
                  HTML
                </Badge>
              </li>
              <li>
                <Badge pill variant='dark' className='skill '>
                  CSS
                </Badge>
              </li>
              <li>
                <Badge pill variant='success' className='skill '>
                  Bootstrap
                </Badge>
              </li>
              <li>
                <Badge pill variant='dark' className='skill '>
                  SQL
                </Badge>
              </li>
              <li>
                <Badge pill variant='danger' className='skill '>
                  PHP
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
