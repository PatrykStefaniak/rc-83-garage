"use client";

import { useTheme } from "@/providers/theme-provider";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="flex items-center gap-2 rounded-full border border-(--border) bg-(--bg-light) px-3 py-2 text-xs font-semibold uppercase tracking-wide text-(--text) transition-colors hover:border-(--primary) hover:text-(--primary)"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? <IconMoon /> : <IconSun />}
            <span>{theme === "dark" ? "Dark" : "Light"}</span>
        </button>
    );
}

function IconSun() {
    return (
        <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.5-7.5-1.4 1.4M7.9 16.1l-1.4 1.4m0-12.2 1.4 1.4m9.2 9.2 1.4 1.4" />
        </svg>
    );
}

function IconMoon() {
    return (
        <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z" />
        </svg>
    );
}

