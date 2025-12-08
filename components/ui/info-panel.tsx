"use client";

import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface InfoPanelProps {
    icon: LucideIcon;
    label: string;
    children: ReactNode;
}

export const InfoPanel = ({ icon: Icon, label, children }: InfoPanelProps) => (
    <div className="p-5 bg-(--bg-light) border border-(--border) rounded-xl hover:border-(--primary) transition-smooth cursor-default">
        <div className="flex items-start gap-4 hover:scale-105 transition-smooth duration-500">
            <div className="w-12 h-12 bg-(--primary)/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-(--primary)" />
            </div>
            <div>
                <h3 className="text-sm font-bold text-(--text-light) mb-1">
                    {label}
                </h3>
                <div className="text-(--text)">
                    {children}
                </div>
            </div>
        </div>
    </div>
);