"use client";

import { useTheme } from "@/providers/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    const iconEffects = "group-hover:rotate-360 transition-transform duration-700 ease-in-out";

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="cursor-pointer flex h-10 items-center gap-2 rounded-full border border-(--border) bg-(--bg-light) px-3 py-2 text-xs font-semibold uppercase tracking-wide text-(--text) transition-colors hover:border-(--primary) hover:text-(--primary) group hover:scale-115 transition-transform duration-700 ease-in-out"
            aria-label="Toggle theme"
            suppressHydrationWarning 
        >
            {
                theme === "dark"
                    ? <Moon className={iconEffects} />
                    : <Sun className={iconEffects} />
            }
        </button>
    );
}