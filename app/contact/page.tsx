"use client";

import { Navbar } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { ContactForm } from "@/components/contact/contact-form";
import { GoogleMap } from "@/components/ui/google-map";
import { useLanguage } from "@/providers/language-provider";
import { Loader2, MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+34605777093";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}`;

export default function ContactPage() {
    const { isLoading, t } = useLanguage();

    return (
        <div className="min-h-screen">
            <div className={`${isLoading ? "opacity-100" : "opacity-0"} transition-opacity duration-700 flex items-center justify-center h-screen bg-(--bg) fixed inset-0 z-100 pointer-events-none`}>
                <Loader2 className="w-10 h-10 animate-spin" />
            </div>
            <Navbar />
            <main className="pt-24 pb-16 bg-(--bg)">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-(--text-dark) mb-4">
                            {t("contact.title")}
                        </h1>
                        <p className="text-xl text-(--text-light) max-w-2xl mx-auto">
                            {t("contact.description")}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Column - Form & WhatsApp */}
                        <div className="space-y-8">
                            {/* Contact Form */}
                            <div className="p-8 bg-(--bg-light) border border-(--border) rounded-xl">
                                <ContactForm />
                            </div>

                            {/* WhatsApp Card */}
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-6 bg-(--bg-light) border border-(--border) rounded-xl hover:border-(--success) transition-smooth group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-(--success)/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-(--success)/20 transition-smooth">
                                        <MessageCircle className="w-7 h-7 text-(--success)" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-(--text-dark) mb-1">
                                            {t("contact.whatsapp.title")}
                                        </h3>
                                        <p className="text-(--text-light)">
                                            {t("contact.whatsapp.description")}
                                        </p>
                                        <p className="text-(--success) font-medium mt-1">
                                            {t("contact.info.phone.value")}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Right Column - Map & Info */}
                        <div className="space-y-8">
                            <GoogleMap className="h-[300px] lg:h-[350px]" />

                            {/* Contact Info Cards */}
                            <div className="space-y-4">
                                {/* Address */}
                                <div className="p-5 bg-(--bg-light) border border-(--border) rounded-xl hover:border-(--primary) transition-smooth">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-(--primary)/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-(--primary)" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-(--text-light) mb-1">
                                                {t("contact.info.address.label")}
                                            </h3>
                                            <p className="text-(--text)">
                                                {t("contact.info.address.street")}<br />
                                                {t("contact.info.address.city")}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="p-5 bg-(--bg-light) border border-(--border) rounded-xl hover:border-(--primary) transition-smooth">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-(--primary)/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-(--primary)" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-(--text-light) mb-1">
                                                {t("contact.info.phone.label")}
                                            </h3>
                                            <p className="text-(--text)">
                                                {t("contact.info.phone.value")}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="p-5 bg-(--bg-light) border border-(--border) rounded-xl hover:border-(--primary) transition-smooth">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-(--primary)/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-(--primary)" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-(--text-light) mb-1">
                                                {t("contact.info.email.label")}
                                            </h3>
                                            <p className="text-(--text)">
                                                {t("contact.info.email.value")}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="p-5 bg-(--bg-light) border border-(--border) rounded-xl hover:border-(--primary) transition-smooth">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-(--primary)/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-(--primary)" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-(--text-light) mb-1">
                                                {t("contact.info.hours.label")}
                                            </h3>
                                            <p className="text-(--text) text-sm">
                                                {t("contact.info.hours.weekdays")}<br />
                                                {t("contact.info.hours.saturday")}<br />
                                                {t("contact.info.hours.sunday")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
