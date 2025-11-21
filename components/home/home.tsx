"use client";

import { Navbar } from "../nav";
import { Hero } from "./hero";
import { Services } from "./services";
import { Gallery } from "./gallery";
import { Location } from "./location";
import { Footer } from "../footer";
import { useLanguage } from "@/providers/language-provider";
import { Loader2 } from "lucide-react";

const Index = () => {
    const { isLoading } = useLanguage();
console.log(isLoading);
    return (
        <div className="min-h-screen">
            <div className={`${isLoading ? "opacity-100" : "opacity-0"} transition-opacity duration-700 flex items-center justify-center h-screen bg-(--bg) fixed inset-0 z-100 pointer-events-none`}>
                <Loader2 className="w-10 h-10 animate-spin" />
            </div>
            <Navbar />
            <Hero />
            <Services />
            <Gallery />
            <Location />
            <Footer />
        </div>
    );
};

export default Index;
