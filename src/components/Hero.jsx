import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import HeroScene from './HeroScene'
import CodeTerminal from './CodeTerminal'
import './HeroMotion.css'

const tags = ['React', 'Next.js', 'Responsive UI', 'Interaction design']
const symbols = ['</>', '{ }', '=>', '( )', ';', '[ ]', '//', '&&']

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  // the name drifts a little slower than the page while scrolling away
  const nameShift = useTransform(scrollY, [0, 600], [0, reduceMotion ? 0 : 60])

  return (
    <section id="top" className="hero">
      <div className="hero-canvas"><HeroScene /></div>
      <div className="hero-vignette" />
      <div className="hero-symbols" aria-hidden="true">
        {symbols.map((symbol) => <span key={symbol}>{symbol}</span>)}
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            WEB DEVELOPER · REACT & NEXT.JS
          </motion.p>

          <h1 className="hero-title" aria-label="Nobi, Web Developer">
            <motion.span className="hero-name" aria-hidden="true" style={{ y: nameShift }}>
              {'NOBI'.split('').map((letter, i) => (
                <motion.span className="hero-letter" key={letter + i} whileTap={{ y: -12, scale: 1.08 }}>
                  <motion.span style={{ '--i': i }} initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.25 + i * 0.09, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                    {letter}
                  </motion.span>
                </motion.span>
              ))}
            </motion.span>
            <motion.span className="hero-role-line" aria-hidden="true" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.75, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span className="outline">Web</span> Developer
              <motion.i className="hero-underline" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} />
            </motion.span>
          </h1>

          <motion.p className="lede" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            I design and build responsive websites and digital experiences for brands and businesses — with a focus on thoughtful UI, smooth interactions, and reliable frontend code.
          </motion.p>

          <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
            <a className="btn-primary" href="#work">Explore my{' '}<span className="btn-work">work</span></a>
            <a className="btn-ghost" href="#contact">Start a project</a>
          </motion.div>
          <ul className="hero-proof" aria-label="Core focus">
            {tags.map((tag, i) => (
              <motion.li key={tag} initial={{ opacity: 0, scale: 0.6, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.12, type: 'spring', stiffness: 260, damping: 18 }}>
                <span style={{ '--i': i }}>{tag}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div className="hero-terminal" initial={{ opacity: 0, y: 60, scale: 0.94 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <div className="terminal-header">
            <div className="terminal-dots"><span className="dot red" /><span className="dot yellow" /><span className="dot green" /></div>
            <div className="terminal-title">nobi.profile.ts</div>
            <span className="terminal-badge">AVAILABLE</span>
          </div>
          <CodeTerminal />
          <div className="terminal-footer"><span className="terminal-status-dot" /><span>Thoughtful interfaces. Built for real screens.</span></div>
        </motion.div>
      </div>

      <div className="hero-meta"><span className="pulse">OPEN TO SELECT PROJECTS</span><a href="#about">SCROLL TO EXPLORE</a></div>
    </section>
  )
}