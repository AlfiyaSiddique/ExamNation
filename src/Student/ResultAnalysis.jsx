import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, TrendingUp, TrendingDown, Minus, BarChart3, PieChart, LineChart } from "lucide-react"

const ResultAnalysis = () =>{
  const [selectedSemester, setSelectedSemester] = useState("all")

  const semesterResults = [
    {
      semester: 1,
      sgpa: 8.2,
      cgpa: 8.2,
      year: "2021-22",
      subjects: [
        { code: "CS101", name: "Introduction to Programming", grade: "A", credits: 4, percentage: 85 },
        { code: "CS102", name: "Digital Logic", grade: "B+", credits: 4, percentage: 78 },
        { code: "MA101", name: "Calculus", grade: "A-", credits: 4, percentage: 82 },
        { code: "PH101", name: "Physics", grade: "B", credits: 3, percentage: 75 },
        { code: "HS101", name: "Communication Skills", grade: "A", credits: 2, percentage: 88 },
      ],
    },
    {
      semester: 2,
      sgpa: 8.5,
      cgpa: 8.35,
      year: "2021-22",
      subjects: [
        { code: "CS201", name: "Object Oriented Programming", grade: "A", credits: 4, percentage: 87 },
        { code: "CS202", name: "Data Structures", grade: "A-", credits: 4, percentage: 83 },
        { code: "MA201", name: "Linear Algebra", grade: "B+", credits: 4, percentage: 79 },
        { code: "PH201", name: "Electronics", grade: "A-", credits: 3, percentage: 82 },
        { code: "HS201", name: "Economics", grade: "A", credits: 2, percentage: 90 },
      ],
    },
    {
      semester: 3,
      sgpa: 7.8,
      cgpa: 8.17,
      year: "2022-23",
      subjects: [
        { code: "CS301", name: "Algorithms", grade: "B+", credits: 4, percentage: 78 },
        { code: "CS302", name: "Computer Architecture", grade: "B", credits: 4, percentage: 75 },
        { code: "CS303", name: "Operating Systems", grade: "A-", credits: 4, percentage: 82 },
        { code: "MA301", name: "Probability", grade: "B+", credits: 3, percentage: 79 },
        { code: "HS301", name: "Management", grade: "A", credits: 2, percentage: 85 },
      ],
    },
    {
      semester: 4,
      sgpa: 8.7,
      cgpa: 8.3,
      year: "2022-23",
      subjects: [
        { code: "CS401", name: "Database Systems", grade: "A", credits: 4, percentage: 88 },
        { code: "CS402", name: "Computer Networks", grade: "A", credits: 4, percentage: 90 },
        { code: "CS403", name: "Theory of Computation", grade: "B+", credits: 4, percentage: 78 },
        { code: "CS404", name: "Software Engineering", grade: "A-", credits: 3, percentage: 83 },
        { code: "HS401", name: "Ethics in Computing", grade: "A", credits: 2, percentage: 92 },
      ],
    },
  ]

  const filteredResults =
    selectedSemester === "all"
      ? semesterResults
      : semesterResults.filter((result) => result.semester.toString() === selectedSemester)

  const gradeToPoints = (grade) => {
    switch (grade) {
      case "A+":
        return 10
      case "A":
        return 9
      case "A-":
        return 8.5
      case "B+":
        return 8
      case "B":
        return 7
      case "B-":
        return 6.5
      case "C+":
        return 6
      case "C":
        return 5
      case "C-":
        return 4.5
      case "D":
        return 4
      case "F":
        return 0
      default:
        return 0
    }
  }

  const getGradeColor = (grade) => {
    const point = gradeToPoints(grade)
    if (point >= 8.5) return "text-green-600"
    if (point >= 7) return "text-blue-600"
    if (point >= 5) return "text-yellow-600"
    return "text-red-600"
  }

  const getTrendIcon = (current, previous) => {
    if (previous === null) return <Minus className="h-4 w-4 text-gray-500" />
    if (current > previous) return <TrendingUp className="h-4 w-4 text-green-600" />
    if (current < previous) return <TrendingDown className="h-4 w-4 text-red-600" />
    return <Minus className="h-4 w-4 text-gray-500" />
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Result Analysis Report</h1>
        <p className="text-muted-foreground">Analyze your academic performance across semesters</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Current CGPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold">8.3</div>
              <div className="flex items-center text-sm text-green-600 mb-1">
                <TrendingUp className="h-4 w-4 mr-1" />
                +0.13
              </div>
            </div>
            <p className="text-muted-foreground">Last updated after Semester 4</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Best Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8.7</div>
            <p className="text-muted-foreground">SGPA in Semester 4</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Total Credits Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">68</div>
            <p className="text-muted-foreground">Out of 72 attempted</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-48">
            <label className="text-sm font-medium mb-1 block">Semester</label>
            <Select defaultValue="all" onValueChange={setSelectedSemester}>
              <SelectTrigger>
                <SelectValue placeholder="All Semesters" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Semesters</SelectItem>
                <SelectItem value="1">Semester 1</SelectItem>
                <SelectItem value="2">Semester 2</SelectItem>
                <SelectItem value="3">Semester 3</SelectItem>
                <SelectItem value="4">Semester 4</SelectItem>
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

      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-[#25b7ea] font-bold">
          <TabsTrigger value="performance" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            Performance
          </TabsTrigger>
          <TabsTrigger value="subjects" className="gap-2">
            <PieChart className="h-4 w-4" />
            Subject Analysis
          </TabsTrigger>
          <TabsTrigger value="trends" className="gap-2">
            <LineChart className="h-4 w-4" />
            Trends
          </TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Semester-wise Performance</CardTitle>
              <CardDescription>Your GPA and performance across semesters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Semester
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Academic Year
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        SGPA
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Trend
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        CGPA
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-background divide-y divide-border">
                    {filteredResults.map((result, index) => (
                      <tr key={result.semester}>
                        <td className="px-4 py-3 text-sm font-medium">Semester {result.semester}</td>
                        <td className="px-4 py-3 text-sm">{result.year}</td>
                        <td className="px-4 py-3 text-sm font-medium">{result.sgpa}</td>
                        <td className="px-4 py-3 text-sm">
                          {getTrendIcon(result.sgpa, index > 0 ? semesterResults[index - 1].sgpa : null)}
                        </td>
                        <td className="px-4 py-3 text-sm font-medium">{result.cgpa}</td>
                        <td className="px-4 py-3 text-sm">
                          <Badge
                            variant="outline"
                            className={
                              result.sgpa >= 8.5
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : result.sgpa >= 7.5
                                  ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                  : result.sgpa >= 6.0
                                    ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                    : "bg-red-100 text-red-800 hover:bg-red-100"
                            }
                          >
                            {result.sgpa >= 8.5
                              ? "Excellent"
                              : result.sgpa >= 7.5
                                ? "Good"
                                : result.sgpa >= 6.0
                                  ? "Average"
                                  : "Needs Improvement"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">GPA Visualization</h3>
                <div className="h-64 border rounded-md p-4 flex items-end justify-around gap-2">
                  {semesterResults.map((result) => (
                    <div key={result.semester} className="flex flex-col items-center gap-2">
                      <div className="flex flex-col items-center">
                        <div className="text-xs text-muted-foreground">SGPA</div>
                        <div
                          className="w-16 bg-primary rounded-t-md flex items-end justify-center text-primary-foreground text-xs font-medium"
                          style={{ height: `${(result.sgpa / 10) * 200}px`, backgroundColor: "#25b7ea" }}
                        >
                          {result.sgpa}
                        </div>
                      </div>
                      <div className="text-xs font-medium">Sem {result.semester}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subjects" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Subject-wise Analysis</CardTitle>
              <CardDescription>Detailed breakdown of your performance in each subject</CardDescription>
            </CardHeader>
            <CardContent>
              {filteredResults.map((result) => (
                <div key={result.semester} className="mb-8">
                  <h3 className="text-lg font-medium mb-2">
                    Semester {result.semester} ({result.year})
                  </h3>
                  <div className="border rounded-md overflow-hidden">
                    <table className="min-w-full divide-y divide-border">
                      <thead className="bg-muted">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Subject Code
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Subject Name
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Credits
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Grade
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Percentage
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-background divide-y divide-border">
                        {result.subjects.map((subject) => (
                          <tr key={subject.code}>
                            <td className="px-4 py-3 text-sm">{subject.code}</td>
                            <td className="px-4 py-3 text-sm font-medium">{subject.name}</td>
                            <td className="px-4 py-3 text-sm">{subject.credits}</td>
                            <td className="px-4 py-3 text-sm font-medium">
                              <span className={getGradeColor(subject.grade)}>{subject.grade}</span>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              <div className="flex items-center gap-2">
                                <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                                  <div
                                    className={`h-full rounded-full ${
                                      subject.percentage >= 85
                                        ? "bg-green-500"
                                        : subject.percentage >= 75
                                          ? "bg-blue-500"
                                          : subject.percentage >= 60
                                            ? "bg-yellow-500"
                                            : "bg-red-500"
                                    }`}
                                    style={{ width: `${subject.percentage}%` }}
                                  ></div>
                                </div>
                                <span>{subject.percentage}%</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              {selectedSemester !== "all" && filteredResults.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-4">Grade Distribution</h3>
                  <div className="h-64 border rounded-md p-4 flex items-center justify-center">
                    <div className="flex gap-4 items-end h-48">
                      {["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F"].map((grade) => {
                        const count = filteredResults[0].subjects.filter((s) => s.grade === grade).length
                        return (
                          <div key={grade} className="flex flex-col items-center gap-2">
                            <div
                              className={`w-8 rounded-t-md flex items-end justify-center text-primary-foreground text-xs font-medium ${
                                grade.startsWith("A")
                                  ? "bg-green-500"
                                  : grade.startsWith("B")
                                    ? "bg-blue-500"
                                    : grade.startsWith("C")
                                      ? "bg-yellow-500"
                                      : "bg-red-500"
                              }`}
                              style={{ height: count ? `${count * 40}px` : "0" }}
                            >
                              {count > 0 && count}
                            </div>
                            <div className="text-xs font-medium">{grade}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>Track your academic progress over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">SGPA vs CGPA Trend</h3>
                  <div className="h-64 border rounded-md p-4 flex items-center justify-center">
                    <div className="w-full h-48 relative">
                      {/* X-axis */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted"></div>
                      {/* Y-axis */}
                      <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-muted"></div>

                      {/* SGPA Line */}
                      <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polyline
                          points={semesterResults
                            .map(
                              (result, index) =>
                                `${(index / (semesterResults.length - 1)) * 100}, ${100 - (result.sgpa / 10) * 100}`,
                            )
                            .join(" ")}
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                        />
                      </svg>

                      {/* CGPA Line */}
                      <svg className="absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polyline
                          points={semesterResults
                            .map(
                              (result, index) =>
                                `${(index / (semesterResults.length - 1)) * 100}, ${100 - (result.cgpa / 10) * 100}`,
                            )
                            .join(" ")}
                          fill="none"
                          stroke="hsl(var(--muted-foreground))"
                          strokeWidth="2"
                          strokeDasharray="4"
                        />
                      </svg>

                      {/* Semester labels */}
                      {semesterResults.map((result, index) => (
                        <div
                          key={result.semester}
                          className="absolute bottom-2 text-xs font-medium"
                          style={{
                            left: `${(index / (semesterResults.length - 1)) * 100}%`,
                            transform: "translateX(-50%)",
                          }}
                        >
                          {result.semester}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-xs">SGPA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                      <span className="text-xs">CGPA</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Subject Performance by Category</h3>
                  <div className="h-64 border rounded-md p-4">
                    <div className="h-full flex flex-col justify-between">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="text-sm font-medium">Core CS</div>
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                          <div className="text-xs text-muted-foreground">8.5 GPA</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm font-medium">Mathematics</div>
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: "80%" }}></div>
                          </div>
                          <div className="text-xs text-muted-foreground">8.0 GPA</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="text-sm font-medium">Physics</div>
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-500 rounded-full" style={{ width: "78%" }}></div>
                          </div>
                          <div className="text-xs text-muted-foreground">7.8 GPA</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm font-medium">Humanities</div>
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 rounded-full" style={{ width: "89%" }}></div>
                          </div>
                          <div className="text-xs text-muted-foreground">8.9 GPA</div>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="text-sm font-medium">Overall Performance</div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "83%" }}></div>
                        </div>
                        <div className="text-xs text-muted-foreground">8.3 CGPA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Performance Insights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-2">Strengths</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 shrink-0">
                          1
                        </div>
                        <div>Consistent performance in Humanities subjects with an average GPA of 8.9</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 shrink-0">
                          2
                        </div>
                        <div>Strong improvement in Core CS subjects in Semester 4</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-800 shrink-0">
                          3
                        </div>
                        <div>Overall CGPA shows an upward trend</div>
                      </li>
                    </ul>
                  </div>
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-2">Areas for Improvement</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 shrink-0">
                          1
                        </div>
                        <div>Performance in Mathematics subjects could be improved</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 shrink-0">
                          2
                        </div>
                        <div>Slight dip in performance during Semester 3</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 shrink-0">
                          3
                        </div>
                        <div>Physics subjects show lower grades compared to other areas</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download Full Analysis
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ResultAnalysis;
