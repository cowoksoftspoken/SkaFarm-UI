const produkUnggulan = [
  {
    id: 1,
    nama: "Garpu Kebun",
    harga: 230000,
    lokasi: "Jakarta Selatan",
    stok: 330,
    terjual: 800,
    rating: 4.5,
    ulasan: 127,
    kategori: "Alat Pembantu",
    gambar: "./assets/sekop-garpu.jpg",
  },
  {
    id: 2,
    nama: "Singkal Diesel Pembajak Sawah",
    harga: 25000000,
    lokasi: "Bandung",
    stok: 130,
    terjual: 890,
    rating: 4.0,
    ulasan: 92,
    kategori: "Alat Pembantu",
    gambar: "./assets/singkal.jpg",
  },
  {
    id: 3,
    nama: "Wortel Segar (4Kg)",
    harga: 75000,
    lokasi: "Bogor",
    stok: 2100,
    terjual: 234,
    rating: 5,
    ulasan: 243,
    kategori: "Sayuran",
    gambar: "./assets/wortel.jpg",
  },
  {
    id: 4,
    nama: "Sawi Segar (2Kg)",
    harga: 2250000,
    lokasi: "Surabaya",
    stok: 330,
    terjual: 749,
    rating: 3.5,
    ulasan: 56,
    kategori: "Sayuran",
    gambar: "./assets/sawi.jpg",
  },
];

const produkPetani = [
  {
    id: 5,
    nama: "Beras Premium",
    harga: 120000,
    lokasi: "Solo",
    stok: 1000,
    terjual: 2000,
    rating: 5,
    ulasan: 415,
    kategori: "Bahan Pokok",
    gambar:
      "./assets/images-removebg-preview.png",
  },
  {
    id: 6,
    nama: "Bayam",
    harga: 35000,
    lokasi: "Indramayu",
    stok: 240,
    terjual: 590,
    rating: 4,
    ulasan: 178,
    kategori: "Sayuran",
    gambar: "./assets/bayam.jpg",
  },
  {
    id: 7,
    nama: "Sawi Segar (4Kg)",
    harga: 225000,
    lokasi: "Lombok",
    stok: 330,
    terjual: 749,
    rating: 3.5,
    ulasan: 56,
    kategori: "Sayuran",
    gambar: "./assets/sawi.jpg",
  },
  {
    id: 8,
    nama: "Cangkul Kecil (3 Buah)",
    harga: 300000,
    lokasi: "Malang",
    stok: 60,
    terjual: 1332,
    rating: 4,
    ulasan: 189,
    kategori: "Alat Pembantu",
    gambar: "./assets/cangkul.jpg",
  },
];

const semuaProduk = [...produkUnggulan, ...produkPetani];

function tampilkanBintang(rating) {
  let star = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      star += '<i class="fas fa-star"></i>';
    } else if (i - rating < 1) {
      star += '<i class="fas fa-star-half-alt"></i>';
    } else {
      star += '<i class="far fa-star"></i>';
    }
  }
  return star;
}

const formatRupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
});

$(document).ready(function () {
  const containerProdukUnggulan = $("#produkUnggulan");
  const containerProdukPetani = $("#produkPetani");
  const containerSemuaProduk = $("#semuaProduk");

  produkUnggulan.map((produk) => {
    const cardProdukUnggulan = `
        <div class="col-6 col-md-4 col-lg-3">
          <div class="card product-card h-85 shadow">
            <div class="w-100 relative">
            <img
              src="${produk.gambar}"
              class="card-img-top product-img"
              alt="Traktor" />
               <span class="badge bg-success-subtle text-success fw-semibold mb-2 position-absolute" style="top: 0; right: 0;">${
                 produk.kategori
               }</span>
            </div>
            <div class="card-body">
              <h5 class="card-title product-title">${produk.nama}</h5>
              <p class="product-price">${formatRupiah.format(produk.harga)}</p>
              <p class="product-location"><i class="fa-solid fa-location-dot text-success"></i>
                ${produk.lokasi}
              </p>
              <p class="product-rating">
                ${tampilkanBintang(produk.rating)}
                <span class="ms-1">(${produk.ulasan})</span>
              <p class="text-sm text-gray">Stok: ${produk.stok} | Terjual: ${
      produk.terjual
    }</p>
              </p>
            </div>
          </div>
          </div>
          `;
    containerProdukUnggulan.append(cardProdukUnggulan);
  });
  produkPetani.forEach((produk) => {
    const cardProdukPetani = `
            <div class="col-6 col-md-4 col-lg-3">
              <div class="card product-card h-85 shadow">
                <div class="w-100 position-relative">
                  <img
                  src="${produk.gambar}"
                  class="card-img-top product-img"
                  alt="Beras organik" />
                  <span class="badge bg-success-subtle text-success fw-semibold mb-2 position-absolute" style="top: 0; right: 0;">${
                    produk.kategori
                  }</span>
                </div>
                <div class="card-body">
                  <h5 class="card-title product-title">
                 ${produk.nama}
                  </h5>
                  <p class="product-price">${formatRupiah.format(
                    produk.harga
                  )}</p>
                  <p class="product-location"><i class="fa-solid fa-location-dot text-success"></i>${
                    produk.lokasi
                  }</p>
                  <p class="product-rating">
                    ${tampilkanBintang(produk.rating)}
                    <span class="ms-1">(${produk.ulasan})</span>
                  <p class="text-sm text-gray">Stok: ${
                    produk.stok
                  } | Terjual: ${produk.terjual}</p>
                  </p>
                </div>
              </div>
            </div>
            `;
    containerProdukPetani.append(cardProdukPetani);
  });
  semuaProduk.forEach((produk) => {
    const card = `
      <div class="col-6 col-md-4 col-lg-3" data-produk-id="${produk.id}">
          <div class="card product-card h-85 shadow">
            <div class="w-100 relative">
            <img
              src="${produk.gambar}"
              class="card-img-top product-img"
              alt="Traktor" />
               <span class="badge bg-success-subtle text-success fw-semibold mb-2 position-absolute" style="top: 0; right: 0;">${
                 produk.kategori
               }</span>
            </div>
            <div class="card-body">
              <h5 class="card-title product-title">${produk.nama}</h5>
              <p class="product-price">${formatRupiah.format(produk.harga)}</p>
              <p class="product-location"><i class="fa-solid fa-location-dot text-success"></i>
                ${produk.lokasi}
              </p>
              <p class="product-rating">
                ${tampilkanBintang(produk.rating)}
                <span class="ms-1">(${produk.ulasan})</span>
              <p class="text-sm text-gray">Stok: ${produk.stok} | Terjual: ${
      produk.terjual
    }</p>
              </p>
            </div>
          </div>
          </div>
          `;
    containerSemuaProduk.append(card);
  });
});
