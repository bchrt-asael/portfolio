import { technologies } from "../data/technologies.ts"
import SectionTitle from "./SectionTitle.tsx";

export default function Technologies() {
    return (
        <section
            id="technologies"
            className="mx-auto my-2 w-[calc(100%-2rem)] max-w-6xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-12 sm:my-0 sm:w-[calc(100%-3rem)] sm:px-6 sm:py-14 lg:py-20"
        >

            <SectionTitle
                title="Technologies"
                subtitle="Les outils avec lesquels je travaille." />

            <div data-reveal data-reveal-delay="2" className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 lg:grid-cols-4">

                {technologies.map((technology) => (
                    <div
                        key={technology.name}
                        className="group rounded-xl border border-[var(--border)] bg-[var(--bg)]/40 p-3 text-left transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:bg-[var(--surface-hover)] sm:p-5"
                    >
                        <div className="flex min-w-0 flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">

                            <span className="break-words text-sm font-medium text-[var(--text-h)] transition group-hover:text-[var(--accent)] pointer-events-none sm:text-base">
                                {technology.name}
                            </span>

                            <img src={technology.icon} alt={technology.name} className="h-6 w-6 shrink-0 sm:h-8 sm:w-8" />

                        </div>
                    </div>
                ))}

            </div>


        </section>
    )
}