import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, FileText } from "lucide-react"

const BacklogFeeReport = () =>{
  const [selectedSemester, setSelectedSemester] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const backlogFees = [
    {
      id: "BF001",
      semester: "3",
      subject: "Data Structures and Algorithms",
      subjectCode: "CS401",
      amount: 500,
      dueDate: "2023-06-30",
      status: "pending",
    },
    {
      id: "BF002",
      semester: "3",
      subject: "Computer Architecture",
      subjectCode: "CS402",
      amount: 500,
      dueDate: "2023-06-30",
      status: "pending",
    },
    {
      id: "BF003",
      semester: "4",
      subject: "Discrete Mathematics",
      subjectCode: "CS403",
      amount: 500,
      dueDate: "2023-05-15",
      status: "paid",
      paidDate: "2023-05-10",
      transactionId: "TXN789012",
    },
    {
      id: "BF004",
      semester: "4",
      subject: "Theory of Computation",
      subjectCode: "CS404",
      amount: 500,
      dueDate: "2023-05-15",
      status: "paid",
      paidDate: "2023-05-10",
      transactionId: "TXN789013",
    },
  ]

  const filteredBacklogFees = backlogFees.filter((fee) => {
    if (selectedSemester !== "all" && fee.semester !== selectedSemester) return false
    if (selectedStatus !== "all" && fee.status !== selectedStatus) return false
    return true
  })

  const pendingFees = backlogFees.filter((fee) => fee.status === "pending")
  const totalPendingAmount = pendingFees.reduce((total, fee) => total + fee.amount, 0)

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Backlog Exam Fee Report</h1>
        <p className="text-muted-foreground">View and pay your backlog examination fees</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Backlog Subjects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{backlogFees.length}</div>
            <p className="text-muted-foreground">Across all semesters</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Pending Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{pendingFees.length}</div>
            <p className="text-muted-foreground">Due by 30 Jun 2023</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Pending Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">₹{totalPendingAmount}</div>
            <p className="text-muted-foreground">For all pending subjects</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Backlog Fee Details</CardTitle>
          <CardDescription>View and manage your backlog examination fees</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-48">
                <label className="text-sm font-medium mb-1 block">Semester</label>
                <Select defaultValue="all" onValueChange={setSelectedSemester}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Semesters" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Semesters</SelectItem>
                    <SelectItem value="3">Semester 3</SelectItem>
                    <SelectItem value="4">Semester 4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full sm:w-48">
                <label className="text-sm font-medium mb-1 block">Status</label>
                <Select defaultValue="all" onValueChange={setSelectedStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-end">
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>

          <Tabs defaultValue="list" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="summary">Summary View</TabsTrigger>
            </TabsList>
            <TabsContent value="list" className="mt-4">
              <div className="border rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="w-8 px-4 py-3 text-left">
                        <Checkbox />
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Semester
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Due Date
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-background divide-y divide-border">
                    {filteredBacklogFees.length > 0 ? (
                      filteredBacklogFees.map((fee) => (
                        <tr key={fee.id}>
                          <td className="px-4 py-3">{fee.status === "pending" && <Checkbox />}</td>
                          <td className="px-4 py-3">
                            <div className="font-medium">{fee.subject}</div>
                            <div className="text-xs text-muted-foreground">{fee.subjectCode}</div>
                          </td>
                          <td className="px-4 py-3 text-sm">Semester {fee.semester}</td>
                          <td className="px-4 py-3 text-sm">₹{fee.amount}</td>
                          <td className="px-4 py-3 text-sm">{new Date(fee.dueDate).toLocaleDateString()}</td>
                          <td className="px-4 py-3">
                            <Badge
                              variant={fee.status === "paid" ? "outline" : "secondary"}
                              className={
                                fee.status === "paid"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                              }
                            >
                              {fee.status === "paid" ? "Paid" : "Pending"}
                            </Badge>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="px-4 py-6 text-center text-muted-foreground">
                          No backlog fees found for the selected filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {pendingFees.length > 0 && (
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm">
                    <span className="font-medium">Selected: {pendingFees.length} items</span>
                    <span className="mx-2">|</span>
                    <span>Total: ₹{totalPendingAmount}</span>
                  </div>
                  <Button className={"bg-[#25b7ea]"}>Pay Selected Fees</Button>
                </div>
              )}
            </TabsContent>
            <TabsContent value="summary" className="mt-4">
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-medium">Semester 3</h3>
                      <p className="text-sm text-muted-foreground">2 subjects pending</p>
                    </div>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                      Pending
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Data Structures and Algorithms (CS401)</span>
                      <span>₹500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Computer Architecture (CS402)</span>
                      <span>₹500</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium pt-2 border-t mt-2">
                      <span>Total</span>
                      <span>₹1,000</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button size="sm" className="w-full">
                      Pay Now
                    </Button>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-medium">Semester 4</h3>
                      <p className="text-sm text-muted-foreground">2 subjects paid</p>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                      Paid
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Discrete Mathematics (CS403)</span>
                      <span>₹500</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Theory of Computation (CS404)</span>
                      <span>₹500</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium pt-2 border-t mt-2">
                      <span>Total</span>
                      <span>₹1,000</span>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Paid on:</span>
                      <span>10 May 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Transaction ID:</span>
                      <span>TXN789012</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" />
            View Payment History
          </Button>
          {pendingFees.length > 0 && <Button className={"bg-[#25b7ea]"}>Pay All Pending Fees (₹{totalPendingAmount})</Button>}
        </CardFooter>
      </Card>
    </div>
  )
}

export default BacklogFeeReport
