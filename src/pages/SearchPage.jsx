import { useState } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { IA } from '../data/ia'

const POPULAR_SEARCHES = [
  'Outpatients', 'Parking', 'Visiting hours', 'Maternity', 'A&E',
  'Appointments', 'Pharmacy', 'Physiotherapy', 'Cardiology', 'MRI scan'
]

// Flatten IA for search
function flattenIA(nodes, parentPath = '') {
  const results = []
  for (const node of nodes) {
    if (node.isSearch) continue
    const path = parentPath ? `${parentPath}/${node.id}` : `/${node.id}`
    results.push({ title: node.title, description: node.description, path, handoff: node.handoff })
    if (node.children) {
      results.push(...flattenIA(node.children, path))
    }
  }
  return results
}

const ALL_PAGES = flattenIA(IA)

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const initialQ = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQ)

  const results = initialQ
    ? ALL_PAGES.filter(p =>
        p.title.toLowerCase().includes(initialQ.toLowerCase()) ||
        (p.description && p.description.toLowerCase().includes(initialQ.toLowerCase()))
      )
    : []

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <PageLayout pathSegments={['search']}>
      <div className="page-content">
        <h1 className="page-heading">Search</h1>

        <form onSubmit={handleSearch} className="search-box-page">
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

        {!initialQ && (
          <>
            <h2 className="section-heading" style={{ marginTop: 32 }}>Popular searches</h2>
            <div className="popular-tags-block">
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

            <div className="search-tips">
              <h3>Search tips</h3>
              <ul>
                <li>Try searching for a department name, such as "Cardiology" or "Maternity"</li>
                <li>Search for a service like "MRI scan" or "blood test"</li>
                <li>Use the navigation above to browse by category</li>
              </ul>
            </div>
          </>
        )}

        {initialQ && (
          <>
            <p style={{ margin: '16px 0 24px', color: '#425563', fontSize: 15 }}>
              {results.length} result{results.length !== 1 ? 's' : ''} for "<strong>{initialQ}</strong>"
            </p>

            {results.length === 0 ? (
              <div className="search-no-results">
                <p>No results found. Try:</p>
                <ul>
                  <li>Checking your spelling</li>
                  <li>Using different words</li>
                  <li>Browsing using the top navigation</li>
                </ul>
              </div>
            ) : (
              <div className="search-results">
                {results.map(r => (
                  <Link key={r.path} to={r.path} className="search-result">
                    <div className="search-result-title">
                      {r.title}
                      {r.handoff && <span className="result-badge">NHS England</span>}
                    </div>
                    {r.description && (
                      <div className="search-result-desc">{r.description}</div>
                    )}
                    <div className="search-result-path">{r.path}</div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </PageLayout>
  )
}
