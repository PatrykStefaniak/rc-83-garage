import { Sparkles, Shield, Palette, Zap, PaintBucket } from "lucide-react";

const services = [
    {
        icon: Palette,
        title: "Custom Paint Jobs",
        description: "From classic colors to custom designs, we create stunning finishes that match your vision perfectly.",
    },
    {
        icon: Shield,
        title: "Paint Protection",
        description: "Advanced ceramic coatings and protective films to keep your paint looking showroom fresh for years.",
    },
    {
        icon: PaintBucket,
        title: "Paint Correction",
        description: "Remove scratches, swirls, and imperfections with our multi-stage paint correction process.",
    },
    {
        icon: Zap,
        title: "Quick Touch-ups",
        description: "Fast and professional repairs for minor scratches, chips, and paint damage. In and out in hours.",
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-(--bg-dark)">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16 gap-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-(--text-dark)">
                        Our Services
                    </h2>
                    <p className="text-xl text-(--text-light) max-w-2xl mx-auto">
                        Professional automotive paint services tailored to your needs
                    </p>
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-(--primary)/10 border border-(--primary)/20 rounded-full">
                        <Sparkles
                            color="var(--warning)"
                            size={24}
                        />
                        <span className="text-sm font-medium text-(--primary)">Premium Auto Paint Services</span>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        services.map((service) => (
                            <div
                                key={service.title}
                                className="p-6 bg-(--bg) rounded-lg transition-smooth hover:shadow-[0_0_10px_var(--primary)] group cursor-default"
                            >
                                <div className="hover:scale-105 transition-transform duration-500 ease-in-out">
                                    <div className="w-12 h-12 bg-(--secondary)/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-(--secondary)/80 transition-smooth">
                                        <service.icon
                                            color="var(--primary)"
                                            className="w-6 h-6 transition-smooth"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-(--text-light) mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-(--text) leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
