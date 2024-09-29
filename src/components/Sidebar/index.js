import './index.scss'
import { useEffect, useState } from 'react'
import LogoS from '../../assets/images/icon192.png'
import { Link, useSearchParams } from 'react-router-dom'
import { FaAndroid, FaClock, FaEnvelope, FaGamepad, FaGithub, FaInfoCircle, FaInstagram, FaLanguage, FaLinkedin, FaPaintBrush } from 'react-icons/fa'
import { FaPixiv } from 'react-icons/fa6'

const Sidebar = () => {
  const [showNav] = useState(false);

  const scrollToHome = () => {
    window.scrollTo(0, 0)
  }

  const scrollToDev = () => {
    window.scrollTo(0, window.innerHeight*2)
  }

  const scrollToArt = () => {
    window.scrollTo(0, window.innerHeight*3)
  }

  const scrollToLang = () => {
    window.scrollTo(0, window.innerHeight*4)
  }

  const scrollToAbout = () => {
    window.scrollTo(0, window.innerHeight*5)
  }

  const scrollToContact = () => {
    window.scrollTo(0, (window.innerWidth > 1200) ? window.innerHeight*5 : window.innerHeight*6)
  }

  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    switch (searchParams.get("p")) {
      case "1": scrollToDev(); break;
      case "2": scrollToArt(); break;
      case "3": scrollToLang(); break;
      case "4": scrollToAbout(); break;
      case "5": scrollToContact(); break;
      default: scrollToHome();
    }

    return;
  }, [searchParams]);

  return (
    <div className="nav-bar">
      <nav className={showNav ? 'mobile-show' : ''}>
        <Link 
          className="logo"
          onClick={scrollToHome}
          to="/public-page/">
          <img src={LogoS} alt="Logo" />
        </Link>
        <Link 
          onClick={scrollToDev}
          to="/public-page/?p=1">
          <div><FaAndroid /></div>
        </Link>
        <Link 
          onClick={scrollToArt}
          to="/public-page/?p=2">
          <div><FaPaintBrush /></div>
        </Link>
        <Link 
          onClick={scrollToLang}
          to="/public-page/?p=3">
          <div><FaLanguage /></div>
        </Link>
        <Link 
          onClick={scrollToAbout}
          to="/public-page/?p=4">
          <div><FaInfoCircle /></div>
        </Link>
        <Link 
          onClick={scrollToContact}
          to="/public-page/?p=5">
          <div><FaEnvelope /></div>
        </Link>
        <a 
          href="https://example.com/" target="_blank" rel="noreferrer">
          <div className="hidden"><FaClock /></div>
        </a>
        <a 
          href="https://example.com/" target="_blank" rel="noreferrer">
          <div className="hidden"><FaGamepad /></div>
        </a>
      </nav>
      <ul>
        <li>
          <a
            href="https://example.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://example.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://example.com/"
            rel="noreferrer" 
            target="_blank">
            <FaPixiv />
          </a>
        </li>
        <li>
          <a
            href="https://example.com/"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar