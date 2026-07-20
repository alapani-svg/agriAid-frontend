import MainLayout from "../../../layouts/MainLayout";
import Container from "../../../shared/ui/Container";
import HeroBackground from "../components/HeroBackground";
import HeroContent from "../components/HeroContent";
import FloatingCards from "../components/FloatingCards";
import PlatformOverview from "../sections/PlatformOverview";
import CoreFeatures from "../sections/CoreFeatures";
import Workflow from "../sections/Workflow";
import Roles from "../sections/Roles";
import DashboardPreview from "../sections/DashboardPreview";
import Technology from "../sections/Technology";
import Security from "../sections/Security";
import CTA from "../sections/CTA";
import Footer from "../sections/Footer";

export default function LandingPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
        <HeroBackground />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <HeroContent />
            <FloatingCards />
          </div>
        </Container>
      </section>

      {/* Platform: partners, problem, solution */}
      <PlatformOverview />

      {/* Features */}
      <CoreFeatures />

      {/* Workflow */}
      <Workflow />

      {/* Who it's for */}
      <Roles />

      {/* Credibility score */}
      <DashboardPreview />

      {/* Technology & access */}
      <Technology />

      {/* Impact / why it matters */}
      <Security />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </MainLayout>
  );
}
