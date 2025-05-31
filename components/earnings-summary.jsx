const EarningsSummary = () => {
  return (
    <div className="bg-white p-4 lg:p-5 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4 lg:mb-6">
        <h3 className="font-semibold text-sm lg:text-base">Earnings</h3>
        <span className="text-xs lg:text-sm text-blue-600">August</span>
      </div>

      <div className="space-y-4 lg:space-y-6">
        <div className="flex items-center">
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-md bg-blue-100 flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
            <span className="text-blue-600 font-bold text-sm lg:text-base">₹</span>
          </div>
          <div className="min-w-0">
            <p className="text-xs lg:text-sm text-gray-500">Total Salary :</p>
            <p className="font-semibold text-lg lg:text-xl">30,000 Rs</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-md bg-blue-100 flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
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
              className="text-blue-600 lg:w-5 lg:h-5"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-xs lg:text-sm text-gray-500">Basic Salary :</p>
            <p className="font-semibold text-lg lg:text-xl">27,000 Rs</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-md bg-blue-100 flex items-center justify-center mr-3 lg:mr-4 flex-shrink-0">
            <span className="text-blue-600 font-bold text-sm lg:text-base">₹</span>
          </div>
          <div className="min-w-0">
            <p className="text-xs lg:text-sm text-gray-500">Deduction :</p>
            <p className="font-semibold text-lg lg:text-xl">3,000 Rs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarningsSummary
