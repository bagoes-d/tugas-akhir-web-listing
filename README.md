
# JelajahRaya — Web Listing Destinasi Wisata

Sebuah aplikasi web statis untuk menampilkan dan mengeksplorasi destinasi wisata pilihan di Indonesia. Proyek ini dibuat sebagai Tugas Akhir Pemrograman Web oleh Bagoes Wahyu Untoro.

## ✨ Fitur Utama

- Kartu destinasi dengan gambar, nama, kategori, lokasi, penilaian, dan cuplikan deskripsi.
- Modal detail untuk informasi destinasi lengkap.
- Data disimpan secara lokal di `wisata.json` sehingga mudah diedit.
- Tata letak responsif dan ringan — cocok untuk demonstrasi tugas akhir.
- Mudah dijalankan secara lokal menggunakan Live Server atau membuka `index.html`.

## 🚀 Quick Start

### Prasyarat

- Browser modern (Chrome, Firefox, Edge).
- Disarankan menggunakan ekstensi `Live Server` di VS Code untuk menghindari masalah CORS saat mem-fetch file JSON.

### Menjalankan Secara Lokal

1. Buka folder proyek di VS Code.
2. Klik kanan `index.html` → `Open with Live Server` atau jalankan ekstensi Live Server.

Atau buka langsung file `index.html` di browser (beberapa browser mungkin memblokir fetch ke file lokal).

Contoh perintah untuk menjalankan server statis sederhana (Node.js):

```bash
# bila memiliki http-server
npx http-server -c-1 . -p 8080
# lalu buka http://localhost:8080
```

## 🧭 Struktur Proyek

- `index.html` — Halaman utama aplikasi.
- `style.css` — Semua gaya/tata letak.
- `script.js` — Logika pemuatan `wisata.json`, rendering kartu, dan modal.
- `wisata.json` — Data destinasi (array objek).
- `image/` — Aset gambar untuk tiap destinasi.
- `LICENSE` — Lisensi proyek.

## 📁 Format Data (`wisata.json`)

Contoh objek data:

```json
[
  {
    "nama": "Candi Borobudur",
    "kategori": "Budaya & Sejarah",
    "deskripsi": "Candi Borobudur adalah monumen Buddha Mahayana terbesar di dunia...",
    "penilaian": "4.8/5",
    "lokasi": "Magelang, Jawa Tengah, Indonesia",
    "gambar": "/image/candi borobudur.jpg"
  }
]
```

- `nama`: string — nama destinasi.
- `kategori`: string — kategori destinasi.
- `deskripsi`: string — deskripsi singkat atau ringkasan.
- `penilaian`: string — rating dalam format teks.
- `lokasi`: string — lokasi/deskripsi geografis.
- `gambar`: string — path relatif ke file gambar di folder `image/`.

Catatan: Jika menambahkan file gambar, hindari karakter khusus pada nama file dan pastikan path sesuai.

## 🔧 Pengembangan & Debugging

- Untuk mengedit data destinasi, buka `wisata.json` dan tambahkan objek baru sesuai format di atas.
- Jika page menampilkan pesan error tentang fetch JSON, jalankan Live Server atau server statis.

### Debugging cepat

1. Buka DevTools (F12) → Console untuk melihat pesan error.
2. Jika gambar tidak tampil, periksa path di `wisata.json` dan struktur folder `image/`.

## ✅ Pengujian Manual (Manual QA)

### Test: Memuat Daftar

1. Buka aplikasi melalui Live Server.
2. Pastikan kartu destinasi muncul dan gambar, nama, kategori tampil.

### Test: Modal Detail

1. Klik tombol "Eksplorasi Destinasi" pada salah satu kartu.
2. Verifikasi modal muncul dengan gambar, kategori, penilaian, nama, dan deskripsi.

### Test: Error Handling

1. Ganti nama `wisata.json` sementara.
2. Muat ulang halaman — harus muncul pesan error yang menyarankan menjalankan Live Server.

## 🎨 Styling & UX

- Styling berada di `style.css` dan menggunakan font Google (`Plus Jakarta Sans`).
- Tata letak menggunakan grid responsif untuk kartu destinasi.
- Modal sederhana dengan overlay dan fungsi tutup (klik area luar atau tombol tutup).

## ⚙️ Dependensi

Proyek ini adalah aplikasi web statis — tidak ada dependensi npm yang diperlukan. Cukup browser modern.

## 🐛 Troubleshooting

- Error memuat `wisata.json`: jalankan Live Server atau gunakan server statis.
- Gambar tidak tampil: periksa path dan nama file di folder `image/`.
- Layout rusak: pastikan `style.css` terhubung di `index.html`.

## 📚 Sumber & Referensi

- Font: Google Fonts — Plus Jakarta Sans

## 🎓 Tujuan Edukasi

Proyek ini dibuat sebagai Tugas Akhir untuk mata kuliah Pemrograman Web. Menunjukkan kemampuan dasar membangun UI dinamis menggunakan data JSON, DOM manipulation, dan layout responsif.

## 📝 Lisensi

Lihat [LICENSE](LICENSE) untuk detail lisensi.

## ✉️ Kontak

Pembuat: Bagoes Wahyu Untoro
