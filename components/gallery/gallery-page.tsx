"use client";

import { useLanguage } from "@/providers/language-provider";
import { GalleryImage } from "../ui/gallery-image";
import { Navbar } from "../ui/nav";
import { Footer } from "../ui/footer";
import { Loader2 } from "lucide-react";

const TOTAL_IMAGES = 19;
const IMAGE_POSITIONS = new Array(TOTAL_IMAGES).fill(0).map((_, i) => i + 1).sort(() => Math.random() - 0.5);
const BIG_INDEXES: number[] = [];

let currentIndex = 0;

while (currentIndex < TOTAL_IMAGES) {
    BIG_INDEXES.push(currentIndex);

    const length = BIG_INDEXES.length;

    currentIndex += length % 2 === 0 ? 5 : 7;
}

export default function GalleryPage() {
    const { t, isLoading } = useLanguage();

    return (
        <div className="min-h-screen">
            <div className={`${isLoading ? "opacity-100" : "opacity-0"} transition-opacity duration-700 flex items-center justify-center h-screen bg-(--bg) fixed inset-0 z-100 pointer-events-none`}>
                <Loader2 className="w-10 h-10 animate-spin" />
            </div>
            <Navbar />

            <main className="pt-36">
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
                        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 auto-rows-fr">
                            {IMAGE_POSITIONS.map((imageIndex, index) => {
                                const isLarge = BIG_INDEXES.includes(index);

                                return <GalleryImage
                                    key={imageIndex}
                                    src={`/gallery/${imageIndex}.jpg`}
                                    alt={`Gallery image ${imageIndex}`}
                                    className={`aspect-square ${isLarge ? "col-span-2 row-span-2" : ""}`}
                                    sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                                />
                            })}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}