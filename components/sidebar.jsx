"use client"

import { LayoutDashboard, User, Clock, Calendar, DollarSign, FileText, HeadphonesIcon, LogOut, X } from "lucide-react"

const Sidebar = ({ onClose }) => {
  return (
    <div className="w-64 bg-white border-r flex flex-col h-full">
      {/* Header with close button for mobile */}
      <div className="p-4 border-b flex justify-between items-center">
        <img src="/placeholder.svg?height=40&width=150" alt="Technorizen Logo" className="h-8 lg:h-10" />
        <button className="lg:hidden p-1 rounded-md hover:bg-gray-100" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 p-3 lg:p-4">
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 lg:py-2 bg-blue-500 text-white rounded-md text-sm lg:text-base"
            >
              <LayoutDashboard size={18} className="lg:w-5 lg:h-5" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 lg:py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm lg:text-base"
            >
              <User size={18} className="lg:w-5 lg:h-5" />
              <span>My Profile</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 lg:py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm lg:text-base"
            >
              <Clock size={18} className="lg:w-5 lg:h-5" />
              <span>Attendance</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 lg:py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm lg:text-base"
            >
              <Calendar size={18} className="lg:w-5 lg:h-5" />
              <span>Leave Management</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 lg:py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm lg:text-base"
            >
              <DollarSign size={18} className="lg:w-5 lg:h-5" />
              <span>Payroll & Salary</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 lg:py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm lg:text-base"
            >
              <FileText size={18} className="lg:w-5 lg:h-5" />
              <span>Company Policies</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="p-3 lg:p-4 border-t mt-auto">
        <ul className="space-y-1">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 lg:py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm lg:text-base"
            >
              <HeadphonesIcon size={18} className="lg:w-5 lg:h-5" />
              <span>Contact Support</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2.5 lg:py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm lg:text-base"
            >
              <LogOut size={18} className="lg:w-5 lg:h-5" />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
