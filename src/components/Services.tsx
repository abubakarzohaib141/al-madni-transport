import Link from "next/link";

import {
  ArrowUpRight,
  CarFront,
} from "lucide-react";

import { imageSources } from "@/lib/data";

export default function Services() {
  return (
    <section
      className="section services-section"
      id="services"
    >
      <div className="section-inner">

        {/* SECTION HEADING */}

        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              How we can help
            </div>

            <h2>
              Considered travel,
              <br />
              from start to arrival.
            </h2>
          </div>

          <p>
            Explore our transportation and Ziyarat
            experiences across Makkah and Madinah.
          </p>
        </div>

        <div className="service-grid">

          {/* MAKKAH ZIYARAT */}

          <Link
            href="/ziyarat/makkah"
            className="service-card block"
          >
            <div
              className="service-card-image"
              role="img"
              aria-label="Kaaba at Masjid al-Haram in Makkah"
              style={{
                backgroundImage: `url("${imageSources.makkah}")`,
              }}
            />

            <div className="service-card-content">
              <span className="service-kicker">
                01 / MAKKAH
              </span>

              <h3>Makkah Ziyarat</h3>

              <p>
                Explore Makkah's historical destinations
                and discover optional Taif excursions.
              </p>

              <span className="service-link">
                Explore Makkah
                <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>

          {/* MADINAH ZIYARAT */}

          <Link
            href="/ziyarat/madinah"
            className="service-card block"
          >
            <div
              className="service-card-image"
              role="img"
              aria-label="Masjid an-Nabawi in Madinah"
              style={{
                backgroundImage: `url("${imageSources.madinah}")`,
              }}
            />

            <div className="service-card-content">
              <span className="service-kicker">
                02 / MADINAH
              </span>

              <h3>Madinah Ziyarat</h3>

              <p>
                Discover Quba Mosque, Mount Uhud and
                important historical places in Madinah.
              </p>

              <span className="service-link">
                Explore Madinah
                <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>

          {/* TRANSPORTATION */}

          <article className="service-card">
            <div
              className="service-card-image"
              role="img"
              aria-label="Hyundai Staria private transportation"
              style={{
                backgroundImage: `url("${imageSources.staria}")`,
                backgroundPosition: "center",
              }}
            />

            <div className="service-card-content">
              <span className="service-kicker">
                03 / PRIVATE JOURNEYS
              </span>

              <h3>Transportation</h3>

              <p>
                Private airport transfers, hotel pickups
                and comfortable journeys between cities.
              </p>

              <a
                className="service-link"
                href="/#booking"
              >
                Explore transportation
                <CarFront size={15} />
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}