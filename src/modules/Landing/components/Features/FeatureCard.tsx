interface FeatureCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

export default function FeatureCard({
    icon,
    title,
    description,
}: FeatureCardProps) {
    const Icon = icon;

    return (
        <div
            className="
                rounded-3xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-xl
                p-8
                hover:-translate-y-2
                transition-all
                duration-300
                shadow-lg
            "
        >
            <div className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center mb-6">
                <Icon size={32} className="text-white" />
            </div>

            <h3 className="text-2xl font-semibold mb-4">{title}</h3>

            <p className="text-gray-500 leading-8">{description}</p>
        </div>
    );
}