import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TOUR_CATEGORIES } from "@/data/staticData";

export default function PackagesGrid() {
  return (
    <section data-testid="packages-section" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#44403C]">
            Pilihan Paket Wisata
          </h2>
          <p className="text-[#78716C] mt-3">
            Pilih paket trip impian anda, wujudkan liburan seru bersama
            Langganan Tour
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOUR_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-testid={`package-card-${i}`}
            >
              <Link
                to={`/tour?category=${cat.id}`}
                className="block group relative h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading font-bold text-white text-lg">
                    {cat.name}
                  </h3>
                  <p className="text-white/80 text-xs mt-1">
                    {cat.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
