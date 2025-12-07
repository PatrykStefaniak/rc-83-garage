"use client";

const DEFAULT_EMBED_URL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=RC%2083%20GARAGE%2C%20Carrer%20Gremi%20de%20Boters%2C%20Palma%2C%20Spain&maptype=roadmap";

interface GoogleMapProps {
    embedUrl?: string;
    title?: string;
    className?: string;
}

export const GoogleMap = ({
    embedUrl = DEFAULT_EMBED_URL,
    title = "Car Paintshop Location",
    className = "h-[400px] lg:h-[500px]",
}: GoogleMapProps) => {
    return (
        <div className={`rounded-xl overflow-hidden shadow-medium ${className}`}>
            <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={title}
            />
        </div>
    );
};
