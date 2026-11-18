import BookingWidget from "@/components/BookingWidget";
import Fleet from "@/components/Fleet";
import Footer from "@/components/Footer";
import FutureServices from "@/components/FutureServices";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import JourneySteps from "@/components/Promise";
import Services from "@/components/Services";
import TransportationShowcase from "@/components/TransportationShowcase";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <Hero />

      <TransportationShowcase />

      <Services />

      <JourneySteps />

      <Fleet />

      <FutureServices />

      {/* FINAL BOOKING SECTION */}
      <BookingWidget />

      <Footer />
    </main>
  );
}