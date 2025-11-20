import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center py-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    width={1000}
                    height={1000}
                    src="/hero-car.jpg"
                    alt="Professional car paintwork"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-r from-(--bg) via-(--bg-light)/95 to-(transparent)" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-(--text-dark) mb-6 leading-tight">
                        Transform Your
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-(--primary) to-(--highlight)">
                            Vehicle&apos;s Look
                        </span>
                    </h1>
                    <p className="text-xl text-(--text)/90 mb-8 max-w-2xl leading-relaxed">
                        Expert automotive paint services with precision craftsmanship. We bring your vision
                        to life with cutting-edge techniques and premium materials that last.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            className="cursor-pointer gradient-primary text-(--text-dark) shadow-glow hover:scale-105 transition-smooth group text-lg px-8 flex items-center justify-center bg-(--primary)/50 py-2 rounded-lg"
                        >
                            Get a Quote
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            className="cursor-pointer border-(--border-dark) hover:bg-(--highlight) transition-smooth text-lg px-8 hover:scale-105 border border-(--border-dark) py-2 rounded-lg"
                        >
                            View Gallery
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-(--border-light)">
                        <div>
                            <div className="text-3xl font-bold text-(--primary) mb-1">15+</div>
                            <div className="text-sm text-(--text-light)">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-(--primary) mb-1">5000+</div>
                            <div className="text-sm text-(--text-light)">Cars Painted</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-(--primary) mb-1">100%</div>
                            <div className="text-sm text-(--text-light)">Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
