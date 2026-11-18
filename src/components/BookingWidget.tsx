
"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CarFront,
  Check,
  Clipboard,
  Clock3,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";

import { fleet } from "@/lib/data";

type ServiceType = "transfer" | "ziyarat";

type BookingForm = {
  route: string;
  city: string;
  pickupLocation: string;
  destinationLocation: string;
  ziyaratDestinations: string;
  ziyaratPreference: string;
  date: string;
  time: string;
  passengers: string;
  luggage: string;
  vehicle: string;
  fullName: string;
  phone: string;
  email: string;
  notes: string;
};

const WHATSAPP_NUMBER = "+966532129325";

const initialForm: BookingForm = {
  route: "Makkah to Madinah",
  city: "Makkah",
  pickupLocation: "",
  destinationLocation: "",
  ziyaratDestinations: "",
  ziyaratPreference: "Private Ziyarat",
  date: "",
  time: "",
  passengers: "2",
  luggage: "2",
  vehicle: "No preference",
  fullName: "",
  phone: "",
  email: "",
  notes: "",
};

const fieldClass =
  "mt-2 h-[49px] w-full rounded-md border border-[#E6DED3] bg-[#FAF9F6] px-4 text-[12px] text-[#4C3025] outline-none transition-all duration-200 placeholder:text-[#A69B90] focus:border-[#B8955C] focus:bg-white focus:ring-2 focus:ring-[#B8955C]/10";

const labelClass =
  "text-[10px] font-bold uppercase tracking-[0.12em] text-[#796B60]";

const routes = [
  "Within Makkah",
  "Within Madinah",
  "Makkah to Madinah",
  "Madinah to Makkah",
];

export default function BookingWidget() {
  const [service, setService] =
    useState<ServiceType>("transfer");

  const [form, setForm] =
    useState<BookingForm>(initialForm);

  const [minimumDate, setMinimumDate] = useState("");
  const [reviewMode, setReviewMode] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  // Calculate the minimum date after the component mounts.
  // This avoids calling new Date() during prerendering.
  useEffect(() => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    setMinimumDate(`${year}-${month}-${day}`);
  }, []);

  const updateField = (
    field: keyof BookingForm,
    value: string
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const changeService = (nextService: ServiceType) => {
    setService(nextService);
    setReviewMode(false);
    setCopyStatus("");
  };

  const requestText = useMemo(() => {
    const lines = [
      "AL MADNI TRANSPORT - BOOKING REQUEST",
      "-----------------------------------",
      `Service: ${
        service === "transfer"
          ? "Transportation"
          : "Ziyarat"
      }`,
    ];

    if (service === "transfer") {
      lines.push(
        `Route: ${form.route}`,
        `Pickup location: ${form.pickupLocation}`,
        `Destination: ${form.destinationLocation}`
      );
    } else {
      lines.push(
        `City: ${form.city}`,
        `Preference: ${form.ziyaratPreference}`,
        `Pickup location: ${form.pickupLocation}`,
        `Preferred destinations: ${
          form.ziyaratDestinations || "To be discussed"
        }`
      );
    }

    const selectedVehicle = fleet.find(
      (vehicle) => vehicle.name === form.vehicle
    );

    lines.push(
      `Travel date: ${form.date}`,
      `Pickup time: ${form.time}`,
      `Passengers: ${form.passengers}`,
      `Luggage pieces: ${form.luggage}`,
      `Preferred vehicle: ${form.vehicle}`,
      `Vehicle seats: ${
        selectedVehicle?.seats ?? "Not specified"
      }`,
      "",
      "CUSTOMER INFORMATION",
      `Name: ${form.fullName}`,
      `WhatsApp: ${form.phone}`,
      `Email: ${form.email || "Not provided"}`,
      "",
      `Additional notes: ${form.notes || "None"}`,
      "",
      "Please confirm availability and provide a quotation.",
      "This request is not yet a confirmed booking."
    );

    return lines.join("\n");
  }, [service, form]);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setReviewMode(true);
    setCopyStatus("");

    window.scrollTo({
      top:
        document.getElementById("booking")?.offsetTop ?? 0,
      behavior: "smooth",
    });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(requestText);
      setCopyStatus("Booking details copied successfully.");
    } catch {
      setCopyStatus(
        "Copy failed. Please use a secure browser connection."
      );
    }
  };

  // Open WhatsApp with the complete booking request.
  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      requestText
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="booking"
      className="bg-[#F0EBE2] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1220px] items-start gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

        {/* LEFT INFORMATION */}

        <div className="lg:sticky lg:top-28">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#B8955C]" />

            <span className="text-[9px] font-extrabold tracking-[0.2em] text-[#A17B55]">
              AL MADNI TRANSPORT
            </span>
          </div>

          <h2 className="mt-6 font-[var(--font-cormorant)] text-5xl font-medium leading-[0.98] tracking-tight text-[#4C3025] sm:text-6xl">
            Let's plan
            <br />
            your{" "}
            <span className="italic text-[#B8955C]">
              journey.
            </span>
          </h2>

          <p className="mt-6 max-w-[380px] text-[12px] leading-7 text-[#786F66]">
            Whether you need a private transfer or want
            to explore the beautiful destinations of
            Makkah and Madinah, share your plans with us.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#B8955C]/40 text-[#704A38]">
                <CarFront size={19} />
              </div>

              <div>
                <h3 className="text-[12px] font-bold text-[#4C3025]">
                  Transportation
                </h3>

                <p className="mt-1 text-[10px] leading-6 text-[#82766B]">
                  Private journeys for individuals, families
                  and groups.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#B8955C]/40 text-[#704A38]">
                <MapPin size={19} />
              </div>

              <div>
                <h3 className="text-[12px] font-bold text-[#4C3025]">
                  Ziyarat experiences
                </h3>

                <p className="mt-1 text-[10px] leading-6 text-[#82766B]">
                  Arrange your preferred Ziyarat destinations
                  in either city.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#B8955C]/40 text-[#704A38]">
                <ShieldCheck size={19} />
              </div>

              <div>
                <h3 className="text-[12px] font-bold text-[#4C3025]">
                  Request and confirmation
                </h3>

                <p className="mt-1 text-[10px] leading-6 text-[#82766B]">
                  Availability and pricing are checked
                  before your booking is confirmed.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-[#704A38]/15 pt-5">
            <span className="text-[8px] font-bold tracking-[0.17em] text-[#9B846D]">
              SERVING
            </span>

            <p className="mt-2 font-[var(--font-cormorant)] text-2xl text-[#704A38]">
              Makkah & Madinah
            </p>
          </div>
        </div>

        {/* BOOKING FORM CARD */}

        <div className="overflow-hidden rounded-lg border border-[#704A38]/10 bg-[#FFFEFA] shadow-[0_15px_65px_rgba(76,48,37,0.07)]">

          {/* HEADER */}

          <div className="border-b border-[#704A38]/10 px-6 py-6 sm:px-9 sm:py-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] font-bold tracking-[0.17em] text-[#B8955C]">
                  BOOKING ENQUIRY
                </span>

                <h3 className="mt-2 font-[var(--font-cormorant)] text-3xl font-semibold text-[#4C3025]">
                  Your journey details
                </h3>
              </div>

              <div className="hidden size-12 items-center justify-center rounded-full bg-[#F0EBE2] text-[#704A38] sm:flex">
                <CalendarDays size={21} />
              </div>
            </div>
          </div>

          {reviewMode ? (
            /* REVIEW STEP */

            <div className="p-6 sm:p-9">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-[#704A38] text-white">
                  <Check size={19} />
                </div>

                <div>
                  <h3 className="font-[var(--font-cormorant)] text-2xl text-[#4C3025]">
                    Review your request
                  </h3>

                  <p className="mt-1 text-[10px] text-[#8B7E70]">
                    Check these details before sharing.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-5 rounded-md bg-[#F7F5EF] p-5 sm:p-6">
                <div>
                  <span className={labelClass}>
                    SERVICE
                  </span>

                  <p className="mt-2 text-sm font-bold text-[#704A38]">
                    {service === "transfer"
                      ? "Transportation"
                      : "Ziyarat"}
                  </p>
                </div>

                {service === "transfer" ? (
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <span className={labelClass}>
                        ROUTE
                      </span>

                      <p className="mt-2 text-[12px] font-semibold text-[#4C3025]">
                        {form.route}
                      </p>
                    </div>

                    <div>
                      <span className={labelClass}>
                        PICKUP
                      </span>

                      <p className="mt-2 text-[12px] font-semibold text-[#4C3025]">
                        {form.pickupLocation}
                      </p>
                    </div>

                    <div>
                      <span className={labelClass}>
                        DESTINATION
                      </span>

                      <p className="mt-2 text-[12px] font-semibold text-[#4C3025]">
                        {form.destinationLocation}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <span className={labelClass}>
                        CITY
                      </span>

                      <p className="mt-2 text-[12px] font-semibold text-[#4C3025]">
                        {form.city}
                      </p>
                    </div>

                    <div>
                      <span className={labelClass}>
                        PREFERENCE
                      </span>

                      <p className="mt-2 text-[12px] font-semibold text-[#4C3025]">
                        {form.ziyaratPreference}
                      </p>
                    </div>

                    <div className="col-span-2">
                      <span className={labelClass}>
                        DESTINATIONS
                      </span>

                      <p className="mt-2 text-[12px] font-semibold text-[#4C3025]">
                        {form.ziyaratDestinations ||
                          "To be discussed"}
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-5 border-t border-[#704A38]/10 pt-5">
                  <div>
                    <span className={labelClass}>
                      DATE
                    </span>

                    <p className="mt-2 text-[12px] font-semibold text-[#4C3025]">
                      {form.date}
                    </p>
                  </div>

                  <div>
                    <span className={labelClass}>
                      PICKUP TIME
                    </span>

                    <p className="mt-2 text-[12px] font-semibold text-[#4C3025]">
                      {form.time}
                    </p>
                  </div>

                  <div>
                    <span className={labelClass}>
                      PASSENGERS
                    </span>

                    <p className="mt-2 text-[12px] font-semibold text-[#4C3025]">
                      {form.passengers}
                    </p>
                  </div>

                  <div>
                    <span className={labelClass}>
                      LUGGAGE
                    </span>

                    <p className="mt-2 text-[12px] font-semibold text-[#4C3025]">
                      {form.luggage} pieces
                    </p>
                  </div>

                  <div className="col-span-2">
                    <span className={labelClass}>
                      PREFERRED VEHICLE
                    </span>

                    <p className="mt-2 text-[12px] font-semibold text-[#4C3025]">
                      {form.vehicle}
                    </p>

                    {form.vehicle !== "No preference" && (
                      <p className="mt-1 text-[10px] text-[#8B7E70]">
                        Seats:{" "}
                        {fleet.find(
                          (vehicle) =>
                            vehicle.name === form.vehicle
                        )?.seats ?? "To be confirmed"}
                      </p>
                    )}
                  </div>
                </div>

                <div className="border-t border-[#704A38]/10 pt-5">
                  <span className={labelClass}>
                    CUSTOMER
                  </span>

                  <p className="mt-2 text-[12px] font-semibold text-[#4C3025]">
                    {form.fullName}
                  </p>

                  <p className="mt-1 text-[11px] text-[#786F66]">
                    {form.phone}
                  </p>

                  {form.email && (
                    <p className="mt-1 text-[11px] text-[#786F66]">
                      {form.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6 rounded-md border border-[#B8955C]/30 bg-[#FBF7EF] p-4">
                <p className="text-[10px] leading-6 text-[#786F66]">
                  This is a booking request, not a confirmed
                  reservation. Availability, pricing and
                  vehicle suitability must be confirmed by
                  the Al Madni Transport team.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setReviewMode(false)}
                  className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md border border-[#704A38]/25 text-[11px] font-bold text-[#704A38] transition-colors hover:bg-[#F7F5EF]"
                >
                  <ArrowLeft size={15} />
                  Edit details
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-[#704A38] px-5 text-[11px] font-bold text-white transition-all hover:bg-[#4C3025]"
                >
                  {copyStatus.startsWith("Booking") ? (
                    <Check size={16} />
                  ) : (
                    <Clipboard size={16} />
                  )}

                  {copyStatus.startsWith("Booking")
                    ? "Copied!"
                    : "Copy booking request"}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-[#26734D] px-5 text-[11px] font-bold text-white transition-all hover:bg-[#1E5D3E]"
                >
                  <MessageCircle size={16} />
                  Send via WhatsApp
                </button>
              </div>

              {copyStatus && (
                <p
                  aria-live="polite"
                  className="mt-3 text-center text-[10px] text-[#704A38]"
                >
                  {copyStatus}
                </p>
              )}

              <p className="mt-3 text-center text-[9px] leading-5 text-[#A0968A]">
                WhatsApp will open with your booking details.
                Press Send in WhatsApp to deliver your request.
              </p>
            </div>
          ) : (
            /* MAIN FORM */

            <form
              onSubmit={handleSubmit}
              className="space-y-8 p-6 sm:p-9"
            >
              {/* SERVICE */}

              <div>
                <span className={labelClass}>
                  WHAT WOULD YOU LIKE TO BOOK?
                </span>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      changeService("transfer")
                    }
                    className={`flex min-h-[76px] items-center gap-3 rounded-md border p-4 text-left transition-all duration-300 ${
                      service === "transfer"
                        ? "border-[#704A38] bg-[#704A38] text-white shadow-md"
                        : "border-[#E6DED3] bg-[#FAF9F6] text-[#704A38] hover:border-[#B8955C]"
                    }`}
                  >
                    <CarFront size={22} />

                    <span>
                      <span className="block text-[11px] font-bold">
                        Transportation
                      </span>

                      <span
                        className={`mt-1 block text-[9px] ${
                          service === "transfer"
                            ? "text-white/70"
                            : "text-[#96887B]"
                        }`}
                      >
                        Private transfers
                      </span>
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      changeService("ziyarat")
                    }
                    className={`flex min-h-[76px] items-center gap-3 rounded-md border p-4 text-left transition-all duration-300 ${
                      service === "ziyarat"
                        ? "border-[#704A38] bg-[#704A38] text-white shadow-md"
                        : "border-[#E6DED3] bg-[#FAF9F6] text-[#704A38] hover:border-[#B8955C]"
                    }`}
                  >
                    <MapPin size={22} />

                    <span>
                      <span className="block text-[11px] font-bold">
                        Ziyarat
                      </span>

                      <span
                        className={`mt-1 block text-[9px] ${
                          service === "ziyarat"
                            ? "text-white/70"
                            : "text-[#96887B]"
                        }`}
                      >
                        Explore the Holy Cities
                      </span>
                    </span>
                  </button>
                </div>
              </div>

              {/* TRANSPORTATION */}

              {service === "transfer" ? (
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="route"
                      className={labelClass}
                    >
                      JOURNEY ROUTE
                    </label>

                    <select
                      id="route"
                      className={fieldClass}
                      value={form.route}
                      onChange={(event) =>
                        updateField(
                          "route",
                          event.target.value
                        )
                      }
                    >
                      {routes.map((route) => (
                        <option
                          key={route}
                          value={route}
                        >
                          {route}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="pickup-location"
                        className={labelClass}
                      >
                        PICKUP LOCATION
                      </label>

                      <input
                        id="pickup-location"
                        required
                        className={fieldClass}
                        placeholder="Hotel name or address"
                        value={form.pickupLocation}
                        onChange={(event) =>
                          updateField(
                            "pickupLocation",
                            event.target.value
                          )
                        }
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="destination-location"
                        className={labelClass}
                      >
                        DESTINATION LOCATION
                      </label>

                      <input
                        id="destination-location"
                        required
                        className={fieldClass}
                        placeholder="Hotel, airport or address"
                        value={form.destinationLocation}
                        onChange={(event) =>
                          updateField(
                            "destinationLocation",
                            event.target.value
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* ZIYARAT */

                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="ziyarat-city"
                        className={labelClass}
                      >
                        CITY
                      </label>

                      <select
                        id="ziyarat-city"
                        className={fieldClass}
                        value={form.city}
                        onChange={(event) =>
                          updateField(
                            "city",
                            event.target.value
                          )
                        }
                      >
                        <option value="Makkah">
                          Makkah
                        </option>

                        <option value="Madinah">
                          Madinah
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="ziyarat-preference"
                        className={labelClass}
                      >
                        EXPERIENCE
                      </label>

                      <select
                        id="ziyarat-preference"
                        className={fieldClass}
                        value={form.ziyaratPreference}
                        onChange={(event) =>
                          updateField(
                            "ziyaratPreference",
                            event.target.value
                          )
                        }
                      >
                        <option>Private Ziyarat</option>
                        <option>
                          Standard package enquiry
                        </option>
                        <option>Custom itinerary</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="ziyarat-pickup"
                      className={labelClass}
                    >
                      PICKUP LOCATION
                    </label>

                    <input
                      id="ziyarat-pickup"
                      required
                      className={fieldClass}
                      placeholder="Hotel name or address"
                      value={form.pickupLocation}
                      onChange={(event) =>
                        updateField(
                          "pickupLocation",
                          event.target.value
                        )
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="ziyarat-destinations"
                      className={labelClass}
                    >
                      PREFERRED ZIYARAT DESTINATIONS
                    </label>

                    <textarea
                      id="ziyarat-destinations"
                      rows={3}
                      className="mt-2 w-full resize-y rounded-md border border-[#E6DED3] bg-[#FAF9F6] p-4 text-[12px] text-[#4C3025] outline-none transition-all placeholder:text-[#A69B90] focus:border-[#B8955C] focus:bg-white focus:ring-2 focus:ring-[#B8955C]/10"
                      placeholder="For example: Quba Mosque, Mount Uhud, or let us recommend a route."
                      value={form.ziyaratDestinations}
                      onChange={(event) =>
                        updateField(
                          "ziyaratDestinations",
                          event.target.value
                        )
                      }
                    />
                  </div>
                </div>
              )}

              {/* TRAVEL INFORMATION */}

              <div className="border-t border-[#704A38]/10 pt-7">
                <div className="mb-5 flex items-center gap-2">
                  <CalendarDays
                    size={16}
                    className="text-[#B8955C]"
                  />

                  <h4 className="text-[11px] font-bold tracking-wide text-[#4C3025]">
                    TRAVEL INFORMATION
                  </h4>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="travel-date"
                      className={labelClass}
                    >
                      TRAVEL DATE
                    </label>

                    <input
                      id="travel-date"
                      type="date"
                      min={minimumDate || undefined}
                      required
                      className={fieldClass}
                      value={form.date}
                      onChange={(event) =>
                        updateField(
                          "date",
                          event.target.value
                        )
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="pickup-time"
                      className={labelClass}
                    >
                      PREFERRED PICKUP TIME
                    </label>

                    <div className="relative">
                      <Clock3
                        size={15}
                        className="pointer-events-none absolute left-4 top-[18px] text-[#A18468]"
                      />

                      <input
                        id="pickup-time"
                        type="time"
                        required
                        className={`${fieldClass} pl-10`}
                        value={form.time}
                        onChange={(event) =>
                          updateField(
                            "time",
                            event.target.value
                          )
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="passengers"
                      className={labelClass}
                    >
                      PASSENGERS
                    </label>

                    <div className="relative">
                      <Users
                        size={15}
                        className="pointer-events-none absolute left-4 top-[18px] text-[#A18468]"
                      />

                      <select
                        id="passengers"
                        className={`${fieldClass} pl-10`}
                        value={form.passengers}
                        onChange={(event) =>
                          updateField(
                            "passengers",
                            event.target.value
                          )
                        }
                      >
                        {Array.from(
                          { length: 20 },
                          (_, index) => index + 1
                        ).map((number) => (
                          <option
                            value={String(number)}
                            key={number}
                          >
                            {number}{" "}
                            {number === 1
                              ? "Passenger"
                              : "Passengers"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="luggage"
                      className={labelClass}
                    >
                      LUGGAGE PIECES
                    </label>

                    <select
                      id="luggage"
                      className={fieldClass}
                      value={form.luggage}
                      onChange={(event) =>
                        updateField(
                          "luggage",
                          event.target.value
                        )
                      }
                    >
                      {Array.from(
                        { length: 16 },
                        (_, index) => index
                      ).map((number) => (
                        <option
                          value={String(number)}
                          key={number}
                        >
                          {number}{" "}
                          {number === 1
                            ? "Piece"
                            : "Pieces"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* VEHICLE WITH SEAT INFORMATION */}

                <div className="mt-5">
                  <label
                    htmlFor="vehicle"
                    className={labelClass}
                  >
                    PREFERRED VEHICLE
                  </label>

                  <div className="relative">
                    <CarFront
                      size={17}
                      className="pointer-events-none absolute left-4 top-[18px] text-[#A18468]"
                    />

                    <select
                      id="vehicle"
                      className={`${fieldClass} pl-10`}
                      value={form.vehicle}
                      onChange={(event) =>
                        updateField(
                          "vehicle",
                          event.target.value
                        )
                      }
                    >
                      <option value="No preference">
                        No preference
                      </option>

                      {fleet.map((vehicle) => (
                        <option
                          key={vehicle.name}
                          value={vehicle.name}
                        >
                          {vehicle.name} — Seats: {vehicle.seats}
                        </option>
                      ))}
                    </select>
                  </div>

                  <p className="mt-2 text-[9px] leading-5 text-[#96887B]">
                    Passenger capacity and vehicle
                    availability will be verified by our
                    team before confirmation.
                  </p>
                </div>
              </div>

              {/* CUSTOMER INFORMATION */}

              <div className="border-t border-[#704A38]/10 pt-7">
                <div className="mb-5 flex items-center gap-2">
                  <Users
                    size={16}
                    className="text-[#B8955C]"
                  />

                  <h4 className="text-[11px] font-bold tracking-wide text-[#4C3025]">
                    YOUR CONTACT INFORMATION
                  </h4>
                </div>

                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="full-name"
                      className={labelClass}
                    >
                      FULL NAME
                    </label>

                    <input
                      id="full-name"
                      type="text"
                      autoComplete="name"
                      required
                      minLength={2}
                      className={fieldClass}
                      placeholder="Enter your full name"
                      value={form.fullName}
                      onChange={(event) =>
                        updateField(
                          "fullName",
                          event.target.value
                        )
                      }
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className={labelClass}
                      >
                        WHATSAPP NUMBER
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        minLength={7}
                        className={fieldClass}
                        placeholder="+1 555 123 4567"
                        value={form.phone}
                        onChange={(event) =>
                          updateField(
                            "phone",
                            event.target.value
                          )
                        }
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className={labelClass}
                      >
                        EMAIL ADDRESS
                        <span className="ml-1 normal-case tracking-normal text-[#A69B90]">
                          (Optional)
                        </span>
                      </label>

                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className={fieldClass}
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(event) =>
                          updateField(
                            "email",
                            event.target.value
                          )
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="notes"
                      className={labelClass}
                    >
                      ADDITIONAL NOTES
                      <span className="ml-1 normal-case tracking-normal text-[#A69B90]">
                        (Optional)
                      </span>
                    </label>

                    <textarea
                      id="notes"
                      rows={3}
                      className="mt-2 w-full resize-y rounded-md border border-[#E6DED3] bg-[#FAF9F6] p-4 text-[12px] text-[#4C3025] outline-none transition-all placeholder:text-[#A69B90] focus:border-[#B8955C] focus:bg-white focus:ring-2 focus:ring-[#B8955C]/10"
                      placeholder="Anything else we should know about your journey?"
                      value={form.notes}
                      onChange={(event) =>
                        updateField(
                          "notes",
                          event.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </div>

              {/* BOOKING NOTICE */}

              <div className="flex items-start gap-3 rounded-md border border-[#B8955C]/25 bg-[#FBF7EF] p-4">
                <ShieldCheck
                  size={18}
                  className="mt-0.5 shrink-0 text-[#A17B55]"
                />

                <p className="text-[10px] leading-6 text-[#786F66]">
                  Submitting a request does not guarantee a
                  reservation. Our team must verify availability,
                  pricing and vehicle suitability before
                  confirming your booking.
                </p>
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="group flex min-h-[54px] w-full items-center justify-center gap-3 rounded-md bg-[#704A38] px-6 text-[11px] font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4C3025] hover:shadow-[0_10px_25px_rgba(76,48,37,0.18)]"
              >
                Review booking request

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-[9px] leading-5 text-[#A0968A]">
                Your details will be reviewed before a
                booking is confirmed.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
