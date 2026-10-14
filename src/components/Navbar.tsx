import { useState } from "react";

const navItems = [
    { href: "#projects", label: "Projets" },
    { href: "#about", label: "À propos" },
    { href: "#technologies", label: "Technologies" },
    { href: "/CV_BACHARAT_Asael.pdf", label: "CV" },
];

interface NavbarProps {
    isDarkMode: boolean;
    onToggleTheme: () => void;
}

export default function Navbar({ isDarkMode, onToggleTheme }: NavbarProps) {
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
                </div>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-[var(--text-h)] transition hover:bg-[var(--accent-bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                    aria-label={isDarkMode ? "Activer le mode clair" : "Activer le mode sombre"}
                    aria-pressed={isDarkMode}
                    onClick={onToggleTheme}
                >
                    {isDarkMode ? (
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                            <circle cx="12" cy="12" r="4" />
                            <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                        </svg>
                    ) : (
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
                        </svg>
                    )}
                </button>

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
                </div>
            </div>
        </header>
    )
}