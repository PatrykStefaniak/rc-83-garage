"use client";

import { useLanguage } from "@/providers/language-provider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";
import Testimonial from "./ui/testimonial";

export const Testimonials = () => {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [itemsPerView, setItemsPerView] = useState(3);
    const resumeAutoPlay = useRef<NodeJS.Timeout | null>(null);

    const testimonials = useMemo(() => [
        {
            name: t("home.testimonials.items.0.name"),
            role: t("home.testimonials.items.0.role"),
            content: t("home.testimonials.items.0.content"),
            rating: 5,
        },
        {
            name: t("home.testimonials.items.1.name"),
            role: t("home.testimonials.items.1.role"),
            content: t("home.testimonials.items.1.content"),
            rating: 5,
        },
        {
            name: t("home.testimonials.items.2.name"),
            role: t("home.testimonials.items.2.role"),
            content: t("home.testimonials.items.2.content"),
            rating: 5,
        },
        {
            name: t("home.testimonials.items.3.name"),
            role: t("home.testimonials.items.3.role"),
            content: t("home.testimonials.items.3.content"),
            rating: 5,
        },
        {
            name: t("home.testimonials.items.4.name"),
            role: t("home.testimonials.items.4.role"),
            content: t("home.testimonials.items.4.content"),
            rating: 5,
        },
        {
            name: t("home.testimonials.items.5.name"),
            role: t("home.testimonials.items.5.role"),
            content: t("home.testimonials.items.5.content"),
            rating: 5,
        },
    ], [t]);

    const maxIndex = Math.max(0, testimonials.length - itemsPerView);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }

            setCurrentIndex((index) => index > maxIndex ? maxIndex : index);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [maxIndex]);

    useEffect(() => {
        if (!isAutoPlaying) {
            clearTimeout(resumeAutoPlay.current as NodeJS.Timeout);

            resumeAutoPlay.current = setTimeout(() => {
                setIsAutoPlaying(true);
            }, 5000);

            return;
        }

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, maxIndex]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    return (
        <section id="testimonials" className="py-24 bg-(--bg)">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16 gap-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-(--text-dark)">
                        {t("home.testimonials.title")}
                    </h2>
                    <p className="text-xl text-(--text-light) max-w-2xl mx-auto">
                        {t("home.testimonials.description")}
                    </p>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-(--bg-light) border border-(--border) hover:bg-(--bg-dark) transition-all duration-300 flex items-center justify-center group hover:scale-110"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-(--text-light) group-hover:text-(--primary) transition-colors" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-(--bg-light) border border-(--border) hover:bg-(--bg-dark) transition-all duration-300 flex items-center justify-center group hover:scale-110"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-(--text-light) group-hover:text-(--primary) transition-colors" />
                    </button>

                    {/* Carousel Container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out "
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                            }}
                        >
                            {testimonials.map((testimonial, index) => 
                                <Testimonial key={index} testimonial={testimonial} />
                            )}
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setIsAutoPlaying(false);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    currentIndex === index
                                        ? "w-8 bg-(--primary)"
                                        : "w-2 bg-(--border) hover:bg-(--border-dark)"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

