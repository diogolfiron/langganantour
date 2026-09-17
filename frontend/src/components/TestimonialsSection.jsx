import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, CaretLeft, CaretRight } from "@phosphor-icons/react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios.get(`${API}/testimonials`).then((res) => setTestimonials(res.data)).catch(console.error);
  }, []);

  const next = () => { if (testimonials.length) setCurrent((p) => (p + 1) % testimonials.length); };
  const prev = () => { if (testimonials.length) setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length); };

  useEffect(() => {
    if (!testimonials.length) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  if (!testimonials.length) return null;

  return (
    <section data-testid="testimonials-section" className="py-16 md:py-24 bg-[#FEF3C7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#44403C]">Apa Kata Mereka?</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-sm"
            data-testid="testimonial-card"
          >
            <div className="flex justify-center gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} weight={i < testimonials[current].rating ? "fill" : "regular"}
                  className={i < testimonials[current].rating ? "text-[#D97706]" : "text-gray-300"} />
              ))}
            </div>
            <p className="text-[#44403C] text-lg leading-relaxed italic">"{testimonials[current].text}"</p>
            <div className="mt-6">
              <p className="font-heading font-semibold text-[#44403C]">{testimonials[current].name}</p>
              <p className="text-[#78716C] text-sm">{testimonials[current].role}</p>
            </div>
          </motion.div>

          <div className="flex justify-center gap-3 mt-8">
            <button onClick={prev} data-testid="testimonial-prev"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#44403C] hover:border-[#D97706] hover:text-[#D97706] transition-colors">
              <CaretLeft size={18} weight="bold" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} data-testid={`testimonial-dot-${i}`}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-[#D97706] w-6" : "bg-gray-300"}`} />
              ))}
            </div>
            <button onClick={next} data-testid="testimonial-next"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#44403C] hover:border-[#D97706] hover:text-[#D97706] transition-colors">
              <CaretRight size={18} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
