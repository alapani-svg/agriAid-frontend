import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./modules/Landing/pages/LandingPage";
import Navigation from "./modules/Landing/components/Navigation/Navigation";
import Login from "./modules/identity/components/Login/Login";
import Register from "./modules/identity/components/Register/Register";
import OTPVerify from "./modules/identity/components/OTPVerify/OTPVerify";
import Dashboard from "./modules/identity/pages/Dashboard";
import RoleDashboard from "./modules/identity/pages/RoleDashboard";
import FarmerOperationsPage from "./modules/operations/pages/FarmerOperationsPage";
import RequireAuth from "./modules/identity/routes/RequireAuth";
import RequireRole from "./modules/identity/routes/RequireRole";
import GuestOnly from "./modules/identity/routes/GuestOnly";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <LandingPage />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <GuestOnly>
              <Login />
            </GuestOnly>
          }
        />
        <Route
          path="/register"
          element={
            <GuestOnly>
              <Register />
            </GuestOnly>
          }
        />
        <Route path="/otp-verify" element={<OTPVerify />} />

        {/* Auth hub → role home */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />

        {/* Farmer (Module 2) */}
        <Route
          path="/operations"
          element={
            <RequireRole roles="farmer">
              <FarmerOperationsPage />
            </RequireRole>
          }
        />

        {/* Role workspaces */}
        <Route
          path="/dashboard/warehouse"
          element={
            <RequireRole roles="warehouse">
              <RoleDashboard expectedRole="warehouse" />
            </RequireRole>
          }
        />
        <Route
          path="/dashboard/lender"
          element={
            <RequireRole roles="lender">
              <RoleDashboard expectedRole="lender" />
            </RequireRole>
          }
        />
        <Route
          path="/dashboard/buyer"
          element={
            <RequireRole roles="buyer">
              <RoleDashboard expectedRole="buyer" />
            </RequireRole>
          }
        />
        <Route
          path="/dashboard/government"
          element={
            <RequireRole roles="government">
              <RoleDashboard expectedRole="government" />
            </RequireRole>
          }
        />
        <Route
          path="/dashboard/admin"
          element={
            <RequireRole roles="admin" allowAdmin>
              <RoleDashboard expectedRole="admin" />
            </RequireRole>
          }
        />
      </Routes>
    </Router>
  );
}
