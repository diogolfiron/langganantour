import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { WhatsappLogo } from "@phosphor-icons/react";

const WA_LINK =
  "https://api.whatsapp.com/send?phone=6285235622400&text=Halo%20Langganan%20Tour,%20saya%20ingin%20merencanakan%20perjalanan.";

export default function ContactCTA() {
  return (
    <section
      data-testid="contact-cta"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/20261011/pexels-photo-20261011.jpeg?auto=compress&cs=tinysrgb&w=1400"
          alt="Banyuwangi beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#D97706]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Siap untuk petualangan berikutnya?
          </h2>
          <p className="text-white/80 mt-4 text-lg max-w-xl mx-auto">
            Rencanakan perjalanan impian Anda di Banyuwangi bersama Langganan
            Tour.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-whatsapp"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#D97706] hover:bg-gray-50 px-7 py-3.5 rounded-lg font-semibold transition-all"
            >
              <WhatsappLogo size={22} weight="fill" />
              Hubungi via WhatsApp
            </a>
            <Link
              to="/kontak"
              data-testid="cta-kontak"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-7 py-3.5 rounded-lg font-semibold transition-all"
            >
              Kirim Pesan
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
