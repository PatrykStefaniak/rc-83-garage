"use client";

import { ReactNode } from "react";
import { Navbar } from "./nav";
import { Footer } from "./footer";
import { useLanguage } from "@/providers/language-provider";
import { Loader2 } from "lucide-react";

interface PageWrapperProps {
    children: ReactNode;
    includeNav?: boolean;
    includeFooter?: boolean;
    className?: string;
}

export const PageWrapper = ({
    children,
    includeNav = true,
    includeFooter = true,
    className = ""
}: PageWrapperProps) => {
    const { isLoading } = useLanguage();

    return (
        <div className={`min-h-screen ${className}`}>
            <div className={`${isLoading ? "opacity-100" : "opacity-0"} transition-opacity duration-700 flex items-center justify-center h-screen bg-(--bg) fixed inset-0 z-100 pointer-events-none`}>
                <Loader2 className="w-10 h-10 animate-spin" />
            </div>
            {includeNav && <Navbar />}
            {children}
            {includeFooter && <Footer />}
        </div>
    );
};
