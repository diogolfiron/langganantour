import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const LOGO_URL =
  "https://customer-assets-cm19k8pv.emergentagent.net/job_rental-tour-bandung/artifacts/lg3pghzz_Navy%20And%20Grey%20Classic%20Circle%20Business%20Consulting%20Logo%20%281%29.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Paket Wisata", to: "/tour" },
  { label: "Galeri", to: "/galeri" },
  { label: "Tentang Kami", to: "/tentang" },
  { label: "Hubungi Kami", to: "/kontak" },
];

const WA_LINK =
  "https://api.whatsapp.com/send?phone=6285235622400&text=Halo%20Langganan%20Tour,%20saya%20ingin%20booking.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Link
            to="/"
            className="flex items-center gap-2.5"
            data-testid="nav-logo"
          >
            <img src={LOGO_URL} alt="Langganan Tour" className="h-12 w-auto" />
            <div className="leading-tight hidden sm:block">
              <span className="font-heading font-bold text-[#D97706] text-base block">
                LANGGANAN
              </span>
              <span className="font-heading font-medium text-[#44403C] text-[10px] tracking-[0.15em] block -mt-0.5">
                TOUR & TRAVEL
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-testid={`nav-link-${link.to === "/" ? "home" : link.to.replace("/", "")}`}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  location.pathname === link.to
                    ? "text-[#D97706] bg-[#D97706]/5"
                    : "text-[#44403C] hover:text-[#D97706]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="booking-cta-nav"
              className="hidden sm:inline-flex items-center gap-2 bg-[#D97706] text-white hover:bg-[#B45309] px-5 py-2 rounded-full font-semibold text-sm transition-all"
            >
              Hubungi Kami
            </a>
            <button
              data-testid="mobile-menu-toggle"
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X size={24} className="text-[#44403C]" />
              ) : (
                <List size={24} className="text-[#44403C]" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    location.pathname === link.to
                      ? "text-[#D97706] bg-[#D97706]/5"
                      : "text-[#44403C] hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
