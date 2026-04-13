import { Link } from 'react-router-dom'
import { buildBreadcrumbs } from '../data/ia'

export default function BreadcrumbNav({ pathSegments }) {
  const crumbs = buildBreadcrumbs(pathSegments)

  if (crumbs.length === 0) return null

  return (
    <div className="breadcrumb-bar">
      <div className="breadcrumb-inner">
        <Link to="/" className="breadcrumb-link">Home</Link>
        {crumbs.map((crumb, i) => (
          <span key={crumb.path} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="breadcrumb-sep">›</span>
            {i === crumbs.length - 1 ? (
              <span className="breadcrumb-current">{crumb.title}</span>
            ) : (
              <Link to={crumb.path} className="breadcrumb-link">{crumb.title}</Link>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
