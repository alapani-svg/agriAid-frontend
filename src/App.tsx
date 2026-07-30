import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./modules/Landing/pages/LandingPage";
import Navigation from "./modules/Landing/components/Navigation/Navigation";
import Login from "./modules/identity/components/Login/Login";
import Register from "./modules/identity/components/Register/Register";
import OTPVerify from "./modules/identity/components/OTPVerify/OTPVerify";
import Dashboard from "./modules/identity/pages/Dashboard";

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
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
