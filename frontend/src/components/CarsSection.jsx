import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const WA_BASE = "https://api.whatsapp.com/send?phone=6285235622400&text=";

export default function CarsSection() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/cars`)
      .then((res) => setCars(res.data))
      .catch(console.error);
  }, []);

  return (
    <section data-testid="cars-section" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
            Our Transports
          </h2>
          <p className="text-[#64748B] mt-2">
            We always take care of transportation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-testid={`car-card-${i}`}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Vehicle name header */}
              <div className="text-center py-4 border-b border-gray-100">
                <h3 className="font-heading font-bold text-lg text-[#0F172A]">
                  {car.name}
                </h3>
              </div>

              {/* Vehicle image */}
              <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Price */}
              <div className="text-center py-3 border-t border-gray-100">
                <p className="font-heading font-bold text-lg text-[#0F172A]">
                  Start From{" "}
                  <span className="text-[#0F172A]">{car.price_per_day}</span>
                </p>
              </div>

              {/* Price Detail Table */}
              <div className="px-4 pb-4">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="px-3 py-2.5 text-[#475569] font-medium w-32">
                          Dalam Kota
                        </td>
                        <td className="px-1 py-2.5 text-[#475569] w-4">:</td>
                        <td className="px-3 py-2.5 text-[#0F172A]">
                          {car.price_per_day}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-3 py-2.5 text-[#475569] font-medium">
                          Luar Kota
                        </td>
                        <td className="px-1 py-2.5 text-[#475569]">:</td>
                        <td className="px-3 py-2.5 text-[#0F172A]">
                          Hubungi kami
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-3 py-2.5 text-[#475569] font-medium">
                          Termasuk
                        </td>
                        <td className="px-1 py-2.5 text-[#475569]">:</td>
                        <td className="px-3 py-2.5 text-[#0F172A]">
                          Mobil, BBM dan Driver
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2.5 text-[#475569] font-medium">
                          Tidak Termasuk
                        </td>
                        <td className="px-1 py-2.5 text-[#475569]">:</td>
                        <td className="px-3 py-2.5 text-[#0F172A]">
                          Tol, Parkir, Makan
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Booking Button */}
                <a
                  href={`${WA_BASE}Halo%20Banyuwangi%20Private%20Driver,%20saya%20mau%20booking%20${encodeURIComponent(car.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`sewa-btn-${i}`}
                  className="mt-4 w-full inline-flex items-center justify-center bg-[#0891b2] text-white hover:bg-[#0e7490] px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                >
                  Booking Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
