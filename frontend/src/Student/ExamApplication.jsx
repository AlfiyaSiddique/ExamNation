import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import axios from "axios";
// import { useSnackbar } from "@/context/SnackBarContext";


const examSubjectSchema = z.object({
  semester: z.string().min(1, { message: "Please select a semester." }),
  subjects: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You must select at least one subject.",
  }),
});


const paymentTypeSchema = z
  .object({
    paymentMethod: z.enum(["credit", "debit", "netbanking", "upi"], {
      required_error: "Please select a payment method.",
    }),
    agreeToTerms: z.boolean().refine((value) => value === true, {
      message: "You must agree to the terms and conditions.",
    }),
    cardNumber: z.string().optional(),
    cvv: z.string().optional(),
    expiryDate: z.string().optional(),
    netbanking: z.string().optional(),
    upi: z.string().optional(),
  })
  .superRefine((data, ctx) => {

    if (["credit", "debit"].includes(data.paymentMethod)) {
      if (!data.cardNumber || data.cardNumber.trim() === "" || data.cardNumber.length < 12) {
        ctx.addIssue({
          path: ["cardNumber"],
          message: "Please enter valid Card Number",
          code: z.ZodIssueCode.custom
        });
      }
  
      if (!data.cvv || data.cvv.trim() === "" || data.cvv.length < 3) {
        ctx.addIssue({
          path: ["cvv"],
          message: "Please enter valid CVV",
          code: z.ZodIssueCode.custom
        });
      }
 
      if (!data.expiryDate || data.expiryDate.trim() === "" || data.expiryDate.length !== 5) {
        ctx.addIssue({
          path: ["expiryDate"],
          message: "Please enter valid Expiry Date",
          code: z.ZodIssueCode.custom
        });
      }
    }

    if (data.paymentMethod === "netbanking" && (!data.netbanking || data.netbanking.trim() === "")) {
      ctx.addIssue({
        path: ["netbanking"],
        message: "Please select a bank",
        code: z.ZodIssueCode.custom
      });
    }

    if (data.paymentMethod === "upi" && (!data.upi || data.upi.trim() === "")) {
      ctx.addIssue({
        path: ["upi"],
        message: "UPI ID is required",
        code: z.ZodIssueCode.custom
      });
    }
  });
  
  
  const ExamApplication = () => {
    const [step, setStep] = useState("select");
    // const [regularSubjects, setregularSubjects] = useState([]);
  // const {showSnackbar} = useSnackbar()
  const form = useForm({
    resolver: zodResolver(examSubjectSchema),
    defaultValues: {
      examType: "regular",
      subjects: [],
      semester: "1",
    },
    mode: "onSubmit",
  });

  const payment = useForm({
    resolver: zodResolver(paymentTypeSchema),
    defaultValues: {
      paymentMethod: "credit",
      cardNumber: "",
      cvv: "",
      expiryDate: "",
      netbanking: "",
      upi: "",
      agreeToTerms: false,
    },
    mode: "onSubmit", // Ensures validation only on submission
  });

  const onSubmit = async (e)=> {
    e.preventDefault();
    if (step === "select") {
      form.trigger().then((isValid) => {
        if (isValid) {
          setStep("payment");
        }
      });
    } 
    if (step === "payment") {
      payment.trigger().then((isValid) => {
        if (isValid) {
          setStep("confirmation");
        }
      });
    }
    const applicationData = {
      ...form.getValues(), ...payment.getValues()
    }
    console.log(applicationData)
      // try {
      //       const { data } = await axios.post(
      //           `${import.meta.env.VITE_API_URL}/application/submit`, 
      //           applicationData, 
      //           {
      //               headers: { "Content-Type": "application/json" },
      //               withCredentials: true,
      //           }
      //       );
      
      //       if (data.success) {
      //         showSnackbar(data.message, "success")
      //         navigator("/student/hall-ticket");
      //         showSnackbar("Download hall-ticket once application is verified", "success")

      //       }
      //   } catch (error) {
      //       console.error(error);
      //   }
  }

  const semester =form.watch("semester");

  useEffect(()=>{
    axios.post(`${import.meta.env.VITE_API_URL}/subject/regular`, {semester})
    .then((data)=>{
     console.log(data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [semester])

 let regularSubjects = [
    { id: "cs501", name: "Database Management Systems" },
    { id: "cs502", name: "Computer Networks" },
    { id: "cs503", name: "Operating Systems" },
    { id: "cs504", name: "Software Engineering" },
    { id: "cs505", name: "Web Development" },
  ];



  const backlogSubjects = [
    { id: "cs401", name: "Data Structures and Algorithms" },
    { id: "cs402", name: "Computer Architecture" },
    { id: "cs403", name: "Discrete Mathematics" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Exam Application</h1>
        <p className="text-muted-foreground">
          Apply for your upcoming examinations
        </p>
      </div>

      <div className="flex justify-between items-center mb-8 w-[70vw]">
        <div>
          <div className="flex items-center gap-2 w-[100%]">
            <div
              className={`font-bold p-4 h-8 w-8 rounded-full flex items-center justify-center ${
                step === "select" ||
                step === "payment" ||
                step === "confirmation"
                  ? "bg-[#25b7ea] text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
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
              className={`font-bold p-4 h-8 w-8 rounded-full flex items-center justify-center ${
                step === "payment" || step === "confirmation"
                  ? "bg-[#25b7ea] text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              2
            </div>
            <div className="text-sm font-medium">Payment</div>
            <Separator className="w-[25vw]" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`font-bold p-4 h-8 w-8 rounded-full flex items-center justify-center ${
              step === "confirmation"
                ? "bg-[#25b7ea] text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            3
          </div>
          <div className="text-sm font-medium">Confirmation</div>
        </div>
      </div>

          {step === "select" && (
      <Form {...form}>
        <form onSubmit={(e) => onSubmit(e)} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Select Exams</CardTitle>
                <CardDescription>
                  Choose the exams you want to apply for
                </CardDescription>
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
                            <FormLabel className="font-normal">
                              Regular Exams
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="backlog" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Backlog Exams
                            </FormLabel>
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
                      <Select onValueChange={field.onChange}>
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
                        <FormDescription>
                          Select the subjects you want to apply for
                        </FormDescription>
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
                                  <FormItem
                                    key={subject.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(
                                          subject.name
                                        )}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                                ...field.value,
                                                subject.name,
                                              ])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) =>
                                                    value !== subject.id
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {subject.name}
                                    </FormLabel>
                                  </FormItem>
                                );
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
                                  <FormItem
                                    key={subject.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(
                                          subject.id
                                        )}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                                ...field.value,
                                                subject.id,
                                              ])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) =>
                                                    value !== subject.id
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {subject.name}
                                    </FormLabel>
                                  </FormItem>
                                );
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
                <Button className={"bg-[#25b7ea] font-bold cursor-pointer"} type="submit">Continue to Payment</Button>
              </CardFooter>
            </Card>
        </form>
        </Form>
          )}

          {step === "payment" && (
            <Form {...payment}>
        <form onSubmit={(e) => onSubmit(e)} className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>
                  Complete the payment to submit your application
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-md border p-4">
                  <div className="font-medium">Fee Summary</div>
                  <Separator className="my-2" />
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>
                        Exam Fee ({form.watch("subjects").length} subjects)
                      </span>
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
                        ₹
                        {form.watch("subjects").length * 500 +
                          100 +
                          (form.watch("examType") === "backlog" ? 200 : 0)}
                      </span>
                    </div>
                  </div>
                </div>

                <FormField
                  control={payment.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Payment Method</FormLabel>
                      <FormControl>
                        <Tabs
                          defaultValue="credit"
                          onValueChange={field.onChange}
                        >
                          <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="credit">
                              Credit Card
                            </TabsTrigger>
                            <TabsTrigger value="debit">Debit Card</TabsTrigger>
                            <TabsTrigger value="netbanking">
                              Net Banking
                            </TabsTrigger>
                            <TabsTrigger value="upi">UPI</TabsTrigger>
                          </TabsList>
                          <TabsContent
                            value="credit"
                            className="space-y-4 mt-4"
                          >
                            <FormField
                              control={payment.control}
                              name="cardNumber"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Card Number</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="text"
                                      placeholder="1234 5678 9012 3456"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />{" "}
                                  {/* This will show the error message */}
                                </FormItem>
                              )}
                            />
                            <div className="grid grid-cols-2 gap-4">
                              <FormField
                                control={payment.control}
                                name="expiryDate"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Expiry Date</FormLabel>
                                    <FormControl>
                                    <Input
                                      type="text"
                                      placeholder="MM/YY"
                                      {...field}
                                      className={"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"}
                                    />
                                    </FormControl> {" "}
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={payment.control}
                                name="cvv"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>CVV</FormLabel>
                                    <FormControl>
                                    <Input
                                      type="text"
                                      placeholder="123"
                                      {...field}
                                      className={"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"}
                                    />
                                    </FormControl>{" "}
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </TabsContent>

                          <TabsContent value="debit" className="space-y-4 mt-4">
                            <FormField
                              control={payment.control}
                              name="cardNumber"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Card Number</FormLabel>
                                  <FormControl>
                                  <Input
                                      type="text"
                                      placeholder="1234 5678 9012 3456"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />{" "}
                                </FormItem>
                              )}
                            />
                            <div className="grid grid-cols-2 gap-4">
                              <FormField
                                control={payment.control}
                                name="expiryDate"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Expiry Date</FormLabel>
                                    <FormControl>
                                    <Input
                                      type="text"
                                      placeholder="MM/YY"
                                      {...field}
                                      className={"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"}
                                    />
                                    </FormControl>
                                    <FormMessage /> {" "}
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={payment.control}
                                name="cvv"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>CVV</FormLabel>
                                    <FormControl>
                                    <Input
                                      type="text"
                                      placeholder="123"
                                      {...field}
                                      className={"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"}
                                    />
                                    </FormControl>
                                    <FormMessage /> {" "}
                                  </FormItem>
                                )}
                              />
                            </div>
                          </TabsContent>

                          {/* For netbanking */}
                          <TabsContent
                            value="netbanking"
                            className="space-y-4 mt-4"
                          >
                            <FormField
                              control={payment.control}
                              name="netbanking"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Select Bank</FormLabel>
                                  <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select your bank" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="sbi">
                                        State Bank of India
                                      </SelectItem>
                                      <SelectItem value="hdfc">
                                        HDFC Bank
                                      </SelectItem>
                                      <SelectItem value="icici">
                                        ICICI Bank
                                      </SelectItem>
                                      <SelectItem value="axis">
                                        Axis Bank
                                      </SelectItem>
                                      <SelectItem value="kotak">
                                        Kotak Mahindra Bank
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage /> {" "}
                                </FormItem>
                              )}
                            />
                          </TabsContent>

                          {/* For UPI */}
                          <TabsContent value="upi" className="space-y-4 mt-4">
                            <FormField
                              control={payment.control}
                              name="upi"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>UPI ID</FormLabel>
                                  <FormControl>
                                  <Input
                                      type="text"
                                      placeholder="username@upi"
                                      {...field}
                                      className={"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"}
                                    />
                                  </FormControl>
                                  <FormMessage /> {" "}
                                </FormItem>
                              )}
                            />
                          </TabsContent>
                        </Tabs>
                      </FormControl>
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />

                <FormField
                  control={payment.control}
                  name="agreeToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to the terms and conditions
                        </FormLabel>
                        <FormDescription>
                          By submitting this application, you confirm that all
                          information provided is accurate.
                        </FormDescription>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setStep("select")}
                >
                  Back
                </Button>
                <Button type="submit" className={"bg-[#25b7ea] font-bold cursor-pointer"}>Complete Payment</Button>
              </CardFooter>
            </Card>
            </form>
            </Form>
          )}

          {step === "confirmation" && (
            <Card>
              <CardHeader>
                <CardTitle>Application Confirmed</CardTitle>
                <CardDescription>
                  Your exam application has been submitted successfully
                </CardDescription>
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
                    <p className="text-muted-foreground">
                      Transaction ID: TXN123456789
                    </p>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Application ID
                      </span>
                      <span className="font-medium">APP987654321</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Exam Type</span>
                      <span className="font-medium capitalize">
                        {form.getValues("examType")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Semester</span>
                      <span className="font-medium">
                        Semester {form.getValues("semester")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subjects</span>
                      <span className="font-medium">
                        {form.getValues("subjects").length}
                      </span>
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
                  <p>
                    A confirmation email has been sent to your registered email
                    address.
                  </p>
                  <p>You can download your hall ticket once it's available.</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild className={"bg-[#25b7ea] font-bold cursor-pointer"}>
                  <a href="/student/dashboard">Return to Dashboard</a>
                </Button>
              </CardFooter>
            </Card>
          )}
       
    </div>
  );
};

export default ExamApplication;
