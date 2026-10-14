import React from "react";
import { useEffect, useRef } from "react";


export default function ScrollFadeIn({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const root = ref.current;
        if (!root) return;

        const targets = root.querySelectorAll<HTMLElement>("[data-reveal]");

        if (!("IntersectionObserver" in window)) {
            targets.forEach((target) => target.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        targets.forEach((target) => observer.observe(target));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={ref}>
            {children}
        </div>
    );
}