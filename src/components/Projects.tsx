import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects.ts"

export default function Projects() {
    const featuredProject = projects.find((project) => project.id === 1);

    const otherProjects = projects.filter((project) => project.id !== 1);

    return (
        <section id="projects" className="px-6 py-24">

            <div className="mx-auto max-w-6xl">

                <div className="mb-12">
                    <p className="text-3xl font-semibold uppercase tracking-widest text-[var(--accent)]">
                        Projets
                    </p>

                    <h2 className="mt-3 text-2xl font-bold text-[var(--text-h)] md:text-5xl">
                        Ce que j'ai construit.
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-[repeat(2,1fr)]">
                    {featuredProject && (
                        <ProjectCard
                            key={featuredProject.id}
                            featured={true}
                            {...featuredProject}
                        />
                    )}
                    {otherProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            featured={false}
                            {...project}
                        />
                    ))}

                </div>

            </div>

        </section>
    )
}