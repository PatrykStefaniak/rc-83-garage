import { Navbar } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { ColorsContent } from "@/components/colors/colors-content";

export default function ColorsPage() {
    return (
        <div className="min-h-screen">
            <Navbar />
            <ColorsContent />
            <Footer />
        </div>
    );
}
