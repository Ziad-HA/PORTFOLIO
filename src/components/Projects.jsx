import { motion } from 'motion/react'
import { projects } from '../data/projects'

const totalProjects = projects.length

export default function Projects() {
  return (
    <section id="work" className="section work">
      <div className="section-head">
        <p className="kicker">02 — SELECTED WORK</p>
        <h2>BUILT TO BE<br /><span>EXPERIENCED.</span></h2>
        <p className="hint">A selection of frontend projects exploring e-commerce and brand experiences.</p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article key={project.number} className="project-card featured-project" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.08, duration: 0.65 }} whileHover={{ y: -5 }}>
            <a className="project-media" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live website`}>
              <img src={project.image} alt={project.alt} loading="lazy" decoding="async" width="1200" height="760" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              <div className="project-image-overlay"><span>{project.number} / SELECTED WORK</span><span>VIEW LIVE ↗</span></div>
              <div className="project-scan" />
            </a>

            <div className="project-body">
              <div className="project-top"><span>{project.category}</span><span>{project.number} / 0{totalProjects}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <details className="project-details">
                <summary>Project notes <span aria-hidden="true">＋</span></summary>
                <div className="project-details-content">
                  <div><h4>Focus</h4><p>{project.focus}</p></div>
                  <div><h4>Implementation</h4><p>{project.implementation}</p></div>
                  <div><h4>Key consideration</h4><p>{project.consideration}</p></div>
                  {project.highlights && <ul className="project-highlights">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>}
                </div>
              </details>

              <ul className="tags">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noopener noreferrer">{project.liveLabel ?? 'LIVE DEMO'} <span>↗</span></a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">SOURCE CODE <span>↗</span></a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
