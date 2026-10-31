import { useEffect, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { intro, site } from '../content.js'
import '../styles/Intro.css'

const typedName = 'Zahra'

function Intro() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setCount(typedName.length)
      return
    }
    if (count >= typedName.length) return

    const timer = window.setTimeout(() => setCount((current) => current + 1), 280)
    return () => window.clearTimeout(timer)
  }, [count])

  return (
    <section id="intro" className="section">
      <div className="container intro-layout">
        <div className="intro-photo">
          {intro.photo ? (
            <img src={intro.photo} alt={site.name} />
          ) : (
            <div className="intro-photo-slot" role="img" aria-label="Photo" />
          )}
        </div>
        <div className="intro-copy">
          <p className="intro-greeting">{intro.greeting}</p>
          <h1 className="intro-name" aria-label={typedName}>
            <span aria-hidden="true">{typedName.slice(0, count)}</span>
            <span className="intro-caret" aria-hidden="true" />
            <BsThreeDots className="intro-dots" aria-hidden="true" />
          </h1>
          <p className="intro-blurb">{intro.blurb}</p>
        </div>
      </div>
    </section>
  )
}

export default Intro
