import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-info">
          <article className='contact-option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>katrine@gmail.com</h5>
            <a href="#email">Send A Message</a>
          </article>

          <article className='contact-option'>
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>katrine</h5>
            <a href="#messenger">Send A Message</a>
          </article>

          <article className='contact-option'>
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+923118902967</h5>
            <a href="#whatsapp">Send A Message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <a href="#submit" className='btn btn-primary'>Send Message</a>
        </form>
      </div>
    </section>
  )
}

export default Contact