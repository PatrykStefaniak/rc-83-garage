"use client";

import { useLanguage } from "@/providers/language-provider";
import { GalleryImage } from "../ui/gallery-image";

// Images 1-19 in randomized order with some marked as large (2x2)
const galleryItems = [
    { src: "/gallery/7.jpg", alt: "Gallery Image 7", large: true },
    { src: "/gallery/3.jpg", alt: "Gallery Image 3", large: false },
    { src: "/gallery/15.jpg", alt: "Gallery Image 15", large: false },
    { src: "/gallery/11.jpg", alt: "Gallery Image 11", large: false },
    { src: "/gallery/1.jpg", alt: "Gallery Image 1", large: true },
    { src: "/gallery/18.jpg", alt: "Gallery Image 18", large: false },
    { src: "/gallery/5.jpg", alt: "Gallery Image 5", large: false },
    { src: "/gallery/12.jpg", alt: "Gallery Image 12", large: false },
    { src: "/gallery/9.jpg", alt: "Gallery Image 9", large: true },
    { src: "/gallery/2.jpg", alt: "Gallery Image 2", large: false },
    { src: "/gallery/16.jpg", alt: "Gallery Image 16", large: false },
    { src: "/gallery/4.jpg", alt: "Gallery Image 4", large: false },
    { src: "/gallery/19.jpg", alt: "Gallery Image 19", large: false },
    { src: "/gallery/8.jpg", alt: "Gallery Image 8", large: false },
    { src: "/gallery/14.jpg", alt: "Gallery Image 14", large: true },
    { src: "/gallery/6.jpg", alt: "Gallery Image 6", large: false },
    { src: "/gallery/10.jpg", alt: "Gallery Image 10", large: false },
    { src: "/gallery/17.jpg", alt: "Gallery Image 17", large: false },
    { src: "/gallery/13.jpg", alt: "Gallery Image 13", large: false },
];

// Show only first 6 images on home page
const homeGalleryItems = galleryItems.slice(0, 6);

export function Gallery() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-(--bg-dark)" id="gallery">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16 gap-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-(--text-dark)">
                        {t("home.gallery.title")}
                    </h2>
                    <p className="text-xl text-(--text-light) max-w-2xl mx-auto">
                        {t("home.gallery.description")}
                    </p>
                </div>
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3 auto-rows-fr">
                    {homeGalleryItems.map((image, index) => (
                        <GalleryImage
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className={`aspect-square ${image.large ? "col-span-2 row-span-2" : ""}`}
                            sizes={image.large ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
