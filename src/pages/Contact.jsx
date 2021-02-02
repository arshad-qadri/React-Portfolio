import React from 'react';
import emailjs from 'emailjs-com';
import Footer from '../component/Footer';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uu6rv3b',
        'template_f59h0qu',
        e.target,
        'user_uVkUNk9cZWF1vSX1K4yI2'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className='contact'>
      <form onSubmit={sendEmail}>
        <div className='inp'>
          <input
            type='text'
            placeholder='Enter Your Name'
            name='name'
            required
            autoComplete='off'
          />
        </div>
        <div className='inp'>
          <input
            type='email'
            placeholder='Enter Your Email ID'
            name='email'
            required
            autoComplete='off'
          />
        </div>
        <div className='inp'>
          <input
            type='text'
            placeholder='Enter Subject'
            name='subject'
            required
            autoComplete='off'
          />
        </div>

        <div className='msg'>
          <textarea
            name='message'
            id=''
            placeholder='Enter Message Here...!'
            required
          ></textarea>
        </div>

        <div className='button'>
          <input type='submit' className='btn' value='Send' />
        </div>
      </form>
      <Footer className='footer' />
    </div>
  );
}
