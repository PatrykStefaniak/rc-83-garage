"use client";

import { Locale } from "@/types/types";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import enTranslations from "@/messages/en.json";
import esTranslations from "@/messages/es.json";
import plTranslations from "@/messages/pl.json";
import { Loader2 } from "lucide-react";

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

const getNestedValue = (obj: Translations, path: string): string => {
    const keys = path.split(".");
    let current: unknown = obj;

    for (const key of keys) {
        if (current && typeof current === "object" && key in current) {
            current = (current as Record<string, unknown>)[key];
        } else {
            return path;
        }
    }

    return typeof current === "string" ? current : path;
};

const t = (key: string): string => {
    return getNestedValue(translations, key);
};

const LanguageContext = createContext<LanguageContextValue | null>(null);


export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Locale>("en");
    const [isLoading, setIsLoading] = useState(true);

    const setLanguage = (value: Locale) => {
        setLanguageState(value);
        window.localStorage.setItem(STORAGE_KEY, value);
    };

    useEffect(() => {
        setLanguageState(resolveStoredLanguage());
    }, []);

    useEffect(() => {
        setIsLoading(true);

        import(`@/messages/${language}.json`).then((module) => {
            translations = module.default;
            setIsLoading(false);
        });
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
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

