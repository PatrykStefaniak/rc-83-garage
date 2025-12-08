"use client";

import { Navbar } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { useLanguage } from "@/providers/language-provider";
import { Loader2 } from "lucide-react";

export default function ServicesPage() {
    const { isLoading } = useLanguage();

    return (
        <div className="min-h-screen">
            <div className={`${isLoading ? "opacity-100" : "opacity-0"} transition-opacity duration-700 flex items-center justify-center h-screen bg-(--bg) fixed inset-0 z-100 pointer-events-none`}>
                <Loader2 className="w-10 h-10 animate-spin" />
            </div>
            <Navbar />
            <main className="pt-36 min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-(--text-dark)">Services Page - Coming Soon</h1>
            </main>
            <Footer />
        </div>
    );
}