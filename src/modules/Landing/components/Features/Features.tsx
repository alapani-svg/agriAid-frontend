import {
    Sprout,
    ShoppingCart,
    BrainCircuit,
    Bell,
    ShieldCheck,
    Globe,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
    {
        icon: Sprout,
        title: "Smart Farm Management",
        description:
            "Manage farms, crops and livestock from one beautiful dashboard.",
    },
    {
        icon: BrainCircuit,
        title: "AI Assistant",
        description:
            "Receive intelligent farming recommendations powered by Artificial Intelligence.",
    },
    {
        icon: ShoppingCart,
        title: "Marketplace",
        description:
            "Buy and sell agricultural products securely across Cameroon.",
    },
    {
        icon: Bell,
        title: "Notifications",
        description:
            "Never miss important farming events and reminders.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Platform",
        description:
            "Enterprise-grade authentication and protected user data.",
    },
    {
        icon: Globe,
        title: "Community",
        description:
            "Connect with farmers, agronomists and buyers everywhere.",
    },
];

export default function Features() {
    return (
        <section className="py-28 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-20">

                    <h2 className="text-5xl font-bold">
                        Everything Farmers Need
                    </h2>

                    <p className="mt-6 text-gray-500 max-w-3xl mx-auto text-lg">
                        agriAid combines modern technology,
                        Artificial Intelligence,
                        farm management,
                        and digital commerce into one platform.
                    </p>

                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}