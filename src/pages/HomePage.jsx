import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TopNav from '../components/TopNav'
import { IA } from '../data/ia'

const FEATURED = [
  { id: 'patient', highlight: "Find a Service", path: '/patient/find-service' },
  { id: 'visiting', highlight: "Visiting Hours & Info", path: '/visiting' },
  { id: 'concerned', highlight: "Make a Complaint", path: '/concerned/complaint' },
  { id: 'work', highlight: "Job Vacancies", path: '/work/vacancies' },
]

const POPULAR_SEARCHES = [
  'Outpatients', 'Parking', 'Visiting hours', 'Maternity', 'A&E',
  'Appointments', 'Pharmacy', 'Physiotherapy'
]

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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <TopNav />

      {/* Hero */}
      <div className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Bristol NHS Group</h1>
          <p className="hero-subtitle">University Hospitals Bristol and Weston NHS Foundation Trust</p>
          <form onSubmit={handleSearch} className="search-box-large">
            <input
              type="search"
              placeholder="Search for a service, department, or condition..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Search"
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
                onClick={() => navigate(`/search?q=${encodeURIComponent(s)}`)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main style={{ flex: 1 }}>
        {/* Featured quick links */}
        <div className="page-content">
          <div className="featured-grid">
            {FEATURED.map(f => {
              const node = topLevel.find(n => n.id === f.id)
              return (
                <Link key={f.id} to={f.path} className="featured-card">
                  <div className="featured-card-label">{f.highlight}</div>
                  <div className="featured-card-section">{node?.title}</div>
                </Link>
              )
            })}
          </div>

          {/* Main nav cards */}
          <h2 className="section-heading">How can we help?</h2>
          <div className="cards-grid">
            {topLevel.map(item => (
              <Link key={item.id} to={`/${item.id}`} className="nav-card">
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
                { name: 'Bristol Royal Infirmary', short: 'BRI', id: 'patient/hospital-info' },
                { name: 'Southmead Hospital', short: 'Southmead', id: 'patient/hospital-info' },
                { name: 'Weston General Hospital', short: 'Weston', id: 'patient/hospital-info' },
                { name: "Bristol Children's Hospital", short: 'BCH', id: 'young-people' },
              ].map(h => (
                <Link key={h.short} to={`/${h.id}`} className="hospital-card">
                  <div className="hospital-card-name">{h.name}</div>
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
