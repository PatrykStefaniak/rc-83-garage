import { Navbar } from "../nav";
import { Hero } from "./hero";
import { Services } from "./services";
import { Location } from "./location";
import { Footer } from "../footer";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Hero />
            <Services />
            <Location />
            <Footer />
        </div>
    );
};

export default Index;
