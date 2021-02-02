import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Clock from 'react-digital-clock';
import Moment from 'react-moment';

const Menu = () => {
  const menu = [
    {
      id: 1,
      title: 'Home',
      path: '/',
    },
    {
      id: 2,
      title: 'About',
      path: '/about',
    },
    {
      id: 3,
      title: 'Skills',
      path: '/skills',
    },
    {
      id: 4,
      title: 'Contact',
      path: '/contact',
    },
  ];
  const date = new Date().toLocaleDateString();
  const options = {
    // weekday: 'long',
    // year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateToFormat = date.options;
  const arrayMenu = menu.map((val, index) => {
    return (
      <li className='nav-item' key={menu[index].id}>
        <NavLink className='nav-link ' to={menu[index].path}>
          <button className='btn my-1 btn-btn'>{menu[index].title}</button>
        </NavLink>
      </li>
    );
  });
  return (
    <div className=' menu navbar-brand '>
      <nav className='navbar navbar-expand-lg navbar-light '>
        <div className=' flex-column '>
          <div className='css-row '>
            <div className='home-title'>
              <NavLink className='navbar-brand ' to='/'>
                Arshad
              </NavLink>
              <div className='screw '>
                <div className='line1'></div>
                <div className='line2'></div>
              </div>
            </div>

            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
          </div>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav flex-column my-4'>{arrayMenu}</ul>
          </div>
          <div className='clock'>
            <h1>Date & Time</h1>

            <Clock className='digital-clock text-dark' />
            <p>
              <Moment format='ddd D MMM YYYY'>{dateToFormat}</Moment>
            </p>
            <div className='S-screw S-screw-1'>
              <div className='S-line1'></div>
              <div className='S-line2'></div>
            </div>
            <div className='S-screw S-screw-2'>
              <div className='S-line1'></div>
              <div className='S-line2'></div>
            </div>
            <div className='S-screw S-screw-3'>
              <div className='S-line1'></div>
              <div className='S-line2'></div>
            </div>
            <div className='S-screw S-screw-4'>
              <div className='S-line1'></div>
              <div className='S-line2'></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
