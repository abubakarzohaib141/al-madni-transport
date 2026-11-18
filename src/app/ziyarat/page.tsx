import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { imageSources } from "@/lib/data";

export default function ZiyaratPage() {
  return (
    <main className="min-h-screen bg-[#F7F5EF]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[530px] items-end overflow-hidden bg-[#4C3025] sm:min-h-[620px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${imageSources.makkah}")`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="relative mx-auto w-full max-w-[1320px] px-6 pb-20 pt-32 sm:px-10 lg:px-12">
          <span className="text-[9px] font-bold tracking-[0.22em] text-white/80">
            AL MADNI TRANSPORT · SAUDI ARABIA
          </span>

          <h1 className="mt-7 max-w-[800px] font-[var(--font-cormorant)] text-6xl font-medium leading-[0.95] text-white sm:text-7xl lg:text-[88px]">
            Discover the
            <br />
            <span className="italic text-[#D6B47E]">
              Holy Cities.
            </span>
          </h1>

          <p className="mt-7 max-w-[460px] text-[12px] leading-7 text-white/80">
            Explore historical destinations in Makkah
            and Madinah. Choose your city and arrange
            transportation for your Ziyarat journey.
          </p>
        </div>
      </section>

      {/* CITY SELECTION */}
      <section
        id="destinations"
        className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mx-auto max-w-[1220px]">
          <div className="mb-12">
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#A17B55]">
              CHOOSE YOUR DESTINATION
            </span>

            <h2 className="mt-4 font-[var(--font-cormorant)] text-5xl font-medium text-[#4C3025] sm:text-6xl">
              Where would you like to explore?
            </h2>

            <p className="mt-4 max-w-[520px] text-[11px] leading-7 text-[#786F66]">
              Select Makkah or Madinah to explore the
              destinations and transportation options
              available for your journey.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">

            {/* MAKKAH */}
            <Link
              href="/ziyarat/makkah"
              className="group relative block min-h-[420px] overflow-hidden bg-[#4C3025] sm:min-h-[540px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{
                  backgroundImage: `url("${imageSources.makkah}")`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                <span className="text-[9px] font-bold tracking-[0.2em] text-white/75">
                  DESTINATION 01
                </span>

                <h3 className="mt-3 font-[var(--font-cormorant)] text-6xl text-white sm:text-7xl">
                  Makkah
                </h3>

                <p className="mt-3 max-w-[330px] text-[11px] leading-7 text-white/80">
                  Explore Makkah's historical sites and
                  discover optional excursions to Taif.
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-white/25 pt-5">
                  <span className="text-[10px] font-bold !text-white">
                    Explore Makkah Ziyarat
                  </span>

                  <span className="flex size-11 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#704A38]">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>
            </Link>

            {/* MADINAH */}
            <Link
              href="/ziyarat/madinah"
              className="group relative block min-h-[420px] overflow-hidden bg-[#4C3025] sm:min-h-[540px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{
                  backgroundImage: `url("${imageSources.madinah}")`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                <span className="text-[9px] font-bold tracking-[0.2em] text-white/75">
                  DESTINATION 02
                </span>

                <h3 className="mt-3 font-[var(--font-cormorant)] text-6xl text-white sm:text-7xl">
                  Madinah
                </h3>

                <p className="mt-3 max-w-[330px] text-[11px] leading-7 text-white/80">
                  Discover historic mosques, Mount Uhud
                  and important landmarks across Madinah.
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-white/25 pt-5">
                  <span className="text-[10px] font-bold !text-white">
                    Explore Madinah Ziyarat
                  </span>

                  <span className="flex size-11 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#704A38]">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-[#4C3025] px-6 py-20 text-center sm:px-10">
        <div className="mx-auto max-w-[700px]">
          <MapPin
            size={25}
            className="mx-auto text-[#D6B47E]"
          />

          <h2 className="mt-5 font-[var(--font-cormorant)] text-5xl font-medium text-white">
            Your journey starts here.
          </h2>

          <p className="mt-4 text-[11px] leading-7 text-white/75">
            Choose your destinations and request private
            transportation with Al Madni Transport.
          </p>

          <Link
            href="/#booking"
            className="mt-8 inline-flex min-h-[52px] items-center gap-3 bg-[#704A38] px-7 text-[10px] font-bold !text-white transition-colors hover:bg-[#8A6048]"
          >
            Plan your journey
            <ArrowUpRight size={16} className="text-white" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}