"use client";

import { useLanguage } from "@/providers/language-provider";
import { GalleryImage } from "../ui/gallery-image";
import { Navbar } from "../ui/nav";
import { Footer } from "../ui/footer";
import { Loader2 } from "lucide-react";

const images = [
    { src: "/gallery/paintshop1.png", alt: "Paint Shop" },
    { src: "/gallery/car1.png", alt: "Car 1" },
    { src: "/gallery/car2.png", alt: "Car 2" },
    { src: "/gallery/paintshop1.png", alt: "Paint Shop Work" },
    { src: "/gallery/car1.png", alt: "Custom Paint" },
    { src: "/gallery/car2.png", alt: "Restored Vehicle" },
];

export default function GalleryPage() {
    const { t, isLoading } = useLanguage();

    return (
        <div className="min-h-screen">
            <div className={`${isLoading ? "opacity-100" : "opacity-0"} transition-opacity duration-700 flex items-center justify-center h-screen bg-(--bg) fixed inset-0 z-100 pointer-events-none`}>
                <Loader2 className="w-10 h-10 animate-spin" />
            </div>
            <Navbar />
            
            <main className="pt-16">
                <section className="py-24 bg-(--bg-dark)">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col items-center text-center mb-16 gap-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-(--text-dark)">
                                {t("gallery.title")}
                            </h1>
                            <p className="text-xl text-(--text-light) max-w-2xl mx-auto">
                                {t("gallery.description")}
                            </p>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {images.map((image, index) => (
                                <GalleryImage
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    className="aspect-square"
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer />
        </div>
    );
}

