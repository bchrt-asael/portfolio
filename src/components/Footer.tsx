const socials = [
    {
        label: "GitHub",
        to: "https://github.com/bchrt-asael",
        path: "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3",
    },
    {
        label: "LinkedIn",
        to: "https://www.linkedin.com/in/asaël-bacharat/",
        path: "M20.45 20.45h-3.56v-5.57c0-1.33 0-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
    },
];


export default function Footer() {
    return (
        <footer className="w-full border-t border-[var(--border)] bg-[var(--surface)] px-6 py-12 text-[var(--muted-text)]">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                    <div>
                        <p className="font-semibold text-[var(--text-h)]">
                            Asaël Bacharat
                        </p>
                        <p className="text-sm">Développeur web</p>
                    </div>

                    <nav
                        aria-label="Réseaux sociaux et contact"
                        className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-[var(--text)]"
                    >
                        {socials.map(({ label, to, path }) => (
                            <a
                                key={label}
                                href={to}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 transition-colors hover:text-[var(--accent)]"
                            >
                                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
                                    <path d={path} />
                                </svg>
                                {label}
                            </a>
                        ))}

                        <a
                            href="mailto:bacharatasael@gmail.com"
                            className="flex items-center gap-2 transition-colors hover:text-[var(--accent)]"
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5 shrink-0"
                            >
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <path d="m3 7 9 6 9-6" />
                            </svg>
                            bacharatasael@gmail.com
                        </a>
                    </nav>
                </div>

                <div className="mt-6 flex flex-col items-center gap-2 border-t border-[var(--border)] pt-4 text-center text-xs sm:flex-row sm:justify-between">
                    <p>© {new Date().getFullYear()} Asaël Bacharat</p>
                    <p>Conçu avec React &amp; Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
}
