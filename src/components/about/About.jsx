import { TypeAnimation } from 'react-type-animation';

import './About.css'


const About = () => { 
  return (
    <div className='aboutcontainer'>
      <h1 className='myname'>Darius Drakšas</h1>

      <div className='animationtype'>
        <p className='iam'><strong>i am</strong></p>
        <TypeAnimation
          sequence={[
            'Front End Developer',
            2000,
            ':)',
            2000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '35px', display: 'inline-block', color: '#0563bb', fontFamily: "Comic Sans MS", fontWeight: "bolder"}}
        />
      </div>
    </div>
  )
}

export default About