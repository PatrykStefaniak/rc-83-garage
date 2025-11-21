"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Theme = "dark" | "light";

type ThemeContextValue = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
};

const STORAGE_KEY = "rc83-theme";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const resolveStoredTheme = (): Theme => {
    if (typeof window === "undefined") {
        return "dark";
    }

    return window.localStorage.getItem(STORAGE_KEY) as Theme | "dark";
};

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(() => resolveStoredTheme());

    useEffect(() => {
        if (typeof document !== "undefined") {
            document.body.classList.toggle("dark", theme === "dark");
        }
        if (typeof window !== "undefined") {
            window.localStorage.setItem(STORAGE_KEY, theme);
        }
    }, [theme]);

    const setTheme = useCallback((value: Theme) => {
        setThemeState(value);
    }, []);

    const toggleTheme = useCallback(() => {
        setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
    }, []);

    const value = useMemo(() => (
        {theme, setTheme, toggleTheme}
    ), [theme, setTheme, toggleTheme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}
