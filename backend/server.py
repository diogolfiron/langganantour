from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

class TourPackage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    image: str
    duration: str
    price: str
    description: str
    destinations: List[str] = []
    category: str = ""
    itinerary: List[str] = []
    detailed_itinerary: List[dict] = []
    facilities_included: List[str] = []
    facilities_excluded: List[str] = []
    terms: List[str] = []
    min_person: int = 2
    meeting_point: str = ""

class Testimonial(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    rating: int
    text: str
    role: str = ""

class GalleryImage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    url: str
    caption: str
    category: str

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str = ""
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class ContactMessageCreate(BaseModel):
    name: str
    email: str
    phone: str = ""
    message: str

SEED_TOURS = [
    {
        "name": "Banyuwangi 3H2M - Opsi A",
        "image": "https://images.unsplash.com/photo-1559273278-31d91743cbb2?w=600&q=80",
        "duration": "3 Hari 2 Malam",
        "price": "Rp 1.850.000",
        "description": "Kawah Ijen, Baluran, Pantai Pulau Merah & Sukamade",
        "destinations": ["Kawah Ijen", "Taman Nasional Baluran", "Pantai Pulau Merah", "Sukamade"],
        "category": "3H2M",
        "itinerary": ["Hari 1: Kawah Ijen Blue Fire + Pantai Pulau Merah", "Hari 2: Taman Nasional Baluran + Savana Bekol", "Hari 3: Sukamade Turtle Beach"],
        "detailed_itinerary": [
            {"day": "Hari 1", "title": "Kawah Ijen & Pantai Pulau Merah", "activities": ["00:00 - Penjemputan di hotel/stasiun Banyuwangi", "01:00 - Perjalanan menuju Paltuding (basecamp Ijen)", "02:00 - Trekking menuju Kawah Ijen", "04:00 - Menyaksikan Blue Fire & Sunrise di puncak", "07:00 - Turun & sarapan", "10:00 - Perjalanan ke Pantai Pulau Merah", "11:30 - Eksplorasi Pantai Pulau Merah & makan siang", "15:00 - Check-in hotel & istirahat", "19:00 - Makan malam"]},
            {"day": "Hari 2", "title": "Taman Nasional Baluran", "activities": ["07:00 - Sarapan di hotel", "08:00 - Perjalanan ke Taman Nasional Baluran", "09:30 - Eksplorasi Savana Bekol", "11:00 - Menara pandang & spot foto", "12:30 - Makan siang", "14:00 - Pantai Bama, snorkeling & mangrove", "16:30 - Kembali ke hotel", "19:00 - Makan malam & free time"]},
            {"day": "Hari 3", "title": "Sukamade Turtle Beach", "activities": ["05:00 - Sarapan & check-out", "06:00 - Perjalanan ke Sukamade", "09:00 - Tiba di Sukamade, eksplorasi pantai", "11:00 - Melihat penangkaran penyu", "12:30 - Makan siang", "14:00 - Perjalanan kembali ke Banyuwangi", "17:00 - Tiba di Banyuwangi, drop off"]}
        ],
        "facilities_included": ["Transportasi AC selama tour", "Driver & guide berpengalaman", "Tiket masuk semua destinasi", "Hotel 2 malam (sharing room)", "Makan 3x sehari", "Air mineral selama perjalanan", "Dokumentasi foto", "P3K standar"],
        "facilities_excluded": ["Tiket pesawat/kereta", "Pengeluaran pribadi", "Tips driver & guide (sukarela)", "Asuransi perjalanan"],
        "terms": ["Minimal peserta 2 orang", "DP 50% untuk konfirmasi booking", "Pelunasan H-3 sebelum keberangkatan", "Pembatalan H-7 refund 50%, H-3 no refund", "Jadwal bisa berubah menyesuaikan kondisi cuaca", "Peserta wajib dalam kondisi sehat", "Anak di bawah 5 tahun gratis (tanpa extra bed)"],
        "min_person": 2,
        "meeting_point": "Hotel/Stasiun/Bandara Banyuwangi"
    },
    {
        "name": "Banyuwangi 3H2M - Opsi B",
        "image": "https://images.pexels.com/photos/2412716/pexels-photo-2412716.jpeg?auto=compress&cs=tinysrgb&w=600",
        "duration": "3 Hari 2 Malam",
        "price": "Rp 1.950.000",
        "description": "Kawah Ijen, Pulau Menjangan, Pantai Boom & Jagir Waterfall",
        "destinations": ["Kawah Ijen", "Pulau Menjangan", "Pantai Boom", "Air Terjun Jagir"],
        "category": "3H2M",
        "itinerary": ["Hari 1: Kawah Ijen Blue Fire", "Hari 2: Snorkeling Pulau Menjangan", "Hari 3: Pantai Boom + Jagir Waterfall"],
        "detailed_itinerary": [
            {"day": "Hari 1", "title": "Kawah Ijen Blue Fire", "activities": ["00:00 - Penjemputan di hotel/stasiun", "01:00 - Perjalanan ke Paltuding", "02:00 - Trekking ke Kawah Ijen", "04:00 - Blue Fire & Sunrise", "07:00 - Turun & sarapan", "10:00 - Check-in hotel & istirahat", "14:00 - Eksplorasi sekitar kota", "19:00 - Makan malam"]},
            {"day": "Hari 2", "title": "Snorkeling Pulau Menjangan", "activities": ["06:00 - Sarapan & checkout", "07:00 - Perjalanan ke Pelabuhan", "09:00 - Menyeberang ke Pulau Menjangan", "10:00 - Snorkeling & diving spot", "12:00 - Makan siang di pulau", "14:00 - Eksplorasi pulau & foto", "16:00 - Kembali ke daratan", "19:00 - Makan malam & hotel"]},
            {"day": "Hari 3", "title": "Pantai Boom & Jagir Waterfall", "activities": ["07:00 - Sarapan & checkout", "08:30 - Eksplorasi Pantai Boom", "10:00 - Perjalanan ke Air Terjun Jagir", "11:00 - Trekking & menikmati air terjun", "13:00 - Makan siang", "15:00 - Kembali ke Banyuwangi", "17:00 - Drop off"]}
        ],
        "facilities_included": ["Transportasi AC selama tour", "Driver & guide berpengalaman", "Tiket masuk semua destinasi", "Hotel 2 malam", "Makan 3x sehari", "Peralatan snorkeling", "Air mineral", "Dokumentasi foto"],
        "facilities_excluded": ["Tiket pesawat/kereta", "Pengeluaran pribadi", "Tips driver & guide", "Asuransi perjalanan", "Diving equipment (sewa terpisah)"],
        "terms": ["Minimal peserta 2 orang", "DP 50% untuk konfirmasi booking", "Pelunasan H-3 sebelum keberangkatan", "Pembatalan H-7 refund 50%, H-3 no refund", "Snorkeling tergantung kondisi cuaca & arus laut", "Peserta wajib bisa berenang untuk aktivitas snorkeling"],
        "min_person": 2,
        "meeting_point": "Hotel/Stasiun/Bandara Banyuwangi"
    },
    {
        "name": "Banyuwangi 3H2M - Opsi C",
        "image": "https://images.pexels.com/photos/20261011/pexels-photo-20261011.jpeg?auto=compress&cs=tinysrgb&w=600",
        "duration": "3 Hari 2 Malam",
        "price": "Rp 1.750.000",
        "description": "Kawah Ijen, De Djawatan, Pantai Pulau Merah & Teluk Hijau",
        "destinations": ["Kawah Ijen", "De Djawatan", "Pantai Pulau Merah", "Teluk Hijau"],
        "category": "3H2M",
        "itinerary": ["Hari 1: Kawah Ijen Blue Fire", "Hari 2: De Djawatan + Pantai Pulau Merah", "Hari 3: Teluk Hijau"],
        "detailed_itinerary": [
            {"day": "Hari 1", "title": "Kawah Ijen Blue Fire", "activities": ["00:00 - Penjemputan", "01:00 - Ke Paltuding", "02:00 - Trekking Kawah Ijen", "04:00 - Blue Fire & Sunrise", "07:00 - Turun & sarapan", "10:00 - Check-in hotel", "19:00 - Makan malam"]},
            {"day": "Hari 2", "title": "De Djawatan & Pantai Pulau Merah", "activities": ["07:00 - Sarapan", "08:00 - Ke De Djawatan (hutan purbakala)", "10:00 - Eksplorasi & foto di De Djawatan", "12:00 - Makan siang", "13:30 - Ke Pantai Pulau Merah", "14:00 - Berenang & surfing", "17:00 - Sunset di Pulau Merah", "19:00 - Makan malam"]},
            {"day": "Hari 3", "title": "Teluk Hijau", "activities": ["06:00 - Sarapan & checkout", "07:00 - Perjalanan ke Teluk Hijau", "09:00 - Trekking ke Teluk Hijau", "10:00 - Berenang di air hijau jernih", "12:00 - Makan siang", "14:00 - Kembali ke Banyuwangi", "17:00 - Drop off"]}
        ],
        "facilities_included": ["Transportasi AC selama tour", "Driver & guide lokal", "Tiket masuk destinasi", "Hotel 2 malam", "Makan 3x sehari", "Air mineral", "Dokumentasi foto"],
        "facilities_excluded": ["Tiket pesawat/kereta", "Pengeluaran pribadi", "Tips (sukarela)", "Asuransi perjalanan"],
        "terms": ["Minimal peserta 2 orang", "DP 50% untuk booking", "Pelunasan H-3", "Pembatalan H-7 refund 50%", "Trekking Teluk Hijau membutuhkan stamina cukup"],
        "min_person": 2,
        "meeting_point": "Hotel/Stasiun/Bandara Banyuwangi"
    },
    {
        "name": "Banyuwangi 2H1M",
        "image": "https://images.unsplash.com/photo-1500100711100-fa7d55b8f658?w=600&q=80",
        "duration": "2 Hari 1 Malam",
        "price": "Rp 1.250.000",
        "description": "Kawah Ijen & Pantai Pulau Merah dalam 2 hari",
        "destinations": ["Kawah Ijen", "Pantai Pulau Merah", "De Djawatan"],
        "category": "2H1M",
        "itinerary": ["Hari 1: Kawah Ijen Blue Fire + De Djawatan", "Hari 2: Pantai Pulau Merah + City Tour"],
        "detailed_itinerary": [
            {"day": "Hari 1", "title": "Kawah Ijen & De Djawatan", "activities": ["00:00 - Penjemputan", "01:00 - Ke Paltuding", "02:00 - Trekking Kawah Ijen", "04:00 - Blue Fire & Sunrise", "07:00 - Turun, sarapan", "10:00 - Check-in hotel", "14:00 - Eksplorasi De Djawatan", "16:00 - Kembali ke hotel", "19:00 - Makan malam"]},
            {"day": "Hari 2", "title": "Pantai Pulau Merah & City Tour", "activities": ["07:00 - Sarapan & checkout", "08:30 - Ke Pantai Pulau Merah", "10:00 - Berenang & sunset point", "12:00 - Makan siang", "14:00 - City tour Banyuwangi", "16:00 - Oleh-oleh khas Banyuwangi", "17:00 - Drop off"]}
        ],
        "facilities_included": ["Transportasi AC", "Driver & guide", "Tiket masuk destinasi", "Hotel 1 malam", "Makan 3x (Hari 1) + 2x (Hari 2)", "Air mineral"],
        "facilities_excluded": ["Tiket pesawat/kereta", "Pengeluaran pribadi", "Tips", "Asuransi"],
        "terms": ["Minimal peserta 2 orang", "DP 50%", "Pelunasan H-3", "Pembatalan H-7 refund 50%"],
        "min_person": 2,
        "meeting_point": "Hotel/Stasiun/Bandara Banyuwangi"
    },
    {
        "name": "One Day Trip Banyuwangi",
        "image": "https://images.pexels.com/photos/38181436/pexels-photo-38181436.jpeg?auto=compress&cs=tinysrgb&w=600",
        "duration": "1 Hari",
        "price": "Rp 650.000",
        "description": "Jelajahi destinasi terbaik Banyuwangi dalam 1 hari",
        "destinations": ["Kawah Ijen", "De Djawatan"],
        "category": "One Day",
        "itinerary": ["Kawah Ijen Blue Fire (dini hari)", "De Djawatan (siang)", "Pulang sore"],
        "detailed_itinerary": [
            {"day": "Hari 1", "title": "Kawah Ijen & De Djawatan", "activities": ["00:00 - Penjemputan hotel", "01:00 - Perjalanan ke Paltuding", "02:00 - Trekking Kawah Ijen", "04:00 - Blue Fire & Sunrise", "07:00 - Turun & sarapan", "10:00 - Ke De Djawatan", "11:00 - Eksplorasi hutan purbakala", "13:00 - Makan siang", "15:00 - Drop off Banyuwangi"]}
        ],
        "facilities_included": ["Transportasi AC PP", "Driver & guide", "Tiket masuk", "Sarapan & makan siang", "Air mineral"],
        "facilities_excluded": ["Tiket pesawat/kereta", "Pengeluaran pribadi", "Tips"],
        "terms": ["Minimal peserta 2 orang", "Full payment saat booking", "Pembatalan H-3 refund 50%"],
        "min_person": 2,
        "meeting_point": "Hotel/Stasiun/Bandara Banyuwangi"
    },
    {
        "name": "Custom Trip Banyuwangi",
        "image": "https://images.unsplash.com/photo-1661258860962-ae5d6a44e150?w=600&q=80",
        "duration": "Fleksibel",
        "price": "Hubungi Kami",
        "description": "Rancang itinerary custom 100% fleksibel sesuai keinginan",
        "destinations": ["Sesuai Pilihan"],
        "category": "Custom",
        "itinerary": ["Itinerary disesuaikan dengan keinginan Anda"],
        "detailed_itinerary": [
            {"day": "Fleksibel", "title": "Sesuai Keinginan Anda", "activities": ["Pilih destinasi favorit Anda", "Tentukan durasi perjalanan", "Atur jadwal sesuai waktu Anda", "Kami siap merancang trip terbaik untuk Anda"]}
        ],
        "facilities_included": ["Transportasi AC", "Driver berpengalaman", "Itinerary custom", "Konsultasi rute gratis"],
        "facilities_excluded": ["Tiket masuk destinasi", "Makan", "Hotel", "Pengeluaran pribadi"],
        "terms": ["Harga ditentukan setelah diskusi itinerary", "Hubungi kami untuk konsultasi gratis", "Booking minimal H-7 sebelum keberangkatan"],
        "min_person": 1,
        "meeting_point": "Sesuai kesepakatan"
    },
    {
        "name": "Open Trip Banyuwangi",
        "image": "https://images.unsplash.com/photo-1608894978040-9fe199c1621d?w=600&q=80",
        "duration": "3 Hari 2 Malam",
        "price": "Rp 950.000",
        "description": "Trip bersama traveler lain, hemat dan seru!",
        "destinations": ["Kawah Ijen", "Baluran", "Pantai Pulau Merah"],
        "category": "Open Trip",
        "itinerary": ["Hari 1: Kawah Ijen", "Hari 2: Baluran National Park", "Hari 3: Pantai Pulau Merah"],
        "detailed_itinerary": [
            {"day": "Hari 1", "title": "Kawah Ijen", "activities": ["00:00 - Berkumpul di meeting point", "01:00 - Ke Paltuding", "02:00 - Trekking Kawah Ijen", "04:00 - Blue Fire & Sunrise", "07:00 - Turun & sarapan", "10:00 - Check-in hostel", "Free time sisa hari"]},
            {"day": "Hari 2", "title": "Baluran National Park", "activities": ["07:00 - Sarapan", "08:00 - Ke Taman Nasional Baluran", "09:30 - Savana Bekol & foto", "11:00 - Menara pandang", "12:30 - Makan siang", "14:00 - Pantai Bama", "16:30 - Kembali ke hostel", "19:00 - Makan malam bersama"]},
            {"day": "Hari 3", "title": "Pantai Pulau Merah", "activities": ["07:00 - Sarapan & checkout", "08:30 - Ke Pantai Pulau Merah", "10:00 - Berenang & foto", "12:00 - Makan siang", "14:00 - Kembali ke Banyuwangi", "16:00 - Drop off"]}
        ],
        "facilities_included": ["Transportasi AC bersama", "Guide lokal", "Tiket masuk destinasi", "Hostel 2 malam (sharing)", "Makan sesuai program", "Air mineral"],
        "facilities_excluded": ["Tiket pesawat/kereta", "Pengeluaran pribadi", "Tips guide", "Asuransi"],
        "terms": ["Open trip dijadwalkan setiap akhir pekan", "Minimal kuota 4 orang untuk berangkat", "Full payment saat booking", "Jika kuota tidak terpenuhi, bisa reschedule atau refund 100%"],
        "min_person": 1,
        "meeting_point": "Stasiun Banyuwangi"
    },
]

SEED_TESTIMONIALS = [
    {"name": "Andi Ramlan", "rating": 5, "text": "Saya sangat puas dengan pengalaman wisata saya. Saya pasti akan menggunakan Langganan Tour lagi di masa mendatang!", "role": "Vlogger"},
    {"name": "Tisa Arindi", "rating": 5, "text": "Perjalanan saya bersama Langganan Tour benar-benar menyenangkan! Semua rencana terorganisir dengan baik, dan pelayanannya luar biasa.", "role": "Solo Traveler"},
    {"name": "Budi Santoso", "rating": 5, "text": "Trip ke Kawah Ijen bersama Langganan Tour sangat berkesan. Guide sangat ramah dan berpengalaman. Highly recommended!", "role": "Fotografer"},
    {"name": "Dewi Anggraini", "rating": 5, "text": "Paket 3H2M sangat worth it! Semua destinasi bagus, akomodasi nyaman. Terima kasih Langganan Tour!", "role": "Karyawan"},
    {"name": "Reza Pratama", "rating": 5, "text": "Family trip ke Banyuwangi sangat seru. Anak-anak senang di Baluran dan Pantai Pulau Merah!", "role": "Dokter"},
]

SEED_GALLERY = [
    {"url": "https://images.unsplash.com/photo-1559273278-31d91743cbb2?w=500&q=80", "caption": "Kawah Ijen", "category": "destinasi"},
    {"url": "https://images.pexels.com/photos/2412716/pexels-photo-2412716.jpeg?auto=compress&cs=tinysrgb&w=500", "caption": "Blue Fire Ijen", "category": "destinasi"},
    {"url": "https://images.pexels.com/photos/20261011/pexels-photo-20261011.jpeg?auto=compress&cs=tinysrgb&w=500", "caption": "Pantai Banyuwangi", "category": "destinasi"},
    {"url": "https://images.unsplash.com/photo-1661258860962-ae5d6a44e150?w=500&q=80", "caption": "Pantai Eksotis", "category": "destinasi"},
    {"url": "https://images.unsplash.com/photo-1608894978040-9fe199c1621d?w=500&q=80", "caption": "Gunung Banyuwangi", "category": "destinasi"},
    {"url": "https://images.unsplash.com/photo-1500100711100-fa7d55b8f658?w=500&q=80", "caption": "Kawah Vulkanik", "category": "destinasi"},
    {"url": "https://images.pexels.com/photos/38181436/pexels-photo-38181436.jpeg?auto=compress&cs=tinysrgb&w=500", "caption": "Pantai Pulau Merah", "category": "destinasi"},
    {"url": "https://images.unsplash.com/photo-1640399562300-83bd313ef9a9?w=500&q=80", "caption": "Savana Baluran", "category": "destinasi"},
    {"url": "https://images.pexels.com/photos/35833639/pexels-photo-35833639.jpeg?auto=compress&cs=tinysrgb&w=500", "caption": "Trekking Ijen", "category": "wisata"},
    {"url": "https://images.unsplash.com/photo-1655178353433-2e774ba32ff4?w=500&q=80", "caption": "Pemandangan Banyuwangi", "category": "wisata"},
]


async def seed_data():
    tours_count = await db.tours.count_documents({})
    if tours_count == 0:
        for tour_data in SEED_TOURS:
            tour = TourPackage(**tour_data)
            await db.tours.insert_one(tour.model_dump())

    testimonials_count = await db.testimonials.count_documents({})
    if testimonials_count == 0:
        for testi_data in SEED_TESTIMONIALS:
            testi = Testimonial(**testi_data)
            await db.testimonials.insert_one(testi.model_dump())

    gallery_count = await db.gallery.count_documents({})
    if gallery_count == 0:
        for img_data in SEED_GALLERY:
            img = GalleryImage(**img_data)
            await db.gallery.insert_one(img.model_dump())


@app.on_event("startup")
async def startup():
    await seed_data()


@api_router.get("/")
async def root():
    return {"message": "Langganan Tour API"}

@api_router.get("/tours", response_model=List[TourPackage])
async def get_tours():
    return await db.tours.find({}, {"_id": 0}).to_list(100)

@api_router.get("/tours/{tour_id}", response_model=TourPackage)
async def get_tour_detail(tour_id: str):
    tour = await db.tours.find_one({"id": tour_id}, {"_id": 0})
    if not tour:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Tour not found")
    return tour

@api_router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials():
    return await db.testimonials.find({}, {"_id": 0}).to_list(100)

@api_router.get("/gallery", response_model=List[GalleryImage])
async def get_gallery():
    return await db.gallery.find({}, {"_id": 0}).to_list(100)

@api_router.post("/contact", response_model=ContactMessage)
async def create_contact(input_data: ContactMessageCreate):
    msg = ContactMessage(**input_data.model_dump())
    doc = msg.model_dump()
    await db.contact_messages.insert_one(doc)
    return msg

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
