"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { imageSources } from "@/lib/data";

const slides = [
  {
    src: imageSources.makkah,
    alt: "Holy Kaaba at Masjid al-Haram in Makkah",
    position: "center 50%",
  },
  {
    src: imageSources.madinah,
    alt: "Al-Masjid an-Nabawi in Madinah",
    position: "center 48%",
  },
  {
    src: imageSources.ziyarat,
    alt: "Mount Uhud in Madinah",
    position: "center 58%",
  },
  {
    src: imageSources.staria,
    alt: "Hyundai Staria passenger vehicle",
    position: "center 55%",
  },
  {
    src: imageSources.quba,
    alt: "Masjed AL Quba",
    position: "center 55%",
  },  
];

// Each image gets a slightly different camera movement.
const cameraMovements = [
  "scale-[1.13] -translate-x-[1%]",
  "scale-[1.13] translate-x-[1%]",
  "scale-[1.13] -translate-y-[1%]",
  "scale-[1.13] translate-y-[1%]",
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  // Start the initial camera movement after the first render.
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setHasStarted(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  // Respect the user's reduced-motion preference.
  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionPreference = () => {
      setReducedMotion(media.matches);
    };

    updateMotionPreference();

    media.addEventListener(
      "change",
      updateMotionPreference
    );

    return () => {
      media.removeEventListener(
        "change",
        updateMotionPreference
      );
    };
  }, []);

  // Automatic slideshow.
  // It does not pause when the mouse is over the images.
  useEffect(() => {
    if (reducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => {
        return (current + 1) % slides.length;
      });
    }, 6500);

    return () => {
      window.clearInterval(interval);
    };
  }, [reducedMotion]);

  const nextSlide = () => {
    setActiveIndex((current) => {
      return (current + 1) % slides.length;
    });
  };

  const previousSlide = () => {
    setActiveIndex((current) => {
      return (
        (current - 1 + slides.length) %
        slides.length
      );
    });
  };

  return (
    <section
      aria-label="Al Madni destination photography"
      className="relative isolate h-[calc(100svh-104px)] min-h-[500px] w-full overflow-hidden bg-[#4C3025] sm:h-[calc(100svh-114px)] sm:min-h-[580px]"
    >
      {/* IMAGE SLIDES */}
      {slides.map((slide, index) => {
        const isActive = activeIndex === index;

        const cameraMovement =
          !reducedMotion && hasStarted && isActive
            ? cameraMovements[index]
            : "scale-105 translate-x-0 translate-y-0";

        return (
          <div
            key={slide.src}
            role="img"
            aria-label={slide.alt}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              isActive
                ? "z-10 opacity-100"
                : "z-0 opacity-0"
            }`}
          >
            {/* CINEMATIC CAMERA MOVEMENT */}
            <div
              className={`absolute inset-0 bg-cover bg-no-repeat will-change-transform transition-transform duration-[7000ms] ease-linear motion-reduce:transition-none ${cameraMovement}`}
              style={{
                backgroundImage: `url("${slide.src}")`,
                backgroundPosition: slide.position,
              }}
            />
          </div>
        );
      })}

      {/* SUBTLE CINEMATIC OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black/10 via-transparent to-black/15" />

      {/* PREVIOUS */}
      <button
        type="button"
        aria-label="Previous image"
        onClick={previousSlide}
        className="absolute left-4 top-1/2 z-30 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/15 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#704A38] sm:left-8 sm:size-14"
      >
        <ChevronLeft size={25} strokeWidth={1.5} />
      </button>

      {/* NEXT */}
      <button
        type="button"
        aria-label="Next image"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/15 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white hover:text-[#704A38] sm:right-8 sm:size-14"
      >
        <ChevronRight size={25} strokeWidth={1.5} />
      </button>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2.5 sm:bottom-8">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show image ${index + 1}`}
            aria-current={
              activeIndex === index ? "true" : undefined
            }
            onClick={() => setActiveIndex(index)}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              activeIndex === index
                ? "w-10 bg-white"
                : "w-4 bg-white/45 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}