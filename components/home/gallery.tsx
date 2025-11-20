import Image from "next/image";

function GallerySection() {
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
                {/* {gallery.images.map((image, index) => (
                    <figure
                        key={image.src}
                        className={`relative overflow-hidden rounded-3xl border border-(--border) ${index === 0 ? "md:col-span-2 md:row-span-2" : ""
                            }`}
                    >
                        <Image
                            src={`${image.src}?auto=format&fit=crop&w=900&q=80`}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="h-full w-full object-cover"
                            priority={index === 0}
                        />
                        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-xs uppercase tracking-[0.4em] text-(--text-light)">
                            BMW finish lab
                        </figcaption>
                    </figure>
                ))} */}
            </div>
        </section>
    );
}