"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Loader2 } from "lucide-react";

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
    const isInView = useIntersectionObserver(ref, true);
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div
            ref={ref}
            className={`relative overflow-hidden rounded-lg group cursor-pointer ${className}`}
        >
            {isInView && (
                <>
                    <div className={`${isLoaded ? "hidden" : "flex"} items-center justify-center h-full animate-fade-in object-cover transition-transform duration-500 ease-in-out group-hover:scale-103 bg-transparent`}>
                        <Loader2 className="w-10 h-10 animate-spin" />
                    </div>
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="animate-fade-in object-cover transition-transform duration-500 ease-in-out group-hover:scale-103"
                        sizes={sizes}
                        onLoad={() => setIsLoaded(true)}
                    />
                </>
            )}
        </div>
    );
}

