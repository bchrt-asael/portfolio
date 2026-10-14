import SectionTitle from "./SectionTitle.tsx";

export default function Contact() {
    return (
        <section id="contact" className="px-5 py-12 sm:px-6 sm:py-14 lg:py-20">

            <div className="relative mx-auto max-w-3xl text-center">

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-3 -rotate-3 rounded-3xl bg-[var(--accent-bg)]"
                />

                <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] sm:p-8 md:p-16">

                    <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-bg)] blur-3xl" />

                    <SectionTitle title="Contact">
                        Un projet ?
                        <br />
                        Parlons-en.
                    </SectionTitle>

                    <p className="relative mx-auto! mt-6! max-w-lg text-sm leading-7 text-[var(--text)] sm:text-base sm:leading-8">
                        Une question, une idée de projet ou une opportunité professionnelle ? Je serais ravi d’échanger avec vous. <br />
                        N’hésitez pas à me contacter !
                    </p>

                    <div className="relative mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                        <a
                            href="mailto:bacharatasael@gmail.com"
                            className="rounded-full bg-[var(--accent)] px-7 py-3.5 font-medium text-[var(--accent-text)] transition hover:scale-105 hover:bg-[var(--accent-hover)]"
                        >
                            Me contacter
                        </a>

                        <a
                            href="https://github.com/bchrt-asael"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-[var(--border)] px-7 py-3.5 font-medium text-[var(--text-h)] transition hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)]"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/asaël-bacharat/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-[var(--border)] px-7 py-3.5 font-medium text-[var(--text-h)] transition hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)]"
                        >
                            LinkedIn
                        </a>

                    </div>

                </div>

            </div>

        </section>
    )
}