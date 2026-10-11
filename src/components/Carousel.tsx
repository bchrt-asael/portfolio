import { useEffect, useState } from "react"

const projectImages = import.meta.glob<string>(
    "../assets/projects/*/*.{png,jpg,jpeg,webp,avif}",
    { eager: true, query: "?url", import: "default" },
)

export default function Carousel({
    image,
    imageFolder,
    title,
}: {
    image: string
    imageFolder?: string
    title: string
}) {
    const images = Object.entries(projectImages)
        .filter(([path]) => path.split("/").at(-2) === imageFolder)
        .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
        .map(([, url]) => url)
    const slides = images.length > 0 ? images : [image]
    const slideCount = slides.length
    const [currentIndex, setCurrentIndex] = useState(0)
    const [failedImage, setFailedImage] = useState<string | null>(null)
    const currentImage = slides[currentIndex % slideCount]

    useEffect(() => {
        if (slideCount < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return
        }

        const interval = window.setInterval(() => {
            setCurrentIndex((index) => (index + 1) % slideCount)
        }, 4000)

        return () => window.clearInterval(interval)
    }, [slideCount])

    return (
        <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-[var(--surface-muted)]">
            {failedImage !== currentImage ? (
                <img
                    key={currentImage}
                    alt={`Aperçu de ${title}`}
                    src={currentImage}
                    className="h-full w-full object-cover transition-opacity duration-500"
                    onError={() => setFailedImage(currentImage)}
                />
            ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[var(--accent-bg)] to-transparent p-6 text-center">
                    <span aria-hidden="true" className="text-4xl font-bold text-[var(--accent)]">&lt;/&gt;</span>
                    <span className="text-sm font-medium text-[var(--muted-text)]">{title}</span>
                </div>
            )}
            {slideCount > 1 && (
                <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between">
                    <button
                        type="button"
                        aria-label="Image précédente"
                        onClick={() => setCurrentIndex((index) => (index - 1 + slideCount) % slideCount)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white opacity-75 transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        <span aria-hidden="true">❮</span>
                    </button>
                    <button
                        type="button"
                        aria-label="Image suivante"
                        onClick={() => setCurrentIndex((index) => (index + 1) % slideCount)}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white opacity-75 transition hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        <span aria-hidden="true">❯</span>
                    </button>
                </div>
            )}
        </div>
    )
}
