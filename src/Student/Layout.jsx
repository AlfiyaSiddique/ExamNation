import React from "react"
import { Home, ClipboardList, Ticket, FileText, PieChart, Award } from "lucide-react"
import Sidebar from "../components/Sidebar"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/student/dashboard",
    icon: Home,
  },
  {
    title: "Exam Application",
    href: "/student/exam-application",
    icon: ClipboardList,
  },
  {
    title: "Hall Ticket",
    href: "/student/hall-ticket",
    icon: Ticket,
  },
  {
    title: "Backlog Fee Report",
    href: "/student/backlog-fee-report",
    icon: FileText,
  },
  {
    title: "Result Analysis",
    href: "/student/result-analysis",
    icon: PieChart,
  },
  {
    title: "Topper List",
    href: "/student/topper-list",
    icon: Award,
  },
]

const Layout = ({
  children,
})=>{
  return (
    <div className="flex min-h-screen">
      <Sidebar items={sidebarItems} userType="student" />
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}

export default Layout;

