import { type Testimonial as TestimonialProps } from "@/types/types";
import { Quote, Star } from "lucide-react";

export default function Testimonial({ testimonial }: { testimonial: TestimonialProps }) {
    return (
        <div
            className="flex-shrink-0 w-full md:w-[calc(50%)] lg:w-[calc(33.333%)] px-4"
        >
            <div className="bg-(--bg-dark) rounded-xl p-6 md:p-8 h-full border border-(--border) hover:border-(--primary)/50 transition-all duration-300 hover:shadow-[0_0_20px_var(--primary)/20] group">
                <div className="flex flex-col h-full">
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-(--primary)/30 mb-4 group-hover:text-(--primary)/50 transition-colors" />

                    <p className="text-(--text) text-base md:text-lg mb-6 flex-grow leading-relaxed">
                        {testimonial.content}
                    </p>

                    <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star
                                key={i}
                                className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                            />
                        ))}
                    </div>

                    <div className="border-t border-(--border) pt-4">
                        <p className="font-bold text-(--text-dark) text-base md:text-lg">
                            {testimonial.name}
                        </p>
                        <p className="text-(--text-light) text-xs md:text-sm">
                            {testimonial.role}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}