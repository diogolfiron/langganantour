import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Envelope, MapPin, WhatsappLogo, PaperPlaneTilt } from "@phosphor-icons/react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const WA_LINK = "https://api.whatsapp.com/send?phone=6282228247676&text=Halo%20Langganan%20Tour,%20saya%20butuh%20informasi.";

export default function KontakPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try { await axios.post(`${API}/contact`, form); setSent(true); setForm({ name: "", email: "", phone: "", message: "" }); }
    catch (err) { console.error(err); }
    finally { setSending(false); }
  };

  return (
    <div className="pt-[72px]">
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#44403C]">Hubungi Kami</h1>
            <p className="text-[#78716C] mt-3">Siap untuk petualangan berikutnya? Rencanakan perjalanan impian Anda.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              {sent ? (
                <div data-testid="contact-success" className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <PaperPlaneTilt size={32} weight="duotone" className="text-green-600 mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-green-800">Pesan Terkirim!</h3>
                  <p className="text-green-600 mt-2">Kami akan segera menghubungi Anda.</p>
                  <button onClick={() => setSent(false)} className="mt-4 text-sm text-[#D97706] font-medium hover:underline">Kirim lagi</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#44403C] mb-1.5">Nama</label>
                    <input type="text" required data-testid="contact-name" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none text-sm" placeholder="Nama Anda" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#44403C] mb-1.5">Email</label>
                      <input type="email" required data-testid="contact-email" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none text-sm" placeholder="email@contoh.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#44403C] mb-1.5">Telepon</label>
                      <input type="tel" data-testid="contact-phone" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none text-sm" placeholder="08xx-xxxx-xxxx" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#44403C] mb-1.5">Pesan</label>
                    <textarea required rows={5} data-testid="contact-message" value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 outline-none text-sm resize-none" placeholder="Tulis pesan..." />
                  </div>
                  <button type="submit" disabled={sending} data-testid="contact-submit"
                    className="w-full bg-[#D97706] text-white hover:bg-[#B45309] px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-60">
                    {sending ? "Mengirim..." : "Kirimkan"}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Alamat", text: "Banyuwangi, Jawa Timur, Indonesia" },
                { icon: WhatsappLogo, title: "WhatsApp", text: "+62 822-2824-7676" },
                { icon: Envelope, title: "Email", text: "info@langganantour.com" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                    <div className="w-11 h-11 shrink-0 rounded-lg bg-[#FEF3C7] flex items-center justify-center">
                      <Icon size={22} weight="duotone" className="text-[#D97706]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#44403C] text-sm">{item.title}</p>
                      <p className="text-[#78716C] text-sm mt-0.5">{item.text}</p>
                    </div>
                  </div>
                );
              })}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" data-testid="kontak-whatsapp-btn"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#1EBE5A] px-6 py-3.5 rounded-lg font-semibold transition-all">
                <WhatsappLogo size={22} weight="fill" /> Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
