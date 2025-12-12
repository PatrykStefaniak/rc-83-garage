"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/providers/language-provider";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import Link from "next/link";
import Logo from "./logo";

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        { label: t("nav.home"), href: "/" },
        { label: t("nav.services"), href: "/services" },
        { label: t("nav.colors"), href: "/colors" },
        { label: t("nav.gallery"), href: "/gallery" },
        { label: t("nav.contact"), href: "/contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-(--bg)/80 backdrop-blur-lg border-b border-(--border-light) transition-all duration-300 ${scrolled ? "py-0" : "py-3"}`}>
            <div className="container mx-auto px-4">
                <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-24"}`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className={`transition-all duration-300 ${scrolled ? "scale-75" : "scale-150 mr-6"}`}>
                            <Logo />
                        </div>
                        <span className={`font-bold text-(--text) hidden sm:inline transition-all duration-300 ${scrolled ? "text-xl" : "text-2xl"}`}>
                            {t("nav.brand")}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="px-4 py-2 rounded-lg text-(--text) hover:bg-(--highlight) transition-colors duration-300 font-medium"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right side controls */}
                    <div className="flex items-center space-x-2">
                        <ThemeToggle />
                        <LanguageSwitcher />

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden rounded-full border border-(--border) bg-(--bg-light) px-3 py-2 text-xs font-semibold uppercase tracking-wide text-(--text) transition-colors hover:border-(--primary) hover:text-(--primary)"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-(--border-light)">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-3 rounded-lg text-(--text) hover:bg-(--highlight) transition-colors duration-300 font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};
