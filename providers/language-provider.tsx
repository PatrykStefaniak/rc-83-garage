"use client";

import { Locale } from "@/types/types";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const LANGUAGE_OPTIONS = [
    { value: "en", label: "EN" },
    { value: "es", label: "ES" },
    { value: "pl", label: "PL" },
] as const;

type LanguageContextValue = {
    language: Locale;
    setLanguage: (locale: Locale) => void;
    translate: (key: string) => string;
};

const STORAGE_KEY = "rc83-language";

let translations: Record<string, string> = {};

const resolveStoredLanguage = (): Locale => {
    if (typeof window === "undefined") {
        return "en";
    }

    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;

    return LANGUAGE_OPTIONS.some((option) => option.value === stored) && stored
        ? stored
        : "en";
};

const translate = (key: string) => {
    return translations[key] || key;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Locale>("en");

    const setLanguage = (value: Locale) => {
        setLanguageState(value);
        window.localStorage.setItem(STORAGE_KEY, value);
    };

    useEffect(() => {
        setLanguageState(resolveStoredLanguage());
    }, []);

    useEffect(() => {
        if (language === "en") {
            translations = {}
            return;
        }

        import(`@/public/i18n/${language}.json`).then((module) => {
            translations = module.default;
        });
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, translate }}>
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

