import { motion } from "framer-motion";
import { Car, UsersThree, MapPin, AirplaneTilt } from "@phosphor-icons/react";

const SERVICES = [
  {
    icon: Car,
    title: "Rental Mobil Harian",
    description: "Sewa mobil harian dengan berbagai pilihan armada berkualitas. Lepas kunci atau dengan sopir.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&q=80",
    span: "md:col-span-7",
  },
  {
    icon: UsersThree,
    title: "Rental Mobil + Sopir",
    description: "Driver profesional, berpengalaman, dan ramah untuk kenyamanan perjalanan Anda.",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&q=80",
    span: "md:col-span-5",
  },
  {
    icon: MapPin,
    title: "Paket Tour Wisata",
    description: "Paket wisata lengkap ke destinasi terbaik dengan harga terjangkau.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    span: "md:col-span-5",
  },
  {
    icon: AirplaneTilt,
    title: "Antar Jemput Bandara",
    description: "Layanan antar jemput bandara tepat waktu dan terpercaya.",
    image: "https://images.unsplash.com/photo-1558222209-134191edfe0d?w=600&q=80",
    span: "md:col-span-7",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <section id="tentang" data-testid="services-section" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#005CE6]">Layanan Kami</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-[#0F172A] mt-3">
            Solusi Transportasi Lengkap
          </h2>
          <p className="text-[#475569] mt-4 max-w-lg leading-relaxed">
            Dari rental mobil harian hingga paket tour wisata, kami menyediakan layanan transportasi terbaik untuk kebutuhan Anda.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-5"
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const isLarge = i === 0;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                data-testid={`service-card-${i}`}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${service.span}`}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2045]/80 via-[#0A2045]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="w-12 h-12 rounded-xl bg-[#005CE6] flex items-center justify-center mb-4">
                      <Icon size={24} weight="duotone" className="text-white" />
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white">{service.title}</h3>
                    <p className="text-white/70 mt-2 text-sm leading-relaxed max-w-md">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
