import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-secondary text-secondary-foreground py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-lg">CP</span>
                            </div>
                            <span className="text-xl font-bold">Car Paintshop</span>
                        </div>
                        <p className="text-secondary-foreground/80 max-w-md">
                            Professional automotive paint services with over 15 years of experience.
                            We're passionate about making your car look perfect.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#services" className="text-secondary-foreground/80 hover:text-primary transition-smooth">Services</a></li>
                            <li><a href="#gallery" className="text-secondary-foreground/80 hover:text-primary transition-smooth">Gallery</a></li>
                            <li><a href="#about" className="text-secondary-foreground/80 hover:text-primary transition-smooth">About Us</a></li>
                            <li><a href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-smooth">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary transition-smooth group">
                                <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-smooth" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary transition-smooth group">
                                <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-smooth" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary transition-smooth group">
                                <Twitter className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-smooth" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
                    <p>© 2024 Car Paintshop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
