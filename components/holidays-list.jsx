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
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Holidays</h3>
        <span className="text-sm text-blue-600">August</span>
      </div>

      <div className="space-y-4">
        {holidays.map((holiday, index) => (
          <div key={index} className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
              <span className="text-lg">{holiday.icon}</span>
            </div>
            <div>
              <p className="font-medium">{holiday.name}</p>
              <p className="text-xs text-gray-500">{holiday.day}</p>
            </div>
            <div className="ml-auto text-xs text-gray-500">{holiday.date}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HolidaysList
