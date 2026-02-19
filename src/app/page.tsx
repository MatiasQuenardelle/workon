import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Gallery />
        <Benefits />
        <Process />
        <About />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
