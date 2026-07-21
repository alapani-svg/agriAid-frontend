import Hero from "../components/Hero/Hero";
import Partnerships from "../components/Partnerships/Partnerships";
import Problem from "../components/Problem/Problem";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Roles from "../components/Roles/Roles";
import CredibilityScore from "../components/CredibilityScore/CredibilityScore";
import Statistics from "../components/Statistics/Statistics";
import Technology from "../components/Technology/Technology";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Partnerships />
      <Problem />
      <Features />
      <HowItWorks />
      <Roles />
      <CredibilityScore />
      <Statistics />
      <Technology />
      <CTA />
      <Footer />
    </>
  );
}
