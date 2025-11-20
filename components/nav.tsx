"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ui/theme-toggle";
import { LanguageSwitcher } from "./ui/language-switcher";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-(--bg)/80 backdrop-blur-lg border-b border-(--border-light)">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#home" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-(--primary) rounded-lg flex items-center justify-center shadow-glow transition-smooth group-hover:scale-110">
                            <span className="text-(--text-light) font-bold text-lg">CP</span>
                        </div>
                        <span className="text-xl font-bold text-(--text) hidden sm:inline">
                            Car Paintshop
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="px-4 py-2 rounded-lg text-(--text) hover:bg-(--highlight) transition-smooth font-medium"
                            >
                                {item.label}
                            </a>
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
                            <a
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-3 rounded-lg text-(--text) hover:bg-(--highlight) transition-smooth font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};
