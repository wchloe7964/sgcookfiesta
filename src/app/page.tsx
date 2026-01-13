import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import FeaturedModels from "@/components/FeaturedModels";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // 'relative' ensures z-index works correctly for child modals
    <main className="relative min-h-screen bg-white">
      <Navbar />

      {/* Removed the extra wrapping div unless you have specific 
         legacy CSS tied to #colorlib-page. If you do, keep the ID 
         but use a fragment to avoid extra DOM nodes.
      */}

      <div id="colorlib-page">
        <Hero />

        {/* Added a wrapper for content sections to ensure 
           they have proper spacing and background color 
        */}
        <div className="bg-white">
          <FeaturedModels />
          <Sponsors />
        </div>

        <Footer />
      </div>
    </main>
  );
}
