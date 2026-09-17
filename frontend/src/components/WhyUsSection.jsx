import { motion } from "framer-motion";
import { MapPin, Compass, UserCircle, Backpack } from "@phosphor-icons/react";

const REASONS = [
  { icon: Backpack, title: "Pilihan Paket Fleksibel", desc: "Mau jalan 1 hari atau liburan 4 hari? Semua ada. Tinggal pilih yang sesuai waktu dan gayamu." },
  { icon: Compass, title: "Rute Seru, Tanpa Ribet", desc: "Dari savana sampai pantai, semua destinasi dirancang agar kamu tinggal nikmati tanpa pusing logistik." },
  { icon: UserCircle, title: "Tim Lokal, Sentuhan Personal", desc: "Didampingi pemandu lokal yang ramah dan berpengalaman—karena yang paling tahu Banyuwangi ya orang sini." },
  { icon: MapPin, title: "Trip Nyaman, Hati Tenang", desc: "Semua sudah disiapkan. Kamu tinggal datang, eksplor, dan pulang bawa cerita." },
];

export default function WhyUsSection() {
  return (
    <section data-testid="why-us-section" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1640399562300-83bd313ef9a9?w=1400&q=80"
          alt="Banyuwangi landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#D97706]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">Kenapa Langganan Tour</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-testid={`why-card-${i}`}
                className="text-center text-white"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-5">
                  <Icon size={36} weight="duotone" />
                </div>
                <h3 className="font-heading font-bold text-lg">{r.title}</h3>
                <p className="text-white/80 text-sm mt-2 leading-relaxed">{r.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
