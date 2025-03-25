import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Printer } from "lucide-react"

const  HallTicket = () =>{
  const [selectedSemester, setSelectedSemester] = useState("5")
  const [selectedExamType, setSelectedExamType] = useState("regular")

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Hall Ticket Generation</h1>
        <p className="text-muted-foreground">Download your hall tickets for upcoming examinations</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Select Exam</CardTitle>
          <CardDescription>Choose the exam for which you want to download the hall ticket</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Exam Type</label>
              <Tabs defaultValue="regular" onValueChange={setSelectedExamType}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="regular">Regular</TabsTrigger>
                  <TabsTrigger value="backlog">Backlog</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Semester</label>
              <Select defaultValue="5" onValueChange={setSelectedSemester}>
                <SelectTrigger>
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
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
          </div>
        </CardContent>
        <CardFooter>
          <Button className={"bg-[#25b7ea]"}>View Hall Ticket</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hall Ticket</CardTitle>
          <CardDescription>
            Semester {selectedSemester} - {selectedExamType === "regular" ? "Regular" : "Backlog"} Examination
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-md p-6 space-y-6">
            <div className="flex flex-col items-center text-center border-b pb-4">
              <div className="font-bold text-xl mb-1">University of Technology</div>
              <div className="text-muted-foreground mb-2">Examination Department</div>
              <div className="font-semibold text-lg">HALL TICKET</div>
              <div className="text-sm text-muted-foreground">
                Semester {selectedSemester} - {selectedExamType === "regular" ? "Regular" : "Backlog"} Examination
                2023-24
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-sm text-muted-foreground">Registration No.</div>
                    <div className="font-medium">ST12345</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Exam Roll No.</div>
                    <div className="font-medium">EX987654</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground">Student Name</div>
                  <div className="font-medium">John Doe</div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground">Program</div>
                  <div className="font-medium">Bachelor of Technology in Computer Science</div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-sm text-muted-foreground">Semester</div>
                    <div className="font-medium">{selectedSemester}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Academic Year</div>
                    <div className="font-medium">2023-24</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="border h-32 w-32 flex items-center justify-center bg-muted">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Student Photo"
                    className="object-cover w-[128px] h-[128px]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="font-medium mb-2">Examination Schedule</div>
              <div className="border rounded-md overflow-hidden">
                <table className="min-w-full divide-y divide-border">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Subject Code
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Subject Name
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-background divide-y divide-border">
                    <tr>
                      <td className="px-4 py-2 text-sm">15 Jun 2023</td>
                      <td className="px-4 py-2 text-sm">10:00 AM - 1:00 PM</td>
                      <td className="px-4 py-2 text-sm">CS501</td>
                      <td className="px-4 py-2 text-sm">Database Management Systems</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm">18 Jun 2023</td>
                      <td className="px-4 py-2 text-sm">10:00 AM - 1:00 PM</td>
                      <td className="px-4 py-2 text-sm">CS502</td>
                      <td className="px-4 py-2 text-sm">Computer Networks</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm">21 Jun 2023</td>
                      <td className="px-4 py-2 text-sm">10:00 AM - 1:00 PM</td>
                      <td className="px-4 py-2 text-sm">CS503</td>
                      <td className="px-4 py-2 text-sm">Operating Systems</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm">24 Jun 2023</td>
                      <td className="px-4 py-2 text-sm">10:00 AM - 1:00 PM</td>
                      <td className="px-4 py-2 text-sm">CS504</td>
                      <td className="px-4 py-2 text-sm">Software Engineering</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-sm">27 Jun 2023</td>
                      <td className="px-4 py-2 text-sm">10:00 AM - 1:00 PM</td>
                      <td className="px-4 py-2 text-sm">CS505</td>
                      <td className="px-4 py-2 text-sm">Web Development</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Examination Center</div>
                <div className="font-medium">Main Campus - Block A</div>
                <div className="text-sm text-muted-foreground">University of Technology</div>
              </div>
              <div className="flex flex-col items-end justify-end">
                <div className="h-16 w-32 border-b border-dashed flex items-center justify-center">
                  <div className="text-xs text-muted-foreground">Controller of Examinations</div>
                </div>
              </div>
            </div>

            <div className="border-t pt-4 text-sm text-muted-foreground space-y-1">
              <div className="font-medium">Instructions:</div>
              <ul className="list-disc list-inside space-y-1">
                <li>Candidates must bring this hall ticket to the examination hall.</li>
                <li>Candidates should reach the examination center 30 minutes before the exam.</li>
                <li>Mobile phones and electronic devices are strictly prohibited.</li>
                <li>Candidates must follow all examination rules and regulations.</li>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="gap-2 text-[#25b7ea]">
            <Printer className="h-4 w-4 text-[#25b7ea]" />
            Print
          </Button>
          <Button className="gap-2 bg-[#25b7ea]">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default HallTicket;
