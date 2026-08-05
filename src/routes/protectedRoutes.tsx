import { Route } from "react-router-dom";
import Dashboard from "../modules/identity/pages/Dashboard";
import RoleDashboard from "../modules/identity/pages/RoleDashboard";
import FarmerOperationsPage from "../modules/operations/pages/FarmerOperationsPage";
import RequireAuth from "../modules/identity/routes/RequireAuth";
import RequireRole from "../modules/identity/routes/RequireRole";
import FarmerLayout from "../layouts/FarmerLayout";
import WarehouseLayout from "../layouts/WarehouseLayout";
import UnderwriterLayout from "../layouts/UnderwriterLayout";
import BuyerLayout from "../layouts/BuyerLayout";
import AdminLayout from "../layouts/AdminLayout";

/** Authenticated, role-scoped routes. */
export function ProtectedRoutes() {
  return (
    <>
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />

      <Route
        path="/operations"
        element={
          <RequireRole roles="farmer">
            <FarmerLayout>
              <FarmerOperationsPage />
            </FarmerLayout>
          </RequireRole>
        }
      />

      <Route
        path="/dashboard/warehouse"
        element={
          <RequireRole roles="warehouse">
            <WarehouseLayout>
              <RoleDashboard expectedRole="warehouse" />
            </WarehouseLayout>
          </RequireRole>
        }
      />

      <Route
        path="/dashboard/lender"
        element={
          <RequireRole roles="lender">
            <UnderwriterLayout>
              <RoleDashboard expectedRole="lender" />
            </UnderwriterLayout>
          </RequireRole>
        }
      />

      <Route
        path="/dashboard/buyer"
        element={
          <RequireRole roles="buyer">
            <BuyerLayout>
              <RoleDashboard expectedRole="buyer" />
            </BuyerLayout>
          </RequireRole>
        }
      />

      <Route
        path="/dashboard/government"
        element={
          <RequireRole roles="government">
            <AdminLayout>
              <RoleDashboard expectedRole="government" />
            </AdminLayout>
          </RequireRole>
        }
      />

      <Route
        path="/dashboard/admin"
        element={
          <RequireRole roles="admin" allowAdmin>
            <AdminLayout>
              <RoleDashboard expectedRole="admin" />
            </AdminLayout>
          </RequireRole>
        }
      />
    </>
  );
}
