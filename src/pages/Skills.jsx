import React from 'react';
// import { ImHtmlFive } from 'react-icons/fa';
import C_Img from '../img/app_development_PNG.png';
import Footer from '../component/Footer';

const Skills = () => {
  const skill = [
    {
      id: 1,
      icon: 'fab fa-html5',
      S_Name: 'HTML5',
      per: '80%',
      styleA: { width: '80%' },
    },

    {
      id: 2,
      icon: 'fab fa-css3-alt',
      S_Name: 'CSS3',
      per: '70%',
      styleA: { width: '70%' },
    },

    {
      id: 3,
      icon: 'fab fa-bootstrap',
      S_Name: 'Bootstrap',
      per: '60%',
      styleA: { width: '60%' },
    },
    {
      id: 4,
      icon: 'fab fa-react',
      S_Name: 'React',
      per: '50%',
      styleA: { width: '50%' },
    },
    {
      id: 5,
      icon: 'fab fa-js-square',
      S_Name: 'Javascript',
      per: '20%',
      styleA: { width: '20%' },
    },
  ];
  const arraySkill = skill.map((val, i) => {
    return (
      <div className='skill-inner mt-3' key={skill[i].id}>
        <div className='name'>
          <p>
            <i className={skill[i].icon}></i>
            <span>{skill[i].S_Name}</span>
          </p>
        </div>
        <div className='per'>
          <p>{skill[i].per}</p>
        </div>
        <div className='S_length' style={skill[i].styleA}></div>
      </div>
    );
  });
  return (
    <div className='skills'>
      <div className='left'>
        <h1>Professional Skills</h1>
        {arraySkill}
      </div>
      <div className='right'>
        <img src={C_Img} alt='computer' />
      </div>
      <Footer className='footer' />
    </div>
  );
};

export default Skills;
