"use client";

import { Sparkles, Shield, Palette, Zap, PaintBucket } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";

export const Services = () => {
    const { t } = useLanguage();

    const services = [
        {
            icon: Palette,
            titleKey: "home.services.items.customPaint.title",
            descriptionKey: "home.services.items.customPaint.description",
        },
        {
            icon: Shield,
            titleKey: "home.services.items.paintProtection.title",
            descriptionKey: "home.services.items.paintProtection.description",
        },
        {
            icon: PaintBucket,
            titleKey: "home.services.items.paintCorrection.title",
            descriptionKey: "home.services.items.paintCorrection.description",
        },
        {
            icon: Zap,
            titleKey: "home.services.items.quickTouchups.title",
            descriptionKey: "home.services.items.quickTouchups.description",
        },
    ];

    return (
        <section id="services" className="py-24 bg-(--bg-dark)">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16 gap-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-(--text-dark)">
                        {t("home.services.title")}
                    </h2>
                    <p className="text-xl text-(--text-light) max-w-2xl mx-auto">
                        {t("home.services.description")}
                    </p>
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-(--primary)/10 border border-(--primary)/20 rounded-full">
                        <Sparkles
                            color="var(--warning)"
                            size={24}
                        />
                        <span className="text-sm font-medium text-(--primary)">{t("home.services.badge")}</span>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        services.map((service, index) => (
                            <div
                                key={index}
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
                                        {t(service.titleKey)}
                                    </h3>
                                    <p className="text-(--text) leading-relaxed">
                                        {t(service.descriptionKey)}
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
