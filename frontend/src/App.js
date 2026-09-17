import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BottomBar from "@/components/BottomBar";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";
import TentangPage from "@/pages/TentangPage";
import TourPage from "@/pages/TourPage";
import GaleriPage from "@/pages/GaleriPage";
import TourDetailPage from "@/pages/TourDetailPage";
import KontakPage from "@/pages/KontakPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App font-body">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<TentangPage />} />
          <Route path="/tour" element={<TourPage />} />
          <Route path="/tour/:id" element={<TourDetailPage />} />
          <Route path="/galeri" element={<GaleriPage />} />
          <Route path="/kontak" element={<KontakPage />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
        <BottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
