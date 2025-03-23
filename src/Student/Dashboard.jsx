import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, Ticket, FileText, PieChart, Award, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const Dashboard = ()=> {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Student Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John Doe</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4"/>
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#25b7ea] flex items-center justify-center text-primary-foreground">
              JD
            </div>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">ID: ST12345</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Current Semester</CardTitle>
            <CardDescription>Semester 5</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Computer Science</div>
            <p className="text-muted-foreground">2023-2024 Academic Year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Upcoming Exams</CardTitle>
            <CardDescription>Next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-muted-foreground">Applications due in 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Latest Results</CardTitle>
            <CardDescription>Semester 4</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.7 CGPA</div>
            <p className="text-muted-foreground">Published on 15 May 2023</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/student/exam-application">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <ClipboardList className="h-6 w-6 text-primary" />
              <CardTitle className="text-lg">Exam Application</CardTitle>
              <CardDescription>Apply for upcoming exams</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                Due in 7 days
              </Badge>
            </CardContent>
          </Card>
        </Link>
        <Link to="/student/hall-ticket">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <Ticket className="h-6 w-6 text-primary" />
              <CardTitle className="text-lg">Hall Ticket</CardTitle>
              <CardDescription>Download your hall tickets</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                Available
              </Badge>
            </CardContent>
          </Card>
        </Link>
        <Link to="/student/backlog-fee-report">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <FileText className="h-6 w-6 text-primary" />
              <CardTitle className="text-lg">Backlog Fee Report</CardTitle>
              <CardDescription>View and pay backlog exam fees</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                2 pending payments
              </Badge>
            </CardContent>
          </Card>
        </Link>
        <Link to="/student/result-analysis">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <PieChart className="h-6 w-6 text-primary" />
              <CardTitle className="text-lg">Result Analysis</CardTitle>
              <CardDescription>Analyze your academic performance</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="outline" className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                Updated
              </Badge>
            </CardContent>
          </Card>
        </Link>
        <Link to="/student/topper-list">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <Award className="h-6 w-6 text-primary" />
              <CardTitle className="text-lg">Topper List</CardTitle>
              <CardDescription>View top performers in your batch</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-100">
                Semester 4
              </Badge>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard

