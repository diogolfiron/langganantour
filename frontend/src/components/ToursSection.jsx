import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { MapPin } from "@phosphor-icons/react";
import { TOURS, TOUR_CATEGORIES } from "@/data/staticData";

export default function ToursSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const filteredTours =
    activeCategory === "all"
      ? TOURS
      : TOURS.filter((t) => t.category === activeCategory);

  const setCategory = (cat) => {
    if (cat === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <section data-testid="tours-section" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#44403C]">
            Semua Paket Wisata
          </h2>
          <p className="text-[#78716C] mt-3">
            Pilih paket trip impian anda, wujudkan liburan seru bersama
            Langganan Tour
          </p>
        </motion.div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          data-testid="tour-filters"
        >
          <button
            onClick={() => setCategory("all")}
            data-testid="filter-all"
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeCategory === "all"
                ? "bg-[#D97706] text-white"
                : "bg-gray-100 text-[#44403C] hover:bg-gray-200"
            }`}
          >
            Semua
          </button>
          {TOUR_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              data-testid={`filter-${cat.id}`}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat.id
                  ? "bg-[#D97706] text-white"
                  : "bg-gray-100 text-[#44403C] hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour, i) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              data-testid={`tour-card-${i}`}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#D97706] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    {tour.duration}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-[#44403C] text-lg">
                  {tour.name}
                </h3>
                <p className="text-[#78716C] text-sm mt-1.5">
                  {tour.description}
                </p>
                {tour.destinations && tour.destinations.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {tour.destinations.slice(0, 3).map((d) => (
                      <span
                        key={d}
                        className="inline-flex items-center gap-1 text-xs text-[#78716C] bg-[#FEF3C7] px-2 py-0.5 rounded-full"
                      >
                        <MapPin
                          size={10}
                          weight="bold"
                          className="text-[#D97706]"
                        />
                        {d}
                      </span>
                    ))}
                    {tour.destinations.length > 3 && (
                      <span className="text-xs text-[#78716C] bg-gray-100 px-2 py-0.5 rounded-full">
                        +{tour.destinations.length - 3}
                      </span>
                    )}
                  </div>
                )}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                  <p className="text-[#D97706] font-bold text-lg">
                    {tour.price}
                  </p>
                  <Link
                    to={`/tour/${tour.id}`}
                    data-testid={`tour-detail-link-${i}`}
                    className="inline-flex items-center gap-1.5 bg-[#D97706] text-white hover:bg-[#B45309] px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
