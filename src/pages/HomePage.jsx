import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TopNav from '../components/TopNav'
import { IA } from '../data/ia'

const POPULAR_SEARCHES = [
  'Parking', 'Visiting Times', 'Cardiology', 'Maternity', 'A&E Waiting Times',
  'Jobs', 'Pharmacy', 'Physiotherapy'
]

// Featured top-level sections — shown as larger cards above the main grid
const FEATURED_IDS = ['patient', 'visiting', 'work', 'concerned']

export default function HomePage() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  const topLevel = IA.filter(n => !n.isSearch)
  const featured = topLevel.filter(n => FEATURED_IDS.includes(n.id))
  const rest = topLevel.filter(n => !FEATURED_IDS.includes(n.id))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <TopNav />

      {/* Hero */}
      <div className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Bristol NHS Group</h1>
          <p className="hero-subtitle">
            University Hospitals Bristol and Weston NHS Foundation Trust &amp; North Bristol Trust
          </p>
          <form onSubmit={handleSearch} className="search-box-large">
            <input
              type="search"
              placeholder="Search for a service, department, or condition..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Search the Bristol NHS Group website"
              autoComplete="off"
            />
            <button type="submit">Search</button>
          </form>
          <div className="popular-searches">
            <span className="popular-label">Popular:</span>
            {POPULAR_SEARCHES.map(s => (
              <button
                key={s}
                className="popular-tag"
                onClick={() => navigate(`/#/search?q=${encodeURIComponent(s)}`)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main style={{ flex: 1 }}>
        <div className="page-content">

          {/* Featured sections — 2 col grid, larger cards */}
          <h2 className="section-heading" style={{ marginTop: 0 }}>How can we help?</h2>
          <div className="featured-grid">
            {featured.map(item => (
              <Link key={item.id} to={`/${item.id}`} className="featured-card">
                <div className="featured-card-label">Explore section</div>
                <div className="featured-card-section">{item.title}</div>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.5, marginTop: 8 }}>
                  {item.description}
                </p>
                <span style={{ position: 'absolute', bottom: 18, right: 18, color: 'rgba(255,255,255,0.6)', fontSize: 20 }}>›</span>
              </Link>
            ))}
          </div>

          {/* Remaining Level 1 sections */}
          <h2 className="section-heading">More from Bristol NHS Group</h2>
          <div className="cards-grid">
            {rest.map(item => (
              <Link key={item.id} to={`/${item.id}`} className="nav-card" aria-label={item.title}>
                <div className="nav-card-title">{item.title}</div>
                <p className="nav-card-desc">{item.description}</p>
                <span className="nav-card-arrow">›</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Hospitals strip */}
        <div className="hospitals-strip">
          <div className="hospitals-strip-inner">
            <h2 className="strip-heading">Our Hospitals</h2>
            <div className="hospitals-grid">
              {[
                { name: 'Bristol Royal Infirmary', abbr: 'BRI', desc: 'City centre specialist hospital', path: '/patient/hospital-info/bri' },
                { name: 'Southmead Hospital', abbr: 'NBT', desc: 'North Bristol major hospital', path: '/patient/hospital-info/nbt' },
                { name: 'Weston General Hospital', abbr: 'Weston', desc: 'North Somerset district general', path: '/patient/hospital-info/weston' },
                { name: "Bristol Children's Hospital", abbr: 'BCH', desc: 'Specialist paediatric services', path: '/young-people' },
              ].map(h => (
                <Link key={h.abbr} to={h.path} className="hospital-card">
                  <div className="hospital-card-abbr">{h.abbr}</div>
                  <div className="hospital-card-name">{h.name}</div>
                  <div className="hospital-card-desc">{h.desc}</div>
                  <div className="hospital-card-link">Visit page ›</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-logo">Bristol NHS Group</div>
          <div className="footer-links">
            <a href="#" className="footer-link">Accessibility</a>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Freedom of Information</a>
            <a href="#" className="footer-link">Cookie Policy</a>
          </div>
          <div className="footer-small">© 2024 Bristol NHS Group. Prototype wireframe — not a real website.</div>
        </div>
      </footer>
    </div>
  )
}
