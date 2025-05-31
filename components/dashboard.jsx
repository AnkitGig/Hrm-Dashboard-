"use client"

import Sidebar from "./sidebar"
import WelcomeBanner from "./welcome-banner"
import AttendanceSummary from "./attendance-summary"
import EarningsSummary from "./earnings-summary"
import HolidaysList from "./holidays-list"
import { Search, Bell, MessageSquare, User, Menu } from "lucide-react"
import { useState } from "react"

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 ease-in-out fixed lg:static inset-y-0 left-0 z-50 lg:z-auto`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <div className="bg-white p-3 lg:p-4 flex justify-between items-center border-b">
          <div className="flex items-center gap-3 flex-1">
            {/* Mobile menu button */}
            <button className="lg:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setSidebarOpen(true)}>
              <Menu size={20} />
            </button>

            {/* Search bar */}
            <div className="relative flex-1 max-w-md lg:max-w-96">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search Employee..."
                className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm lg:text-base"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 lg:gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell size={18} className="lg:w-5 lg:h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <MessageSquare size={18} className="lg:w-5 lg:h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User size={18} className="lg:w-5 lg:h-5" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="p-4 lg:p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-3">
            <div>
              <h1 className="text-lg lg:text-xl font-semibold">Dashboard</h1>
              <p className="text-xs lg:text-sm text-gray-500">Welcome back to HRMS</p>
            </div>
            <div className="relative">
              <button className="border px-3 py-1 lg:px-4 lg:py-1 rounded-md text-xs lg:text-sm flex items-center gap-2 w-full sm:w-auto">
                <span className="hidden sm:inline">1 Jan 2025 - 31 Jan 2025</span>
                <span className="sm:hidden">Jan 2025</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lg:w-4 lg:h-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>

          <WelcomeBanner />

          {/* Dashboard cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mt-4 lg:mt-6">
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
