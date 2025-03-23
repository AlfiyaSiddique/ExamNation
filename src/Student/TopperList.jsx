import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Award, Download, Medal, Trophy, Users } from "lucide-react"

const TopperList = () =>{
  const [selectedSemester, setSelectedSemester] = useState("4")
  const [selectedDepartment, setSelectedDepartment] = useState("cs")

  const toppers = [
    {
      id: 1,
      name: "Sarah Johnson",
      regNo: "ST12001",
      department: "cs",
      semester: "4",
      cgpa: 9.8,
      rank: 1,
      achievements: ["Gold Medal", "Dean's List", "Research Publication"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Michael Chen",
      regNo: "ST12015",
      department: "cs",
      semester: "4",
      cgpa: 9.7,
      rank: 2,
      achievements: ["Dean's List", "Hackathon Winner"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Priya Sharma",
      regNo: "ST12042",
      department: "cs",
      semester: "4",
      cgpa: 9.6,
      rank: 3,
      achievements: ["Dean's List", "Coding Competition Winner"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      name: "James Wilson",
      regNo: "ST12023",
      department: "cs",
      semester: "4",
      cgpa: 9.5,
      rank: 4,
      achievements: ["Dean's List"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 5,
      name: "Aisha Patel",
      regNo: "ST12037",
      department: "cs",
      semester: "4",
      cgpa: 9.4,
      rank: 5,
      achievements: ["Dean's List", "Technical Paper Presentation"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 6,
      name: "David Kim",
      regNo: "ST12056",
      department: "cs",
      semester: "4",
      cgpa: 9.3,
      rank: 6,
      achievements: ["Dean's List"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 7,
      name: "Emma Rodriguez",
      regNo: "ST12078",
      department: "cs",
      semester: "4",
      cgpa: 9.2,
      rank: 7,
      achievements: ["Dean's List"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 8,
      name: "Omar Hassan",
      regNo: "ST12089",
      department: "cs",
      semester: "4",
      cgpa: 9.1,
      rank: 8,
      achievements: ["Dean's List"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 9,
      name: "Sophia Lee",
      regNo: "ST12092",
      department: "cs",
      semester: "4",
      cgpa: 9.0,
      rank: 9,
      achievements: ["Dean's List"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 10,
      name: "Raj Malhotra",
      regNo: "ST12103",
      department: "cs",
      semester: "4",
      cgpa: 8.9,
      rank: 10,
      achievements: ["Dean's List"],
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const filteredToppers = toppers.filter(
    (topper) => topper.semester === selectedSemester && topper.department === selectedDepartment,
  )

  const departments = [
    { value: "cs", label: "Computer Science" },
    { value: "ee", label: "Electrical Engineering" },
    { value: "me", label: "Mechanical Engineering" },
    { value: "ce", label: "Civil Engineering" },
    { value: "ch", label: "Chemical Engineering" },
  ]

  const getRankBadge = (rank) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-500" />
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />
    if (rank === 3) return <Medal className="h-5 w-5 text-amber-700" />
    return <span className="font-medium">{rank}</span>
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Topper List</h1>
        <p className="text-muted-foreground">View top performers in your batch and department</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Your Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">#24</div>
            <p className="text-muted-foreground">Out of 120 students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Your CGPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8.3</div>
            <p className="text-muted-foreground">Top CGPA is 9.8</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Gap to Top 10</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0.6</div>
            <p className="text-muted-foreground">Points needed to reach top 10</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-48">
            <label className="text-sm font-medium mb-1 block">Semester</label>
            <Select defaultValue="4" onValueChange={setSelectedSemester}>
              <SelectTrigger>
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Semester 1</SelectItem>
                <SelectItem value="2">Semester 2</SelectItem>
                <SelectItem value="3">Semester 3</SelectItem>
                <SelectItem value="4">Semester 4</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full sm:w-64">
            <label className="text-sm font-medium mb-1 block">Department</label>
            <Select defaultValue="cs" onValueChange={setSelectedDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept.value} value={dept.value}>
                    {dept.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-end">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export List
          </Button>
        </div>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-[#25b7ea]">
          <TabsTrigger value="list" className="gap-2">
            <Users className="h-4 w-4" />
            List View
          </TabsTrigger>
          <TabsTrigger value="cards" className="gap-2">
            <Award className="h-4 w-4" />
            Card View
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Performers</CardTitle>
              <CardDescription>
                Semester {selectedSemester} - {departments.find((d) => d.value === selectedDepartment)?.label}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Student
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Reg. No.
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        CGPA
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Achievements
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-background divide-y divide-border">
                    {filteredToppers.map((topper) => (
                      <tr key={topper.id} className={topper.rank <= 3 ? "bg-muted/30" : ""}>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted">
                            {getRankBadge(topper.rank)}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="rounded-full w-[40] h-[40]"
                                src={topper.image || "/placeholder.svg"}
                                alt={topper.name}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium">{topper.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">{topper.regNo}</td>
                        <td className="px-4 py-3">
                          <div className="text-sm font-medium">{topper.cgpa}</div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {topper.achievements.map((achievement, index) => (
                              <Badge key={index} variant="outline" className="bg-muted/50">
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cards" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredToppers.slice(0, 9).map((topper) => (
              <Card key={topper.id} className={topper.rank <= 3 ? "border-primary/50" : ""}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center h-8 w-8 rounded-full ${
                          topper.rank === 1
                            ? "bg-yellow-100 text-yellow-800"
                            : topper.rank === 2
                              ? "bg-gray-100 text-gray-800"
                              : topper.rank === 3
                                ? "bg-amber-100 text-amber-800"
                                : "bg-muted"
                        }`}
                      >
                        {getRankBadge(topper.rank)}
                      </div>
                      <CardTitle className="text-lg">{topper.name}</CardTitle>
                    </div>
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      {topper.cgpa} CGPA
                    </Badge>
                  </div>
                  <CardDescription>{topper.regNo}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <img
                      className="h-[64] w-[64] rounded-full border"
                      src={topper.image || "/placeholder.svg"}
                      alt={topper.name}
                    />
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">Achievements</div>
                      <div className="flex flex-wrap gap-1">
                        {topper.achievements.map((achievement, index) => (
                          <Badge key={index} variant="outline" className="bg-muted/50">
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default TopperList;

