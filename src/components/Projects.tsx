import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects.ts"

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-24 px-6 py-24">

            <div className="mx-auto max-w-6xl">

                <div className="mb-12">
                    <p className="text-base font-semibold uppercase tracking-widest text-[var(--accent)]">
                        Projets
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-[var(--text-h)] md:text-5xl">
                        Ce que j'ai construit.
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-2">

                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                        />
                    ))}

                </div>

            </div>

        </section>
    )
}