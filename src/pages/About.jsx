import React, { useEffect } from 'react';
import Footer from '../component/Footer';
import img from '../img/arshad.jpg';

const About = () => {
  useEffect(() => {
    document.title = 'About || React-Single-Page-Application';
  });
  return (
    <>
      <div className='about '>
        <div className='left'>
          <div className='img'>
            <img src={img} alt='img' />
          </div>
        </div>
        <div className='right'>
          <h1>I'm Arshad</h1>
          <p>
            My name is Mo Arshadraza Mo Qayyum. I am living in Sangli
            (Maharshtra).
            <br /> I did my graduation in BCA from Shivaji University Kolhapur.
            <br /> My strengths are I am self motivated, Hard working and a
            disciplined person.
            <br /> My short term goal is to get a job in a reputed company and
            my long term goal is to achieve a good position where I can build my
            career and help the organization too.
          </p>
        </div>
        <Footer className='footer' />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default About;
