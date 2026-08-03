import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./modules/Landing/pages/LandingPage";
import Navigation from "./modules/Landing/components/Navigation/Navigation";
import Login from "./modules/identity/components/Login/Login";
import Register from "./modules/identity/components/Register/Register";
import OTPVerify from "./modules/identity/components/OTPVerify/OTPVerify";
import Dashboard from "./modules/identity/pages/Dashboard";
import RoleDashboard from "./modules/identity/pages/RoleDashboard";
import FarmerOperationsPage from "./modules/operations/pages/FarmerOperationsPage";

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp-verify" element={<OTPVerify />} />

        {/* Hub → redirects by role */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Role homes */}
        <Route path="/operations" element={<FarmerOperationsPage />} />
        <Route
          path="/dashboard/warehouse"
          element={<RoleDashboard expectedRole="warehouse" />}
        />
        <Route
          path="/dashboard/lender"
          element={<RoleDashboard expectedRole="lender" />}
        />
        <Route
          path="/dashboard/buyer"
          element={<RoleDashboard expectedRole="buyer" />}
        />
        <Route
          path="/dashboard/government"
          element={<RoleDashboard expectedRole="government" />}
        />
        <Route
          path="/dashboard/admin"
          element={<RoleDashboard expectedRole="admin" />}
        />
      </Routes>
    </Router>
  );
}
