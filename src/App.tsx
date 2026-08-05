import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

/**
 * App entry — routing lives in `src/routes` per architecture.
 * Do not add long route lists here.
 */
export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
