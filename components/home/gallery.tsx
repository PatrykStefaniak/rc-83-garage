"use client";

import { useLanguage } from "@/providers/language-provider";
import { GalleryImage } from "../ui/gallery-image";

const images = [
    { src: "/gallery/paintshop1.png", alt: "Paint Shop" },
    { src: "/gallery/car1.png", alt: "Car 1" },
    { src: "/gallery/car2.png", alt: "Car 2" },
];

export function Gallery() {
    const { t } = useLanguage();

    return (
        <section className="py-24" id="gallery">
            <div className="container mx-auto px-4 space-y-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-3xl font-bold text-(--text-dark)">
                            {t("home.gallery.title")}
                        </h2>
                        <p className="text-xs font-bold uppercase tracking-[0.5em] text-(--secondary)">
                            {t("home.gallery.label")}
                        </p>
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    <GalleryImage
                        src={images[0].src}
                        alt={images[0].alt}
                        className="aspect-[16/9] md:col-span-3 w-full"
                        sizes="(max-width: 768px) 100vw, 66vw"
                    />
                    {images.slice(1).map((image, index) => (
                        <GalleryImage
                            key={index + 1}
                            src={image.src}
                            alt={image.alt}
                            className="aspect-square"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}