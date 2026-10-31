import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowUpRight, Asterisk, Code2,
  Github, Mail, MessageCircle, Menu, X, GraduationCap, Layers3, Monitor,
  Workflow
} from 'lucide-react'

type Project = {
  number: string
  name: string
  type: string
  summary: string
  status: string
  tags: string[]
  visual: 'raylyn' | 'stock' | 'lab'
  details: string
}

const projects: Project[] = [
  {
    number: '01',
    name: 'RayLyn Shop Desk',
    type: 'Desktop application · Inventory operations',
    summary: 'An offline-first shop management experience for sales, stock receiving and daily reporting, with a remote view for the administrator.',
    status: 'In development',
    tags: ['Tauri', 'React', 'TypeScript', 'SQLite'],
    visual: 'raylyn',
    details: 'Designed around the realities of a busy shop: multiple salespeople, cash and credit transactions, controlled stock receiving, printable daily reports and automatic synchronisation when connectivity returns.'
  },
  {
    number: '02',
    name: 'Stock & Cash Control',
    type: 'Business software · Inventory and accountability',
    summary: 'A practical inventory and cash-control concept for wholesalers, distributors and retail businesses.',
    status: 'Concept / product design',
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    visual: 'stock',
    details: 'The core model connects expected stock, physical counts, sales, collections and outstanding balances so owners can understand what moved, what was collected and where variances occurred.'
  },
  {
    number: '03',
    name: 'Digital tools & experiments',
    type: 'Exploration · Engineering practice',
    summary: 'A growing collection of experiments in interfaces, workflow automation, backend systems and developer tooling.',
    status: 'Ongoing',
    tags: ['Web technologies', 'Backend', 'Systems'],
    visual: 'lab',
    details: 'A space for testing ideas, learning new technologies and turning small technical explorations into useful, maintainable software.'
  },
]

const skills = [
  { label: 'Frontend', items: 'React · TypeScript · JavaScript · HTML · CSS' },
  { label: 'Desktop', items: 'Tauri · Rust fundamentals · SQLite' },
  { label: 'Backend & data', items: 'Supabase · PostgreSQL · APIs' },
  { label: 'Workflow', items: 'Git · GitHub · VS Code · Responsive UI' },
]

function ProjectVisual({ kind }: { kind: Project['visual'] }) {
  if (kind === 'raylyn') return (
    <div className="visual-window raylyn-window">
      <div className="window-sidebar">
        <div className="mini-brand"><span className="mini-orb" /> raylyn</div>
        {['Overview', 'Products', 'Sales', 'Stock', 'Reports'].map((x, i) => <div className={`side-line ${i === 1 ? 'selected' : ''}`} key={x}><i />{x}</div>)}
      </div>
      <div className="window-content">
        <div className="window-top"><b>Products</b><span>＋ Add product</span></div>
        <div className="fake-search">⌕ &nbsp; Search inventory</div>
        <div className="fake-table">
          <div className="fake-row header"><span>Product</span><span>Stock</span><span>Price</span></div>
          {['Wireless mouse', 'USB-C cable', 'Laptop sleeve', 'Keyboard'].map((x, i) => <div className="fake-row" key={x}><span><i className={`product-dot dot-${i}`} />{x}</span><span>{[32, 60, 18, 24][i]}</span><span>GH₵ {[80, 45, 120, 150][i]}.00</span></div>)}
        </div>
      </div>
    </div>
  )
  if (kind === 'stock') return (
    <div className="visual-window stock-window">
      <div className="stock-head"><span className="stock-mark">S</span><b>Stock control</b><span className="stock-avatar">PO</span></div>
      <div className="stock-cards"><div><small>Expected stock</small><b>1,248</b></div><div><small>Sales today</small><b>GH₵ 2,430</b></div><div><small>Cash received</small><b>GH₵ 1,860</b></div></div>
      <div className="stock-title">Recent activity <span>View all ↗</span></div>
      {['Stock received · 24 items', 'Sale recorded · GH₵ 480', 'Count variance · 2 items'].map((x, i) => <div className="activity" key={x}><i className={`activity-dot a-${i}`} /><span>{x}</span><small>{['09:42', '10:18', '11:06'][i]}</small></div>)}
      <div className="chart-bars">{[34, 58, 43, 78, 54, 91, 67, 83, 49, 72, 94, 62].map((v, i) => <i style={{ height: `${v}%` }} key={i} />)}</div>
    </div>
  )
  return (
    <div className="lab-visual">
      <div className="lab-ring ring-one" /><div className="lab-ring ring-two" />
      <div className="lab-code"><span>01 / EXPERIMENT</span><b>Ideas into<br/>interfaces<span className="cursor">_</span></b><small>BUILD · TEST · REFINE</small></div>
      <div className="lab-stamp">FIELD<br/>NOTES<br/><strong>PO—03</strong></div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All work')
  const filters = ['All work', 'Desktop', 'Business systems']
  const visibleProjects = projects.filter((p) => {
    if (activeFilter === 'Desktop') return p.visual === 'raylyn'
    if (activeFilter === 'Business systems') return p.visual === 'stock'
    return true
  })

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <div className="grain" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Prince Owusu home">P<span>O</span><i>.</i></a>
        <nav id="primary-navigation" className={menuOpen ? 'nav-open' : ''} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a className="nav-contact" href="mailto:po95386@gmail.com">Let's talk <ArrowUpRight size={14}/></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-controls="primary-navigation" aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="eyebrow"><span className="eyebrow-dot" /> SOFTWARE DEVELOPER <span className="eyebrow-slash">/</span> KUMASI, GHANA</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .1 }}>I make software<br/>make <em>sense.</em></motion.h1>
          <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3, duration: .8 }}>I'm Prince Owusu — a software developer with a background in IT Education. I turn everyday friction and complex workflows into thoughtful, dependable digital tools.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>
            <a href="#work" className="text-link">Explore selected work <ArrowDownRight size={17}/></a>
            <a href="mailto:po95386@gmail.com" className="circle-link" aria-label="Email Prince"><ArrowUpRight size={18}/></a>
          </motion.div>
          <div className="hero-meta"><span>INDEPENDENT DEVELOPER</span><span>GHANA · GMT</span><span>AVAILABLE FOR SELECT PROJECTS</span></div>
        </div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .2 }}>
          <div className="art-index">THOUGHTFUL<br/>BY DESIGN <Asterisk size={16}/></div>
          <div className="art-orbit orbit-a" /><div className="art-orbit orbit-b" />
          <div className="art-disc" />
          <div className="art-panel panel-back"><span>01</span><b>STRUCTURE</b><small>Clarity before code.</small></div>
          <div className="art-panel panel-front"><div className="panel-bar"><i/><i/><i/><span>prince.owusu / work</span></div><div className="panel-lines"><i/><i/><i/><i/><i/></div><div className="panel-foot"><Code2 size={15}/> BUILD WITH INTENT</div></div>
          <div className="art-caption"><span>FIG. 001</span><span>IDEAS, MADE USEFUL.</span></div>
          <div className="art-coordinate">06° 41' N<br/>01° 37' W</div>
        </motion.div>
      </section>

      <section className="ticker" aria-label="Areas of interest"><div className="ticker-track">{['SOFTWARE ENGINEERING','PRODUCT THINKING','BUSINESS WORKFLOWS','SYSTEMS & INTERFACES','SOFTWARE ENGINEERING','PRODUCT THINKING','BUSINESS WORKFLOWS'].map((x,i)=><span key={i}>{x}<Asterisk size={13}/></span>)}</div></section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div><span className="section-kicker">01 — SELECTED WORK</span><h2>Things I'm <em>building.</em></h2></div>
          <p>Practical software, shaped around real needs.<br/>A selection of current work and explorations.</p>
        </div>
        <div className="filter-row">{filters.map(f=><button key={f} onClick={()=>setActiveFilter(f)} className={activeFilter===f?'filter active':'filter'}>{f}<span>{f=== 'All work' ? '03' : '01'}</span></button>)}</div>
        <div className="project-grid">
          {visibleProjects.map((p) => <motion.article layout key={p.number} className={`project-card project-${p.visual}`}>
            <div className="project-visual"><ProjectVisual kind={p.visual}/><span className="project-number">{p.number} / 03</span></div>
            <div className="project-info">
              <div className="project-title-row"><div><span className="project-type">{p.type}</span><h3>{p.name}</h3></div><span className="status">{p.status}</span></div>
              <p>{p.summary}</p>
              <div className="project-bottom"><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><button className="details-button" onClick={()=>document.getElementById(`details-${p.number}`)?.classList.toggle('expanded')}>Project notes <ArrowUpRight size={14}/></button></div>
              <div className="project-details" id={`details-${p.number}`}>{p.details}</div>
            </div>
          </motion.article>)}
        </div>
        <div className="github-strip"><div><Github size={19}/><span>More experiments and code live on GitHub.</span></div><a href="https://github.com/KaySea08?tab=repositories" target="_blank" rel="noreferrer">Visit GitHub <ArrowUpRight size={15}/></a></div>
      </section>

      <section className="about-section" id="about">
        <div className="section-wrap about-grid">
          <div className="about-label"><span className="section-kicker">02 — A LITTLE ABOUT ME</span><h2>Curious by<br/><em>nature.</em></h2><div className="about-symbol"><Asterisk size={74} strokeWidth={.8}/></div></div>
          <div className="about-content">
            <p className="about-lead">I care about the space between a problem and a useful solution.</p>
            <p>My route into software is grounded in Information Technology Education. That foundation shaped how I approach technology: understand the people, make the complex easier to navigate, and build things that work beyond the demo.</p>
            <p>I'm interested in software that improves how people run businesses, manage information and get everyday work done — from desktop tools to connected web systems.</p>
            <div className="education-card"><div className="edu-icon"><GraduationCap size={25}/></div><div><span>EDUCATION</span><h3>BSc. Information Technology Education</h3><p>Akenten Appiah-Menka University of Skills Training and Entrepreneurial Development (AAMUSTED)</p></div><ArrowUpRight className="edu-arrow" size={18}/></div>
          </div>
        </div>
      </section>

      <section className="approach-section section-wrap" id="approach">
        <div className="section-heading"><div><span className="section-kicker">03 — HOW I THINK</span><h2>Good work starts<br/>with <em>good questions.</em></h2></div><p>My working principles are simple.<br/>The details are where the quality lives.</p></div>
        <div className="principles">
          <div><span>01</span><Workflow/><h3>Understand the workflow</h3><p>Start with the real process, its constraints and the people using it.</p></div>
          <div><span>02</span><Layers3/><h3>Keep systems clear</h3><p>Choose structure and tools that make the product dependable and maintainable.</p></div>
          <div><span>03</span><Monitor/><h3>Design for real use</h3><p>Make interfaces useful, responsive and considerate of everyday conditions.</p></div>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-wrap skills-wrap"><div><span className="section-kicker">04 — TOOLKIT</span><h2>Tools of the <em>trade.</em></h2></div><div className="skill-list">{skills.map((s,i)=><div className="skill-row" key={s.label}><span>0{i+1}</span><b>{s.label}</b><p>{s.items}</p><ArrowUpRight size={16}/></div>)}</div></div>
      </section>

      <footer className="footer section-wrap" id="contact">
        <div className="footer-top">
          <span className="section-kicker">05 — HAVE SOMETHING IN MIND?</span>
          <h2>Let's make<br/><em>it useful.</em></h2>
          <div className="contact-details">
            <div><span className="contact-label">PHONE</span><p>+233 54 342 4208</p></div>
            <a href="https://wa.me/233543424208" target="_blank" rel="noreferrer" aria-label="Message Prince on WhatsApp"><MessageCircle size={15}/> WhatsApp</a>
          </div>
          <a className="email-cta" href="mailto:po95386@gmail.com">Start a conversation <ArrowUpRight size={18}/></a>
        </div>
        <div className="footer-bottom"><a className="wordmark footer-mark" href="#top">P<span>O</span><i>.</i></a><span>PRINCE OWUSU · SOFTWARE DEVELOPER</span><div className="footer-links"><a href="mailto:po95386@gmail.com"><Mail size={14}/> Email</a><a href="https://wa.me/233543424208" target="_blank" rel="noreferrer"><MessageCircle size={14}/> WhatsApp</a><a href="https://github.com/KaySea08?tab=repositories" target="_blank" rel="noreferrer"><Github size={14}/> GitHub</a></div><a href="#top" className="back-top">BACK TO TOP ↑</a></div>
        <div className="footer-note"><span>DESIGNED WITH INTENT. BUILT WITH CURIOSITY.</span><span>© {new Date().getFullYear()} PRINCE OWUSU</span></div>
      </footer>
    </main>
  )
}

export default App
