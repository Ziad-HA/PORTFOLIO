import { motion } from 'motion/react'

const strengths = ['React-focused', 'Design-aware', 'End-to-end delivery']

export default function About() {
  return (
    <section id="about" className="section about">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
        <p className="kicker">01 — ABOUT</p>
        <h2 className="about-title">DESIGN MINDED. <span>DEVELOPMENT LED.</span></h2>
        <p className="about-text">I’m Nobi, a web developer in Alexandria, Egypt. I build responsive, interactive websites with React.</p>
        <ul className="about-chips">
          {strengths.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </motion.div>
    </section>
  )
}
