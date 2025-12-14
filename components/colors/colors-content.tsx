"use client";

import { useLanguage } from "@/providers/language-provider";
import { useState } from "react";
import { PAINT_TYPES, COLORS } from "./paint-config";
import { PageWrapper } from "../ui/page-wrapper";
import ModelCanvas from "./model-canvas";

export const ColorsContent = () => {
    const { t } = useLanguage();
    const [selectedPaintType, setSelectedPaintType] = useState(PAINT_TYPES[1].id);
    const [selectedColor, setSelectedColor] = useState(COLORS[0].id);

    const currentPaintType = PAINT_TYPES.find(pt => pt.id === selectedPaintType) || PAINT_TYPES[0];
    const currentColor = COLORS.find(c => c.id === selectedColor) || COLORS[0];

    const paintConfig = {
        color: currentColor.value,
        roughness: currentPaintType.roughness,
        metalness: currentPaintType.metalness,
    };

    return (
        <PageWrapper>
            <main className="pt-36 min-h-screen">
                {/* Header Section */}
                <div className="max-w-7xl mx-auto px-6 my-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-(--text)">
                        {t("colors.title")}
                    </h1>
                    <p className="text-lg text-(--text-light) max-w-3xl mx-auto leading-relaxed">
                        {t("colors.description")}
                    </p>
                </div>

                {/* Controls */}
                <div className="max-w-7xl mx-auto px-6 mb-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                        <div className="w-full max-w-[300px]">
                            <label htmlFor="paint-type" className="block text-sm font-medium mb-2 text-(--text)">
                                {t("colors.paintType")}
                            </label>
                            <select
                                id="paint-type"
                                value={selectedPaintType}
                                onChange={(e) => setSelectedPaintType(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-(--border) bg-(--bg) text-(--text) focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {PAINT_TYPES.map((type) => (
                                    <option key={type.id} value={type.id}>
                                        {t(type.translationKey)}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full max-w-[300px]">
                            <label htmlFor="color" className="block text-sm font-medium mb-2 text-(--text)">
                                {t("colors.color")}
                            </label>
                            <select
                                id="color"
                                value={selectedColor}
                                onChange={(e) => setSelectedColor(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-(--border) bg-(--bg) text-(--text) focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {COLORS.map((color) => (
                                    <option key={color.id} value={color.id}>
                                        {t(color.translationKey)}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* 3D Canvas */}
                <div className="mx-auto w-full lg:w-[50vw] h-[calc(100vh-18rem)] border-2 border-(--border) rounded-lg box-shadow-lg ">
                    <ModelCanvas paintConfig={paintConfig} />
                </div>
            </main>
        </PageWrapper>
    );
};

