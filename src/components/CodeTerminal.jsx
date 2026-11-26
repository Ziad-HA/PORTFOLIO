import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

const K = 'syntax-keyword'
const D = 'syntax-def'
const P = 'syntax-prop'
const S = 'syntax-str'

// each line is a list of [text, className] pieces
const code = [
  [['const ', K], ['developer', D], [' = {']],
  [['  '], ['name', P], [': '], ["'Nobi'", S], [',']],
  [['  '], ['focus', P], [': '], ["'Web Development'", S], [',']],
  [['  '], ['stack', P], [': ['], ["'React'", S], [', '], ["'Next.js'", S], [', '], ["'JavaScript'", S], ['],']],
  [['  '], ['principles', P], [': ['], ["'Clarity'", S], [', '], ["'Performance'", S], [', '], ["'Usability'", S], ['],']],
  [['  '], ['basedIn', P], [': '], ["'Alexandria, Egypt'", S]],
  [['};']],
]

const plain = code.map((line) => line.map(([text]) => text).join(''))

// one frame = what the screen shows after a key press
function buildFrames() {
  const frames = [{ line: 0, col: 0, typo: '', wait: 500 }]
  plain.forEach((text, line) => {
    // indentation appears at once, like editor auto-indent
    const indent = text.length - text.trimStart().length
    for (let col = indent + 1; col <= text.length; col += 1) {
      const char = text[col - 1]
      const wait = char === ' ' ? 60 : 18 + ((col * 37 + line * 53) % 38)
      frames.push({ line, col, typo: '', wait })

      // one believable slip on "focus": type a wrong key, then backspace
      if (line === 2 && col === indent + 3) {
        frames.push({ line, col, typo: 'v', wait: 110 })
        frames.push({ line, col, typo: '', wait: 380 })
      }
    }
    if (line < plain.length - 1) {
      const next = plain[line + 1]
      frames.push({ line: line + 1, col: next.length - next.trimStart().length, typo: '', wait: 200 })
    }
  })
  return frames
}

const frames = buildFrames()

function renderRange(pieces, from, to) {
  let start = 0
  return pieces.map(([text, className], i) => {
    const part = text.slice(Math.max(0, from - start), Math.max(0, to - start))
    start += text.length
    return part ? <span key={i} className={className}>{part}</span> : null
  })
}

export default function CodeTerminal() {
  const box = useRef(null)
  const inView = useInView(box, { amount: 0.75, once: true })
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const last = frames.length - 1
  const frame = frames[reduceMotion ? last : index]
  const done = reduceMotion || index >= last

  useEffect(() => {
    if (!inView || done) return undefined
    const id = setTimeout(() => setIndex(index + 1), frames[index + 1].wait)
    return () => clearTimeout(id)
  }, [inView, done, index])

  return (
    <div ref={box}>
      <div className="terminal-body" role="img" aria-label={plain.join(' ')}>
        {code.map((pieces, i) => {
          const current = i === frame.line
          const col = i < frame.line ? plain[i].length : current ? frame.col : 0
          return (
            <div key={plain[i]} className={`code-line${current ? ' is-current' : ''}`}>
              <span className="code-number">{i + 1}</span>
              <code>
                {renderRange(pieces, 0, col)}
                {current && frame.typo}
                {current && <span className={`code-caret${done ? ' is-idle' : ''}`} />}
                {/* untyped text stays invisible so the card never changes size */}
                <span className="code-rest">{plain[i].slice(col)}</span>
              </code>
            </div>
          )
        })}
      </div>
      <div className="code-status" aria-hidden="true">
        <span className="code-state">{done ? '✓ saved' : '● typing…'}</span>
        <span>Ln {frame.line + 1}, Col {frame.col + frame.typo.length + 1}</span>
        <span>UTF-8</span>
        <span>TypeScript</span>
      </div>
    </div>
  )
}
