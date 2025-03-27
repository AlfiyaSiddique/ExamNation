import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./Student/Layout";
import SDashboard from "./Student/Dashboard";
import ExamApplication from "./Student/ExamApplication.jsx";
import HallTicket from "./Student/HallTicket";
import BacklogFeeReport from "./Student/BacklogFeeReport";
import ResultAnalysis from "./Student/ResultAnalysis";
import TopperList from "./Student/TopperList";
import AdminDashboard from "./Admin/Dashboard";
import AdminLayout from "./Admin/AdminLayout";
import ExamApplicationsVerify from "./Admin/ExamApplications";
import { SnackBarProvider } from "./context/SnackBarContext";

function App() {
 
  return (
    <SnackBarProvider>
      <Routes>
        <Route path="/" Component={Home} />
        <Route
          path="/student/dashboard"
          element={
            <Layout>
              <SDashboard />
            </Layout>
          }
        />
        <Route
          path="/student/exam-application"
          element={
            <Layout>
              <ExamApplication />
            </Layout>
          }
        />
        <Route
          path="/student/hall-ticket"
          element={
            <Layout>
              <HallTicket />
            </Layout>
          }
        />
        <Route
          path="/student/backlog-fee-report"
          element={
            <Layout>
              <BacklogFeeReport />
            </Layout>
          }
        />
        <Route
          path="/student/result-analysis"
          element={
            <Layout>
              <ResultAnalysis />
            </Layout>
          }
        />
        <Route
          path="/student/topper-list"
          element={
            <Layout>
              <TopperList />
            </Layout>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/exam-applications"
          element={
            <AdminLayout>
              <ExamApplicationsVerify />
            </AdminLayout>
          }
        />
      </Routes>
    </SnackBarProvider>
  );
}

export default App;
