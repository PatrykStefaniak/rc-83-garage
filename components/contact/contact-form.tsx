"use client";

import { useState, FormEvent } from "react";
import { Send, Loader2 } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";

type FormStatus = "idle" | "sending" | "success" | "error";

export const ContactForm = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        // Simulate form submission
        // Replace with actual API call when backend is ready
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setStatus("success");
            setFormData({ name: "", phone: "", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-(--text-light) mb-2"
                >
                    {t("contact.form.name")}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.form.namePlaceholder")}
                    required
                    className="w-full px-4 py-3 bg-(--bg-light) border border-(--border) rounded-lg text-(--text) placeholder:text-(--text-light)/50 focus:outline-none focus:border-(--primary) transition-smooth"
                />
            </div>

            <div>
                <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-(--text-light) mb-2"
                >
                    {t("contact.form.phone")}
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("contact.form.phonePlaceholder")}
                    required
                    className="w-full px-4 py-3 bg-(--bg-light) border border-(--border) rounded-lg text-(--text) placeholder:text-(--text-light)/50 focus:outline-none focus:border-(--primary) transition-smooth"
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-(--text-light) mb-2"
                >
                    {t("contact.form.message")}
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.form.messagePlaceholder")}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-(--bg-light) border border-(--border) rounded-lg text-(--text) placeholder:text-(--text-light)/50 focus:outline-none focus:border-(--primary) transition-smooth resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-(--primary) hover:bg-(--primary)/80 text-(--bg-dark) font-semibold rounded-lg transition-smooth flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
                {status === "sending" ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t("contact.form.sending")}
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        {t("contact.form.submit")}
                    </>
                )}
            </button>

            {status === "success" && (
                <p className="text-(--success) text-center font-medium">
                    {t("contact.form.success")}
                </p>
            )}

            {status === "error" && (
                <p className="text-(--danger) text-center font-medium">
                    {t("contact.form.error")}
                </p>
            )}
        </form>
    );
};
