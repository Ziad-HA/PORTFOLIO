import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const categories = ['All', 'Frontend', 'UI & UX', 'Tools']
const skills = [
  { name: 'React', level: 'Component-based UI', category: 'Frontend' },
  { name: 'JavaScript', level: 'ES6+', category: 'Frontend' },
  { name: 'Next.js', level: 'React framework', category: 'Frontend' },
  { name: 'HTML & CSS', level: 'Web fundamentals', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 'Utility-first styling', category: 'Frontend' },
  { name: 'Responsive Design', level: 'Mobile-first layouts', category: 'Frontend' },
  { name: 'React Three Fiber', level: '3D web experiences', category: 'Frontend' },
  { name: 'UI Implementation', level: 'Design to code', category: 'UI & UX' },
  { name: 'Figma', level: 'Interface design tool', category: 'UI & UX' },
  { name: 'Git & GitHub', level: 'Version control', category: 'Tools' },
  { name: 'VS Code', level: 'Development environment', category: 'Tools' },
  { name: 'Vercel', level: 'Deployment', category: 'Tools' },
]

const services = [
  { number: '01', title: 'Business websites', copy: 'Responsive websites that explain what you offer and make it easy for customers to take the next step.' },
  { number: '02', title: 'Landing pages', copy: 'Focused pages for a product, service, campaign, or personal brand — built around a clear call to action.' },
  { number: '03', title: 'React interfaces', copy: 'Interactive frontend experiences with reusable components, thoughtful states, and clean navigation.' },
  { number: '04', title: 'UI development', copy: 'Turning an existing design or reference into a polished, responsive implementation.' },
]

export default function Skills() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? skills : skills.filter((skill) => skill.category === active)

  return (
    <section id="skills" className="section skills">
      <div className="section-head">
        <p className="kicker">02 — EXPERTISE</p>
        <h2>WHAT I BRING<br /><span>TO THE BUILD.</span></h2>
        <p className="hint">A focused frontend toolkit for building responsive, polished web experiences.</p>
      </div>

      <div className="skill-tabs" role="tablist" aria-label="Skill categories">
        {categories.map((category) => {
          const count = category === 'All' ? skills.length : skills.filter((skill) => skill.category === category).length
          return <button key={category} type="button" role="tab" aria-selected={active === category} className={active === category ? 'active' : undefined} onClick={() => setActive(category)}>{category}<span>{count}</span></button>
        })}
      </div>

      <motion.ul className="skill-grid" layout>
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((skill) => (
            <motion.li key={skill.name} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 260, damping: 24 }}>
              <span>{skill.name}</span><em>{skill.level}</em>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <div className="services-heading"><p className="kicker">HOW I CAN HELP</p><h3>From first idea to finished interface.</h3></div>
      <div className="service-grid">
        {services.map((service, i) => (
          <motion.article key={service.number} className="service-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -5 }} viewport={{ once: true }} transition={{ delay: i * 0.07, type: 'spring', stiffness: 180, damping: 20 }}>
            <span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
