import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./modules/Landing/pages/LandingPage";
import Navigation from "./modules/Landing/components/Navigation/Navigation";
import Login from "./modules/identity/components/Login/Login";
import OTPVerify from "./modules/identity/components/OTPVerify/OTPVerify";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <LandingPage />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verify" element={<OTPVerify />} />
      </Routes>
    </Router>
  );
}