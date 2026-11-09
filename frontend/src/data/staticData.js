// Static data - no backend needed
// Gambar disimpan di /public/images/ — ganti file di folder tersebut untuk update foto

export const TOURS = [
  {
    id: "3h2m-opsi-a",
    name: "Banyuwangi 3H2M - Opsi A",
    image: "/images/tours/kawah-ijen.jpg",
    duration: "3 Hari 2 Malam",
    price: "Rp 1.850.000",
    description: "Kawah Ijen, Baluran, Pantai Pulau Merah & Sukamade",
    destinations: ["Kawah Ijen", "Taman Nasional Baluran", "Pantai Pulau Merah", "Sukamade"],
    category: "3H2M",
    detailed_itinerary: [
      { day: "Hari 1", destinations: ["Kawah Ijen (Blue Fire & Sunrise)", "Pantai Pulau Merah"] },
      { day: "Hari 2", destinations: ["Taman Nasional Baluran", "Savana Bekol", "Pantai Bama"] },
      { day: "Hari 3", destinations: ["Sukamade Turtle Beach", "Penangkaran Penyu"] }
    ],
    facilities_included: ["Transportasi AC selama tour", "Driver & guide berpengalaman", "Tiket masuk semua destinasi", "Hotel 2 malam (sharing room)", "Makan 3x sehari", "Air mineral selama perjalanan", "Dokumentasi foto", "P3K standar"],
    facilities_excluded: ["Tiket pesawat/kereta", "Pengeluaran pribadi", "Tips driver & guide (sukarela)", "Asuransi perjalanan"],
    terms: ["Minimal peserta 2 orang", "DP 50% untuk konfirmasi booking", "Pelunasan H-3 sebelum keberangkatan", "Pembatalan H-7 refund 50%, H-3 no refund", "Jadwal bisa berubah menyesuaikan kondisi cuaca", "Peserta wajib dalam kondisi sehat", "Anak di bawah 5 tahun gratis (tanpa extra bed)"],
    min_person: 2,
    meeting_point: "Hotel/Stasiun/Bandara Banyuwangi"
  },
  {
    id: "3h2m-opsi-b",
    name: "Banyuwangi 3H2M - Opsi B",
    image: "/images/tours/blue-fire.jpg",
    duration: "3 Hari 2 Malam",
    price: "Rp 1.950.000",
    description: "Kawah Ijen, Pulau Menjangan, Pantai Boom & Jagir Waterfall",
    destinations: ["Kawah Ijen", "Pulau Menjangan", "Pantai Boom", "Air Terjun Jagir"],
    category: "3H2M",
    detailed_itinerary: [
      { day: "Hari 1", destinations: ["Kawah Ijen (Blue Fire & Sunrise)"] },
      { day: "Hari 2", destinations: ["Pulau Menjangan (Snorkeling)"] },
      { day: "Hari 3", destinations: ["Pantai Boom", "Air Terjun Jagir"] }
    ],
    facilities_included: ["Transportasi AC selama tour", "Driver & guide berpengalaman", "Tiket masuk semua destinasi", "Hotel 2 malam", "Makan 3x sehari", "Peralatan snorkeling", "Air mineral", "Dokumentasi foto"],
    facilities_excluded: ["Tiket pesawat/kereta", "Pengeluaran pribadi", "Tips driver & guide", "Asuransi perjalanan", "Diving equipment (sewa terpisah)"],
    terms: ["Minimal peserta 2 orang", "DP 50% untuk konfirmasi booking", "Pelunasan H-3 sebelum keberangkatan", "Pembatalan H-7 refund 50%, H-3 no refund", "Snorkeling tergantung kondisi cuaca & arus laut", "Peserta wajib bisa berenang untuk aktivitas snorkeling"],
    min_person: 2,
    meeting_point: "Hotel/Stasiun/Bandara Banyuwangi"
  },
  {
    id: "3h2m-opsi-c",
    name: "Banyuwangi 3H2M - Opsi C",
    image: "/images/tours/pantai-banyuwangi.jpg",
    duration: "3 Hari 2 Malam",
    price: "Rp 1.750.000",
    description: "Kawah Ijen, De Djawatan, Pantai Pulau Merah & Teluk Hijau",
    destinations: ["Kawah Ijen", "De Djawatan", "Pantai Pulau Merah", "Teluk Hijau"],
    category: "3H2M",
    detailed_itinerary: [
      { day: "Hari 1", destinations: ["Kawah Ijen (Blue Fire & Sunrise)"] },
      { day: "Hari 2", destinations: ["De Djawatan", "Pantai Pulau Merah"] },
      { day: "Hari 3", destinations: ["Teluk Hijau"] }
    ],
    facilities_included: ["Transportasi AC selama tour", "Driver & guide lokal", "Tiket masuk destinasi", "Hotel 2 malam", "Makan 3x sehari", "Air mineral", "Dokumentasi foto"],
    facilities_excluded: ["Tiket pesawat/kereta", "Pengeluaran pribadi", "Tips (sukarela)", "Asuransi perjalanan"],
    terms: ["Minimal peserta 2 orang", "DP 50% untuk booking", "Pelunasan H-3", "Pembatalan H-7 refund 50%", "Trekking Teluk Hijau membutuhkan stamina cukup"],
    min_person: 2,
    meeting_point: "Hotel/Stasiun/Bandara Banyuwangi"
  },
  {
    id: "2h1m",
    name: "Banyuwangi 2H1M",
    image: "/images/tours/kawah-vulkanik.jpg",
    duration: "2 Hari 1 Malam",
    price: "Rp 1.250.000",
    description: "Kawah Ijen & Pantai Pulau Merah dalam 2 hari",
    destinations: ["Kawah Ijen", "Pantai Pulau Merah", "De Djawatan"],
    category: "2H1M",
    detailed_itinerary: [
      { day: "Hari 1", destinations: ["Kawah Ijen (Blue Fire & Sunrise)", "De Djawatan"] },
      { day: "Hari 2", destinations: ["Pantai Pulau Merah", "City Tour Banyuwangi"] }
    ],
    facilities_included: ["Transportasi AC", "Driver & guide", "Tiket masuk destinasi", "Hotel 1 malam", "Makan 3x (Hari 1) + 2x (Hari 2)", "Air mineral"],
    facilities_excluded: ["Tiket pesawat/kereta", "Pengeluaran pribadi", "Tips", "Asuransi"],
    terms: ["Minimal peserta 2 orang", "DP 50%", "Pelunasan H-3", "Pembatalan H-7 refund 50%"],
    min_person: 2,
    meeting_point: "Hotel/Stasiun/Bandara Banyuwangi"
  },
  {
    id: "one-day-trip",
    name: "One Day Trip Banyuwangi",
    image: "/images/tours/pantai-pulau-merah.jpg",
    duration: "1 Hari",
    price: "Rp 650.000",
    description: "Jelajahi destinasi terbaik Banyuwangi dalam 1 hari",
    destinations: ["Kawah Ijen", "De Djawatan"],
    category: "One Day",
    detailed_itinerary: [
      { day: "Hari 1", destinations: ["Kawah Ijen (Blue Fire & Sunrise)", "De Djawatan"] }
    ],
    facilities_included: ["Transportasi AC PP", "Driver & guide", "Tiket masuk", "Sarapan & makan siang", "Air mineral"],
    facilities_excluded: ["Tiket pesawat/kereta", "Pengeluaran pribadi", "Tips"],
    terms: ["Minimal peserta 2 orang", "Full payment saat booking", "Pembatalan H-3 refund 50%"],
    min_person: 2,
    meeting_point: "Hotel/Stasiun/Bandara Banyuwangi"
  },
  {
    id: "custom-trip",
    name: "Custom Trip Banyuwangi",
    image: "/images/tours/pantai-eksotis.jpg",
    duration: "Fleksibel",
    price: "Hubungi Kami",
    description: "Rancang itinerary custom 100% fleksibel sesuai keinginan",
    destinations: ["Sesuai Pilihan"],
    category: "Custom",
    detailed_itinerary: [
      { day: "Fleksibel", destinations: ["Sesuai keinginan Anda"] }
    ],
    facilities_included: ["Transportasi AC", "Driver berpengalaman", "Itinerary custom", "Konsultasi rute gratis"],
    facilities_excluded: ["Tiket masuk destinasi", "Makan", "Hotel", "Pengeluaran pribadi"],
    terms: ["Harga ditentukan setelah diskusi itinerary", "Hubungi kami untuk konsultasi gratis", "Booking minimal H-7 sebelum keberangkatan"],
    min_person: 1,
    meeting_point: "Sesuai kesepakatan"
  },
  {
    id: "open-trip",
    name: "Open Trip Banyuwangi",
    image: "/images/tours/gunung-banyuwangi.jpg",
    duration: "3 Hari 2 Malam",
    price: "Rp 950.000",
    description: "Trip bersama traveler lain, hemat dan seru!",
    destinations: ["Kawah Ijen", "Baluran", "Pantai Pulau Merah"],
    category: "Open Trip",
    detailed_itinerary: [
      { day: "Hari 1", destinations: ["Kawah Ijen (Blue Fire & Sunrise)"] },
      { day: "Hari 2", destinations: ["Taman Nasional Baluran", "Savana Bekol", "Pantai Bama"] },
      { day: "Hari 3", destinations: ["Pantai Pulau Merah"] }
    ],
    facilities_included: ["Transportasi AC bersama", "Guide lokal", "Tiket masuk destinasi", "Hostel 2 malam (sharing)", "Makan sesuai program", "Air mineral"],
    facilities_excluded: ["Tiket pesawat/kereta", "Pengeluaran pribadi", "Tips guide", "Asuransi"],
    terms: ["Open trip dijadwalkan setiap akhir pekan", "Minimal kuota 4 orang untuk berangkat", "Full payment saat booking", "Jika kuota tidak terpenuhi, bisa reschedule atau refund 100%"],
    min_person: 1,
    meeting_point: "Stasiun Banyuwangi"
  },
];

export const TESTIMONIALS = [
  { id: "t1", name: "Andi Ramlan", rating: 5, text: "Saya sangat puas dengan pengalaman wisata saya. Saya pasti akan menggunakan Langganan Tour lagi di masa mendatang!", role: "Vlogger" },
  { id: "t2", name: "Tisa Arindi", rating: 5, text: "Perjalanan saya bersama Langganan Tour benar-benar menyenangkan! Semua rencana terorganisir dengan baik, dan pelayanannya luar biasa.", role: "Solo Traveler" },
  { id: "t3", name: "Budi Santoso", rating: 5, text: "Trip ke Kawah Ijen bersama Langganan Tour sangat berkesan. Guide sangat ramah dan berpengalaman. Highly recommended!", role: "Fotografer" },
  { id: "t4", name: "Dewi Anggraini", rating: 5, text: "Paket 3H2M sangat worth it! Semua destinasi bagus, akomodasi nyaman. Terima kasih Langganan Tour!", role: "Karyawan" },
  { id: "t5", name: "Reza Pratama", rating: 5, text: "Family trip ke Banyuwangi sangat seru. Anak-anak senang di Baluran dan Pantai Pulau Merah!", role: "Dokter" },
];

export const GALLERY = [
  { id: "g1", url: "/images/gallery/kawah-ijen.jpg", caption: "Kawah Ijen" },
  { id: "g2", url: "/images/gallery/blue-fire.jpg", caption: "Blue Fire Ijen" },
  { id: "g3", url: "/images/gallery/pantai-banyuwangi.jpg", caption: "Pantai Banyuwangi" },
  { id: "g4", url: "/images/gallery/pantai-eksotis.jpg", caption: "Pantai Eksotis" },
  { id: "g5", url: "/images/gallery/gunung.jpg", caption: "Gunung Banyuwangi" },
  { id: "g6", url: "/images/gallery/kawah-vulkanik.jpg", caption: "Kawah Vulkanik" },
  { id: "g7", url: "/images/gallery/pulau-merah.jpg", caption: "Pantai Pulau Merah" },
  { id: "g8", url: "/images/gallery/savana-baluran.jpg", caption: "Savana Baluran" },
  { id: "g9", url: "/images/gallery/trekking.jpg", caption: "Trekking Ijen" },
  { id: "g10", url: "/images/gallery/pemandangan.jpg", caption: "Pemandangan Banyuwangi" },
];
