"use client";

import { LANGUAGE_OPTIONS, useLanguage } from "@/providers/language-provider";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const currentOption = useMemo(
        () => LANGUAGE_OPTIONS.find((option) => option.value === language) ?? LANGUAGE_OPTIONS[0],
        [language],
    );

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (value: string) => {
        setLanguage(value as typeof language);
        setOpen(false);
    };

    return (
        <div className="relative" ref={containerRef}>
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="cursor-pointer flex h-10 items-center gap-2 rounded-full border border-(--border) bg-(--bg-light) px-3 py-2 text-xs font-semibold uppercase tracking-wide text-(--text) transition hover:border-(--primary) hover:scale-105 focus:outline-none focus:ring-2 focus:ring-(--primary)"
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <Image
                    src={`/${currentOption.value}.png`}
                    alt={currentOption.label}
                    width={20}
                    height={20}
                    className="rounded-full"
                    priority
                />
                <span>{currentOption.label}</span>
                <svg
                    className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M4 6l4 4 4-4" />
                </svg>
            </button>
            {open && (
                <div
                    className="absolute right-0 z-20 mt-2 w-36 rounded-2xl border border-(--border) bg-(--bg) p-1 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                    role="listbox"
                    aria-label="Languages"
                >
                    {LANGUAGE_OPTIONS.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => handleSelect(option.value)}
                            className={`cursor-pointer flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide transition hover:bg-(--bg-light) hover:scale-105 ${
                                option.value === language ? "text-(--primary)" : "text-(--text)"
                            }`}
                            role="option"
                            aria-selected={option.value === language}
                        >
                            <Image
                                src={`/${option.value}.png`}
                                alt={option.label}
                                width={20}
                                height={20}
                                className="rounded-full"
                            />
                            <span>{option.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}