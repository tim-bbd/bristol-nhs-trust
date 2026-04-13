import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IA } from '../data/ia'

export default function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const topLevel = IA.filter(n => !n.isSearch)

  const getPath = (id) => `/${id}`

  const isActive = (id) => {
    const path = getPath(id)
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <>
      <nav className="top-nav">
        <div className="top-nav-inner">
          <Link to="/" className="nav-logo">Bristol NHS Group</Link>
          <div className="nav-items">
            {topLevel.map(item => (
              <Link
                key={item.id}
                to={getPath(item.id)}
                className={`nav-item${isActive(item.id) ? ' active' : ''}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <button
            className="hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
          {topLevel.map(item => (
            <Link
              key={item.id}
              to={getPath(item.id)}
              className={`nav-item${isActive(item.id) ? ' active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
