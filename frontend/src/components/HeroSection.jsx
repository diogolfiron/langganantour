import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section data-testid="hero-section" className="relative min-h-screen flex items-center pt-[72px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1655178353433-2e774ba32ff4?w=1600&q=80"
          alt="Banyuwangi landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#44403C] leading-[1.1]"
          >
            Jelajahi Banyuwangi Bersama{" "}
            <span className="text-[#D97706]">Langganan Tour</span>,
            Petualangan Tak Terlupakan Menantimu!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-[#57534E] text-lg leading-relaxed"
          >
            Dari savana Baluran hingga keindahan bawah laut Menjangan, temukan pesona Banyuwangi dengan panduan lokal terpercaya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <Link
              to="/tour"
              data-testid="cta-lihat-paket"
              className="inline-flex items-center bg-[#D97706] text-white hover:bg-[#B45309] px-8 py-3.5 rounded-lg font-semibold transition-all active:scale-95 shadow-lg shadow-[#D97706]/25"
            >
              Lihat Paket Langganan
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
