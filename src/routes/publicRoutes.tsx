import { Route } from "react-router-dom";
import LandingPage from "../modules/Landing/pages/LandingPage";
import Login from "../modules/identity/components/Login/Login";
import Register from "../modules/identity/components/Register/Register";
import OTPVerify from "../modules/identity/components/OTPVerify/OTPVerify";
import ForgotPassword from "../modules/identity/components/ForgotPassword/ForgotPassword";
import ResetPassword from "../modules/identity/components/ResetPassword/ResetPassword";
import GuestOnly from "../modules/identity/routes/GuestOnly";
import MainLayout from "../layouts/MainLayout";

/** Unauthenticated / marketing routes. */
export function PublicRoutes() {
  return (
    <>
      <Route
        path="/"
        element={
          <MainLayout>
            <LandingPage />
          </MainLayout>
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
      <Route
        path="/forgot-password"
        element={
          <GuestOnly>
            <ForgotPassword />
          </GuestOnly>
        }
      />
      <Route
        path="/reset-password"
        element={
          <GuestOnly>
            <ResetPassword />
          </GuestOnly>
        }
      />
      <Route path="/otp-verify" element={<OTPVerify />} />
    </>
  );
}
