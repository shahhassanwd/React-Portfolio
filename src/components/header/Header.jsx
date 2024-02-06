import './Header.css'
import CTA from './CTA'
import Me from '../../imgs/me.png'
import HeaderSocials from './HeaderSocials'



const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello  I'm</h5>
        <h1>Katrine</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header