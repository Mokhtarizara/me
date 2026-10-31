import { useState } from 'react'
import { experience } from '../content.js'
import SectionLabel from './SectionLabel.jsx'
import '../styles/Tabs.css'
import '../styles/Experience.css'

function Experience() {
  const [active, setActive] = useState(0)
  const job = experience.items[active]

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionLabel label="Experience" />
        <div className="tab-row">
          <div className="tabs" role="tablist" aria-label="Jobs">
            {experience.items.map((item, i) => (
              <button
                key={`${item.role}-${item.place}`}
                type="button"
                role="tab"
                id={`job-tab-${i}`}
                aria-selected={i === active}
                aria-controls="job-panel"
                className={i === active ? 'is-active' : undefined}
                onClick={() => setActive(i)}
              >
                {item.role}
              </button>
            ))}
          </div>
          <div
            className="tab-panel"
            role="tabpanel"
            id="job-panel"
            aria-labelledby={`job-tab-${active}`}
          >
            <p className="job-title">{job.title || job.role}</p>
            <h3>{job.place}</h3>
            <p className="tab-time">{job.time}</p>
            {job.desc ? <p>{job.desc}</p> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
