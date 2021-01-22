import './Header.css';
import cv from './CV1.pdf';
import iconCV from './icon-cv.svg'
const Header = () => {
  return (<div className='wrapper_header'>
    <div className="about_me">
      <p className="name">Yauheni Beiduk</p>
      <p>Front-end Developer</p>
    </div>
    <a href={cv} target="_blank" rel="noopener noreferrer">
      <img className="icon-cv" src={iconCV} alt="github" />
    </a>
  </div>)
}

export default Header;

