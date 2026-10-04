import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Users,
  NavigationArrow,
  Check,
  X,
  WhatsappLogo,
  CaretLeft,
  Backpack,
  ListChecks,
  Warning,
} from "@phosphor-icons/react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const WA_BASE = "https://api.whatsapp.com/send?phone=6285235622400&text=";

export default function TourDetailPage() {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("itinerary");

  useEffect(() => {
    axios
      .get(`${API}/tours/${id}`)
      .then((res) => {
        setTour(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="pt-[72px] min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#D97706] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="pt-[72px] min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-[#78716C] text-lg">Paket wisata tidak ditemukan.</p>
        <Link
          to="/tour"
          className="text-[#D97706] font-semibold hover:underline"
        >
          Kembali ke daftar paket
        </Link>
      </div>
    );
  }

  const tabs = [
    { id: "itinerary", label: "Itinerary", icon: Backpack },
    { id: "fasilitas", label: "Fasilitas", icon: ListChecks },
    { id: "syarat", label: "Syarat & Ketentuan", icon: Warning },
  ];

  return (
    <div className="pt-[72px]">
      {/* Hero Banner */}
      <section
        className="relative h-[50vh] min-h-[360px]"
        data-testid="tour-detail-hero"
      >
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-7xl mx-auto">
          <Link
            to="/tour"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
            data-testid="back-to-tours"
          >
            <CaretLeft size={16} weight="bold" /> Kembali ke Paket Wisata
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            {tour.name}
          </motion.h1>
          <p className="text-white/70 mt-2 text-lg max-w-2xl">
            {tour.description}
          </p>
        </div>
      </section>

      {/* Info bar */}
      <section className="bg-white border-b border-gray-100 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-6 justify-between">
          <div className="flex flex-wrap items-center gap-5 text-sm">
            <div className="flex items-center gap-2 text-[#44403C]">
              <Clock size={18} weight="duotone" className="text-[#D97706]" />
              <span className="font-medium">{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-[#44403C]">
              <Users size={18} weight="duotone" className="text-[#D97706]" />
              <span className="font-medium">Min. {tour.min_person} orang</span>
            </div>
            <div className="flex items-center gap-2 text-[#44403C]">
              <NavigationArrow
                size={18}
                weight="duotone"
                className="text-[#D97706]"
              />
              <span className="font-medium">{tour.meeting_point}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p
              className="text-[#D97706] font-heading font-bold text-2xl"
              data-testid="tour-detail-price"
            >
              {tour.price}
              <span className="text-[#78716C] text-sm font-normal">/orang</span>
            </p>
            <a
              href={`${WA_BASE}Halo%20Langganan%20Tour,%20saya%20mau%20booking%20paket%20${encodeURIComponent(tour.name)}%20(${tour.price})`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="tour-detail-booking"
              className="inline-flex items-center gap-2 bg-[#D97706] text-white hover:bg-[#B45309] px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors"
            >
              <WhatsappLogo size={18} weight="fill" /> Booking Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Destinations Tags */}
      <section className="bg-gray-50 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {tour.destinations.map((d) => (
              <span
                key={d}
                className="inline-flex items-center gap-1.5 text-sm text-[#44403C] bg-white border border-gray-200 px-3 py-1.5 rounded-full"
                data-testid="dest-tag"
              >
                <MapPin size={14} weight="bold" className="text-[#D97706]" />{" "}
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex gap-1 border-b border-gray-200 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                data-testid={`tab-${tab.id}`}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-[#D97706] text-[#D97706]"
                    : "border-transparent text-[#78716C] hover:text-[#44403C]"
                }`}
              >
                <Icon size={18} weight="duotone" /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* Itinerary Tab */}
        {activeTab === "itinerary" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            data-testid="itinerary-content"
          >
            <div className="space-y-8">
              {tour.detailed_itinerary &&
                tour.detailed_itinerary.map((day, i) => (
                  <div
                    key={i}
                    className="relative pl-8 border-l-2 border-[#D97706]/20"
                    data-testid={`itinerary-day-${i}`}
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#D97706] -translate-x-[9px]" />
                    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#D97706] text-white text-xs font-bold px-3 py-1 rounded-full">
                          {day.day}
                        </span>
                        <h3 className="font-heading font-bold text-[#44403C] text-lg">
                          {day.title}
                        </h3>
                      </div>
                      <ul className="space-y-2.5">
                        {day.activities.map((act, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-sm text-[#57534E]"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-2 shrink-0" />
                            {act}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        )}

        {/* Fasilitas Tab */}
        {activeTab === "fasilitas" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            data-testid="fasilitas-content"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <h3 className="font-heading font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
                  <Check size={20} weight="bold" className="text-green-600" />{" "}
                  Termasuk dalam Paket
                </h3>
                <ul className="space-y-3">
                  {tour.facilities_included.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-green-700"
                      data-testid={`facility-included-${i}`}
                    >
                      <Check
                        size={16}
                        weight="bold"
                        className="text-green-500 mt-0.5 shrink-0"
                      />{" "}
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <h3 className="font-heading font-bold text-red-800 text-lg mb-4 flex items-center gap-2">
                  <X size={20} weight="bold" className="text-red-600" /> Tidak
                  Termasuk
                </h3>
                <ul className="space-y-3">
                  {tour.facilities_excluded.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-red-700"
                      data-testid={`facility-excluded-${i}`}
                    >
                      <X
                        size={16}
                        weight="bold"
                        className="text-red-500 mt-0.5 shrink-0"
                      />{" "}
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Syarat Tab */}
        {activeTab === "syarat" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            data-testid="syarat-content"
          >
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 max-w-2xl">
              <h3 className="font-heading font-bold text-amber-800 text-lg mb-4 flex items-center gap-2">
                <Warning
                  size={20}
                  weight="duotone"
                  className="text-amber-600"
                />{" "}
                Syarat & Ketentuan
              </h3>
              <ol className="space-y-3 list-decimal list-inside">
                {tour.terms.map((t, i) => (
                  <li
                    key={i}
                    className="text-sm text-amber-800 leading-relaxed"
                    data-testid={`term-${i}`}
                  >
                    {t}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#FEF3C7] py-10" data-testid="tour-detail-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-[#44403C]">
            Tertarik dengan paket ini?
          </h2>
          <p className="text-[#78716C] mt-2">
            Hubungi kami sekarang untuk booking atau tanya-tanya dulu.
          </p>
          <a
            href={`${WA_BASE}Halo%20Langganan%20Tour,%20saya%20mau%20tanya%20tentang%20paket%20${encodeURIComponent(tour.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="tour-detail-cta-wa"
            className="inline-flex items-center gap-2 bg-[#D97706] text-white hover:bg-[#B45309] px-8 py-3.5 rounded-lg font-semibold mt-6 transition-colors"
          >
            <WhatsappLogo size={20} weight="fill" /> Chat via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
