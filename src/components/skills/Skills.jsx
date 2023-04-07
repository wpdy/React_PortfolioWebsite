import './Skills.css'

const Skills = () => {
  return (
    <div className="skillcontainer">
        <p className='skillname'>Skills</p>
        <div className="skill">
            <h3>HTML</h3>
            <h4>95%</h4>
            <span className="skill-bar"></span>
            <span className="fill-bar html"></span>
        </div>
        <div className="skill">
            <h3>CSS</h3>
            <h4>80%</h4>
            <span className="skill-bar"></span>
            <span className="fill-bar css"></span>
        </div>
        <div className="skill">
            <h3>Vanilla JavaScript</h3>
            <h4>50%</h4>
            <span className="skill-bar"></span>
            <span className="fill-bar javascript"></span>
        </div>
        <div className="skill">
            <h3>React Js</h3>
            <h4>35%</h4>
            <span className="skill-bar"></span>
            <span className="fill-bar react"></span>
        </div>
    </div>
  )
}


export default Skills