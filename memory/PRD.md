# Nusantara Travel - PRD

## Problem Statement
Website company profile profesional untuk bisnis rental mobil dan layanan tour & travel "Nusantara Travel". Tampilan modern, clean, white & blue theme. Referensi UX: bandungcitytour.com.

## User Personas
- **Calon Pelanggan**: Individu/keluarga yang mencari rental mobil atau paket tour di Bandung
- **Wisatawan**: Turis domestik yang ingin menjelajahi destinasi Bandung
- **Korporat**: Perusahaan yang membutuhkan transportasi group/event

## Core Requirements
- Responsive single-page company profile
- Sticky navbar with smooth anchor navigation
- Hero section with dual CTAs
- Service showcase (Bento grid)
- Car rental listings with WhatsApp booking
- Tour package listings with details
- Gallery with lightbox
- Testimonials slider
- CTA section & floating WhatsApp
- Footer with complete contact info

## What's Been Implemented (Dec 2025)
- **Backend**: FastAPI with MongoDB, 5 API endpoints (cars, tours, testimonials, gallery, contact)
- **Frontend**: React SPA with 11 section components
- **Data**: MongoDB seeded with 6 cars, 6 tours, 5 testimonials, 8 gallery images
- **Design**: White/blue theme, Outfit + Manrope fonts, Phosphor icons, Framer Motion animations
- **WhatsApp**: All CTAs link to +62822-2824-7676
- **Testing**: 100% backend + frontend pass rate

## Architecture
- Backend: FastAPI + MongoDB (data seeded on startup)
- Frontend: React + TailwindCSS + Framer Motion + Phosphor Icons
- Single page with anchor navigation

## Prioritized Backlog
### P0 - Done
- [x] All 10 sections implemented
- [x] Backend API endpoints
- [x] Responsive design
- [x] WhatsApp integration

### P1 - Next
- [ ] Admin panel for managing cars/tours data
- [ ] SEO meta tags optimization
- [ ] Image lazy loading optimization
- [ ] Contact form with email notification

### P2 - Future
- [ ] Multi-language support (EN/ID)
- [ ] Blog/articles section
- [ ] Online booking system with calendar
- [ ] Google Maps integration
- [ ] Analytics dashboard
