import { useState } from "react";

const navItems = [
    { href: "#projects", label: "Projets" },
    { href: "#about", label: "À propos" },
    { href: "#technologies", label: "Technologies" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header id="top" className="fixed inset-x-0 top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--nav-bg)] backdrop-blur-xl">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a
                    href="#top"
                    className="text-xl font-bold tracking-tight text-[var(--text-h)]"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Asael Bacharat, accueil"
                >
                    AB<span className="text-[var(--accent)]">.</span>
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="text-sm text-[var(--muted-text)] transition hover:text-[var(--text-h)]"
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-[var(--accent-text)] transition hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                    >
                        Me contacter
                    </a>
                </div>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-[var(--text-h)] transition hover:bg-[var(--accent-bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] md:hidden"
                    aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    {isMenuOpen ? (
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                        </svg>
                    ) : (
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>

            <div
                id="mobile-navigation"
                className={`${isMenuOpen ? "block" : "hidden"} border-t border-[var(--border)] px-6 py-3 md:hidden`}
            >
                <div className="mx-auto flex max-w-6xl flex-col">
                    {navItems.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="py-3 text-left text-sm text-[var(--muted-text)] transition hover:text-[var(--text-h)]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="mt-2 rounded-full bg-[var(--accent)] px-5 py-3 text-center text-sm font-semibold text-[var(--accent-text)] transition hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Me contacter
                    </a>
                </div>
            </div>
        </header>
    )
}