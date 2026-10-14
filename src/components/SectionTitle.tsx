
export default function SectionTitle({ title, subtitle, children }: {
    title: string;
    subtitle?: string | null;
    children?: React.ReactNode;
}) {
    return (
        <div className="max-w-2xl mx-auto mb-12 text-center">
            <p data-reveal data-reveal-delay="1" className="text-3xl font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                {title}
            </p>

            <h2 data-reveal data-reveal-delay="1" className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-h)] md:text-5xl">
                {children ?? subtitle}
            </h2>

        </div>
    )
}