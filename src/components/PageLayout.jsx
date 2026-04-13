import TopNav from './TopNav'
import BreadcrumbNav from './BreadcrumbNav'

export default function PageLayout({ children, pathSegments = [] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <TopNav />
      <BreadcrumbNav pathSegments={pathSegments} />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-logo">Bristol NHS Group</div>
          <div className="footer-links">
            <a href="#" className="footer-link">Accessibility</a>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Freedom of Information</a>
            <a href="#" className="footer-link">Modern Slavery Act</a>
            <a href="#" className="footer-link">Cookie Policy</a>
          </div>
          <div className="footer-small">© 2024 Bristol NHS Group. Prototype wireframe — not a real website.</div>
        </div>
      </footer>
    </div>
  )
}
