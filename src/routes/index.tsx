import { Routes } from "react-router-dom";
import { PublicRoutes } from "./publicRoutes";
import { ProtectedRoutes } from "./protectedRoutes";

/** Composed route tree for agriAid. */
export default function AppRoutes() {
  return (
    <Routes>
      {PublicRoutes()}
      {ProtectedRoutes()}
    </Routes>
  );
}
