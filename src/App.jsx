import { Button } from "@mui/material";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./Student/Layout";
import SDashboard from "./Student/Dashboard";
import ExamApplication from "./Student/ExamApplication.jsx";
import HallTicket from "./Student/HallTicket";
import BacklogFeeReport from "./Student/BacklogFeeReport";
import ResultAnalysis from "./Student/ResultAnalysis";
import TopperList from "./Student/TopperList";


function App() {
  return (
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/student/dashboard" element={<Layout><SDashboard/></Layout>} />
      <Route path="/student/exam-application" element={<Layout><ExamApplication/></Layout>} />
      <Route path="/student/hall-ticket" element={<Layout><HallTicket/></Layout>} />
      <Route path="/student/backlog-fee-report" element={<Layout><BacklogFeeReport/></Layout>} />
      <Route path="/student/result-analysis" element={<Layout><ResultAnalysis/></Layout>} />
      <Route path="/student/topper-list" element={<Layout><TopperList/></Layout>} />

    </Routes>
  );
}

export default App;
