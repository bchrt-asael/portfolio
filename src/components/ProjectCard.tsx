import { useState } from "react"

interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    image: string
    github: string
    demo?: string
}

export default function ProjectCard({
    title,
    description,
    technologies,
    image,
    github,
    demo,
}: ProjectCardProps) {
    const [hasImageError, setHasImageError] = useState(false)

    return (
        <article className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-left shadow-[var(--shadow)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:bg-[var(--surface-hover)]">
            <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[var(--surface-muted)]">
                {!hasImageError ? (
                    <img
                        src={image}
                        alt={`Aperçu de ${title}`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        onError={() => setHasImageError(true)}
                    />
                ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[var(--accent-bg)] to-transparent p-6 text-center">
                        <span aria-hidden="true" className="text-4xl font-bold text-[var(--accent)]">&lt;/&gt;</span>
                        <span className="text-sm font-medium text-[var(--muted-text)]">{title}</span>
                    </div>
                )}
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-semibold text-[var(--text-h)]">
                    {title}
                </h3>

                <p className="mt-3 leading-7 text-[var(--text)]">
                    {description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-full bg-[var(--chip-bg)] px-3 py-1 text-xs font-medium text-[var(--accent)]"
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                <div className="mt-6 flex gap-4">
                    {github && github !== "#" && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-[var(--accent)] underline underline-offset-4 hover:text-[var(--accent-hover)]"
                        >
                            GitHub →
                        </a>
                    )}

                    {demo && demo !== "#" && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-[var(--muted-text)] hover:text-[var(--text-h)]"
                        >
                            Démo →
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}
