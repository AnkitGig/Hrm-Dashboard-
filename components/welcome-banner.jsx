const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      {/* Background image with overlay */}
      <div
        className="welcome-banner-overlay"
        style={{ backgroundImage: "url('/placeholder.svg?height=300&width=800')" }}
      ></div>

      <div className="welcome-banner-content">
        <div className="welcome-message">
          <h2 className="welcome-title">Welcome, Kakashi!</h2>
          <p className="welcome-text">
            Our dashboard is your hub for all things work - stay connected, stay informed, and get things done.
          </p>
        </div>

        <div className="profile-container">
          <div className="profile-image">
            <img src="/placeholder.svg?height=100&width=100" alt="Kakashi Hatake" />
          </div>
          <div className="profile-info">
            <h3 className="profile-name">Kakashi Hatake</h3>
            <p className="profile-role">UI/UX Designer</p>
            <button className="check-in-btn">Check In</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeBanner
