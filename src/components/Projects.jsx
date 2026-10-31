import { useState } from 'react'
import { PiTildeThin } from 'react-icons/pi'
import { RiCodeSSlashFill } from 'react-icons/ri'
import { softwareProjects } from '../content.js'
import SectionLabel from './SectionLabel.jsx'
import '../styles/Tabs.css'
import '../styles/Projects.css'

function Projects() {
  const [active, setActive] = useState(0)
  const project = softwareProjects[active]

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionLabel mark="P" label="Beyond Coursework" icon={PiTildeThin} />
        <div className="tab-row">
          <div className="tabs" role="tablist" aria-label="Beyond Coursework">
            {softwareProjects.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`project-tab-${i}`}
                aria-selected={i === active}
                aria-controls="project-panel"
                className={i === active ? 'is-active' : undefined}
                onClick={() => setActive(i)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <article
            className="tab-panel"
            role="tabpanel"
            id="project-panel"
            aria-labelledby={`project-tab-${active}`}
          >
            <div className="course-project">
              <p className="course-project-name">{project.title}</p>
              <p className="course-project-line">
                {project.category} | {project.place}
              </p>
              <p className="course-project-meta">{project.time}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>
                    <RiCodeSSlashFill aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            {project.link ? (
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label="KITCHENos on Devpost"
              >
                Devpost
              </a>
            ) : null}
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects
