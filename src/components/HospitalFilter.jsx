const HOSPITALS = ['All', 'BRI', 'Southmead', 'Weston']

export default function HospitalFilter({ active, onChange }) {
  return (
    <div className="hospital-filter">
      <div className="hospital-filter-inner">
        <span className="hospital-filter-label">Filter by hospital:</span>
        {HOSPITALS.map(h => (
          <button
            key={h}
            className={`hospital-btn${active === h ? ' active' : ''}`}
            onClick={() => onChange(h)}
          >
            {h}
          </button>
        ))}
      </div>
    </div>
  )
}
