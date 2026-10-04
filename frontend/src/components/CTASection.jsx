import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { WhatsappLogo, CalendarCheck } from "@phosphor-icons/react";

const WA_LINK =
  "https://api.whatsapp.com/send?phone=6285235622400&text=Halo%20Banyuwangi%20Private%20Driver,%20saya%20ingin%20booking.";

export default function CTASection() {
  return (
    <section
      data-testid="cta-section"
      className="py-20 md:py-32 bg-[#0A2045] relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#005CE6]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#005CE6]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Siap Menemani Perjalanan Anda?
          </h2>
          <p className="text-white/60 mt-5 max-w-xl mx-auto leading-relaxed text-lg">
            Hubungi kami sekarang untuk mendapatkan penawaran terbaik. Kami siap
            melayani 24/7.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-whatsapp"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1EBE5A] px-7 py-3.5 rounded-full font-semibold transition-all active:scale-95 shadow-lg"
            >
              <WhatsappLogo size={22} weight="fill" />
              Hubungi via WhatsApp
            </a>
            <Link
              to="/rental"
              data-testid="cta-booking"
              className="inline-flex items-center justify-center gap-2 bg-[#005CE6] text-white hover:bg-[#0047B3] px-7 py-3.5 rounded-full font-semibold transition-all active:scale-95 shadow-lg"
            >
              <CalendarCheck size={22} weight="bold" />
              Booking Sekarang
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
