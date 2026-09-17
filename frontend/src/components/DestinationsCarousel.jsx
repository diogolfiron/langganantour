import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function DestinationsCarousel() {
  const [images, setImages] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    axios.get(`${API}/gallery`).then((res) => setImages(res.data)).catch(console.error);
  }, []);

  const scroll = useCallback((dir) => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  }, []);

  if (images.length === 0) return null;

  return (
    <section data-testid="destinations-section" className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 relative overflow-hidden">
      {/* Decorative leaf/flower bg pattern - using gradient */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzMzMyIvPjwvc3ZnPg==')]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A]">Destinations</h2>
          <p className="text-[#64748B] mt-2">Several of the best tourist destinations in Banyuwangi</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            data-testid="dest-prev"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#0891b2] hover:bg-[#0891b2] hover:text-white transition-colors -ml-2"
          >
            <CaretLeft size={22} weight="bold" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto hide-scrollbar px-2 py-4 scroll-smooth"
          >
            {images.map((img, i) => (
              <div
                key={img.id}
                data-testid={`dest-card-${i}`}
                className="flex-shrink-0 w-64 group cursor-pointer"
              >
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="mt-3 text-center font-heading font-semibold text-sm text-[#0F172A] uppercase tracking-wide">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            data-testid="dest-next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#0891b2] hover:bg-[#0891b2] hover:text-white transition-colors -mr-2"
          >
            <CaretRight size={22} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
}
