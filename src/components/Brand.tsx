import Link from "next/link";

export default function Brand() {
  return (
    <Link
      aria-label="Al Madni Transport homepage"
      className="group inline-flex w-fit items-center gap-3"
      href="/#home"
    >
      {/* Brand symbol */}
      <span
        aria-hidden="true"
        className="relative grid size-[43px] shrink-0 place-items-center rounded-full border border-[#704A38]/40 transition-all duration-500 group-hover:rotate-45 group-hover:border-[#B8955C]"
      >
        <span className="absolute size-[22px] rotate-45 border border-[#B8955C]" />

        <span className="absolute size-[12px] rotate-45 border border-[#704A38]" />

        <span className="relative z-10 font-[var(--font-cormorant)] text-[11px] font-bold text-[#704A38]">
          AM
        </span>
      </span>

      {/* Brand name */}
      <span className="flex flex-col">
        <span className="font-[var(--font-cormorant)] text-[26px] font-semibold leading-[0.9] tracking-[0.075em] text-[#704A38] transition-colors duration-300 group-hover:text-[#A17B55]">
          AL MADNI
        </span>

        <span className="mt-[6px] text-[7px] font-extrabold tracking-[0.24em] text-[#8B7564]">
          TRANSPORT & TRAVEL
        </span>
      </span>
    </Link>
  );
}