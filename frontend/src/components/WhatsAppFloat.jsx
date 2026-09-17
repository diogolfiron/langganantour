import { WhatsappLogo } from "@phosphor-icons/react";

const WA_LINK = "https://api.whatsapp.com/send?phone=6282228247676&text=Halo%20Langganan%20Tour,%20saya%20butuh%20informasi.";

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float"
      className="hidden sm:flex fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 items-center justify-center"
      aria-label="Chat WhatsApp"
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  );
}
