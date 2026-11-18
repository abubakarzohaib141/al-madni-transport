
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
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

export const instant = false;

type PageProps = {
  params: Promise<{ city: string }>;
};

type Destination = {
  name: string;
  description: string;
  image: string;
  category: string;
  imageCredit?: string;
  imageSource?: string;
};

const makkahDestinations: Destination[] = [
  {
    name: "Jabal Al-Noor",
    description:
      "A historically significant mountain associated with the Cave of Hira, where the first revelation was received.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Jabal_al-Nur%2C_Mecca%2C_Saudi_Arabia_%282%29.jpg",
    category: "Historical site",
    imageCredit: "Richard Mortel",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Jabal_al-Nur,_Mecca,_Saudi_Arabia_(2).jpg",
  },
  {
    name: "Jabal Thawr",
    description:
      "A mountain known for the Cave of Thawr and its significance in the Hijrah journey.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEqoY-XX2VBr3p3bA9DLSoX1FEtv0nBGL0boG_VNxDw&s",
    category: "Historical site",
    imageCredit: "King Eliot",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Jabl_e_Thawr.jpg",
  },
  {
    name: "Mount Arafat",
    description:
      "An important Hajj location where pilgrims gather on the Day of Arafah.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvjrFE01Mvcq31TnAvFnML6KtUUF1ckB6RQhBd9oRW4w&s=10",
    category: "Religious landmark",
    imageCredit: "Saudipedia",
    imageSource:
      "https://saudipedia.com/article/10193",
  },
];

const madinahDestinations: Destination[] = [
  {
    name: "Masjid an-Nabawi",
    description:
      "The Prophet's Mosque, one of the most important and visited mosques in Islam.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Madeena_masjid_nabavi_12122008230.jpg/1920px-Madeena_masjid_nabavi_12122008230.jpg",
    category: "Mosque",
    imageCredit: "Wikimedia Commons",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Madeena_masjid_nabavi_12122008230.jpg",
  },
  {
    name: "Quba Mosque",
    description:
      "A historic mosque in Madinah, traditionally recognised as the first mosque built in Islam.",
    image:
      "https://images.pexels.com/photos/35016971/pexels-photo-35016971.jpeg",
    category: "Mosque",
    imageCredit: "MrSalmon2",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Quba_Masjid.jpg",
  },
  {
    name: "Mount Uhud",
    description:
      "A historic mountain associated with the Battle of Uhud.",
    image:
      "https://saudipedia.com/var/site/storage/images/9/7/1/2/6662179-1-eng-GB/b365901a0056-106527.jpg",
    category: "Historical site",
    imageCredit: "Saudipedia",
    imageSource:
      "https://saudipedia.com/en/list-of-islamic-historical-sites-in-al-madinah-al-munawarah",
  },
  {
    name: "Al-Qiblatain Mosque",
    description:
      "A historic mosque associated with the change of the direction of prayer.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RPwKHqK141fhgKs-5ZNfS3p4H1lSmrJCTmmahsAiL9JVBV0et814lxm7&s=10",
    category: "Mosque",
    imageCredit: "Aiman titi",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Masjid_al-Qiblatain.jpg",
  },
  {
    name: "The Seven Mosques",
    description:
      "A group of historic mosques associated with events during the Battle of the Trench.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGTXoher5M9twp2fmFp6ILVlOnMMS46yhutIIQIj-Mw&s=10",
    category: "Historical area",
    imageCredit: "Wikimedia Commons",
    imageSource:
      "https://commons.wikimedia.org/wiki/Category:The_Seven_Mosques_(Madinah)",
  },
];

const taifDestinations: Destination[] = [
  {
    name: "Al Hada",
    description:
      "A mountain area known for its winding roads, elevated views and mountain scenery.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Al-Hada_mountain_road%2C_al-Taif_region%2C_Saudi_Arabia_%281%29.jpg",
    category: "Mountain destination",
    imageCredit: "Richard Mortel",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Al-Hada_mountain_road,_al-Taif_region,_Saudi_Arabia_(1).jpg",
  },
  {
    name: "Al Shafa",
    description:
      "A mountain destination known for its scenic landscapes and highland atmosphere.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Al_shifa_mountain_-_panoramio.jpg",
    category: "Mountain destination",
    imageCredit: "Wikimedia Commons",
    imageSource:
      "https://commons.wikimedia.org/wiki/Category:Al-Shafa,_Ta%27if",
  },
  {
    name: "Shubra Palace",
    description:
      "A historic palace in Taif known for its distinctive architectural character.",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Shubra_Palace%2C_1905%2C_al-Taif%2C_Saudi_Arabia.jpg",
    category: "Heritage site",
    imageCredit: "Richard Mortel",
    imageSource:
      "https://commons.wikimedia.org/wiki/File:Shubra_Palace,_1905,_al-Taif,_Saudi_Arabia.jpg",
  },
];

// Badr is a separate optional excursion from Madinah.
const badrDestinations: Destination[] = [
  {
    name: "Badr Battlefield",
    description:
      "Visit the historic area associated with the Battle of Badr, an important event in Islamic history.",
    image:
      "https://scth.scene7.com/is/image/scth/badr-battle-site%3Acrop-760x570?defaultImage=badr-battle-site",
    category: "Islamic historical site",
    imageCredit: "Visit Saudi",
    imageSource:
      "https://www.visitsaudi.com/en/madinah/attractions/badr-battle-site",
  },
];

function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  return (
    <article className="group overflow-hidden rounded-[22px] border border-[#704A38]/10 bg-white shadow-[0_10px_40px_rgba(50,35,25,0.05)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(50,35,25,0.12)]">
      <div className="relative h-[260px] overflow-hidden bg-[#E8E1D5]">
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
          {destination.category}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="font-[var(--font-cormorant)] text-[30px] font-semibold leading-tight text-[#4C3025]">
          {destination.name}
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-7 text-[#76685E]">
          {destination.description}
        </p>

        <Link
          href="/#booking"
          className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-[#704A38] transition-colors hover:text-[#B8955C]"
        >
          Enquire about transport
          <ArrowUpRight size={16} />
        </Link>

        {destination.imageSource && (
          <p className="mt-5 border-t border-[#704A38]/10 pt-3 text-[10px] text-[#9A8A7C]">
            Image: {destination.imageCredit ?? "Source"} ·{" "}
            <a
              href={destination.imageSource}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-[#704A38]"
            >
              View source
            </a>
          </p>
        )}
      </div>
    </article>
  );
}

function ExcursionSection({
  eyebrow,
  title,
  description,
  note,
  image,
  imageAlt,
  destinations,
}: {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  image: string;
  imageAlt: string;
  destinations: Destination[];
}) {
  return (
    <section className="bg-[#EDE7DD] py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#B8955C]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9A806B]">
                {eyebrow}
              </span>
            </div>

            <h2 className="font-[var(--font-cormorant)] text-[56px] font-medium leading-[0.98] text-[#4C3025] sm:text-[72px]">
              {title}
            </h2>

            <p className="mt-7 max-w-[470px] text-sm leading-8 text-[#76685E]">
              {description}
            </p>

            <div className="mt-8 flex items-start gap-3 text-[#704A38]">
              <MapPin className="mt-1 shrink-0" size={18} />
              <p className="text-xs leading-6">{note}</p>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[24px] sm:min-h-[500px]">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                Optional day excursion
              </p>
              <h3 className="mt-2 font-[var(--font-cormorant)] text-[42px]">
                {imageAlt}
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9A806B]">
              Excursion highlights
            </p>
            <h3 className="mt-3 font-[var(--font-cormorant)] text-[42px] font-semibold text-[#4C3025]">
              Explore {imageAlt}
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.name}
                destination={destination}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city } = await params;

  if (city === "makkah") {
    return {
      title: "Makkah Ziyarat & Taif Excursions | Al Madni Transport",
      description:
        "Explore Makkah Ziyarat destinations and enquire about private transport for an optional Taif excursion.",
    };
  }

  if (city === "madinah") {
    return {
      title: "Madinah Ziyarat & Badr Excursions | Al Madni Transport",
      description:
        "Explore historic and religious Ziyarat destinations in Madinah and enquire about an optional Badr excursion.",
    };
  }

  return {
    title: "Ziyarat | Al Madni Transport",
  };
}

export default async function CityZiyaratPage({
  params,
}: PageProps) {
  const { city } = await params;

  if (city !== "makkah" && city !== "madinah") {
    notFound();
  }

  const isMakkah = city === "makkah";
  const destinations = isMakkah
    ? makkahDestinations
    : madinahDestinations;
  const cityName = isMakkah ? "Makkah" : "Madinah";

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F5EF]">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-[540px] items-end overflow-hidden bg-[#4C3025] sm:min-h-[620px]">
        <img
          src={isMakkah ? imageSources.makkah : imageSources.madinah}
          alt={isMakkah ? "Makkah" : "Madinah"}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:px-16">
          <Link
            href="/ziyarat"
            className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:text-white"
          >
            <ArrowLeft size={15} />
            All Ziyarat destinations
          </Link>

          <div className="max-w-[760px]">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D8B77D]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E7C99B]">
                AL MADNI TRANSPORT & TRAVEL
              </span>
            </div>

            <h1 className="font-[var(--font-cormorant)] text-[64px] font-medium leading-[0.95] text-white sm:text-[86px] lg:text-[104px]">
              {isMakkah ? (
                <>
                  Explore
                  <br />
                  Makkah
                </>
              ) : (
                <>
                  Discover
                  <br />
                  Madinah
                </>
              )}
            </h1>

            <p className="mt-7 max-w-[520px] text-sm leading-8 text-white/80 sm:text-base">
              {isMakkah
                ? "Discover important historical and religious landmarks around Makkah. Explore the destinations and enquire about private transportation for your journey."
                : "Discover the historical and religious landmarks of Madinah. Explore the destinations and plan your Ziyarat journey with Al Madni Transport."}
            </p>

            <a
              href="#destinations"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#F7F5EF] px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#4C3025] transition hover:bg-[#E8E1D5]"
            >
              Explore destinations
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#B8955C]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9A806B]">
                {cityName} Ziyarat
              </span>
            </div>

            <h2 className="max-w-[700px] font-[var(--font-cormorant)] text-[48px] font-medium leading-[1.05] text-[#4C3025] sm:text-[64px]">
              Places of history,
              <br />
              faith and reflection.
            </h2>
          </div>

          <p className="max-w-[480px] text-sm leading-8 text-[#76685E]">
            Explore some of the well-known places in {cityName}. You can
            enquire about transportation to help plan your visits.
            Individual site access, timings and local restrictions may vary.
          </p>
        </div>
      </section>

      {/* CITY DESTINATIONS */}
      <section
        id="destinations"
        className="mx-auto max-w-[1400px] scroll-mt-28 px-6 pb-24 sm:px-10 lg:px-16"
      >
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9A806B]">
              Explore the city
            </p>
            <h2 className="mt-3 font-[var(--font-cormorant)] text-[42px] font-semibold text-[#4C3025] sm:text-[52px]">
              {cityName} destinations
            </h2>
          </div>

          <span className="text-xs font-medium text-[#8B7564]">
            {destinations.length} places to explore
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.name}
              destination={destination}
            />
          ))}
        </div>
      </section>

      {/* MAKKAH: TAIF EXCURSION */}
      {isMakkah && (
        <ExcursionSection
          eyebrow="Optional excursion from Makkah"
          title="Discover the beauty of Taif."
          description="Looking to explore beyond Makkah? Taif is a separate destination that can be considered for an optional day excursion. Explore its mountain scenery and heritage attractions."
          note="Taif is a separate city from Makkah. Transport arrangements and availability must be confirmed before booking."
          image={taifDestinations[0].image}
          imageAlt="Al Hada, Taif"
          destinations={taifDestinations}
        />
      )}

      {/* MADINAH: BADR EXCURSION */}
      {!isMakkah && (
        <ExcursionSection
          eyebrow="Optional historical excursion from Madinah"
          title="Discover historic Badr."
          description="Travel beyond Madinah to Badr, the historic location associated with the Battle of Badr. Explore the battlefield area and landmarks connected with this important event in Islamic history."
          note="Badr is a separate destination from Madinah, approximately 150 km southwest of the city. This is an optional excursion. Transport availability and arrangements must be confirmed before booking."
          image={badrDestinations[0].image}
          imageAlt="Badr Battlefield"
          destinations={badrDestinations}
        />
      )}

      {/* TRANSPORT CTA */}
      <section className="bg-[#4C3025] px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1100px] text-center">
          <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-full border border-white/20 text-[#E7C99B]">
            <CarFront size={25} strokeWidth={1.5} />
          </div>

          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D8B77D]">
            Al Madni Transport & Travel
          </p>

          <h2 className="mt-5 font-[var(--font-cormorant)] text-[48px] font-medium leading-tight text-white sm:text-[66px]">
            Plan your Ziyarat journey.
          </h2>

          <p className="mx-auto mt-5 max-w-[550px] text-sm leading-8 text-white/70">
            Get in touch with us to enquire about private transportation
            for your visits around {cityName} and optional excursions.
            Transport availability and arrangements are confirmed separately.
          </p>

          <Link
            href="/#booking"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#F7F5EF] px-8 py-4 text-xs font-bold uppercase tracking-[0.13em] text-[#4C3025] transition hover:bg-[#E8E1D5]"
          >
            Enquire about transport
            <ArrowUpRight size={16} />
          </Link>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[10px] font-medium uppercase tracking-[0.15em] text-white/50">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={14} />
              Enquiry-based service
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 size={14} />
              Arrangements confirmed separately
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
