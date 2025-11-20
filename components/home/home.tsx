import { Navbar } from "../nav";
import { Hero } from "./hero";
import { Services } from "./services";
import { Gallery } from "./gallery";
import { Location } from "./location";
import { Footer } from "../footer";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Services />
            <Gallery />
            <Location />
            <Footer />
        </div>
    );
};

export default Index;
