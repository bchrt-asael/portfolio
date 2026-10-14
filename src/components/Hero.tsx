const Hero = () => {
    return (
        <section
            id="accueil"
            className="mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:gap-14 sm:px-6 sm:pb-20 sm:pt-32 sm:grid-cols-[2fr_2fr] lg:grid-cols-[1.1fr_0.9fr]"
        >
            <div className="text-left">
                <div className="max-sm:flex max-sm:justify-center">
                    <p data-reveal className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-bg)] px-4 py-2 text-sm font-medium text-[var(--accent)]">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                        Bonjour, moi c&apos;est Asa&euml;l
                    </p>
                </div>

                <h1 data-reveal data-reveal-delay="1" className="mb-6 mt-0 text-[clamp(2.25rem,9vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-[var(--text-h)] max-sm:text-center max-sm:leading-[1.15] lg:text-left">
                    Développeur web
                    <span className="mt-2 block text-[var(--accent)]">junior.</span>
                </h1>

                <p data-reveal data-reveal-delay="2" className="max-w-xl text-base leading-7 text-[var(--text)] sm:text-lg sm:leading-8">
                    Je conçois des applications web modernes et je recherche
                    actuellement une alternance en développement Fullstack.
                </p>

                <div data-reveal data-reveal-delay="3" className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
                    <a
                        href="#projects"
                        className="rounded-full bg-[var(--accent)] px-6 py-3 text-center font-semibold text-[var(--accent-text)] transition hover:shadow-[0_0_20px_3px] hover:shadow-indigo-400 hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                    >
                        Découvrir mes projets
                    </a>
                    <a
                        href="#contact"
                        className="px-2 py-3 text-center font-semibold text-[var(--text-h)] transition hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                    >
                        Me contacter <span aria-hidden="true">↗</span>
                    </a>
                </div>

                <p data-reveal data-reveal-delay="3" className="mt-8! text-sm text-[var(--muted-text)] max-sm:text-center">
                    Basé à Reims <span className="mx-2 text-[var(--accent)]">·</span>
                    Ouvert aux opportunités en alternance
                </p>
            </div>

            <div data-reveal data-reveal-delay="2" className="relative mx-auto w-full max-w-sm">
                <div
                    aria-hidden="true"
                    className="absolute inset-3 rotate-6 rounded-[2rem] bg-[var(--accent-bg)]"
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-2 shadow-2xl shadow-slate-900/10">
                    <img
                        src="/img/asael-bacharat.jpg"
                        alt="Mon portrait"
                        className="aspect-auto w-full rounded-[1.5rem] object-cover object-center"
                    />
                </div>

                <div className="absolute -bottom-5 left-1/2 flex w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-hover)] px-4 py-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl sm:left-auto sm:right-[-1.5rem] sm:w-auto sm:translate-x-0">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent-bg)] text-lg text-[var(--accent)]" aria-hidden="true">
                        &lt;/&gt;
                    </span>
                    <span className="text-left">
                        <span className="block text-sm font-semibold text-[var(--text-h)]">Asaël Bacharat</span>
                        <span className="block text-xs text-[var(--muted-text)]">Développeur web junior</span>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
