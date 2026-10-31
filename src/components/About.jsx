import { about } from '../content.js'
import SectionLabel from './SectionLabel.jsx'
import '../styles/About.css'

const highlights = ['software engineer']

const bearWords = [
  { word: 'Go', className: 'bear-blue' },
  { word: 'Bears', className: 'bear-gold' },
  { word: 'forever', className: 'bear-white' },
]

function highlightText(text) {
  return text.split(new RegExp(`(${highlights.join('|')})`, 'g')).map((part, i) =>
    highlights.includes(part) ? (
      <span key={i} className="about-highlight">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

function withGoBears(text) {
  const phrase = 'Go Bears forever'
  const index = text.indexOf(phrase)
  if (index === -1) return highlightText(text)

  return (
    <>
      {highlightText(text.slice(0, index))}
      <img className="cal-logo" src="/photos/cal-logo.png" alt="" />
      <span className="go-bears">
        {bearWords.map(({ word, className }, i) => (
          <span key={word} className={className}>
            {word}
            {i < bearWords.length - 1 ? ' ' : null}
          </span>
        ))}
      </span>
      {text.slice(index + phrase.length)}
    </>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionLabel label="About" />
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{withGoBears(paragraph)}</p>
        ))}
      </div>
    </section>
  )
}

export default About
