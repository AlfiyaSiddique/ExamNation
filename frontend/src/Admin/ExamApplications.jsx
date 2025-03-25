import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Filter, Download, CheckCircle, XCircle, AlertCircle } from "lucide-react"
// import { toast } from "@/components/ui/use-toast"

const ExamApplicationsVerify =()=> {
  const [selectedStatus, setSelectedStatus] = useState("pending")
  const [selectedExamType, setSelectedExamType] = useState("all")
  const [selectedSemester, setSelectedSemester] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewingApplication, setViewingApplication] = useState(null)
  
  const applications = [
    {
      id: "APP001",
      studentName: "John Doe",
      studentId: "ST12345",
      department: "Computer Science",
      semester: "5",
      examType: "regular",
      subjects: [
        { code: "CS501", name: "Database Management Systems" },
        { code: "CS502", name: "Computer Networks" },
        { code: "CS503", name: "Operating Systems" },
        { code: "CS504", name: "Software Engineering" },
        { code: "CS505", name: "Web Development" }
      ],
      submittedDate: "2023-06-10T09:30:00",
      status: "pending",
      paymentStatus: "completed",
      paymentAmount: 2600,
      paymentId: "TXN123456"
    },
    {
      id: "APP002",
      studentName: "Sarah Johnson",
      studentId: "ST12001",
      department: "Computer Science",
      semester: "5",
      examType: "regular",
      subjects: [
        { code: "CS501", name: "Database Management Systems" },
        { code: "CS502", name: "Computer Networks" },
        { code: "CS503", name: "Operating Systems" },
        { code: "CS504", name: "Software Engineering" }
      ],
      submittedDate: "2023-06-10T10:15:00",
      status: "pending",
      paymentStatus: "completed",
      paymentAmount: 2100,
      paymentId: "TXN123457"
    },
    {
      id: "APP003",
      studentName: "Michael Chen",
      studentId: "ST12015",
      department: "Computer Science",
      semester: "5",
      examType: "regular",
      subjects: [
        { code: "CS501", name: "Database Management Systems" },
        { code: "CS502", name: "Computer Networks" },
        { code: "CS503", name: "Operating Systems" },
        { code: "CS504", name: "Software Engineering" },
        { code: "CS505", name: "Web Development" }
      ],
      submittedDate: "2023-06-10T08:45:00",
      status: "approved",
      approvedDate: "2023-06-10T11:30:00",
      paymentStatus: "completed",
      paymentAmount: 2600,
      paymentId: "TXN123458"
    },
    {
      id: "APP004",
      studentName: "Priya Sharma",
      studentId: "ST12042",
      department: "Computer Science",
      semester: "4",
      examType: "backlog",
      subjects: [
        { code: "CS401", name: "Data Structures and Algorithms" },
        { code: "CS402", name: "Computer Architecture" }
      ],
      submittedDate: "2023-06-09T14:20:00",
      status: "rejected",
      rejectedDate: "2023-06-10T09:15:00",
      rejectionReason: "Incomplete prerequisites",
      paymentStatus: "completed",
      paymentAmount: 1200,
      paymentId: "TXN123459"
    },
    {
      id: "APP005",
      studentName: "James Wilson",
      studentId: "ST12023",
      department: "Computer Science",
      semester: "5",
      examType: "regular",
      subjects: [
        { code: "CS501", name: "Database Management Systems" },
        { code: "CS502", name: "Computer Networks" },
        { code: "CS503", name: "Operating Systems" }
      ],
      submittedDate: "2023-06-10T11:05:00",
      status: "pending",
      paymentStatus: "completed",
      paymentAmount: 1600,
      paymentId: "TXN123460"
    }
  ]

  const filteredApplications = applications.filter(app => {
    // Filter by status
    if (selectedStatus !== "all" && app.status !== selectedStatus) return false
    
    // Filter by exam type
    if (selectedExamType !== "all" && app.examType !== selectedExamType) return false
    
    // Filter by semester
    if (selectedSemester !== "all" && app.semester !== selectedSemester) return false
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        app.studentName.toLowerCase().includes(query) ||
        app.studentId.toLowerCase().includes(query) ||
        app.id.toLowerCase().includes(query)
      )
    }
    
    return true
  })

  const handleApprove = () => {
    // toast({
    //   title: "Application Approved",
    //   description: `Application ${applicationId} has been approved successfully.`,
    // })
    setViewingApplication(null)
  }

  const handleReject = () => {
    // toast({
    //   title: "Application Rejected",
    //   description: `Application ${applicationId} has been rejected.`,
    // })
    setViewingApplication(null)
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
      case "approved":
        return <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">Approved</Badge>
      case "rejected":
        return <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">Rejected</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Exam Applications</h1>
        <p className="text-muted-foreground">Review and approve student exam applications</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Application Filters</CardTitle>
          <CardDescription>Filter applications by status, type, and semester</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label className="text-sm font-medium">Status</label>
              <Select defaultValue="pending" onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label className="text-sm font-medium">Exam Type</label>
              <Select defaultValue="all" onValueChange={setSelectedExamType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select exam type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="regular">Regular</SelectItem>
                  <SelectItem value="backlog">Backlog</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label className="text-sm font-medium">Semester</label>
              <Select defaultValue="all" onValueChange={setSelectedSemester}>
                <SelectTrigger>
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Semesters</SelectItem>
                  <SelectItem value="1">Semester 1</SelectItem>
                  <SelectItem value="2">Semester 2</SelectItem>
                  <SelectItem value="3">Semester 3</SelectItem>
                  <SelectItem value="4">Semester 4</SelectItem>
                  <SelectItem value="5">Semester 5</SelectItem>
                  <SelectItem value="6">Semester 6</SelectItem>
                  <SelectItem value="7">Semester 7</SelectItem>
                  <SelectItem value="8">Semester 8</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label className="text-sm font-medium">Search</label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name, ID or application ID"
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="pending" onValueChange={setSelectedStatus}>
        <div className="flex justify-between items-center mb-4">
          <TabsList className={"bg-[#25b7ea]"}>
            <TabsTrigger value="pending" className="gap-2">
              <AlertCircle className="h-4 w-4" />
              Pending
            </TabsTrigger>
            <TabsTrigger value="approved" className="gap-2">
              <CheckCircle className="h-4 w-4" />
              Approved
            </TabsTrigger>
            <TabsTrigger value="rejected" className="gap-2">
              <XCircle className="h-4 w-4" />
              Rejected
            </TabsTrigger>
            <TabsTrigger value="all" className="gap-2">
              <Filter className="h-4 w-4" />
              All
            </TabsTrigger>
          </TabsList>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>

        <TabsContent value="pending" className="mt-0">
          <Card>
            <CardContent className="pt-6">
              <div className="border rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-border">
                  <thead className="bg-[#25b7ea]">
                    <tr >
                      <th className="w-8 px-4 py-3 text-left">
                        <Checkbox />
                      </th>
                      <th className="px-4 py-3 text-left text-xs text-black font-bold uppercase tracking-wider">Application ID</th>
                      <th className="px-4 py-3 text-left text-xs text-black font-bold  uppercase tracking-wider">Student</th>
                      <th className="px-4 py-3 text-left text-xs text-black font-bold d uppercase tracking-wider">Exam Type</th>
                      <th className="px-4 py-3 text-left text-xs text-black font-bold  uppercase tracking-wider">Semester</th>
                      <th className="px-4 py-3 text-left text-xs text-black font-bold  uppercase tracking-wider">Submitted</th>
                      <th className="px-4 py-3 text-left text-xs text-black font-bold uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs text-black font-bold  uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-background divide-y divide-border">
                    {filteredApplications.map((application) => (
                      <tr key={application.id}>
                        <td className="px-4 py-3">
                          <Checkbox />
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">{application.id}</td>
                        <td className="px-4 py-3">
                          <div className="font-medium">{application.studentName}</div>
                          <div className="text-xs text-muted-foreground">{application.studentId}</div>
                        </td>
                        <td className="px-4 py-3 text-sm capitalize">{application.examType}</td>
                        <td className="px-4 py-3 text-sm">Semester {application.semester}</td>
                        <td className="px-4 py-3 text-sm">{new Date(application.submittedDate).toLocaleString()}</td>
                        <td className="px-4 py-3">
                          {getStatusBadge(application.status)}
                        </td>
                        <td className="px-4 py-3">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="h-8 px-2"
                                onClick={() => setViewingApplication(application)}
                              >
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                              {viewingApplication && (
                                <>
                                  <DialogHeader>
                                    <DialogTitle>Application Details</DialogTitle>
                                    <DialogDescription>
                                      Review application {viewingApplication.id} submitted by {viewingApplication.studentName}
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <h3 className="text-sm font-medium mb-1">Student Information</h3>
                                        <div className="border rounded-md p-3 space-y-2">
                                          <div className="grid grid-cols-2 gap-1">
                                            <div className="text-sm text-muted-foreground">Name:</div>
                                            <div className="text-sm font-medium">{viewingApplication.studentName}</div>
                                          </div>
                                          <div className="grid grid-cols-2 gap-1">
                                            <div className="text-sm text-muted-foreground">ID:</div>
                                            <div className="text-sm font-medium">{viewingApplication.studentId}</div>
                                          </div>
                                          <div className="grid grid-cols-2 gap-1">
                                            <div className="text-sm text-muted-foreground">Department:</div>
                                            <div className="text-sm font-medium">{viewingApplication.department}</div>
                                          </div>
                                          <div className="grid grid-cols-2 gap-1">
                                            <div className="text-sm text-muted-foreground">Semester:</div>
                                            <div className="text-sm font-medium">{viewingApplication.semester}</div>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <h3 className="text-sm font-medium mb-1">Application Information</h3>
                                        <div className="border rounded-md p-3 space-y-2">
                                          <div className="grid grid-cols-2 gap-1">
                                            <div className="text-sm text-muted-foreground">Application ID:</div>
                                            <div className="text-sm font-medium">{viewingApplication.id}</div>
                                          </div>
                                          <div className="grid grid-cols-2 gap-1">
                                            <div className="text-sm text-muted-foreground">Exam Type:</div>
                                            <div className="text-sm font-medium capitalize">{viewingApplication.examType}</div>
                                          </div>
                                          <div className="grid grid-cols-2 gap-1">
                                            <div className="text-sm text-muted-foreground">Submitted:</div>
                                            <div className="text-sm font-medium">{new Date(viewingApplication.submittedDate).toLocaleString()}</div>
                                          </div>
                                          <div className="grid grid-cols-2 gap-1">
                                            <div className="text-sm text-muted-foreground">Status:</div>
                                            <div className="text-sm">{getStatusBadge(viewingApplication.status)}</div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <div>
                                      <h3 className="text-sm font-medium mb-1">Subjects</h3>
                                      <div className="border rounded-md overflow-hidden">
                                        <table className="min-w-full divide-y divide-border">
                                          <thead className="bg-muted">
                                            <tr>
                                              <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Subject Code</th>
                                              <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Subject Name</th>
                                            </tr>
                                          </thead>
                                          <tbody className="bg-background divide-y divide-border">
                                            {viewingApplication.subjects.map((subject) => (
                                              <tr key={subject.code}>
                                                <td className="px-4 py-2 text-sm">{subject.code}</td>
                                                <td className="px-4 py-2 text-sm">{subject.name}</td>
                                              </tr>
                                            ))}
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    
                                    <div>
                                      <h3 className="text-sm font-medium mb-1">Payment Information</h3>
                                      <div className="border rounded-md p-3 space-y-2">
                                        <div className="grid grid-cols-2 gap-1">
                                          <div className="text-sm text-muted-foreground">Payment Status:</div>
                                          <div className="text-sm font-medium">{viewingApplication.paymentStatus}</div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-1">
                                          <div className="text-sm text-muted-foreground">Amount:</div>
                                          <div className="text-sm font-medium">₹{viewingApplication.paymentAmount}</div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-1">
                                          <div className="text-sm text-muted-foreground">Transaction ID:</div>
                                          <div className="text-sm font-medium">{viewingApplication.paymentId}</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    {viewingApplication.status === "pending" && (
                                      <>
                                        <Button variant="outline" onClick={() => handleReject(viewingApplication.id)}>
                                          Reject
                                        </Button>
                                        <Button onClick={() => handleApprove(viewingApplication.id)}>
                                          Approve
                                        </Button>
                                      </>
                                    )}
                                    {viewingApplication.status !== "pending" && (
                                      <Button variant="outline">
                                        Close
                                      </Button>
                                    )}
                                  </DialogFooter>
                                </>
                              )}
                            </DialogContent>
                          </Dialog>
                        </td>
                      </tr>
                    ))}
                    {filteredApplications.length === 0 && (
                      <tr>
                        <td colSpan={8} className="px-4 py-6 text-center text-muted-foreground">
                          No applications found matching the current filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approved" className="mt-0">
          <Card>
            <CardContent className="pt-6">
              <div className="border rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="w-8 px-4 py-3 text-left">
                        <Checkbox />
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Application ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Student</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Exam Type</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Semester</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Submitted</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-background divide-y divide-border">
                    {filteredApplications.map((application) => (
                      <tr key={application.id}>
                        <td className="px-4 py-3">
                          <Checkbox />
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">{application.id}</td>
                        <td className="px-4 py-3">
                          <div className="font-medium">{application.studentName}</div>
                          <div className="text-xs text-muted-foreground">{application.studentId}</div>
                        </td>
                        <td className="px-4 py-3 text-sm capitalize">{application.examType}</td>
                        <td className="px-4 py-3 text-sm">Semester {application.semester}</td>
                        <td className="px-4 py-3 text-sm">{new Date(application.submittedDate).toLocaleString()}</td>
                        <td className="px-4 py-3">
                          {getStatusBadge(application.status)}
                        </td>
                        <td className="px-4 py-3">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="h-8 px-2"
                            onClick={() => setViewingApplication(application)}
                          >
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {filteredApplications.length === 0 && (
                      <tr>
                        <td colSpan={8} className="px-4 py-6 text-center text-muted-foreground">
                          No applications found matching the current filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rejected" className="mt-0">
          <Card>
            <CardContent className="pt-6">
              <div className="border rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="w-8 px-4 py-3 text-left">
                        <Checkbox />
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Application ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Student</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Exam Type</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Semester</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Submitted</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-background divide-y divide-border">
                    {filteredApplications.map((application) => (
                      <tr key={application.id}>
                        <td className="px-4 py-3">
                          <Checkbox />
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">{application.id}</td>
                        <td className="px-4 py-3">
                          <div className="font-medium">{application.studentName}</div>
                          <div className="text-xs text-muted-foreground">{application.studentId}</div>
                        </td>
                        <td className="px-4 py-3 text-sm capitalize">{application.examType}</td>
                        <td className="px-4 py-3 text-sm">Semester {application.semester}</td>
                        <td className="px-4 py-3 text-sm">{new Date(application.submittedDate).toLocaleString()}</td>
                        <td className="px-4 py-3">
                          {getStatusBadge(application.status)}
                        </td>
                        <td className="px-4 py-3">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="h-8 px-2"
                            onClick={() => setViewingApplication(application)}
                          >
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {filteredApplications.length === 0 && (
                      <tr>
                        <td colSpan={8} className="px-4 py-6 text-center text-muted-foreground">
                          No applications found matching the current filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
 </Tabs>
 </div>
  )
}
 
export default ExamApplicationsVerify;
