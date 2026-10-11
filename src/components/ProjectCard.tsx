import Carousel from "./Carousel.tsx"

interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    image: string
    imageFolder?: string
    github: string
    demo?: string
}

export default function ProjectCard({
    title,
    description,
    technologies,
    image,
    imageFolder,
    github,
    demo,
}: ProjectCardProps) {
    return (
        <article className="group overflow-hidden w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-left shadow-[var(--shadow)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent-border)] hover:bg-[var(--surface-hover)]">
            <Carousel
                image={image}
                imageFolder={imageFolder}
                title={title}
            />

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
