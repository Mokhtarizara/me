import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiBookmark, CiHome, CiMail, CiUser } from 'react-icons/ci'
import { MdWorkOutline } from 'react-icons/md'
import { RiMenu4Line, RiMenu5Fill } from 'react-icons/ri'
import { TbLogicNot } from 'react-icons/tb'
import { FaGithub, FaGraduationCap, FaLinkedin } from 'react-icons/fa'
import { site } from '../content.js'
import '../styles/NavBar.css'

function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={open ? 'navbar is-open' : 'navbar'}>
      <Link className="navbar-brand" to="/#intro" onClick={() => setOpen(false)}>
        {site.name}
      </Link>
      <button
        type="button"
        className="nav-menu"
        aria-expanded={open}
        aria-controls="nav-panel"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <RiMenu4Line /> : <RiMenu5Fill />}
      </button>
      <div id="nav-panel" className="nav-panel">
      <div className="nav-links">
        <a className="nav-icon" href="#intro" aria-label="Home" onClick={() => setOpen(false)}>
          <CiHome />
        </a>
        <a className="nav-icon" href="#about" aria-label="About" onClick={() => setOpen(false)}>
          <CiUser />
        </a>
        <a className="nav-icon" href="#experience" aria-label="Experience" onClick={() => setOpen(false)}>
          <MdWorkOutline />
        </a>
        <a className="nav-icon" href="#education" aria-label="Education" onClick={() => setOpen(false)}>
          <FaGraduationCap />
        </a>
        <a className="nav-icon" href="#courses" aria-label="Course Projects" onClick={() => setOpen(false)}>
          <CiBookmark />
        </a>
        <a className="nav-icon" href="#projects" aria-label="Beyond Coursework" onClick={() => setOpen(false)}>
          <TbLogicNot />
        </a>
      </div>
      <div className="nav-social">
        <a className="nav-icon" href={`mailto:${site.email}`} aria-label="Email">
          <CiMail />
        </a>
        <a
          className="nav-icon"
          href={site.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          className="nav-icon"
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
      </div>
    </nav>
  )
}

export default NavBar
