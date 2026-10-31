import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LiaCopyrightSolid } from 'react-icons/lia'
import { site } from './content.js'
import NavBar from './components/NavBar.jsx'
import Intro from './components/Intro.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import CourseProjects from './components/CourseProjects.jsx'
import Projects from './components/Projects.jsx'
import './styles/App.css'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.getElementById('page-loader')?.remove()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="App">
      <NavBar />
      <div id="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <About />
                <Experience />
                <Education />
                <CourseProjects />
                <Projects />
              </>
            }
          />
        </Routes>
        <footer className="site-footer">
          <p>Built and designed by {site.name}.</p>
          <p>
            All rights reserved. <LiaCopyrightSolid aria-hidden="true" />
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
