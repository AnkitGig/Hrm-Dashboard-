import Sidebar from "./sidebar"
import WelcomeBanner from "./welcome-banner"
import AttendanceSummary from "./attendance-summary"
import EarningsSummary from "./earnings-summary"
import HolidaysList from "./holidays-list"
import { Search, Bell, MessageSquare, User } from "lucide-react"

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="bg-white p-4 flex justify-between items-center border-b">
          <div className="relative w-96">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Employee by Name or ID"
              className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <MessageSquare size={20} />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User size={20} />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-xl font-semibold">Dashboard</h1>
              <p className="text-sm text-gray-500">Welcome back to HRMS</p>
            </div>
            <div className="relative">
              <button className="border px-4 py-1 rounded-md text-sm flex items-center gap-2">
                1 Jan 2025 - 31 Jan 2025
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
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>

          <WelcomeBanner />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <AttendanceSummary />
            <EarningsSummary />
            <HolidaysList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
