import { Button } from "@mui/material";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./Student/Layout";
import SDashboard from "./Student/Dashboard";
import ExamApplication from "./Student/ExamApplication.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/student/dashboard" element={<Layout><SDashboard/></Layout>} />
      <Route path="/student/exam-application" element={<Layout><ExamApplication/></Layout>} />

    </Routes>
  );
}

export default App;
