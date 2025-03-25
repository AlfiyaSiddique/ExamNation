import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, ClipboardList, Users, CheckCircle, XCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const AdminDashboard = ()=> {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Admin</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#25b7ea] flex items-center justify-center text-primary-foreground">
              AD
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@university.edu</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Applications</CardTitle>
            <CardDescription>Current semester</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">248</div>
            <p className="text-muted-foreground">+12% from last semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Pending Approvals</CardTitle>
            <CardDescription>Requires action</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">42</div>
            <p className="text-muted-foreground">Updated 5 minutes ago</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Approved</CardTitle>
            <CardDescription>This semester</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">189</div>
            <p className="text-muted-foreground">76% approval rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Rejected</CardTitle>
            <CardDescription>This semester</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">17</div>
            <p className="text-muted-foreground">7% rejection rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>Latest exam applications requiring approval</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md overflow-hidden">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Student
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Exam Type
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-background divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3">
                      <div className="font-medium">John Doe</div>
                      <div className="text-xs text-muted-foreground">Computer Science</div>
                    </td>
                    <td className="px-4 py-3 text-sm">ST12345</td>
                    <td className="px-4 py-3 text-sm">Regular</td>
                    <td className="px-4 py-3 text-sm">2 hours ago</td>
                    <td className="px-4 py-3">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                        Pending
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-8 px-2">
                          View
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-xs text-muted-foreground">Computer Science</div>
                    </td>
                    <td className="px-4 py-3 text-sm">ST12001</td>
                    <td className="px-4 py-3 text-sm">Regular</td>
                    <td className="px-4 py-3 text-sm">3 hours ago</td>
                    <td className="px-4 py-3">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                        Pending
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-8 px-2">
                          View
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <div className="font-medium">Michael Chen</div>
                      <div className="text-xs text-muted-foreground">Computer Science</div>
                    </td>
                    <td className="px-4 py-3 text-sm">ST12015</td>
                    <td className="px-4 py-3 text-sm">Regular</td>
                    <td className="px-4 py-3 text-sm">5 hours ago</td>
                    <td className="px-4 py-3">
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        Approved
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-8 px-2">
                          View
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <div className="font-medium">Priya Sharma</div>
                      <div className="text-xs text-muted-foreground">Computer Science</div>
                    </td>
                    <td className="px-4 py-3 text-sm">ST12042</td>
                    <td className="px-4 py-3 text-sm">Backlog</td>
                    <td className="px-4 py-3 text-sm">6 hours ago</td>
                    <td className="px-4 py-3">
                      <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">
                        Rejected
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-8 px-2">
                          View
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <div className="font-medium">James Wilson</div>
                      <div className="text-xs text-muted-foreground">Computer Science</div>
                    </td>
                    <td className="px-4 py-3 text-sm">ST12023</td>
                    <td className="px-4 py-3 text-sm">Regular</td>
                    <td className="px-4 py-3 text-sm">8 hours ago</td>
                    <td className="px-4 py-3">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                        Pending
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="h-8 px-2">
                          View
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" asChild>
                <Link to="/admin/exam-applications">View All Applications</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Application Status</CardTitle>
            <CardDescription>Overview of all applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Pending</span>
                  <span className="font-medium">42 (17%)</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: "17%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Approved</span>
                  <span className="font-medium">189 (76%)</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "76%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Rejected</span>
                  <span className="font-medium">17 (7%)</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: "7%" }}></div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-3">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Total Students</span>
                    </div>
                    <span className="font-medium">1,245</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <ClipboardList className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Applications Today</span>
                    </div>
                    <span className="font-medium">28</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Approved Today</span>
                    </div>
                    <span className="font-medium">15</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Rejected Today</span>
                    </div>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Avg. Response Time</span>
                    </div>
                    <span className="font-medium">4.2 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AdminDashboard;

