import ProjectCard from "./ProjectCard"
import { projects } from "../data/projects.ts"
import SectionTitle from "./SectionTitle.tsx";

export default function Projects() {
    const featuredProject = projects.find((project) => project.id === 1);

    const otherProjects = projects.filter((project) => project.id !== 1);

    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-14 lg:py-20">

            <div>

                <SectionTitle
                    title="Projets"
                    subtitle="Ce que j'ai construit." />

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