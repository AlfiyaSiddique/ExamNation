import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { toast } from "@/components/ui/use-toast"

const examApplicationSchema = z.object({
  examType: z.enum(["regular", "backlog"], {
    required_error: "Please select an exam type.",
  }),
  semester: z.string({
    required_error: "Please select a semester.",
  }),
  subjects: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You must select at least one subject.",
  }),
  paymentMethod: z.enum(["credit", "debit", "netbanking", "upi"], {
    required_error: "Please select a payment method.",
  }),
  agreeToTerms: z.boolean().refine((value) => value === true, {
    message: "You must agree to the terms and conditions.",
  }),
})

const ExamApplication = ()=> {
  const [step, setStep] = useState("select")

  const form = useForm({
    resolver: zodResolver(examApplicationSchema),
    defaultValues: {
      examType: "regular",
      subjects: [],
      agreeToTerms: false,
    },
  })

  function onSubmit() {
    if (step === "select") {
      setStep("payment")
    } else if (step === "payment") {
      setStep("confirmation")
      // toast({
      //   title: "Application Submitted",
      //   description: "Your exam application has been submitted successfully.",
      // })
    }
  }

  const regularSubjects = [
    { id: "cs501", name: "Database Management Systems" },
    { id: "cs502", name: "Computer Networks" },
    { id: "cs503", name: "Operating Systems" },
    { id: "cs504", name: "Software Engineering" },
    { id: "cs505", name: "Web Development" },
  ]

  const backlogSubjects = [
    { id: "cs401", name: "Data Structures and Algorithms" },
    { id: "cs402", name: "Computer Architecture" },
    { id: "cs403", name: "Discrete Mathematics" },
  ]

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Exam Application</h1>
        <p className="text-muted-foreground">Apply for your upcoming examinations</p>
      </div>

      <div className="flex justify-between items-center mb-8 w-[70vw]">
      <div>
      <div className="flex items-center gap-2 w-[100%]">
          <div
            className={`font-bold p-4 h-8 w-8 rounded-full flex items-center justify-center ${step === "select" || step === "payment" || step === "confirmation" ? "bg-[#25b7ea] text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            1
          </div>
          <div className="text-sm font-medium">Select Exams</div>
        <Separator className={"w-[10vw]"} />
        </div>
      </div>
      <div>
      <div className="flex items-center gap-2">
          <div
            className={`font-bold p-4 h-8 w-8 rounded-full flex items-center justify-center ${step === "payment" || step === "confirmation" ? "bg-[#25b7ea] text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            2
          </div>
          <div className="text-sm font-medium">Payment</div>
        <Separator className="w-[25vw]" />
        </div>
      </div>
        <div className="flex items-center gap-2">
          <div
            className={`font-bold p-4 h-8 w-8 rounded-full flex items-center justify-center ${step === "confirmation" ? "bg-[#25b7ea] text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            3
          </div>
          <div className="text-sm font-medium">Confirmation</div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {step === "select" && (
            <Card>
              <CardHeader>
                <CardTitle>Select Exams</CardTitle>
                <CardDescription>Choose the exams you want to apply for</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="examType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Exam Type</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="regular" />
                            </FormControl>
                            <FormLabel className="font-normal">Regular Exams</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="backlog" />
                            </FormControl>
                            <FormLabel className="font-normal">Backlog Exams</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="semester"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Semester</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select semester" />
                          </SelectTrigger>
                        </FormControl>
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
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subjects"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">Subjects</FormLabel>
                        <FormDescription>Select the subjects you want to apply for</FormDescription>
                      </div>
                      {form.watch("examType") === "regular" ? (
                        <div className="space-y-2">
                          {regularSubjects.map((subject) => (
                            <FormField
                              key={subject.id}
                              control={form.control}
                              name="subjects"
                              render={({ field }) => {
                                return (
                                  <FormItem key={subject.id} className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(subject.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, subject.id])
                                            : field.onChange(field.value?.filter((value) => value !== subject.id))
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">{subject.name}</FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {backlogSubjects.map((subject) => (
                            <FormField
                              key={subject.id}
                              control={form.control}
                              name="subjects"
                              render={({ field }) => {
                                return (
                                  <FormItem key={subject.id} className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(subject.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, subject.id])
                                            : field.onChange(field.value?.filter((value) => value !== subject.id))
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">{subject.name}</FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                      )}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit">Continue to Payment</Button>
              </CardFooter>
            </Card>
          )}

          {step === "payment" && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>Complete the payment to submit your application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-md border p-4">
                  <div className="font-medium">Fee Summary</div>
                  <Separator className="my-2" />
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Exam Fee ({form.watch("subjects").length} subjects)</span>
                      <span>₹{form.watch("subjects").length * 500}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Application Fee</span>
                      <span>₹100</span>
                    </div>
                    {form.watch("examType") === "backlog" && (
                      <div className="flex justify-between text-sm">
                        <span>Backlog Fee</span>
                        <span>₹200</span>
                      </div>
                    )}
                    <Separator className="my-2" />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>
                        ₹{form.watch("subjects").length * 500 + 100 + (form.watch("examType") === "backlog" ? 200 : 0)}
                      </span>
                    </div>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Payment Method</FormLabel>
                      <FormControl>
                        <Tabs defaultValue="credit" onValueChange={field.onChange}>
                          <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="credit">Credit Card</TabsTrigger>
                            <TabsTrigger value="debit">Debit Card</TabsTrigger>
                            <TabsTrigger value="netbanking">Net Banking</TabsTrigger>
                            <TabsTrigger value="upi">UPI</TabsTrigger>
                          </TabsList>
                          <TabsContent value="credit" className="space-y-4 mt-4">
                            <div className="grid gap-2">
                              <FormLabel>Card Number</FormLabel>
                              <FormControl>
                                <input
                                  type="text"
                                  placeholder="1234 5678 9012 3456"
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                              </FormControl>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="grid gap-2">
                                <FormLabel>Expiry Date</FormLabel>
                                <FormControl>
                                  <input
                                    type="text"
                                    placeholder="MM/YY"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  />
                                </FormControl>
                              </div>
                              <div className="grid gap-2">
                                <FormLabel>CVV</FormLabel>
                                <FormControl>
                                  <input
                                    type="text"
                                    placeholder="123"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  />
                                </FormControl>
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent value="debit" className="space-y-4 mt-4">
                            <div className="grid gap-2">
                              <FormLabel>Card Number</FormLabel>
                              <FormControl>
                                <input
                                  type="text"
                                  placeholder="1234 5678 9012 3456"
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                              </FormControl>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="grid gap-2">
                                <FormLabel>Expiry Date</FormLabel>
                                <FormControl>
                                  <input
                                    type="text"
                                    placeholder="MM/YY"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  />
                                </FormControl>
                              </div>
                              <div className="grid gap-2">
                                <FormLabel>CVV</FormLabel>
                                <FormControl>
                                  <input
                                    type="text"
                                    placeholder="123"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  />
                                </FormControl>
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent value="netbanking" className="space-y-4 mt-4">
                            <div className="grid gap-2">
                              <FormLabel>Select Bank</FormLabel>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your bank" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="sbi">State Bank of India</SelectItem>
                                  <SelectItem value="hdfc">HDFC Bank</SelectItem>
                                  <SelectItem value="icici">ICICI Bank</SelectItem>
                                  <SelectItem value="axis">Axis Bank</SelectItem>
                                  <SelectItem value="kotak">Kotak Mahindra Bank</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </TabsContent>
                          <TabsContent value="upi" className="space-y-4 mt-4">
                            <div className="grid gap-2">
                              <FormLabel>UPI ID</FormLabel>
                              <FormControl>
                                <input
                                  type="text"
                                  placeholder="username@upi"
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                              </FormControl>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="agreeToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>I agree to the terms and conditions</FormLabel>
                        <FormDescription>
                          By submitting this application, you confirm that all information provided is accurate.
                        </FormDescription>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={() => setStep("select")}>
                  Back
                </Button>
                <Button type="submit">Complete Payment</Button>
              </CardFooter>
            </Card>
          )}

          {step === "confirmation" && (
            <Card>
              <CardHeader>
                <CardTitle>Application Confirmed</CardTitle>
                <CardDescription>Your exam application has been submitted successfully</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-md border p-4 bg-muted/50">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-8 w-8"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-medium">Payment Successful</h3>
                    <p className="text-muted-foreground">Transaction ID: TXN123456789</p>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Application ID</span>
                      <span className="font-medium">APP987654321</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Exam Type</span>
                      <span className="font-medium capitalize">{form.getValues("examType")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Semester</span>
                      <span className="font-medium">Semester {form.getValues("semester")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subjects</span>
                      <span className="font-medium">{form.getValues("subjects").length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount Paid</span>
                      <span className="font-medium">
                        ₹
                        {form.getValues("subjects").length * 500 +
                          100 +
                          (form.getValues("examType") === "backlog" ? 200 : 0)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-center text-muted-foreground text-sm">
                  <p>A confirmation email has been sent to your registered email address.</p>
                  <p>You can download your hall ticket once it's available.</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild>
                  <a href="/student/dashboard">Return to Dashboard</a>
                </Button>
              </CardFooter>
            </Card>
          )}
        </form>
      </Form>
    </div>
  )
}

export default ExamApplication

