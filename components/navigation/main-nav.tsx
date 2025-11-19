"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function MainNav() {
  const { copy } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--bg)/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-(--primary) px-3 py-1 text-xs font-black uppercase tracking-widest text-(--bg-dark)">
            BMW
          </div>
          <div className="flex flex-col leading-tight text-(--text)">
            <span className="text-sm font-semibold">{copy.nav.brand}</span>
            <span className="text-xs text-(--text-light)">{copy.nav.motto}</span>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-(--text) md:flex">
          {copy.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-(--primary)"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

