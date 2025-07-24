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
    thumbnail: [
      "./assets/bayam.jpg",
      "./assets/singkal.jpg",
      "./assets/images-removebg-preview.png",
    ],
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
    thumbnail: [
      "./assets/bayam.jpg",
      "./assets/singkal.jpg",
      "./assets/images-removebg-preview.png",
    ],
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
    thumbnail: [
      "./assets/bayam.jpg",
      "./assets/singkal.jpg",
      "./assets/images-removebg-preview.png",
    ],
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
    thumbnail: [
      "./assets/bayam.jpg",
      "./assets/singkal.jpg",
      "./assets/images-removebg-preview.png",
    ],
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
    gambar: "./assets/images-removebg-preview.png",
    thumbnail: [
      "./assets/bayam.jpg",
      "./assets/singkal.jpg",
      "./assets/images-removebg-preview.png",
    ],
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
    thumbnail: [
      "./assets/bayam.jpg",
      "./assets/singkal.jpg",
      "./assets/images-removebg-preview.png",
    ],
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
    thumbnail: [
      "./assets/bayam.jpg",
      "./assets/singkal.jpg",
      "./assets/images-removebg-preview.png",
    ],
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
    thumbnail: [
      "./assets/bayam.jpg",
      "./assets/singkal.jpg",
      "./assets/images-removebg-preview.png",
    ],
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

function buatProdukCard(produk) {
  return `
      <div class="col-6 col-md-4 col-lg-3" data-produk-id="${produk.id}">
        <div class="card product-card h-85 shadow">
          <div class="w-100 position-relative">
            <img src="${produk.gambar}" class="card-img-top product-img" alt="${
    produk.nama
  }" />
            <span class="badge bg-success-subtle text-success fw-semibold mb-2 position-absolute" style="top: 0; right: 0;">
              ${produk.kategori}
            </span>
          </div>
          <div class="card-body">
            <h5 class="card-title product-title">${produk.nama}</h5>
            <p class="product-price">${formatRupiah.format(produk.harga)}</p>
            <p class="product-location">
              <i class="fa-solid fa-location-dot text-success"></i> ${
                produk.lokasi
              }
            </p>
            <p class="product-rating">
              ${tampilkanBintang(produk.rating)}
              <span class="ms-1">(${produk.ulasan})</span>
            </p>
            <p class="text-sm text-gray">Stok: ${produk.stok} | Terjual: ${
    produk.terjual
  }</p>
          </div>
        </div>
      </div>
    `;
}

function tampilkanProduk(listProduk, container) {
  container.empty();
  listProduk.forEach((produk) => {
    container.append(buatProdukCard(produk));
  });
}

$(document).ready(function () {
  const containerProdukUnggulan = $("#produkUnggulan");
  const containerProdukPetani = $("#produkPetani");
  const containerSemuaProduk = $("#semuaProduk");

  tampilkanProduk(produkUnggulan, containerProdukUnggulan);
  tampilkanProduk(produkPetani, containerProdukPetani);
  tampilkanProduk(semuaProduk, containerSemuaProduk);

  localStorage.setItem("dataProduk", JSON.stringify(semuaProduk));

  $(document).on("click", ".product-card", function () {
    const id = $(this).closest("[data-produk-id]").data("produk-id");
    window.location.href = `/detailProduct.html?id=${id}`;
  });
});

$(document).ready(function () {
  const popup = $("#popupRefer");
  const searchBtn = $("#searchPopupBtn");

  searchBtn.on("click", function (e) {
    e.stopPropagation();
    popup.toggleClass("show");
  });

  $(window).on("resize", function () {
    if ($(this).width() >= 560) {
      popup.removeClass("show");
    }
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest("#popupRefer, #searchPopupBtn").length) {
      popup.removeClass("show");
    }
  });
});

$("#filterForm").on("submit", function (event) {
  event.preventDefault();
  const hargaMinimal = parseInt($("#hargaMin").val()) || 0;
  const hargaMaximal = parseInt($("#hargaMax").val()) || Infinity;
  const ratingMinimal = parseFloat($("#ratingMin").val()) || 0;
  const urutkanBerdasarkan = $("#sortBy").val();
  let hasilFilter = semuaProduk.filter((produk) => {
    return (
      produk.harga >= hargaMinimal &&
      produk.harga <= hargaMaximal &&
      produk.rating >= ratingMinimal
    );
  });

  switch (urutkanBerdasarkan) {
    case "termurah":
      hasilFilter.sort((a, b) => a.harga - b.harga);
      break;
    case "termahal":
      hasilFilter.sort((a, b) => b.harga - a.harga);
      break;
    case "terlaris":
      hasilFilter.sort((a, b) => b.terjual - a.terjual);
      break;
    case "rating":
      hasilFilter.sort((a, b) => b.rating - a.rating);
      break;
  }

  tampilkanProduk(hasilFilter, $("#semuaProduk"));

  const popup = bootstrap.Modal.getInstance(
    document.getElementById("filterModal")
  );
  popup.hide();
});

$("#resetFilter").on("click", function () {
  $("#hargaMin").val("");
  $("#hargaMax").val("");
  $("#ratingMin").val("0");
  $("#sortBy").val("terbaru");

  tampilkanProduk(semuaProduk, $("#semuaProduk"));

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("filterModal")
  );
  modal.hide();
});
