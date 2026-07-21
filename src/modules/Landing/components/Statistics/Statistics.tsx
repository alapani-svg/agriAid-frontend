const stats = [
    {
        number: "15K+",
        title: "Farmers"
    },
    {
        number: "350+",
        title: "Markets"
    },
    {
        number: "28",
        title: "Regions Covered"
    },
    {
        number: "99%",
        title: "User Satisfaction"
    },
];

export default function Statistics() {
    return (
        <section className="py-24 bg-green-700 text-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {stats.map((item) => (

                        <div
                            key={item.title}
                            className="text-center"
                        >

                            <h2 className="text-6xl font-black mb-4">
                                {item.number}
                            </h2>

                            <p className="text-xl opacity-80">
                                {item.title}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}