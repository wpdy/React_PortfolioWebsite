import { TypeAnimation } from 'react-type-animation';

import './About.css'

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";



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

        <div className='iconcon'>
          <a href="https://github.com/wpdy"><h6><AiFillGithub size={38}/> </h6></a>
          <a href="/blank"><h6><AiFillLinkedin size={38}/></h6></a>
          <a href="/blank"><h6><AiFillTwitterCircle size={38}/></h6></a>
        </div>

    </div>

      
  )
}

export default About