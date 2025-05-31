const WelcomeBanner = () => {
  return (
    <div className="relative w-full h-32 sm:h-40 lg:h-48 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/placeholder.svg?height=300&width=800')" }}
      ></div>

      <div className="relative flex flex-col sm:flex-row sm:justify-between sm:items-center h-full px-4 lg:px-8 py-4">
        <div className="text-white flex-1">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 lg:mb-2">Welcome, Kakashi!</h2>
          <p className="text-xs sm:text-sm lg:text-base max-w-md">
            Our dashboard is your hub for all things work - stay connected, stay informed, and get things done.
          </p>
        </div>

        <div className="flex flex-row sm:flex-col items-center gap-3 sm:gap-2 mt-3 sm:mt-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-2 lg:border-4 border-white overflow-hidden flex-shrink-0">
            <img
              src="/placeholder.svg?height=100&width=100"
              alt="Kakashi Hatake"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-white text-left sm:text-center flex-1 sm:flex-none">
            <h3 className="font-semibold text-sm lg:text-base">Kakashi Hatake</h3>
            <p className="text-xs">UI/UX Designer</p>
            <button className="mt-1 lg:mt-2 bg-green-500 hover:bg-green-600 text-white text-xs lg:text-sm px-3 lg:px-4 py-1 rounded">
              Check In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeBanner
