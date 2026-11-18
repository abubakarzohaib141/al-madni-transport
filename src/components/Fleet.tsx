import {
  ArrowUpRight,
  Users,
} from "lucide-react";

import { fleet } from "@/lib/data";

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="bg-[#F7F5EF] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-[1320px]">

        {/* SECTION HEADING */}

        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#B8955C]" />

              <span className="text-[9px] font-extrabold tracking-[0.2em] text-[#A17B55]">
                OUR VEHICLE COLLECTION
              </span>
            </div>

            <h2 className="mt-5 font-[var(--font-cormorant)] text-5xl font-medium leading-[0.98] tracking-tight text-[#211A17] sm:text-6xl">
              The right vehicle
              <br />
              for every journey.
            </h2>
          </div>

          <p className="max-w-[360px] text-[12px] leading-7 text-[#5F5750]">
            Explore our transportation options for
            individuals, families and larger groups
            travelling throughout Makkah and Madinah.
          </p>

        </div>

        {/* VEHICLE CARDS */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {fleet.map((vehicle, index) => (
            <article
              key={vehicle.name}
              className="group overflow-hidden rounded-md border border-[#704A38]/10 bg-[#FFFEFA] transition-all duration-500 hover:-translate-y-1 hover:border-[#B8955C]/50 hover:shadow-[0_18px_45px_rgba(76,48,37,0.10)]"
            >

              {/* VEHICLE IMAGE */}

              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#EAE3D9] p-5">

                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} transportation vehicle`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-sm border border-[#704A38]/10 bg-[#FFFEFA]/90 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.13em] text-[#704A38]">
                  {vehicle.category}
                </span>

                <span className="absolute bottom-4 right-4 flex size-9 items-center justify-center rounded-full border border-[#704A38]/15 bg-[#FFFEFA]/90 text-[#704A38] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#704A38] group-hover:text-white">
                  <ArrowUpRight size={16} />
                </span>

              </div>

              {/* VEHICLE DETAILS */}

              <div className="p-6 sm:p-7">

                <div className="flex items-start justify-between gap-3">

                  <div>
                    <span className="text-[8px] font-bold tracking-[0.18em] text-[#A17B55]">
                      VEHICLE 0{index + 1}
                    </span>

                    <h3 className="mt-2 font-[var(--font-cormorant)] text-3xl font-semibold text-[#211A17] transition-colors duration-300 group-hover:text-[#704A38]">
                      {vehicle.name}
                    </h3>
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5 rounded-sm bg-[#F0EBE2] px-3 py-2 text-[#211A17]">
                    <Users size={14} />

                    <span className="text-[10px] font-bold">
                      {vehicle.seats}
                    </span>
                  </div>

                </div>

                <p className="mt-3 text-[11px] leading-6 text-[#5F5750]">
                  {vehicle.detail}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#704A38]/10 pt-5">

                  <span className="text-[10px] font-semibold text-[#5F5750]">
                    {vehicle.seats} passenger seats
                  </span>

                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.1em] text-[#704A38] transition-all duration-300 hover:gap-3 hover:text-[#A17B55]"
                  >
                    Enquire

                    <ArrowUpRight size={14} />
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* FOOTNOTE */}

        <div className="mt-9 flex flex-col gap-3 border-t border-[#704A38]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-[650px] text-[10px] leading-6 text-[#5F5750]">
            Passenger capacity is based on the vehicle
            information provided. Actual seating
            configuration and luggage capacity should
            be confirmed before booking.
          </p>

          <a
            href="#booking"
            className="group inline-flex shrink-0 items-center gap-2 text-[10px] font-bold text-[#704A38]"
          >
            Find your vehicle

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
}