import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ClientLogos from "@/components/ClientLogos";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <ClientLogos />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
