"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import Brand from "@/components/Brand";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* FIXED NAVIGATION CONTAINER */}
      <div className="fixed inset-x-0 top-0 z-[100]">
        {/* ANNOUNCEMENT BAR */}
        <div
          className={`flex h-8 items-center justify-center gap-2 overflow-hidden bg-[#4C3025] px-3 text-center text-[8px] font-semibold tracking-[0.16em] text-[#F7F0E7] transition-all duration-300 sm:gap-3 sm:text-[9px] ${
            isScrolled
              ? "max-h-0 opacity-0"
              : "max-h-8 opacity-100"
          }`}
        >
          <span className="relative flex size-1.5 shrink-0">
            <span className="absolute size-full animate-ping rounded-full bg-[#B8955C] opacity-40 motion-reduce:animate-none" />
            <span className="relative size-1.5 rounded-full bg-[#B8955C]" />
          </span>

          MAKKAH · MADINAH · SAUDI ARABIA

          <span className="text-[#B8955C]">/</span>

          <span className="hidden sm:inline">
            YOUR JOURNEY, OUR CARE
          </span>
        </div>

        {/* MAIN NAVBAR */}
        <header
          className={`relative w-full border-b transition-all duration-300 ${
            isScrolled
              ? "border-[#704A38]/15 bg-[#FFFEFA]/95 shadow-[0_8px_30px_rgba(60,40,29,0.09)] backdrop-blur-xl"
              : "border-[#704A38]/10 bg-[#F7F5EF]/95 backdrop-blur-md"
          }`}
        >
          <div
            className={`mx-auto flex max-w-[1320px] items-center justify-between gap-5 px-5 transition-all duration-300 sm:px-8 lg:px-12 ${
              isScrolled
                ? "h-16 sm:h-[68px]"
                : "h-[72px] sm:h-[82px]"
            }`}
          >
            {/* BRAND */}
            <div className="shrink-0">
              <Brand />
            </div>

            {/* DESKTOP LINKS */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-7 lg:flex xl:gap-9"
            >
              {navItems.map((item) => (
                <a
                  href={item.href}
                  key={item.label}
                  className="group relative flex h-full items-center py-4 text-[11px] font-semibold tracking-wide text-[#64574D] transition-colors duration-300 hover:text-[#704A38]"
                >
                  {item.label}

                  <span className="absolute bottom-1 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-[#B8955C] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            {/* ACTIONS */}
            <div className="flex shrink-0 items-center gap-4">
              <button
                type="button"
                className="hidden items-center gap-1 text-[9px] font-bold tracking-widest text-[#75675B] md:flex"
              >
                EN
                <ArrowDown
                  size={12}
                  className="text-[#B8955C]"
                />
              </button>

            <a
  href="#booking"
  className="group hidden min-h-[43px] items-center gap-3 rounded-[3px] bg-[#704A38] px-5 text-[10px] font-bold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4C3025] hover:shadow-lg sm:inline-flex"
>
  <span className="!text-white">
    Plan your journey
  </span>

  <ArrowUpRight
    size={15}
    className="!text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</a>

              {/* MOBILE MENU */}
              <button
                type="button"
                aria-label={
                  menuOpen ? "Close menu" : "Open menu"
                }
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex size-11 items-center justify-center rounded border border-[#704A38]/20 text-[#704A38] transition-all duration-300 hover:bg-[#704A38] hover:text-white lg:hidden"
              >
                {menuOpen ? (
                  <X size={21} />
                ) : (
                  <Menu size={21} />
                )}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <div
            aria-hidden={!menuOpen}
            inert={!menuOpen}
            className={`absolute left-0 top-full w-full border-b border-[#704A38]/10 bg-[#F7F5EF] shadow-2xl transition-all duration-300 lg:hidden ${
              menuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-3 opacity-0 pointer-events-none"
            }`}
          >
            <div className="mx-auto max-w-[600px] px-6 pb-7 pt-6">
              <p className="mb-4 text-[9px] font-bold tracking-[0.2em] text-[#A18468]">
                EXPLORE AL MADNI
              </p>

              <nav className="flex flex-col">
                {navItems.map((item, index) => (
                  <a
                    href={item.href}
                    key={item.label}
                    onClick={closeMenu}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                    className={`group grid min-h-[60px] grid-cols-[38px_1fr_22px] items-center gap-3 border-b border-[#704A38]/10 transition-all duration-300 ${
                      menuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-3 opacity-0"
                    }`}
                  >
                    <span className="text-[9px] font-bold text-[#B8955C]">
                      0{index + 1}
                    </span>

                    <span className="font-[var(--font-cormorant)] text-[26px] text-[#4C3025]">
                      {item.label}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-[#8B7564] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                ))}
              </nav>

              <a
                href="#booking"
                onClick={closeMenu}
                className="mt-6 flex min-h-[50px] items-center justify-between bg-[#704A38] px-5 text-[11px] font-bold text-white"
              >
                Request a booking
                <ArrowUpRight size={17} />
              </a>

              <p className="mt-6 text-center text-[8px] font-bold tracking-widest text-[#978574]">
                MAKKAH & MADINAH · SAUDI ARABIA
              </p>
            </div>
          </div>
        </header>
      </div>

      {/* NAVIGATION SPACE - PREVENTS CONTENT OVERLAP */}
      <div
        aria-hidden="true"
        className="h-[104px] sm:h-[114px]"
      />
    </>
  );
}