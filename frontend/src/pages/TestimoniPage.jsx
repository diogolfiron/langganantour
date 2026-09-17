import { motion } from "framer-motion";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function TestimoniPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero banner */}
      <section className="bg-[#0F172A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0891b2]">Testimoni</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white mt-3">
              Apa Kata Pelanggan Kami
            </h1>
            <p className="text-white/60 mt-4 max-w-2xl leading-relaxed text-lg">
              Kepuasan pelanggan adalah prioritas utama kami.
            </p>
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
}
