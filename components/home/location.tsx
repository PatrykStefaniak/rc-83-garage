"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import { GoogleMap } from "@/components/ui/google-map";

export const Location = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-24 bg-(--bg)">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-(--text-dark) mb-4">
                        {t("home.location.title")}
                    </h2>
                    <p className="text-xl text-(--text-light) max-w-2xl mx-auto">
                        {t("home.location.description")}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <GoogleMap />

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="p-6 bg-(--bg) border-(--border) hover:border-(--primary) transition-smooth">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-(--primary)/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-(--primary)" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-(--text-light) mb-2">{t("home.location.address.label")}</h3>
                                    <p className="text-(--text)">
                                        {t("home.location.address.street")}<br />
                                        {t("home.location.address.city")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-(--bg) border-(--border) hover:border-(--primary) transition-smooth">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-(--primary)/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-(--primary)" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-(--text-light) mb-2">{t("home.location.contact.label")}</h3>
                                    <p className="text-(--text)">
                                        {t("home.location.contact.phone")}<br />
                                        {t("home.location.contact.email")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-(--bg) border-(--border) hover:border-(--primary) transition-smooth">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-(--primary)/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-(--primary)" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-(--text-light) mb-2">{t("home.location.hours.label")}</h3>
                                    <p className="text-(--text)">
                                        {t("home.location.hours.weekdays")}<br />
                                        {t("home.location.hours.saturday")}<br />
                                        {t("home.location.hours.sunday")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
