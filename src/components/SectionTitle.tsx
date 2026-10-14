
export default function SectionTitle({ title, subtitle, children }: {
    title: string;
    subtitle?: string | null;
    children?: React.ReactNode;
}) {
    return (
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p data-reveal data-reveal-delay="1" className="text-3xl font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:tracking-[0.2em]">
                {title}
            </p>

            <h2 data-reveal data-reveal-delay="1" className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-h)]">
                {children ?? subtitle}
            </h2>

        </div>
    )
}