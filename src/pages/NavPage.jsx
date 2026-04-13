import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { findNode } from '../data/ia'

export default function NavPage() {
  const params = useParams()
  // Reconstruct path segments from route params
  // Route is /:l1, /:l1/:l2, /:l1/:l2/:l3
  const segments = [params.l1, params.l2, params.l3].filter(Boolean)
  const [hospital, setHospital] = useState('All')

  const node = findNode(segments)

  if (!node) {
    return (
      <PageLayout pathSegments={segments}>
        <div className="page-content">
          <h1 className="page-heading">Page Not Found</h1>
          <p className="page-subheading">This section could not be found.</p>
          <Link to="/" style={{ color: '#005EB8' }}>← Return home</Link>
        </div>
      </PageLayout>
    )
  }

  // Handoff page — links to NHS England
  if (node.handoff) {
    return (
      <PageLayout pathSegments={segments}>
        <div className="page-content">
          <h1 className="page-heading">{node.title}</h1>
          <p className="page-subheading">{node.description}</p>
          <div className="handoff-card">
            <div className="handoff-icon">↗</div>
            <div>
              <div className="handoff-title">This page is provided by NHS England</div>
              <div className="handoff-desc">
                This content is maintained by NHS England and will open on their website.
                You will be leaving the Bristol NHS Group website.
              </div>
              <button className="handoff-btn">Continue to NHS England ›</button>
            </div>
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to={`/${segments.slice(0, -1).join('/')}`} style={{ color: '#005EB8', fontSize: 14 }}>
              ← Back
            </Link>
          </div>
        </div>
      </PageLayout>
    )
  }

  // Has children — show as card grid
  if (node.children && node.children.length > 0) {
    const showFilter = segments.length === 1 // Only show at level 1
    return (
      <PageLayout
        pathSegments={segments}
        showHospitalFilter={showFilter}
        hospital={hospital}
        onHospitalChange={setHospital}
      >
        <div className="page-content">
          <h1 className="page-heading">{node.title}</h1>
          {node.description && (
            <p className="page-subheading">{node.description}</p>
          )}
          {showFilter && hospital !== 'All' && (
            <div className="filter-notice">
              Showing information for: <strong>{hospital}</strong>
            </div>
          )}
          <div className="cards-grid">
            {node.children.map(child => {
              const childPath = `/${segments.join('/')}/${child.id}`
              const isHandoff = child.handoff
              const hasChildren = child.children && child.children.length > 0

              return (
                <Link key={child.id} to={childPath} className="nav-card">
                  {isHandoff && <span className="nav-card-badge">NHS England</span>}
                  <div className="nav-card-title">{child.title}</div>
                  <p className="nav-card-desc">{child.description}</p>
                  <span className="nav-card-arrow">{isHandoff ? '↗' : '›'}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </PageLayout>
    )
  }

  // Leaf page — no children
  return (
    <PageLayout pathSegments={segments}>
      <div className="page-content">
        <div className="leaf-content">
          <h1 className="page-heading">{node.title}</h1>
          <p className="page-subheading">{node.description}</p>

          <div className="leaf-placeholder">
            <div className="leaf-placeholder-icon">📄</div>
            <div className="leaf-placeholder-text">
              Content for this page will be added here. This is a wireframe prototype.
            </div>
          </div>

          <div className="leaf-actions">
            <button className="leaf-action-btn primary">Contact Us</button>
            <button className="leaf-action-btn">Download Information</button>
            <button className="leaf-action-btn">Print this page</button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
