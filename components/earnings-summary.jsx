const EarningsSummary = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Earnings</h3>
        <span className="card-subtitle">August</span>
      </div>

      <div className="earnings-list">
        <div className="earnings-item">
          <div className="earnings-icon">
            <span className="earnings-icon-symbol">₹</span>
          </div>
          <div className="earnings-details">
            <p className="earnings-label">Total Salary :</p>
            <p className="earnings-value">30,000 Rs</p>
          </div>
        </div>

        <div className="earnings-item">
          <div className="earnings-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="earnings-icon-symbol"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
          <div className="earnings-details">
            <p className="earnings-label">Basic Salary :</p>
            <p className="earnings-value">27,000 Rs</p>
          </div>
        </div>

        <div className="earnings-item">
          <div className="earnings-icon">
            <span className="earnings-icon-symbol">₹</span>
          </div>
          <div className="earnings-details">
            <p className="earnings-label">Deduction :</p>
            <p className="earnings-value">3,000 Rs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarningsSummary
