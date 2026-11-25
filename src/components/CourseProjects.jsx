import { useState } from 'react'
import { RiCodeSSlashFill } from 'react-icons/ri'
import { courseProjects } from '../content.js'
import SectionLabel from './SectionLabel.jsx'
import '../styles/Tabs.css'
import '../styles/Projects.css'
import '../styles/Courses.css'

function CourseWriteup({ course }) {
  const tech = course.tech?.filter(Boolean).join(', ')

  return (
    <div className="course-project">
      <p className="course-project-name">{course.title}</p>
      {tech ? <p className="course-project-line">{tech}</p> : null}
      {course.place || course.semester ? (
        <p className="course-project-meta">
          {[course.place, course.semester].filter(Boolean).join(' | ')}
        </p>
      ) : null}
      {course.summary ? <p className="course-summary">{course.summary}</p> : null}
      {course.tags?.length ? (
        <p className="course-tags">{course.tags.join(' · ')}</p>
      ) : null}
      {course.bullets?.length ? (
        <ul className="course-notes">
          {course.bullets.map((point) => (
            <li key={point}>
              <RiCodeSSlashFill aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {course.projects?.map((item) => (
        <div className="course-subproject" key={item.title}>
          <p className="course-project-name">{item.title}</p>
          {item.tech ? <p className="course-project-meta">{item.tech}</p> : null}
          <ul>
            {item.bullets.map((point) => (
              <li key={point}>
                <RiCodeSSlashFill aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function CourseProjects() {
  const [active, setActive] = useState(0)
  const course = courseProjects[active]
  const project = course.project
  const hasWriteup = course.summary || course.projects?.length

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
            {hasWriteup ? (
              <CourseWriteup course={course} />
            ) : project ? (
              <div className="course-project">
                <p className="course-project-name">
                  {project.title} – {project.category} | {project.place}
                </p>
                <p className="course-project-meta">
                  {course.code}: {course.title} | {project.time}
                  {project.team ? ` | ${project.team}` : ''}
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
