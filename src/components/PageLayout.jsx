import { useState } from 'react'
import TopNav from './TopNav'
import BreadcrumbNav from './BreadcrumbNav'
import HospitalFilter from './HospitalFilter'

export default function PageLayout({ children, pathSegments = [], showHospitalFilter = false, hospital, onHospitalChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <TopNav />
      <BreadcrumbNav pathSegments={pathSegments} />
      {showHospitalFilter && (
        <HospitalFilter active={hospital} onChange={onHospitalChange} />
      )}
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
