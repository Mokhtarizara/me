import { useState } from 'react'
import { education } from '../content.js'
import SectionLabel from './SectionLabel.jsx'
import '../styles/Tabs.css'
import '../styles/Education.css'

function Education() {
  const [active, setActive] = useState(0)
  const school = education.items[active]

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionLabel label="Education" />
        <div className="tab-row">
          <div className="tabs" role="tablist" aria-label="Schools">
            {education.items.map((item, i) => (
              <button
                key={item.school}
                type="button"
                role="tab"
                id={`edu-tab-${i}`}
                aria-selected={i === active}
                aria-controls="edu-panel"
                className={i === active ? 'is-active' : undefined}
                onClick={() => setActive(i)}
              >
                {item.degree}
              </button>
            ))}
          </div>
          <div
            className="tab-panel"
            role="tabpanel"
            id="edu-panel"
            aria-labelledby={`edu-tab-${active}`}
          >
            <h3>{school.school}</h3>
            <p className="tab-time">{school.time}</p>
            <p>Grade: {school.grade}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
