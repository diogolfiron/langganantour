import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function GallerySection() {
  const [images, setImages] = useState([]);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    axios.get(`${API}/gallery`).then((res) => setImages(res.data)).catch(console.error);
  }, []);

  return (
    <section data-testid="gallery-section" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#D97706] font-semibold text-sm uppercase tracking-wider">Galeri</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#44403C] mt-2">Potret Perjalanan Langganan Tour</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              data-testid={`gallery-item-${i}`}
              onClick={() => setLightbox(img)}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square"
            >
              <img src={img.url} alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                <p className="text-white text-xs font-medium p-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)} data-testid="gallery-lightbox">
          <img src={lightbox.url} alt={lightbox.caption} className="max-w-full max-h-[85vh] object-contain rounded-lg" />
        </div>
      )}
    </section>
  );
}
