"use client";

import { LANGUAGE_OPTIONS, useLanguage } from "@/providers/language-provider";
import { Locale } from "@/types/types";
import type { ChangeEvent } from "react";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value as Locale);
    };

    return (
        <select
            value={language}
            onChange={handleChange}
            className="rounded-full border border-(--border) bg-(--bg-light) px-3 py-2 text-xs font-semibold uppercase tracking-wide text-(--text) transition hover:border-(--primary) focus:outline-none focus:ring-2 focus:ring-(--primary)"
            aria-label="Select language"
        >
            {LANGUAGE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

