import './About.css'
import Me from '../../imgs/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
      <div className="about-me">
        <div className="about-me-img">
        <img src={Me} alt="About Img" />
        </div>
      </div>

      <div className="about-content">
        <div className="about-cards">
          <div className="about-card">
            <FaAward className='about-icon'/>
            <h5>Experience</h5>
            <small>3+ Years Experience</small>
          </div>

          <div className="about-card">
            <FiUsers className='about-icon'/>
            <h5>Clients</h5>
            <small>300+ Worldwie</small>
          </div>

          <div className="about-card">
            <VscFolderLibrary className='about-icon'/>
            <h5>Projects</h5>
            <small>50+ Completed</small>
          </div>
        </div>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consectetur earum nemo sequi ipsa similique error atque sunt asperiores! Ut culpa porro, eum autem neque eius rem aperiam! Maiores, ratione.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About