const HolidaysList = () => {
  const holidays = [
    {
      name: "Raksha Bandhan",
      date: "9 August, 2025",
      day: "Saturday",
      icon: "🪔",
    },
    {
      name: "Independence day",
      date: "15 August, 2025",
      day: "Friday",
      icon: "🇮🇳",
    },
    {
      name: "Parsi New Year",
      date: "16 August, 2025",
      day: "Saturday",
      icon: "🎆",
    },
    {
      name: "Janmashtami",
      date: "18 August, 2025",
      day: "Monday",
      icon: "🪔",
    },
    {
      name: "Ganesh Chaturthi",
      date: "27 August, 2025",
      day: "Wednesday",
      icon: "🪔",
    },
  ]

  return (
    <div className="bg-white p-4 lg:p-5 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-3 lg:mb-4">
        <h3 className="font-semibold text-sm lg:text-base">Holidays</h3>
        <span className="text-xs lg:text-sm text-blue-600">August</span>
      </div>

      <div className="space-y-3 lg:space-y-4">
        {holidays.map((holiday, index) => (
          <div key={index} className="flex items-center">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-orange-100 flex items-center justify-center mr-2 lg:mr-3 flex-shrink-0">
              <span className="text-sm lg:text-lg">{holiday.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm lg:text-base truncate">{holiday.name}</p>
              <p className="text-xs text-gray-500">{holiday.day}</p>
            </div>
            <div className="text-xs text-gray-500 text-right">
              <span className="hidden sm:inline">{holiday.date}</span>
              <span className="sm:hidden">
                {holiday.date.split(" ")[0]} {holiday.date.split(" ")[1]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HolidaysList
