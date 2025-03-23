import React from "react"
import { Home, ClipboardList } from "lucide-react"
import Sidebar from "@/components/Sidebar"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "Exam Applications",
    href: "/admin/exam-applications",
    icon: ClipboardList,
  },
]

const AdminLayout = ({
  children,
})=> {
  return (
    <div className="flex min-h-screen">
      <Sidebar items={sidebarItems} userType="admin" />
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}

export default AdminLayout;
