"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/providers/language-provider";
import Logo from "./logo";

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-(--bg-dark) text-(--text-dark) py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <Logo />
                            <span className="text-xl font-bold">{t("footer.brand")}</span>
                        </div>
                        <p className="max-w-md">
                            {t("footer.description")}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">{t("footer.quickLinks")}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-(--primary) transition-smooth">
                                    {t("nav.home")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-(--primary) transition-smooth">
                                    {t("nav.services")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/colors" className="hover:text-(--primary) transition-smooth">
                                    {t("nav.colors")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="hover:text-(--primary) transition-smooth">
                                    {t("nav.gallery")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-(--primary) transition-smooth">
                                    {t("nav.contact")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">{t("footer.followUs")}</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-(--bg-light)/80 rounded-lg flex items-center justify-center hover:bg-(--bg-light)/40 transition-smooth group">
                                <Image
                                    src="/instagram.png"
                                    alt={t("footer.instagram")}
                                    width={24}
                                    height={24}
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-(--bg-dark)/20 pt-8 text-center text-(--bg-dark)/60">
                    <p>{t("footer.copyright")}</p>
                </div>
            </div>
        </footer>
    );
};
