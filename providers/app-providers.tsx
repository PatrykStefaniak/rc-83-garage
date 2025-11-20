"use client";

import { LanguageProvider } from "./language-provider";
import { ThemeProvider } from "./theme-provider";
import type { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
        <ThemeProvider>
            {children}
        </ThemeProvider>
    </LanguageProvider>
  );
}

