import Intro from "@/components/ui/intro";
import Navbar from "@/components/ui/navbar";
import Portfolio from "@/components/ui/portfolio";
import About from "@/components/ui/about";
import Posts from "@/components/ui/posts";
import Footer from "@/components/ui/footer";

export default function Home() {
    return (
        // Full screen background with centered window
        <div className="min-h-screen w-full bg-stone-950 flex items-center justify-center">
            <div className="w-[700px] max-w-full px-6 py-8 bg-stone-950 flex flex-col justify-center">
                <Navbar />
                <Intro />
                <Portfolio />
                <About />
                <Posts />
                <Footer />
            </div>
        </div>
    );
}
