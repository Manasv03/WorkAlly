import { Toaster } from "react-hot-toast"
import { Routes, Route, Navigate } from "react-router-dom"
import LoginLanding from "./pages/LoginLanding"
import Logout from "./pages/Logout"
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Payslips from "./pages/Payslips"
import Leave from "./pages/Leave"
import Attendance from "./pages/Attendance"
import Employees from "./pages/Employees"
import PrintPayslip from "./pages/PrintPayslip"
import Layout from "./pages/Layout"
import LoginForm from "./components/LoginForm"

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginLanding />} />
        <Route path="/login/admin" element={<LoginForm role="admin" title="Admin Portal" subtitle="Please enter your credentials to access the admin panel" />} />
        <Route path="/login/employee" element={<LoginForm role="employee" title="Employee Portal" subtitle="Please enter your credentials to access your employee dashboard" />} />


        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/print/payslips/:id" element={<PrintPayslip />} />
          
        <Route path="*" element={<Navigate to="/dashboard" replace/>} />
      </Routes>
    </>
  )
}

export default App
