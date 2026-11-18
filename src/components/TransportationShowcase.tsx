import { ArrowUpRight } from "lucide-react";
import { imageSources } from "@/lib/data";

export default function TransportationShowcase() {
  return (
    <section className="bg-[#F7F5EF] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-[1320px]">

        {/* SECTION HEADING */}
        <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-[9px] font-bold tracking-[0.22em] text-[#A17B55]">
              AL MADNI TRANSPORTATION
            </span>

            <h2 className="mt-3 max-w-[600px] font-[var(--font-cormorant)] text-4xl font-medium leading-tight text-[#4C3025] sm:text-5xl lg:text-6xl">
              Travel comfortably.
              <br />
              Arrive with ease.
            </h2>
          </div>

          <p className="max-w-[350px] text-xs leading-7 text-[#786F66]">
            From private family transfers to group
            transportation, find a vehicle suited to your
            journey across Makkah and Madinah.
          </p>
        </div>

        {/* VEHICLE IMAGE */}
        <div className="group relative overflow-hidden rounded-sm bg-[#E8E1D5]">
          <img
            src={imageSources.hyundai}
            alt="Hyundai Staria passenger transportation"
            className="h-[280px] w-full object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035] sm:h-[420px] lg:h-[540px]"
            loading="lazy"
          />

          {/* SUBTLE OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* IMAGE LABEL */}
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-9 sm:left-9 sm:right-9">
            <div>
              <span className="text-[9px] font-semibold tracking-[0.2em] text-white/75">
                PRIVATE JOURNEYS
              </span>

              <h3 className="mt-1 font-[var(--font-cormorant)] text-3xl font-medium text-white sm:text-4xl">
                Your journey, our care.
              </h3>
            </div>

            <a
              href="#fleet"
              aria-label="Explore our fleet"
              className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/60 text-white transition-all duration-300 hover:rotate-45 hover:bg-white hover:text-[#704A38] sm:size-14"
            >
              <ArrowUpRight size={21} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}