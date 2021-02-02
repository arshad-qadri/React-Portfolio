import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import myImg from '../img/arshad2.png';
import resume from '../resume/myresume.pdf';

const Home = () => {
  // useEffect(() => {
  //   alert('test');
  // }, []);
  return (
    // <div className='text-center'>
    //   <h1 className='display-3'>CodeWith Arshad </h1>
    //   <p
    //     className=' text-capitalize '
    //     style={{ fontSize: 20, letterSpacing: 2 }}
    //   >
    //     This is for learning purpose
    //   </p>
    //   <button className='btn btn-outline-primary px-5'> Start</button>
    // </div>
    <>
      <div className='home'>
        <div className='left order-1 order-lg-0'>
          <h1>
            Hi,
            <br />I am <span>Arshad</span>
            <br />A Web Developer
          </h1>
          <div className='home-btn'>
            <Link to='/contact'>
              <button className='btn'>Contact</button>
            </Link>
            <Link to={resume} download>
              <button className='btn' style={{ marginLeft: '20px' }}>
                Resume
              </button>
            </Link>
          </div>
        </div>
        <div className='right order-0 order-lg-1'>
          <img src={myImg} />
        </div>
        <Footer className='footer' />
      </div>
    </>
  );
};

export default Home;
