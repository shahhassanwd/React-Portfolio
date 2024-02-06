import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>Katrine</a>

      <ul className='parmalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experince</a></li>
        <li><a href="#serives">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://facebook.com" target='_blank'><FaFacebookF /></a>
        <a href="https://instagram.com" target='_blank'><BsInstagram /></a>
        <a href="https://twitter.com" target='_blank'><BsTwitter /></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; KATRINE, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer