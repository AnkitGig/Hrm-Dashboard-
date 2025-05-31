import { LayoutDashboard, User, Clock, Calendar, DollarSign, FileText, HeadphonesIcon, LogOut } from "lucide-react"

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r flex flex-col h-full">
      <div className="p-4 border-b">
        <img src="/placeholder.svg?height=40&width=150" alt="Technorizen Logo" className="h-10" />
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-blue-500 text-white rounded-md">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <User size={20} />
              <span>My Profile</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Clock size={20} />
              <span>Attendance</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <Calendar size={20} />
              <span>Leave Management</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <DollarSign size={20} />
              <span>Payroll & Salary</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <FileText size={20} />
              <span>Company Policies</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="p-4 border-t mt-auto">
        <ul className="space-y-1">
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <HeadphonesIcon size={20} />
              <span>Contact Support</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <LogOut size={20} />
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
