import './Footer.css';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import mail from './icons/mail.svg';
import CopyMailTo from "react-copy-mailto";


const Footer = () => {
  return (<div className='wrapper_footer'>
    <footer>
      <div className="footer-container">
        <p>© 2021</p>
        <div className="footer-links">
          <a href="https://github.com/yauheni-beiduk" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/yauheni-beiduk-a8065b1b5/" target="_blank">
            <img src={linkedin} alt="linkedin" />
          </a>
          <CopyMailTo email="yauheni.beiduk@gmail.com" target="_blank">
            <img src={mail} alt="mail" />
          </CopyMailTo>
        </div>
      </div>
    </footer>
  </div>
  )
}
export default Footer;