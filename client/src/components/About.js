import React from "react";
import { Card, CardBody } from "reactstrap";

function About() {
  return (
    <>
      <div className='container mt-5 section' id='about-section'>
        <div className='row justify-content-center'>
          <h1 className='display-3'>About Me</h1>
        </div>
        <div className='row'>
          <div className='col-12 col-md-4 text-center align-item-center'>
            <div className='row mt-5'>
              <div className='col-12 pt-5'>
                <img
                  src={require("../images/me.jpg")}
                  width='200px'
                  style={{ borderRadius: "50%" }}
                  alt='Yash'
                />
              </div>
              <div className='col-12 mt-4'>
                <a
                  href='https://www.facebook.com/yash.anand.501'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='fa fa-facebook fa-lg'></span>
                </a>
                <a
                  href='https://www.instagram.com/yash.anand0604/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='fa fa-instagram fa-lg offset-1'></span>
                </a>
                <a
                  href='https://www.linkedin.com/in/yash-anand-128581137/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='fa fa-linkedin fa-lg offset-1'></span>
                </a>
                <a
                  href='https://github.com/YashxAnand'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='fa fa-github fa-lg offset-1'></span>
                </a>
                <a
                  href='https://twitter.com/anandyash396'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='fa fa-twitter fa-lg offset-1'></span>
                </a>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <Card>
              <CardBody className='about-content'>
                <p>
                  I am Yash Anand, an engineering student in computer science at
                  Vellore Institute of Technology, Vellore. I take great
                  interest in maths and this is the reason I planned of pursuing
                  the PCM stream after 10th. I had always thought of being an
                  engineer and worked hard to get into one of the finest
                  institutions and finally VIT happened.
                </p>
                <p>
                  I look forward to becoming a software engineer. Coding is my
                  forte and learning more and more languages have also excited
                  me. I have learnt Python, C/C++, Java, HTML, CSS, JavaScript/
                  jQuery, PHP. I even do competitive coding on online platforms
                  like hackerrank, codechef, leetcode frequently.
                </p>
                <p>
                  Besides academics and science stuff I am a huge sports
                  enthusiast. I follow cricket, football, tennis, badminton,
                  baseball and basketball. I am particularly into Real
                  Madrid(football) and Mumbai Indians (cricket). I believe
                  sports is as essential as any other thing for one's
                  development. Sports people are not just players but a real
                  source of inspiration too for me. They inculcate a true
                  fighting spirit within.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
