const AttendanceSummary = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Attendance Summary</h3>
        <span className="text-sm text-blue-600">August</span>
      </div>

      <div className="flex flex-col space-y-2 mb-4">
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
          <span className="text-sm">Present - 26</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
          <span className="text-sm">Half Day - 1</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
          <span className="text-sm">Leave - 3</span>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-32 h-32">
          {/* This is a simplified version of the circular chart */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#e6e6e6" strokeWidth="12" />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#22c55e"
              strokeWidth="12"
              strokeDasharray="226 251"
              strokeDashoffset="0"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-semibold">Total Days</div>
              <div className="text-xl font-bold">30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendanceSummary
