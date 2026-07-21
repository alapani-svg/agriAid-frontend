import {
    UserPlus,
    Tractor,
    BrainCircuit,
    ShoppingBasket,
    TrendingUp,
} from "lucide-react";

const steps = [
    {
        icon: UserPlus,
        title: "Create Account",
        description:
            "Register as a farmer, buyer, cooperative or agricultural expert.",
    },
    {
        icon: Tractor,
        title: "Manage Your Farm",
        description:
            "Add farms, crops and livestock from one centralized dashboard.",
    },
    {
        icon: BrainCircuit,
        title: "Receive AI Advice",
        description:
            "Get intelligent recommendations for planting, diseases and productivity.",
    },
    {
        icon: ShoppingBasket,
        title: "Buy & Sell",
        description:
            "Access the digital marketplace to sell produce or purchase farming inputs.",
    },
    {
        icon: TrendingUp,
        title: "Grow Your Business",
        description:
            "Track performance and improve productivity with powerful analytics.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-28 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">

                    <h2 className="text-5xl font-bold">
                        How agriAid Works
                    </h2>

                    <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
                        From registration to AI-powered farming and online
                        trading, agriAid simplifies every stage of the
                        agricultural journey.
                    </p>

                </div>

                <div className="relative">

                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-200 -translate-x-1/2" />

                    <div className="space-y-12">

                        {steps.map((step, index) => {

                            const Icon = step.icon;

                            return (

                                <div
                                    key={step.title}
                                    className={`
                                        flex
                                        flex-col
                                        lg:flex-row
                                        items-center
                                        gap-8
                                        ${index % 2 !== 0 && "lg:flex-row-reverse"}
                                    `}
                                >

                                    <div className="flex-1">

                                        <div className="bg-white rounded-3xl shadow-lg p-8">

                                            <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center mb-6">

                                                <Icon
                                                    size={32}
                                                    className="text-white"
                                                />

                                            </div>

                                            <h3 className="text-2xl font-bold mb-4">
                                                {step.title}
                                            </h3>

                                            <p className="text-gray-600 leading-8">
                                                {step.description}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="hidden lg:flex w-12 h-12 rounded-full bg-green-600 border-8 border-white items-center justify-center text-white font-bold shadow-lg">
                                        {index + 1}
                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}
