const WelcomeBanner = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/placeholder.svg?height=300&width=800')" }}
      ></div>

      <div className="relative flex justify-between items-center h-full px-8">
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-2">Welcome, Kakashi!</h2>
          <p className="max-w-md">
            Our dashboard is your hub for all things work - stay connected, stay informed, and get things done.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
            <img
              src="/placeholder.svg?height=100&width=100"
              alt="Kakashi Hatake"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-white text-center mt-2">
            <h3 className="font-semibold">Kakashi Hatake</h3>
            <p className="text-xs">UI/UX Designer</p>
          </div>
          <button className="mt-2 bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-1 rounded">
            Check In
          </button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeBanner
