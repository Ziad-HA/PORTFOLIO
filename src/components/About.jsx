import { motion } from 'motion/react'

const strengths = [
  { number: '01', title: 'Frontend first', description: 'React-focused development with reusable components, clean structure, and maintainable interfaces.' },
  { number: '02', title: 'Design-aware', description: 'Careful attention to layout, typography, spacing, responsive behavior, and interaction details.' },
  { number: '03', title: 'End-to-end delivery', description: 'From translating an idea into a page structure to deployment and final responsive checks.' },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-head">
        <p className="kicker">01 — ABOUT</p>
        <h2>DESIGN MINDED.<br /><span>DEVELOPMENT LED.</span></h2>
      </div>

      <div className="about-grid">
        <motion.div className="about-lead" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }}>
          <p>
            I’m Ziad, a frontend developer based in Alexandria, Egypt. I build modern websites that bring strong visual direction and practical functionality together.
          </p>
          <p className="about-secondary">
            My work is centered on React, responsive interfaces, and interactive experiences. I care about the details users notice — and the structure developers have to maintain.
          </p>
          <a className="text-link" href="#work">See how I put that into practice <span aria-hidden="true">↗</span></a>
        </motion.div>

        <div className="about-stats">
          {strengths.map((item, index) => (
            <motion.article className="about-item" key={item.number} initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.12 }}>
              <span className="about-number">{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
