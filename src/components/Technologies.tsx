import { technologies } from "../data/technologies.ts"
import SectionTitle from "./SectionTitle.tsx";

export default function Technologies() {
    return (
        <section
            id="technologies"
            className="border border-[var(--border)] rounded-2xl outline-grey-200 bg-[var(--surface)] px-6 py-14 lg:py-20"
        >
            <div className="mx-auto max-w-6xl">

                <SectionTitle
                    title="Technologies"
                    subtitle="Les outils avec lesquels je travaille." />

                <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">

                    {technologies.map((technology) => (
                        <div
                            key={technology.name}
                            className="group rounded-xl border border-[var(--border)] bg-[var(--bg)]/40 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:bg-[var(--surface-hover)]"
                        >
                            <div className="flex items-center justify-between gap-3">

                                <span className="font-medium text-[var(--text-h)] transition group-hover:text-[var(--accent)] pointer-events-none">
                                    {technology.name}
                                </span>

                                <img src={technology.icon} alt={technology.name} className="h-8 w-8" />

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}