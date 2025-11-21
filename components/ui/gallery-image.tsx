"use client";

import Image from "next/image";
import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

interface GalleryImageProps {
    src: string;
    alt: string;
    className?: string;
    sizes?: string;
}

export function GalleryImage({
    src,
    alt,
    className = "",
    sizes = "(max-width: 768px) 100vw, 33vw"
}: GalleryImageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useIntersectionObserver(ref);

    return (
        <div
            ref={ref}
            className={`relative overflow-hidden rounded-lg group cursor-pointer ${className}`}
        >
            {isInView && (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="animate-fade-in object-cover transition-transform duration-500 ease-in-out group-hover:scale-103"
                    sizes={sizes}
                />
            )}
        </div>
    );
}

