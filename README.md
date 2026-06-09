# 🗺️ JelajahRaya - Portal Informasi Wisata Nusantara

JelajahRaya adalah sebuah aplikasi web listing dinamis yang menyajikan informasi ragam destinasi wisata populer di seluruh Nusantara. Proyek ini dibangun sebagai pemenuhan **Tugas Akhir / UAS Pemrograman Web Listing** dengan fokus pada performa yang ringan, antarmuka yang responsif, pengelolaan data berbasis API secara asinkron (*asynchronous*), serta arsitektur kode yang bersih.

---

## 🚀 Link Live Demo & Repositori
* **Website Resmi (Netlify Live):** [https://jelajahraya.netlify.app/](https://jelajahraya.netlify.app/)
* **Repository Source Code (GitHub):** [https://github.com/bagoes-d/tugas-akhir-web-listing](https://github.com/bagoes-d/tugas-akhir-web-listing)

---

## 👤 Informasi Mahasiswa
* **Nama:** Bagoes Wahyu Untoro
* **NIM:** 24552010157
* **Status Proyek:** ✅ Ready to Run & Live Production
* **Tahun Pembuatan:** 2026

---

## ✨ Fitur Utama (Features)

* **Hero Section Dinamis** - Tampilan beranda interaktif dengan latar belakang visual estetik bertemakan alam Indonesia untuk menarik minat pengguna.
* **Asynchronous Data Fetching** - Pengambilan data destinasi dari database lokal secara real-time menggunakan JavaScript Fetch API tanpa membebani performa awal website.
* **Destinasi Wisata Grid Layout** - Penyajian informasi objek wisata dalam bentuk grid kartu (card layout) yang rapi, bersih, dan modern.
* **Sistem Atribut Lengkap** - Setiap destinasi menyajikan informasi detail mulai dari ID unik, nama lokasi, kategori wilayah, penilaian (rating bintang), hingga deskripsi naratif yang mendalam.
* **Interaktivitas Detail Modal Popup** - Pengguna dapat mengklik tombol "Eksplorasi" untuk memunculkan jendela modal popup secara detail demi membaca ulasan lengkap mengenai destinasi terpilih tanpa perlu berpindah halaman.
* **Mobile Responsive Design** - Pengoptimalan penuh (full responsiveness) menggunakan media queries agar website tampil sempurna di semua ukuran layar (HP, Tablet, hingga Desktop).
* **Zero-Framework Overhead** - Dibangun murni menggunakan *Vanilla Technologies* untuk menjamin kecepatan *First Contentful Paint (FCP)* yang instan dan optimal.

---

## 🚀 Panduan Memulai Cepat (Quick Start)

### Prasyarat (Prerequisites)
* Perangkat browser modern (Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari).
* Code Editor seperti Visual Studio Code (sangat direkomendasikan).
* Ekstensi **Live Server** di VS Code untuk menjalankan simulasi environment server lokal.

### Cara Menjalankan Aplikasi Secara Lokal
1. **Kloning Repositori:**
```bash
   git clone [https://github.com/bagoes-d/tugas-akhir-web-listing.git](https://github.com/bagoes-d/tugas-akhir-web-listing.git)

📁 Struktur Direktori Proyek (Project Structure)
Plaintext
tugas-akhir-web-listing-24552010157/
│
├── index.html          # Struktur kerangka DOM utama & Kontainer Kartu Wisata
├── style.css           # Desain antarmuka, variabel tema, & Media Queries (Responsif)
├── script.js           # Mesin penggerak Fetch API, Perulangan Data, & Logika Modal
├── wisata.json         # Database lokal terstruktur (JSON array) memuat data destinasi
└── README.md           # Dokumentasi resmi proyek (berkas ini)

🌐 Integrasi Data & Atribut API
Aplikasi ini menggunakan database berbasis JSON dengan struktur array objek yang mensimulasikan respons data API asli.

Contoh Format Skema Data (wisata.json):
JSON
{
  "id": 1,
  "nama": "Monumen Nasional (Monas)",
  "kategori": "Jakarta",
  "penilaian": "4.7",
  "deskripsi": "Ikon bersejarah Indonesia yang menawarkan pemandangan kota dari puncak..."
}
