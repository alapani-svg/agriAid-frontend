import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Statistics from "../components/Statistics/Statistics";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Partnerships from "../components/Partnerships/Partnerships";
import Footer from "../components/Footer/Footer";

export default function LandingPage() {
    return (
        <>
            <Hero />
            <Statistics />
            <Partnerships />
            <Features />
            <HowItWorks/>
            <Footer />
        </>
    );
}
