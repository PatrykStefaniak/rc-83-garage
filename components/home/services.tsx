import { Sparkles, Shield, Palette, Zap } from "lucide-react";

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
        icon: Sparkles,
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
        <section id="services" className="py-24 bg-bg-dark">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-text-light max-w-2xl mx-auto">
                        Professional automotive paint services tailored to your needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 bg-card border-border hover:border-primary transition-smooth hover:shadow-glow group cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-smooth">
                                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
                            </div>
                            <h3 className="text-xl font-bold text-card-foreground mb-2">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
