import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Clock, WhatsappLogo } from "@phosphor-icons/react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const WA_BASE = "https://api.whatsapp.com/send?phone=6282228247676&text=";

export default function ToursSection() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios.get(`${API}/tours`).then((res) => setTours(res.data)).catch(console.error);
  }, []);

  return (
    <section data-testid="tours-section" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#44403C]">Semua Paket Wisata</h2>
          <p className="text-[#78716C] mt-3">Pilih paket trip impian anda, wujudkan liburan seru bersama Langganan Tour</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              data-testid={`tour-card-${i}`}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={tour.image} alt={tour.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#D97706] text-white text-xs font-bold px-3 py-1.5 rounded-full">{tour.duration}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-[#44403C] text-lg">{tour.name}</h3>
                <p className="text-[#78716C] text-sm mt-1.5">{tour.description}</p>

                {tour.destinations && tour.destinations.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {tour.destinations.slice(0, 3).map((d) => (
                      <span key={d} className="inline-flex items-center gap-1 text-xs text-[#78716C] bg-[#FEF3C7] px-2 py-0.5 rounded-full">
                        <MapPin size={10} weight="bold" className="text-[#D97706]" />{d}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                  <p className="text-[#D97706] font-bold text-lg">{tour.price}</p>
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
