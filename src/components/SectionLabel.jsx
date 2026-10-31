import { HiHashtag } from 'react-icons/hi2'
import { LuEqual } from 'react-icons/lu'
import '../styles/SectionLabel.css'

function SectionLabel({ label, icon: Icon, mark }) {
  return (
    <p className="section-label">
      <HiHashtag className="section-label-icon" aria-hidden="true" />
      {Icon ? <Icon className="section-label-tilde" aria-hidden="true" /> : null}
      {mark ? <span>{mark}</span> : null}
      {mark ? <LuEqual className="section-label-equals" aria-hidden="true" /> : null}
      {label}
    </p>
  )
}

export default SectionLabel
