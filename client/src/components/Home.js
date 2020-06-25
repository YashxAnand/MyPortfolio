import React from "react";
import { useSpring, animated } from "react-spring";

function Home() {
  const props = useSpring({
    config: { duration: 3000 },
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <div id='home-section'>
      <div className='home'>
        <div className='dark-overlay home-inner'>
          <animated.div style={props}>
            <div className='col-12'>
              <h1 className='display-2'>I'm Yash Anand</h1>
            </div>
            <div className='col-12'>
              <p>Full Stack Web Developer</p>
            </div>
            <div className='col-12'>
              <a
                href='https://drive.google.com/file/d/1iq0gSwPn6uF5dPpIezjlVKd3UVDWXxPU/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
              >
                <div className='btn download-resume'>Download Resume</div>
              </a>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
