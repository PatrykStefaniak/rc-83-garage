"use client";

import { Locale } from "@/types/types";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export const LANGUAGE_OPTIONS = [
    { value: "en", label: "EN" },
    { value: "es", label: "ES" },
    { value: "pl", label: "PL" },
] as const;

type LanguageContextValue = {
    language: Locale;
    setLanguage: (locale: Locale) => void;
    t: (key: string) => string;
    isLoading: boolean;
};

type Translations = Record<string, unknown>;

const STORAGE_KEY = "rc83-language";

const resolveStoredLanguage = (): Locale => {
    if (typeof window === "undefined") {
        return "en";
    }

    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;

    return LANGUAGE_OPTIONS.some((option) => option.value === stored) && stored
        ? stored
        : "en";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);


export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Locale>("es");
    const [isLoading, setIsLoading] = useState(true);
    const [translations, setTranslations] = useState<Translations>({});

    const setLanguage = useCallback((value: Locale) => {
        setLanguageState(value);
        window.localStorage.setItem(STORAGE_KEY, value);
    }, []);

    useEffect(() => {
        setLanguageState(resolveStoredLanguage());
    }, []);

    useEffect(() => {
        setIsLoading(true);

        import(`@/messages/${language}.json`).then((module) => {
            setTranslations(module.default);
            setIsLoading(false);
        });
    }, [language]);

    const t = useCallback((path: string): string => {
        const keys = path.split(".");
        let current: unknown = translations;

        for (const key of keys) {
            if (current && typeof current === "object" && key in current) {
                current = (current as Record<string, unknown>)[key];
            } else {
                return path;
            }
        }

        return typeof current === "string" ? current : path;
    }, [translations]);

    const value = useMemo(() => (
        {language, setLanguage, t, isLoading}
    ), [language, setLanguage, t, isLoading]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }

    return context;
}

