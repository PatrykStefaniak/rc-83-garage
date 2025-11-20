import { MapPin, Phone, Clock } from "lucide-react";

export const Location = () => {
    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
                        Visit Our Shop
                    </h2>
                    <p className="text-xl text-text-light max-w-2xl mx-auto">
                        Come see us for a free consultation and quote
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Map */}
                    <div className="rounded-xl overflow-hidden shadow-medium h-[400px] lg:h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.1937391816997!2d21.012228776892474!3d52.22967717198107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8ad7a140a5%3A0x8b0e5e5a1c6e5e5e!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Car Paintshop Location"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="p-6 bg-card border-border hover:border-primary transition-smooth">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-card-foreground mb-2">Address</h3>
                                    <p className="text-muted-foreground">
                                        123 Paint Street<br />
                                        00-001 Warsaw, Poland
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-card border-border hover:border-primary transition-smooth">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-card-foreground mb-2">Contact</h3>
                                    <p className="text-muted-foreground">
                                        Phone: +48 123 456 789<br />
                                        Email: info@carpaintshop.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-card border-border hover:border-primary transition-smooth">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-card-foreground mb-2">Hours</h3>
                                    <p className="text-muted-foreground">
                                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                                        Saturday: 9:00 AM - 4:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
