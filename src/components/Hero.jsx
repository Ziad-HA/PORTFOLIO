import { motion } from 'motion/react'
import HeroScene from './HeroScene'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-canvas"><HeroScene /></div>
      <div className="hero-vignette" />

      <div className="hero-content">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            FRONTEND DEVELOPER · REACT & NEXT.JS
          </motion.p>

          <h1 className="hero-title" aria-label="Ziad Hesham, Frontend Developer">
            <span className="hero-name" aria-hidden="true">
              {'ZIAD'.split('').map((letter, i) => (
                <span className="hero-letter" key={letter + i}>
                  <motion.span initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: 0.25 + i * 0.09, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                    {letter}
                  </motion.span>
                </span>
              ))}
            </span>
            <motion.span className="hero-role-line" aria-hidden="true" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.75, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <span className="outline">Frontend</span> Developer
              <motion.i className="hero-underline" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} />
            </motion.span>
          </h1>

          <motion.p className="lede" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            I design and build responsive websites and digital experiences for brands and businesses — with a focus on thoughtful UI, smooth interactions, and reliable frontend code.
          </motion.p>

          <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
            <a className="btn-primary" href="#work">Explore my work <span aria-hidden="true">↗</span></a>
            <a className="btn-ghost" href="#contact">Start a project</a>
          </motion.div>
          <div className="hero-proof" aria-label="Core focus">
            <span>React</span><span>Next.js</span><span>Responsive UI</span><span>Interaction design</span>
          </div>
        </div>

        <motion.div className="hero-terminal" initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <div className="terminal-header">
            <div className="terminal-dots"><span className="dot red" /><span className="dot yellow" /><span className="dot green" /></div>
            <div className="terminal-title">ziad.profile.ts</div>
            <span className="terminal-badge">AVAILABLE</span>
          </div>
          <div className="terminal-body">
            <pre><code>
              <span className="syntax-keyword">const</span> <span className="syntax-def">developer</span> = {'{'}{'\n'}
              {'  '}<span className="syntax-prop">name</span>: <span className="syntax-str">'Ziad Hesham'</span>,{'\n'}
              {'  '}<span className="syntax-prop">focus</span>: <span className="syntax-str">'Frontend Development'</span>,{'\n'}
              {'  '}<span className="syntax-prop">stack</span>: [<span className="syntax-str">'React'</span>, <span className="syntax-str">'Next.js'</span>, <span className="syntax-str">'JavaScript'</span>],{'\n'}
              {'  '}<span className="syntax-prop">principles</span>: [<span className="syntax-str">'Clarity'</span>, <span className="syntax-str">'Performance'</span>, <span className="syntax-str">'Usability'</span>],{'\n'}
              {'  '}<span className="syntax-prop">basedIn</span>: <span className="syntax-str">'Alexandria, Egypt'</span>{'\n'}
              {'};'}
            </code></pre>
          </div>
          <div className="terminal-footer"><span className="terminal-status-dot" /><span>Thoughtful interfaces. Built for real screens.</span></div>
        </motion.div>
      </div>

      <div className="hero-meta"><span className="pulse">OPEN TO SELECT PROJECTS</span><a href="#about">SCROLL TO EXPLORE ↓</a></div>
    </section>
  )
}
