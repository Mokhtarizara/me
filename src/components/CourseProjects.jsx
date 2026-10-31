import { useState } from 'react'
import { RiCodeSSlashFill } from 'react-icons/ri'
import { courseProjects } from '../content.js'
import SectionLabel from './SectionLabel.jsx'
import '../styles/Tabs.css'
import '../styles/Projects.css'
import '../styles/Courses.css'

function CourseProjects() {
  const [active, setActive] = useState(0)
  const course = courseProjects[active]
  const project = course.project

  return (
    <section id="courses" className="section">
      <div className="container">
        <SectionLabel mark="P" label="Course Projects" />
        <div className="tab-row">
          <div className="tabs" role="tablist" aria-label="Course Projects">
            {courseProjects.map((item, i) => (
              <button
                key={item.code}
                type="button"
                role="tab"
                id={`course-tab-${i}`}
                aria-selected={i === active}
                aria-controls="course-panel"
                className={i === active ? 'is-active' : undefined}
                onClick={() => setActive(i)}
              >
                {item.code}
              </button>
            ))}
          </div>
          <article
            className="tab-panel"
            role="tabpanel"
            id="course-panel"
            aria-labelledby={`course-tab-${active}`}
          >
            {project ? (
              <div className="course-project">
                <p className="course-project-name">{project.title}</p>
                <p className="course-project-line">
                  {project.category} | {project.place}
                </p>
                <p className="course-project-meta">
                  {course.title} | {project.time}
                </p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>
                      <RiCodeSSlashFill aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <>
                <h3>{course.title}</h3>
                <p className="course-place">UC Berkeley</p>
              </>
            )}
          </article>
        </div>
      </div>
    </section>
  )
}

export default CourseProjects
