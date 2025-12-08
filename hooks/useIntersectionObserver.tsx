import { RefObject, useEffect, useState } from "react";

export default function useIntersectionObserver(ref: RefObject<HTMLElement | null>, once = false): boolean {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isIntersecting = entry.isIntersecting;

                setIsInView(isIntersecting);

                if (isIntersecting && once) {
                    observer.disconnect();
                }
            },
            { threshold: 0 }
        );

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        }
    }, [ref, once]);

    return isInView;
}