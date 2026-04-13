import { Link, useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { findNode } from '../data/ia'

// Icon map — Ant Design icon names → simple SVG/emoji placeholder
const ICON_MAP = {
  UserOutlined: '👤',
  TeamOutlined: '👥',
  ExclamationCircleOutlined: '⚠️',
  CrownOutlined: '👑',
  ExperimentOutlined: '🔬',
  SolutionOutlined: '💼',
  SmileOutlined: '😊',
  InfoCircleOutlined: 'ℹ️',
  PhoneOutlined: '📞',
  SearchOutlined: '🔍',
  CalendarOutlined: '📅',
  HomeOutlined: '🏠',
  BankOutlined: '🏥',
  CompassOutlined: '🧭',
  CarOutlined: '🚗',
  CoffeeOutlined: '☕',
  HeartOutlined: '❤️',
  MedicineBoxOutlined: '💊',
  MessageOutlined: '✉️',
  SafetyOutlined: '🛡️',
  StarOutlined: '⭐',
  FileProtectOutlined: '📋',
  FileSearchOutlined: '🔎',
  BulbOutlined: '💡',
  ReadOutlined: '📚',
  BookOutlined: '📖',
  UsergroupAddOutlined: '👨‍👩‍👧',
  NotificationOutlined: '📢',
  FileTextOutlined: '📄',
  GlobalOutlined: '🌍',
  ApartmentOutlined: '🤝',
  MailOutlined: '✉️',
  CustomerServiceOutlined: '🎧',
  CameraOutlined: '📷',
  AlertOutlined: '🚨',
}

function IconPlaceholder({ icon, size = 52 }) {
  const emoji = ICON_MAP[icon] || '📄'
  return (
    <div className="nav-card-icon" style={{ width: size, height: size, fontSize: size * 0.45 }}>
      {emoji}
    </div>
  )
}

export default function NavPage() {
  const params = useParams()
  const segments = [params.l1, params.l2, params.l3].filter(Boolean)

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
    const backPath = segments.length > 1 ? `/${segments.slice(0, -1).join('/')}` : '/'
    return (
      <PageLayout pathSegments={segments}>
        <div className="page-content">
          <span className="handoff-source-badge">NHS England ↗</span>
          <h1 className="page-heading" style={{ marginTop: 12 }}>{node.title}</h1>
          <p className="page-subheading" style={{ maxWidth: 680 }}>{node.description}</p>

          <div className="handoff-info-box">
            <span className="handoff-info-icon">ℹ️</span>
            <span>
              This content is provided and maintained by <strong>NHS England</strong>.
              Clicking the links below will open the NHS England website in a new tab.
            </span>
          </div>

          {node.handoffCards && (
            <div className="cards-grid" style={{ marginTop: 24 }}>
              {node.handoffCards.map((card, i) => (
                <a
                  key={i}
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-card handoff-external-card"
                >
                  <div className="nav-card-icon" style={{ width: 52, height: 52, fontSize: 22, background: '#d8e8f5', color: '#005EB8' }}>
                    ↗
                  </div>
                  <div className="nav-card-title">{card.title}</div>
                  <p className="nav-card-desc">{card.description}</p>
                  <span className="nav-card-arrow" style={{ fontSize: 11, color: '#768692' }}>Opens on NHS England website</span>
                </a>
              ))}
            </div>
          )}

          <div className="handoff-local-note">
            <strong>Already have a referral to Bristol NHS Group?</strong>{' '}
            <Link to="/patient/find-service" style={{ color: '#005EB8' }}>
              Use our A–Z or By Specialty to find the right department →
            </Link>
          </div>

          <div style={{ marginTop: 32 }}>
            <Link to={backPath} className="back-link">← Back</Link>
          </div>
        </div>
      </PageLayout>
    )
  }

  // Has children — show as card grid
  if (node.children && node.children.length > 0) {
    return (
      <PageLayout pathSegments={segments}>
        <div className="page-content">
          <h1 className="page-heading">{node.title}</h1>
          {node.description && (
            <p className="page-subheading">{node.description}</p>
          )}
          <div className="cards-grid">
            {node.children.map(child => {
              const childPath = `/${segments.join('/')}/${child.id}`
              const isHandoff = child.handoff
              const hasChildren = child.children && child.children.length > 0

              return (
                <Link key={child.id} to={childPath} className="nav-card" aria-label={child.title}>
                  {isHandoff && <span className="nav-card-badge">NHS England</span>}
                  <IconPlaceholder icon={child.icon || node.icon} />
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

  // Leaf page — no children, end of navigation
  const backPath = segments.length > 1 ? `/${segments.slice(0, -1).join('/')}` : '/'
  return (
    <PageLayout pathSegments={segments}>
      <div className="page-content">
        <div style={{ maxWidth: 760 }}>
          <Link to={backPath} className="back-link" style={{ display: 'inline-block', marginBottom: 24 }}>← Back</Link>
          <h1 className="page-heading">{node.title}</h1>
          <p className="page-subheading">{node.description}</p>

          <div className="leaf-placeholder">
            <div className="leaf-placeholder-icon">📄</div>
            <div className="leaf-placeholder-text">
              Content for this page will be added here. This is a wireframe prototype —
              this area would contain the full page content in the final website.
            </div>
          </div>

          <div className="leaf-actions">
            <button className="leaf-action-btn primary">Contact Us About This</button>
            <button className="leaf-action-btn">Download Information (PDF)</button>
            <button className="leaf-action-btn">Print This Page</button>
          </div>

          <div className="leaf-related">
            <h2 className="section-heading">Was this helpful?</h2>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="leaf-action-btn">👍 Yes</button>
              <button className="leaf-action-btn">👎 No</button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
