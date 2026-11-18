import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Brand from "@/components/Brand";

export default function Footer() {
  return (
    <>


      <footer className="border-t border-[#704A38]/10 bg-[#F0EBE2] px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1220px]">

          <div className="flex flex-col justify-between gap-10 md:flex-row">

            <div className="max-w-[340px]">
              <Brand />

              <p className="mt-5 text-[10px] leading-7 text-[#786F66]">
                Private transportation and Ziyarat journey
                arrangements across Makkah and Madinah.
                Travel with comfort and care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 sm:gap-20">

              <div>
                <h3 className="text-[9px] font-extrabold tracking-[0.17em] text-[#4C3025]">
                  EXPLORE
                </h3>

                <div className="mt-5 space-y-4">
                  <Link
                    className="block text-[10px] text-[#786F66] transition-colors hover:text-[#704A38]"
                    href="/#home"
                  >
                    Home
                  </Link>

                  <Link
                    className="block text-[10px] text-[#786F66] transition-colors hover:text-[#704A38]"
                    href="/#services"
                  >
                    Services
                  </Link>

                  <Link
                    className="block text-[10px] text-[#786F66] transition-colors hover:text-[#704A38]"
                    href="/ziyarat"
                  >
                    Ziyarat
                  </Link>

                  <Link
                    className="block text-[10px] text-[#786F66] transition-colors hover:text-[#704A38]"
                    href="/#fleet"
                  >
                    Our Fleet
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-[9px] font-extrabold tracking-[0.17em] text-[#4C3025]">
                  INFORMATION
                </h3>

                <div className="mt-5 space-y-4">
                  <Link
                    className="block text-[10px] text-[#786F66] transition-colors hover:text-[#704A38]"
                    href="/#contact"
                  >
                    Contact
                  </Link>

                  <Link
                    className="block text-[10px] text-[#786F66] transition-colors hover:text-[#704A38]"
                    href="/#booking"
                  >
                    Booking request
                  </Link>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-[#704A38]/10 pt-6 text-[9px] text-[#918478] sm:flex-row sm:items-center sm:justify-between">
            <span>
              © 2026 Al Madni Transport. All rights reserved.
            </span>

            <span>
              Makkah & Madinah, Saudi Arabia
            </span>
          </div>

        </div>
      </footer>
    </>
  );
}