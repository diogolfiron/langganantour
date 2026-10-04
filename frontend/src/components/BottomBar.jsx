import { Phone, WhatsappLogo } from "@phosphor-icons/react";

const WA_LINK =
  "https://api.whatsapp.com/send?phone=6285235622400&text=Halo%20Langganan%20Tour,%20saya%20butuh%20informasi.";

export default function BottomBar() {
  return (
    <div
      data-testid="bottom-bar"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-4 py-2 flex gap-3 sm:hidden"
    >
      <a
        href="tel:+6285235622400"
        data-testid="bottom-phone"
        className="flex-1 flex items-center justify-center gap-2 bg-[#D97706] text-white py-3 rounded-lg font-semibold text-sm"
      >
        <Phone size={18} weight="bold" />
        Phone
      </a>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="bottom-whatsapp"
        className="flex-1 flex items-center justify-center gap-2 bg-[#D97706] text-white py-3 rounded-lg font-semibold text-sm"
      >
        <WhatsappLogo size={18} weight="bold" />
        Whatsapp
      </a>
    </div>
  );
}
