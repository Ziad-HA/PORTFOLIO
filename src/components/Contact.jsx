import { motion } from 'motion/react'
import { whatsappMessage, whatsappNumber } from '../data/contact'

export default function Contact() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="contact" className="section contact">
      <motion.div className="contact-panel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="kicker">04 — HAVE A PROJECT IN MIND?</p>
        <h2>LET’S MAKE<br /><span>IT WORK.</span></h2>
        <p className="contact-intro">Tell me what you’re building, what you need, and when you want to launch. I’ll get back to you so we can discuss the right next step.</p>
        <div className="contact-row">
          {whatsappNumber && <a className="btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Start a WhatsApp chat <span aria-hidden="true">↗</span></a>}
          <a className="btn-ghost" href="mailto:zh.nobii@gmail.com?subject=Website%20project%20inquiry">Send an email <span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-socials">
          <a href="https://github.com/Ziad-HA/" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/z-nobii/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="https://instagram.com/zi4dddd" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
          <span>Alexandria, Egypt · Available for selected projects</span>
        </div>
      </motion.div>
      <footer className="footer"><span>© {new Date().getFullYear()} ZIAD HESHAM</span><a href="#top">BACK TO TOP ↑</a></footer>
    </section>
  )
}
