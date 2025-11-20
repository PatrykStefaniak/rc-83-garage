export function Gallery() {
    return (
        <section className="space-y-6" id="gallery">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.5em] text-(--secondary)">
                        Gallery
                    </p>
                    <h2 className="text-3xl font-bold text-(--text-light)">Gallery</h2>
                </div>
                <p className="max-w-xl text-sm text-(--text)">Description</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
                {/* Placeholder for gallery images */}
            </div>
        </section>
    );
}