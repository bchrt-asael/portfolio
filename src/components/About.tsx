import SectionTitle from "./SectionTitle";

export default function About() {
    return (
        <section id="about" className="max-w-6xl mx-auto px-6 py-14 lg:py-20">

            <div className="max-w-2xl mx-auto text-center">
                <SectionTitle
                    title="&Agrave; propos"
                    subtitle="Mon parcours"
                />

            </div>

            <div className="mt-10 grid items-start gap-10 md:grid-cols-[1.4fr_0.8fr] md:gap-16">
                <div data-reveal data-reveal-delay="2" className="flex max-w-prose flex-col gap-3 text-left text-sm leading-7 text-[var(--text)] md:leading-8">
                    <p>
                        Je suis <strong className="font-semibold text-[var(--text-h)]">Asa&euml;l BACHARAT</strong>, d&eacute;veloppeur full-stack passionn&eacute; par la conception d’applications web.
                    </p>

                    <p>
                        Apr&egrave;s deux ann&eacute;es en classe pr&eacute;paratoire aux &eacute;coles d’ing&eacute;nieurs, j’ai choisi de me r&eacute;orienter
                        vers l’informatique et suivi une formation en BUT Informatique, qui m’a permis de d&eacute;velopper
                        mes comp&eacute;tences en programmation et en conception d’applications.
                    </p>

                    <p>
                        Au fil de mes projets, j’ai d&eacute;velopp&eacute; des comp&eacute;tences en d&eacute;veloppement front-end,
                        back-end et en bases de donn&eacute;es, notamment avec React, TypeScript, PHP et SQL.
                        J’aime concevoir des solutions fonctionnelles, apprendre de nouvelles technologies
                        et relever des d&eacute;fis techniques.
                    </p>
                    <p>
                        Je souhaite aujourd’hui approfondir mes comp&eacute;tences en d&eacute;veloppement web et
                        explorer les possibilit&eacute;s offertes par l’intelligence artificielle, dans le
                        cadre d’un Bachelor D&eacute;veloppeur Web & IA.
                    </p>
                </div>

                <aside data-reveal data-reveal-delay="3" className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5.5 text-left shadow-[var(--shadow)]">
                    <h3 className="text-xl font-semibold text-[var(--text-h)]">
                        En bref
                    </h3>

                    <dl className="mt-4 space-y-2.5">
                        <div className="rounded-xl border border-[var(--border)] bg-[var(--accent-bg)] px-4 py-3">
                            <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-text)]">
                                Sp&eacute;cialisation
                            </dt>
                            <dd className="mt-1.5 text-base font-semibold leading-6 text-[var(--text-h)]">
                                D&eacute;veloppement web
                            </dd>
                        </div>

                        <div className="rounded-xl border border-[var(--border)] bg-[var(--accent-bg)] px-4 py-3">
                            <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-text)]">
                                Projet de formation
                            </dt>
                            <dd className="mt-1.5 text-base font-semibold leading-6 text-[var(--text-h)]">
                                Bachelor D&eacute;veloppeur Web & IA
                            </dd>
                        </div>

                        <div className="rounded-xl border border-[var(--border)] bg-[var(--accent-bg)] px-4 py-3">
                            <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-text)]">
                                Langues
                            </dt>
                            <dd className="mt-1.5 space-y-1 text-base font-semibold leading-6 text-[var(--text-h)]">
                                <p>                                    Fran&ccedil;ais <span className="text-[var(--muted-text)]">· Natif</span></p>
                                <p>Anglais <span className="text-[var(--muted-text)]">· Niveau C1</span></p>
                            </dd>
                        </div>

                        <div className="rounded-xl border border-[var(--border)] bg-[var(--accent-bg)] px-4 py-3">
                            <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-text)]">
                                Mobilit&eacute;
                            </dt>
                            <dd className="mt-1.5 space-y-1 text-base font-semibold leading-6 text-[var(--text-h)]">
                                <p>Reims et alentours · Paris</p>
                            </dd>
                        </div>
                    </dl>
                </aside>
            </div>

        </section >
    )
}