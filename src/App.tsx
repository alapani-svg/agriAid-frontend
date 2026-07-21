import LandingPage from "./modules/Landing/pages/LandingPage";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <LandingPage />
    </MainLayout>
  );
}