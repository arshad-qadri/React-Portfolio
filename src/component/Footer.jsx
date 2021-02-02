import React from 'react';

const copyStyle = {
  width: ' 100%',
  textAlign: 'right',
  paddingRight: 10,
  paddingBottom: 5,
  fontWeight: 500,
  color: '#2f3640',
};
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer ' style={copyStyle}>
      Copyright©{year}
    </footer>
  );
};

export default Footer;
