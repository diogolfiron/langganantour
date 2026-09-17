import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock, Trophy, Heart, Target } from "@phosphor-icons/react";

export default function TentangPage() {
  return (
    <div className="pt-[72px]">
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#D97706] font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#44403C] mt-3">Langganan Tour & Travel</h1>
              <p className="text-[#78716C] mt-5 leading-relaxed">
                Langganan Tour & Travel berkomitmen menghadirkan pengalaman wisata autentik di Banyuwangi. Dengan pemandu lokal berpengalaman, kami menawarkan berbagai paket perjalanan yang dapat disesuaikan dengan kebutuhan Anda.
              </p>
              <p className="text-[#78716C] mt-4 leading-relaxed">
                Dari savana Baluran hingga keindahan bawah laut Menjangan, temukan pesona Banyuwangi dengan panduan lokal terpercaya. Kami siap menemani perjalanan impian Anda.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[{ num: "500+", label: "Pelanggan Puas" }, { num: "50+", label: "Trip Sukses" }, { num: "5+", label: "Tahun" }].map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-heading font-bold text-[#D97706]">{s.num}</p>
                    <p className="text-sm text-[#78716C] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1559273278-31d91743cbb2?w=700&q=80" alt="Kawah Ijen"
                className="rounded-2xl w-full h-[420px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-[#44403C]">Mengapa Kami Berbeda</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Keamanan Utama", desc: "Keselamatan pelanggan prioritas nomor satu." },
              { icon: Heart, title: "Pelayanan Sepenuh Hati", desc: "Melayani dengan tulus untuk perjalanan menyenangkan." },
              { icon: Users, title: "Tim Profesional", desc: "Pemandu lokal ramah dan berpengalaman." },
              { icon: Clock, title: "Tepat Waktu", desc: "Menghargai waktu Anda adalah komitmen kami." },
              { icon: Trophy, title: "Kualitas Terjamin", desc: "Standar layanan tinggi di setiap trip." },
              { icon: Target, title: "Harga Transparan", desc: "Tidak ada biaya tersembunyi." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }} data-testid={`value-card-${i}`}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-all">
                  <div className="w-14 h-14 rounded-xl bg-[#FEF3C7] flex items-center justify-center mb-5">
                    <Icon size={28} weight="duotone" className="text-[#D97706]" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#44403C]">{item.title}</h3>
                  <p className="text-[#78716C] text-sm mt-2 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
