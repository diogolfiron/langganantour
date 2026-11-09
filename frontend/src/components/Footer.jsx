import { Link } from "react-router-dom";
import { Phone, Envelope, MapPin, WhatsappLogo, InstagramLogo } from "@phosphor-icons/react";

const LOGO_URL = "https://customer-assets-cm19k8pv.emergentagent.net/job_rental-tour-bandung/artifacts/lg3pghzz_Navy%20And%20Grey%20Classic%20Circle%20Business%20Consulting%20Logo%20%281%29.png";

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-[#292524] text-white pb-20 sm:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src={LOGO_URL} alt="Langganan Tour" className="h-16 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Langganan Tour & Travel berkomitmen menghadirkan pengalaman wisata autentik di Banyuwangi. Dengan pemandu lokal berpengalaman, kami menawarkan berbagai paket perjalanan yang dapat disesuaikan.
            </p>
            <div className="flex gap-2 mt-4">
              {[InstagramLogo, WhatsappLogo].map((Icon, i) => (
                <a key={i} href="#" data-testid={`social-link-${i}`}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#D97706] transition-colors">
                  <Icon size={18} weight="bold" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "Paket Wisata", to: "/tour" },
                { label: "Galeri", to: "/galeri" },
                { label: "Tentang Kami", to: "/tentang" },
                { label: "Hubungi Kami", to: "/kontak" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 text-sm hover:text-[#D97706] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} weight="bold" className="text-[#D97706] mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">Banyuwangi, Jawa Timur, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <WhatsappLogo size={16} weight="bold" className="text-[#D97706] shrink-0" />
                <span className="text-gray-400 text-sm">+62 822-2824-7676</span>
              </li>
              <li className="flex items-center gap-3">
                <Envelope size={16} weight="bold" className="text-[#D97706] shrink-0" />
                <span className="text-gray-400 text-sm">info@langganantour.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">&copy; 2024 Langganan Tour & Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
