import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  CarFront,
  Clock3,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { imageSources } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ziyarat in Makkah & Madinah | Al Madni Transport",
  description:
    "Explore Makkah and Madinah Ziyarat destinations with private transportation arrangements from Al Madni Transport.",
};

const makkahPlaces = [
  {
    name: "Jabal al-Noor",
    description:
      "A significant mountain associated with the Cave of Hira.",
  },
  {
    name: "Jabal Thawr",
    description:
      "A historic mountain associated with the Hijrah.",
  },
  {
    name: "Arafat",
    description:
      "An important location associated with the Hajj pilgrimage.",
  },
];

const madinahPlaces = [
  {
    name: "Quba Mosque",
    description:
      "A historic mosque in Madinah with great significance in Islamic history.",
    image: imageSources.quba,
  },
  {
    name: "Mount Uhud",
    description:
      "A historic mountain associated with the Battle of Uhud.",
    image: imageSources.ziyarat,
  },
  {
    name: "Masjid an-Nabawi",
    description:
      "The Prophet's Mosque, one of the most significant places in Madinah.",
    image: imageSources.madinah,
  },
];

export default function ZiyaratPage() {
  return (
    <main className="min-h-screen bg-[#F7F5EF]">
      <Navbar />

      {/* HERO */}

      <section className="relative isolate flex min-h-[580px] items-end overflow-hidden bg-[#4C3025] sm:min-h-[680px] lg:min-h-[740px]">

        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: `url("${imageSources.makkah}")`,
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

        <div className="mx-auto w-full max-w-[1320px] px-6 pb-20 pt-32 sm:px-10 sm:pb-28 lg:px-12">

          <div className="max-w-[760px]">

            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#D1AE78]" />

              <span className="text-[9px] font-bold tracking-[0.22em] text-white/90">
                MAKKAH · MADINAH · SAUDI ARABIA
              </span>
            </div>

            <h1 className="mt-7 font-[var(--font-cormorant)] text-6xl font-medium leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[92px]">
              Discover the
              <br />
              beauty of
              <br />
              <span className="italic text-[#D6B47E]">
                the Holy Cities.
              </span>
            </h1>

            <p className="mt-7 max-w-[470px] text-[12px] leading-7 text-white/80 sm:text-[13px]">
              Explore meaningful destinations across
              Makkah and Madinah. Arrange private
              transportation for your preferred Ziyarat
              journey with Al Madni Transport.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                href="/#booking"
                className="group flex min-h-[52px] items-center gap-4 bg-[#704A38] px-6 text-[10px] font-bold text-white transition-all duration-300 hover:bg-[#8A6048]"
              >
                Request Ziyarat transportation

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href="#destinations"
                className="flex min-h-[52px] items-center border border-white/60 px-6 text-[10px] font-bold text-white transition-colors hover:bg-white hover:text-[#704A38]"
              >
                Explore destinations
              </a>

            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-7 hidden items-center gap-3 text-[9px] font-semibold tracking-[0.18em] text-white/75 sm:flex">
          EXPLORE WITH AL MADNI
          <span className="h-px w-10 bg-[#D6B47E]" />
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-[1100px] gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-end">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#B8955C]" />

              <span className="text-[9px] font-bold tracking-[0.2em] text-[#A17B55]">
                THE ZIYARAT EXPERIENCE
              </span>
            </div>

            <h2 className="mt-5 font-[var(--font-cormorant)] text-5xl font-medium leading-[1] text-[#4C3025] sm:text-6xl">
              Your journey
              <br />
              through history.
            </h2>
          </div>

          <div>
            <p className="text-[12px] leading-8 text-[#71675E]">
              Makkah and Madinah hold places of deep
              historical and religious significance.
              Plan your visits around the destinations
              that matter to you, with transportation
              arrangements suited to your group.
            </p>

            <p className="mt-4 text-[10px] leading-7 text-[#938579]">
              Choose your city, discuss your preferred
              destinations and let our team help arrange
              the transportation details.
            </p>
          </div>

        </div>
      </section>

      {/* CITY SELECTION */}

      <section
        id="destinations"
        className="bg-[#EEE8DE] px-6 py-20 sm:px-10 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1320px]">

          <div className="mb-12">
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#A17B55]">
              EXPLORE BY CITY
            </span>

            <h2 className="mt-4 font-[var(--font-cormorant)] text-5xl font-medium text-[#4C3025] sm:text-6xl">
              Two cities. Many stories.
            </h2>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">

            {/* MAKKAH */}

            <article className="group overflow-hidden bg-[#FFFEFA]">

              <div className="relative h-[320px] overflow-hidden sm:h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{
                    backgroundImage: `url("${imageSources.makkah}")`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-white/75">
                    CITY 01
                  </span>

                  <h3 className="mt-2 font-[var(--font-cormorant)] text-5xl text-white">
                    Makkah
                  </h3>
                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-[11px] leading-7 text-[#766A5F]">
                  Explore destinations associated with
                  the history of Makkah and the Hajj
                  pilgrimage through a private
                  transportation arrangement.
                </p>

                <div className="mt-7 space-y-4">
                  {makkahPlaces.map((place) => (
                    <div
                      key={place.name}
                      className="flex gap-3 border-b border-[#704A38]/10 pb-4 last:border-0"
                    >
                      <MapPin
                        size={15}
                        className="mt-1 shrink-0 text-[#B8955C]"
                      />

                      <div>
                        <h4 className="text-[12px] font-bold text-[#4C3025]">
                          {place.name}
                        </h4>

                        <p className="mt-1 text-[10px] leading-6 text-[#85796D]">
                          {place.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/#booking"
                  className="group/link mt-7 inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#704A38]"
                >
                  Request Makkah Ziyarat

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </Link>

              </div>
            </article>

            {/* MADINAH */}

            <article className="group overflow-hidden bg-[#FFFEFA]">

              <div className="relative h-[320px] overflow-hidden sm:h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{
                    backgroundImage: `url("${imageSources.madinah}")`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <span className="text-[9px] font-bold tracking-[0.2em] text-white/75">
                    CITY 02
                  </span>

                  <h3 className="mt-2 font-[var(--font-cormorant)] text-5xl text-white">
                    Madinah
                  </h3>
                </div>
              </div>

              <div className="p-7 sm:p-9">

                <p className="text-[11px] leading-7 text-[#766A5F]">
                  Discover the historical landmarks
                  and important places of Madinah.
                  Arrange a journey around your
                  preferred destinations.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    {
                      name: "Quba Mosque",
                      description:
                        "A historic mosque in Madinah.",
                    },
                    {
                      name: "Mount Uhud",
                      description:
                        "A historically significant mountain.",
                    },
                    {
                      name: "Masjid an-Nabawi",
                      description:
                        "The Prophet's Mosque in Madinah.",
                    },
                  ].map((place) => (
                    <div
                      key={place.name}
                      className="flex gap-3 border-b border-[#704A38]/10 pb-4 last:border-0"
                    >
                      <MapPin
                        size={15}
                        className="mt-1 shrink-0 text-[#B8955C]"
                      />

                      <div>
                        <h4 className="text-[12px] font-bold text-[#4C3025]">
                          {place.name}
                        </h4>

                        <p className="mt-1 text-[10px] leading-6 text-[#85796D]">
                          {place.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/#booking"
                  className="group/link mt-7 inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#704A38]"
                >
                  Request Madinah Ziyarat

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </Link>

              </div>
            </article>

          </div>
        </div>
      </section>

      {/* FEATURED DESTINATION PHOTOGRAPHY */}

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-[1320px]">

          <div className="mb-12">
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#A17B55]">
              MADINAH HIGHLIGHTS
            </span>

            <h2 className="mt-4 font-[var(--font-cormorant)] text-5xl font-medium text-[#4C3025] sm:text-6xl">
              Places to discover.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {madinahPlaces.map((place, index) => (
              <article
                key={place.name}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E1D5]">

                  <div
                    role="img"
                    aria-label={place.name}
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{
                      backgroundImage: `url("${place.image}")`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-5 text-[9px] font-bold tracking-[0.2em] text-white/80">
                    DESTINATION 0{index + 1}
                  </span>
                </div>

                <div className="pt-5">
                  <h3 className="font-[var(--font-cormorant)] text-3xl font-semibold text-[#4C3025]">
                    {place.name}
                  </h3>

                  <p className="mt-2 text-[10px] leading-6 text-[#82766B]">
                    {place.description}
                  </p>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* TRANSPORTATION */}

      <section className="bg-[#EEE8DE] px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">

          <div>
            <span className="text-[9px] font-bold tracking-[0.2em] text-[#A17B55]">
              TRAVEL WITH AL MADNI
            </span>

            <h2 className="mt-5 font-[var(--font-cormorant)] text-5xl font-medium leading-[1] text-[#4C3025] sm:text-6xl">
              Your Ziyarat.
              <br />
              Your journey.
              <br />
              <span className="italic text-[#B8955C]">
                Your way.
              </span>
            </h2>

            <p className="mt-6 max-w-[430px] text-[11px] leading-7 text-[#766A5F]">
              Arrange private transportation for your
              family or group. Choose your preferred
              vehicle, discuss your destinations and
              request a journey suited to your plans.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-[11px] text-[#55483E]">
                <CarFront size={18} className="text-[#B8955C]" />
                Different vehicle options
              </div>

              <div className="flex items-center gap-3 text-[11px] text-[#55483E]">
                <MapPin size={18} className="text-[#B8955C]" />
                Makkah and Madinah destinations
              </div>

              <div className="flex items-center gap-3 text-[11px] text-[#55483E]">
                <Clock3 size={18} className="text-[#B8955C]" />
                Arrange a preferred pickup time
              </div>
            </div>

            <Link
              href="/#booking"
              className="group mt-9 inline-flex min-h-[51px] items-center gap-4 bg-[#704A38] px-6 text-[10px] font-bold text-white transition-all duration-300 hover:bg-[#4C3025]"
            >
              Request transportation

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="relative">
            <div
              role="img"
              aria-label="Private transportation in Saudi Arabia"
              className="aspect-[5/4] w-full bg-cover bg-center"
              style={{
                backgroundImage: `url("${imageSources.staria}")`,
              }}
            />

            <div className="absolute -bottom-5 -left-5 hidden bg-[#704A38] p-6 text-white sm:block">
              <p className="text-[8px] font-bold tracking-[0.17em] text-white/65">
                AL MADNI TRANSPORT
              </p>

              <p className="mt-2 font-[var(--font-cormorant)] text-3xl">
                Travel with care.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BOOKING NOTICE / FINAL CTA */}

      <section className="bg-[#4C3025] px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[850px] text-center">

          <ShieldCheck
            size={28}
            strokeWidth={1.2}
            className="mx-auto text-[#D6B47E]"
          />

          <span className="mt-5 block text-[9px] font-bold tracking-[0.22em] text-[#D6B47E]">
            BEGIN YOUR JOURNEY
          </span>

          <h2 className="mt-5 font-[var(--font-cormorant)] text-5xl font-medium leading-tight text-white sm:text-6xl">
            Let us help arrange
            <br />
            your Ziyarat journey.
          </h2>

          <p className="mx-auto mt-5 max-w-[460px] text-[11px] leading-7 text-white/65">
            Share your preferred destinations, travel
            date and group details. Our team can check
            transportation availability and provide a
            quotation.
          </p>

          <Link
            href="/#booking"
            className="group mt-8 inline-flex min-h-[52px] items-center gap-4 bg-[#B8955C] px-7 text-[10px] font-bold text-[#2F2119] transition-all duration-300 hover:bg-[#D0AE79]"
          >
            Plan your Ziyarat

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>
      </section>

      <Footer />
    </main>
  );
}