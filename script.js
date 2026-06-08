// Mengamankan data array objek wisata global
let dataWisataGlobal = [];

// Eksekusi Fetch API mengambil database lokal json
fetch('wisata.json')
    .then(response => {
        if (!response.ok) throw new Error('Gagal memuat berkas JSON');
        return response.json();
    })
    .then(data => {
        dataWisataGlobal = data;
        const container = document.getElementById('wisata-container');
        container.innerHTML = ''; // Membersihkan sisa element spinner loading

        // Looping injeksi element HTML Card secara berkala
        data.forEach((item, index) => {
            container.innerHTML += `
                <div class="card">
                    <div>
                        <div class="card-img-wrapper">
                            <img class="card-img" src="${item.gambar}" alt="${item.nama}">
                        </div>
                        <div class="card-body">
                            <div class="card-meta">
                                <span class="tag-kategori">${item.kategori}</span>
                                <span class="tag-rating">⭐ ${item.penilaian}</span>
                            </div>
                            <h3 class="card-title">${item.nama}</h3>
                            
                            <div class="card-location">
                                📍 <span>${item.lokasi}</span>
                            </div>
                            
                            <p class="card-text">${item.deskripsi}</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button onclick="bukaModal(${index})" class="btn-primary">
                            Eksplorasi Destinasi
                        </button>
                    </div>
                </div>
            `;
        });
    })
    .catch(err => {
        console.error(err);
        document.getElementById('wisata-container').innerHTML = `
            <p class="loading-state" style="color: #ef4444; font-weight: 600;">Error: Gagal memuat data JSON! Pastikan dijalankan via Live Server.</p>
        `;
    });

// FUNGSI INJEKSI DATA DAN BUKA POPUP MODAL
function bukaModal(index) {
    const wisata = dataWisataGlobal[index];
    
    // Sinkronisasi data ke struktur ID modal HTML
    document.getElementById('modal-gambar').src = wisata.gambar;
    document.getElementById('modal-gambar').alt = wisata.nama;
    document.getElementById('modal-kategori').innerText = `📍 ${wisata.kategori}`;
    document.getElementById('modal-penilaian').innerText = `⭐ ${wisata.penilaian}`;
    document.getElementById('modal-nama').innerText = wisata.nama;
    document.getElementById('modal-deskripsi').innerText = wisata.deskripsi;

    // Hapus kelas hidden untuk memunculkan modal ke monitor
    document.getElementById('modal-detail').classList.remove('hidden');
}

// FUNGSI MATIKAN/SEMBUNYIKAN POPUP MODAL
function tutupModal() {
    document.getElementById('modal-detail').classList.add('hidden');
}

// BONUS UTILITY: Menutup modal otomatis jika area luar putih (area blur) di-klik
document.getElementById('modal-detail').addEventListener('click', function(e) {
    if (e.target === this) {
        tutupModal();
    }
});